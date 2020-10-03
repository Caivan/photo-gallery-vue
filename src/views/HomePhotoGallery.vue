<template>
  <div>
      <image-list > </image-list>
  </div>
</template>

<script>
import ImageList from '@/components/ImageList.vue'

export default {  
  name: 'HomePhotoGallery',
  props: {},
  components: {
    ImageList
  },
  methods: {
    nextPage () {
      this.currentPage++;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
