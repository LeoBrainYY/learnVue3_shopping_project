<template>
  <!-- 顶部通栏 -->
  <AppNavbar></AppNavbar>
  <!-- 头部组件 -->
  <header>头部</header>
  <!-- 容器 -->
  <div class="main">
    <!-- 二级路由 -->
    <Router-View></Router-View>
  </div>
  <!-- 底部组件 -->
  <footer>底部</footer>
</template>

<script>
import AppNavbar from '@/components/app-navbar'
export default {
  name: 'Layout',
  components: {
    AppNavbar
  }
}
</script>

<style scoped lang="less">

</style>
