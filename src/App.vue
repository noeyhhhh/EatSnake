<template>
  <router-view />
</template>

<script>
export default {
  mounted() {
    console.log(this.$router.options.routes)
  },
}
</script>

<style>

</style>
