<template>
  <el-container class="layout">
    <el-aside width="min-content">
      <el-col :span="24">
        <el-menu
          default-active="2"
          @open="handleOpen"
          @close="handleClose"
          class="demo"
          background-color="#222"
          text-color="#6f6f6f"
          :collapse="isCollapse"
          active-text-color="#ffd04b">
          <el-menu-item index="1">
            <font-awesome-icon icon="chart-pie"></font-awesome-icon>
            <span slot="title">站点统计</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <font-awesome-icon icon="folder"></font-awesome-icon>
              <span>文章管理</span>
            </template>
            <el-menu-item index="2-1">文章列表</el-menu-item>
            <el-menu-item index="2-2">发表文章</el-menu-item>
            <el-menu-item index="2-3">更新文章</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <font-awesome-icon icon="th-list"></font-awesome-icon>
              <span>分类管理</span>
            </template>
            <el-menu-item index="3-1">分类列表</el-menu-item>
            <el-menu-item index="3-2">新增分类</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <font-awesome-icon icon="tags"></font-awesome-icon>
              <span>标签管理</span>
            </template>
            <el-menu-item index="4-1">标签列表</el-menu-item>
            <el-menu-item index="4-2">新增标签</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <font-awesome-icon icon="envelope"></font-awesome-icon>
              <span>留言管理</span>
            </template>
            <el-menu-item index="5-1">留言列表</el-menu-item>
            <el-menu-item index="5-2">回复留言</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <font-awesome-icon icon="cogs"></font-awesome-icon>
              <span>站点管理</span>
            </template>
            <el-menu-item index="6-1">访问列表</el-menu-item>
            <el-menu-item index="6-2">友情链接</el-menu-item>
            <el-menu-item index="6-3">站长资料</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-aside>
    <el-container>
      <el-header>
        <font-awesome-icon icon="outdent" @click="open()" ></font-awesome-icon>
      </el-header>
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
  data() {
      return {
        isCollapse: true
    }
  },
  methods: {
    open(){
      this.isCollapse = !this.isCollapse;
    },
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
.demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

</style>