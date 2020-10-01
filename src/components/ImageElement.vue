<template>

  <div id="root-image-element" v-bind:class="['card',imageElement.height < imageElement.width  ? 'item level-'+2 : 'item level-1']">
    <a v-bind:href="imageElement.download_url" target="_blank">Download</a>
    <img      
      v-if="builtImageUrl"
      v-bind:src="builtImageUrl"
      alt="imageElement.download_url"
    />
    <div>
      <button v-on:click="createImageURL('blur')">Blur</button>
      <button v-on:click="createImageURL('grayscale')">Grayscale</button>
      <button v-on:click="createImageURL()">Normal</button>
    </div>
    <p>
      {{ imageElement.author }}
      # {{ imageElement.id }}
    </p>
  </div>
</template>

<script>
// import ImageElement from '../models/imageelement.model'
const heightReductionSizeRate = 0.2;
const defaultWidth = 0.2;
export default {
  name: "ImageElement",
  props: {
    imageElement: null,
  },
  methods: {
    createImageURL(options = null) {
      console.log(
        `https://picsum.photos/id/${this.imageElement.id}/${parseInt(
          this.imageElement.width * defaultWidth
        )}/${parseInt(this.imageElement.height * heightReductionSizeRate)}?${
          options ? options : ""
        }`
      );
      this.builtImageUrl = `https://picsum.photos/id/${
        this.imageElement.id
      }/${parseInt(this.imageElement.width * defaultWidth)}/${parseInt(
        this.imageElement.height * heightReductionSizeRate
      )}?${options ? options : ""}`;
    },
    classSlection (){

    }    
  },
  data() {
    return {
      builtImageUrl: null,
    };
  },
  created() {
    this.createImageURL();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  border-radius: 8px;
  background: #f2f2f2;
  box-shadow: 0px 0px 8px rgba(58, 58, 58, 0.6);
}
.card button,a{
  background-color: #008CBA; 
  border: solid black 1px;
  margin: 1px;
  color: white;
  padding: 5px 3px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
.card a{
  align-self: center;
  width: 96%;
}
img {  
  box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25),
    0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
}
.item {
  border-radius: 5px;  
}

.item img {
  width: 100%;
}
.level-1 {
  grid-row-end: span 3;
}
.level-2 {
  grid-row-end: span 2;
}
.level-3 {  
  grid-column-end: span 2;
}

@media screen and (max-width: 1024px) {
  img.responsive {
    width: 250px;
  }
}
@media screen and (min-width: 1025px) {
  img.responsive {
    width: 300px;
  }
}
img.responsive {
  height: auto;
}
</style>
