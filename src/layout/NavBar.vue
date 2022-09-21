<template>
    <div class="logo" />
    <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
    >
      <a-menu-item v-for="(route, index) in routes" :key="index">
        <router-link :to="route.path.slice(1)">{{ route.name }}</router-link></a-menu-item>
    </a-menu>
</template>
<script>
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
  },

  setup() {
    return {
      selectedKeys1: ref(['2']),
      selectedKeys2: ref(['1']),
      collapsed: ref(false),
      openKeys: ref(['sub1']),
    };
  },
  data() {
    return {
    }
  },
  computed: {
    routes() {
      return this.$router.options.routes
    }
  }

});
</script>
<style>

</style>