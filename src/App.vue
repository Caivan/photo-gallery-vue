<template>
  <main id="app">
    <gallery-header/>
    <router-view />
  </main>
</template>

<script>
import GalleryHeader from '@/components/GalleryHeader.vue';
export default {
  name: 'App',
  components: {
    GalleryHeader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
