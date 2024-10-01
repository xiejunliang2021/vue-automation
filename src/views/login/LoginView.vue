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
          <el-form :model="loginForm" label-width="auto" style="max-width: 600px">
            <el-form-item label="账号">
              <el-input prefix-icon="User" v-model="loginForm.username" placeholder="请输入账号"/>
            </el-form-item>
            <el-form-item label="密码">
              <el-input prefix-icon="Lock" type="password" v-model="loginForm.password" placeholder="请输入密码"/>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="loginSubmit" icon="User" round style="width: 155px;">登陆</el-button>
              <el-button icon="RefreshRight" round style="width: 155px;">重置</el-button>
            </el-form-item>
          </el-form>
        </div>

      </div>

    </div>


  </div>
</template>


<script setup>
import { ref, reactive } from "vue"

const loginForm = reactive({
  username: "",
  password: ""
})

function loginSubmit(){
  alert("点击登陆")
}

</script>

<style lang='scss' scoped>
@import './login.scss'
</style>