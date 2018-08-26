<template>
  <el-container class="layout">
    <el-aside width="200px">
      <el-col :span="24">
        <el-menu
          default-active="2"
          @open="handleOpen"
          @close="handleClose"
          class="demo"
          background-color="#222"
          text-color="#6f6f6f"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  methods: {
    handleOpen: function() {
    },
    handleClose: function() {
    }
  }
};
</script>

<style>
.layout {
  height: 100%;
}
.demo {
  border-right: none !important; 
}
.el-header,
.el-footer {
  font-weight: bolder;
  text-align: center;
  line-height: 60px;
}

.el-header {
  background-color: white;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(0, 0, 0, 0.05);
}

.el-footer {
  background-color: white;
}

.el-aside {
  font-weight: bolder;
  background-color: #222;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(0, 0, 0, 0.05);
  text-align: left;
  line-height: 200px;
}

.el-main {
  text-align: left;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-menu li{
  border-right: none; 
}
</style>