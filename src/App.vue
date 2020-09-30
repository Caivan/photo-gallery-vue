<template>
  <div id="app">
    <img alt="Vue logo" src="https://picsum.photos/id/0/100/100">
    <home-photo-gallery msg="Welcome to the awesome photo gallery"/>
  </div>
</template>

<script>
import HomePhotoGallery from './components/HomePhotoGallery.vue'

export default {
  name: 'App',
  components: {
    HomePhotoGallery
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
