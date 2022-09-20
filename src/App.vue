<template>
  <input type="text" v-focus>
</template>

<script setup>
import ComponentTest from "@/components/ComponentTest";
// import Home from './components/Home'
// import Posts from './components/Posts'
// import Archive from './components/Archive'
import {ref} from "vue";
import { provide } from "vue";
const vFocus = {
  mounted: (el) => el.focus()
}
</script>

<style>

</style>
