<template>
  <a-layout>
    <a-layout-header class="header">
      <NavBar />
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <BreadCrumb></BreadCrumb>
      <a-layout style="padding: 24px 0; background: #fff">
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          123
        </a-layout-content>
      </a-layout>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>

<script setup>
import NavBar from './NavBar'
import BreadCrumb from './BreadCrumb'
</script>

<style scoped>
#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}
.site-layout-background {
  background: #fff;
}
</style>