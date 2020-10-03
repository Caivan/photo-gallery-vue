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
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
}
.container {
  padding-top: 100px;
}

</style>
