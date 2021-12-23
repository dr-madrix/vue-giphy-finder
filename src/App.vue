<template>
  <div id="nav">
    <header-vue />
    <div class="container text-center">
    <router-view />
    </div>
    <main-footer />
  </div>
</template>

<script>
import MainFooter from './components/MainFooter.vue'
import HeaderVue from "./components/Header.vue"

export default {
  components: {
    HeaderVue,
    MainFooter
    }
}

</script>



<style>

</style>
