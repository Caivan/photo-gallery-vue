<template>
  <main id="app" class="container">
    <gallery-header header/>
    <router-view content/>
    <gallery-footer footer/>
  </main>
</template>

<script>
import GalleryHeader from '@/components/GalleryHeader.vue';
import GalleryFooter from '@/components/GalleryFooter.vue';

export default {
  name: 'App',
  components: {
    GalleryHeader,
    GalleryFooter
  }
}
</script>

<style>
* {
  margin: 0%;
}
#app {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}

</style>
