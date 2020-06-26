<template>
  <!-- components/TopMenu.vue -->
  <div class="menupage">
    <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  router="true"
  active-text-color="#ffd04b">
  <p class="logo-title"><i class="el-icon-user"></i>Be Batter</p>
  <el-menu-item index="home"  style="margin-left:300px;">首页</el-menu-item>
   <el-menu-item index="resume">个人简介</el-menu-item>
  <el-menu-item index="skill">个人技能</el-menu-item>
  <el-menu-item index="products">工作经历</el-menu-item>
</el-menu>
  </div>
</template>
<script>
  export default {
      name:'topMenu',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);

      }
    }
  }
</script>


<style scoped>
.menupage{
  position: fixed;
  width: 100%;
  top: 0px;
  z-index: 100;
}
.menupage .el-menu.el-menu--horizontal{
  border-bottom: none;
  height: 100px;
  line-height: 100px;
}
.menupage .el-menu.el-menu--horizontal>.el-menu-item,.menupage .el-menu--horizontal>.el-submenu .el-submenu__title{
    height: 100px;
    line-height: 100px;
    padding: 0px 50px;
    font-size: 16px;
    letter-spacing: 4px;
}
.menupage .el-menu--horizontal>.el-menu-item.is-active,.menupage .el-menu--horizontal>.el-submenu.is-active .el-submenu__title{
  border-bottom-width: 4px;
}
.menupage .logo-title .el-icon-user{
  margin-right: 5px;
}
  .logo-title{
    position: absolute;
    left: 150px;
    margin: 0;
    color:#fff;
    font-size:26px;
    cursor: pointer;
  }
  .logo-title img{
    width: 80px;
    outline:none;
    vertical-align: middle;
  }
</style>
