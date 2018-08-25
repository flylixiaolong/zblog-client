<template>
  <div class="login">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :xs="18" :sm="16" :md="6" :lg="5" :xl="4" class="container">
        <h2 class="">ZBLOG</h2>
        <el-form>
          <el-form-item>
            <el-input v-model="username" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="password" placeholder="密  码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="submmit">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'login',
  props: ['username', 'password']
}
</script>

<style scoped>
  .login {
    padding: 200px 0;
  }

  .submmit {
    width: 100%;
  }

  .login .container {
    background-color: white;
    padding: 25px;
    border-radius: 2px;
    border: 1px solid #eaeefb;
  }
</style>
