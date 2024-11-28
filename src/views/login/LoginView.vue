<template>
  <div class='login_page'>
    <div class="login_box">
      <div class="left_box">
        <img src="@/assets/images/login.jpeg" alt="图片不见了" class="img_left_box">
      </div>

      <div class="login_form">
        <div class="header">
          <div class="logo">
            <img src="@/assets/images/logo.png" alt="">
          </div>
          <div class="title">自动化测试平台</div>

        </div>
        <div class="right_form">
          <el-form :model="loginForm" label-width="auto" style="max-width: 600px" :rules="loginRules">
            <el-form-item label="账号" prop="username">
              <el-input prefix-icon="User" v-model="loginForm.username" placeholder="请输入账号"/>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input prefix-icon="Lock" type="password" v-model="loginForm.password" placeholder="请输入密码"/>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="loginSubmit" icon="User" round style="width: 155px;">登陆</el-button>
              <el-button icon="RefreshRight" @click="getTs" round style="width: 155px;">重置</el-button>

            </el-form-item>
          </el-form>
        </div>

      </div>

    </div>
    

  </div>
</template>


<script setup>
import { ref, reactive } from "vue"
import api from '@/api/index'
import { ElNotification } from 'element-plus'
import {useRouter} from 'vue-router'
import { UserStore } from "@/stores/module/UserStore"


// 登录的表单数据
const loginForm = reactive({
  username: "",
  password: ""
})
// 创建路由对象
const router = useRouter()
// 实例化用户的store对象
const userStore = UserStore()
// 提交登录的方法
async function loginSubmit() {
  try {
    const response = await api.loginApi(loginForm); // 调用 API

    // 成功逻辑
    if (response.status === 200) {
      ElNotification({
        title: 'Success',
        message: '登录成功！',
        type: 'success',
      });
      // 保存用户的token
      const token = response.data.token
      userStore.saveToken(token)
      userStore.saveUserName(loginForm.username)
      // 跳转到项目管理页面
      router.push({ name: "stock" });
    }
  } catch (error) {
    // 错误逻辑
    if (error.response) {
      // 从后端返回的错误信息中提取
      const errorData = error.response.data;
      let errorMessage = "未知错误";
      alert(errorData)
      ElNotification({
        title: '登录失败',
        message: response.data,
        type: 'Error',
      });

      // 检查是否存在具体错误信息
      if (errorData.error) {
        if (typeof errorData.error === "string") {
          errorMessage = errorData.error;
        } else if (typeof errorData.error === "object") {
          // 拼接多个字段的错误信息
          errorMessage = Object.values(errorData.error)
            .map((messages) => messages.join("，"))
            .join("；");
        }
      }

      // 显示错误通知
      ElNotification({
        title: 'Error',
        message: errorMessage,
        type: 'error',
      });
    } else {
      // 非后端错误（如网络问题）
      ElNotification({
        title: 'Error',
        message: '网络异常，请稍后重试',
        type: 'error',
      });
    }
  }
}

async function getTs() {
  try {
    const response = await api.getTushare(); // 确认返回的是一个 Promise
    if (response && response.data) {
      console.log("数据内容：", response.data); // 确保 response.data 存在
    } else {
      console.warn("请求成功但未返回有效数据");
    }
  } catch (error) {
    console.error("请求失败：", error); // 捕获并处理错误
  }
}

const loginRules = reactive({
// 校验字段不能为空
  username:[
    {
      required: true,
      message: '请输入账号',
      trigger: 'blur',
    },
  ],
  password:[
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur',
    },
  ]
})


</script>

<style lang='scss' scoped>
@use './login.scss';
</style>