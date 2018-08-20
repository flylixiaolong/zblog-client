<template>
  <div class="login">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="6">
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
  .submmit {
    width: 100%;
  }
</style>
