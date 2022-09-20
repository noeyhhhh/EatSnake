<template>
  <slot :x="x" :y="y"></slot>
</template>
<script>

</script>
<script setup>
import Home from './Home'
import {onMounted, onUnmounted, ref} from "vue";
//
const x = ref(0)
const y = ref(0)
const value = (e) => {
  x.value = e.pageX
  y.value = e.pageY
}
onMounted( ()=>{
  window.addEventListener('mousemove',value)
})
onUnmounted( ()=>{
  window.addEventListener('mousemove',value)
})
</script>

<style scoped>

</style>
