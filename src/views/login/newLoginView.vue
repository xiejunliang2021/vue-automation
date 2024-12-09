<template>
    <div class="login_page">
      <div class="login_box">
        <div class="left_box">
          <img src="@/assets/images/login.jpeg" alt="图片不见了" class="img_left_box" />
        </div>
  
        <div class="login_form">
          <div class="header">
            <div class="logo">
              <img src="@/assets/images/logo.png" alt="logo" />
            </div>
            <div class="title">自动化测试平台</div>
          </div>
          <div class="right_form">
            <el-form
              :model="loginForm"
              :rules="loginRules"
              ref="loginFormRef"
              label-width="auto"
              style="max-width: 600px"
            >
              <el-form-item label="账号" prop="username">
                <el-input
                  prefix-icon="User"
                  v-model="loginForm.username"
                  placeholder="请输入账号"
                />
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input
                  prefix-icon="Lock"
                  type="password"
                  v-model="loginForm.password"
                  placeholder="请输入密码"
                />
              </el-form-item>
              <el-form-item>
                <el-button
                  type="primary"
                  @click="loginSubmit"
                  icon="User"
                  round
                  style="width: 155px;"
                >
                  登录
                </el-button>
                <el-button
                  icon="RefreshRight"
                  @click="resetForm"
                  round
                  style="width: 155px;"
                >
                  重置
                </el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive } from "vue";
  import api from "@/api/index";
  import { ElNotification } from "element-plus";
  import { useRouter } from "vue-router";
  import { UserStore } from "@/stores/module/UserStore";
  
  // 表单数据和规则
  const loginForm = reactive({
    username: "",
    password: "",
  });
  
  const loginRules = reactive({
    username: [
      { required: true, message: "请输入账号", trigger: "blur" },
    ],
    password: [
      { required: true, message: "密码不能为空", trigger: "blur" },
    ],
  });
  
  const loginFormRef = ref();
  const router = useRouter();
  const userStore = UserStore();
  
  // 重置表单
  const resetForm = () => {
    loginFormRef.value?.resetFields();
  };
  
  // 登录提交
  const loginSubmit = async () => {
    try {
      await loginFormRef.value?.validate(); // 表单校验
      const response = await api.loginApi(loginForm);
  
      if (response.status === 200) {
        const token = response.data.token;
        userStore.saveToken(token);
        userStore.saveUserName(loginForm.username);
        ElNotification({
          title: "Success",
          message: "登录成功！",
          type: "success",
        });
        router.push({ name: "stock" }); // 跳转到项目管理页面
      }
    } catch (error) {
      handleError(error);
    }
  };
  
  // 错误处理逻辑
  const handleError = (error) => {
    if (error?.response?.data) {
      const errorMessage =
        typeof error.response.data.error === "string"
          ? error.response.data.error
          : Object.values(error.response.data.error || {})
              .flat()
              .join("；") || "未知错误";
      ElNotification({
        title: "登录失败",
        message: errorMessage,
        type: "error",
      });
    } else {
      ElNotification({
        title: "Error",
        message: "网络异常，请稍后重试",
        type: "error",
      });
    }
  };
  </script>
  
  <style lang="scss" scoped>
  @use "./login.scss";
  </style>
  