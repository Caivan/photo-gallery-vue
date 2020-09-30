<template>
  <div id='root-image-element'> 
        <div>
            <img v-if="builtImageUrl" v-bind:src="builtImageUrl" alt="imageElement.download_url">
            <div>
              <a v-bind:href="imageElement.download_url" target="_blank">Download</a>
              <button v-on:click="createImageURL ('blur')">Blur</button>
              <button v-on:click="createImageURL ('grayscale')">Grayscale</button>
              <button v-on:click="createImageURL ()">Normal</button>            
            </div>
            <p>
                {{ imageElement.author }} 
                # {{ imageElement.id }}
            </p>            
        </div>
  </div>
</template>

<script>
// import ImageElement from '../models/imageelement.model'
const defaultHeight = 267;
const defaultWidth = 367;
export default {
  name: 'ImageElement',
  props: {
    imageElement: null    
  }, 
  methods: {
    createImageURL (options = null) {
        this.builtImageUrl = `https://picsum.photos/id/${this.imageElement.id}/${defaultWidth}/${defaultHeight}?${ options ? options: '' }`;
    }
  },data() {
    return {
      builtImageUrl: null
    };
  },  
  created() {
    this.createImageURL ();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
  border-radius: 8px;
  box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
}  
@media screen and ( max-width: 1024px ) {
img.responsive { width: 200px; }
}
@media screen and ( min-width: 1025px) {
img.responsive { width: 500px;}
}
img.responsive { height: auto; }


</style>
