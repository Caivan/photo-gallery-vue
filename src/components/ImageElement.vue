<template>
  <section
    v-bind:class="[
      'card',
      imageElement.height <= imageElement.width ? 'level-' + 2 : 'level-1',
    ]"
  >
    <a class="noselect" v-bind:href="imageElement.download_url" target="_blank"
      >Download</a
    >
    <img
      v-if="builtImageUrl"
      v-bind:src="builtImageUrl"
      alt="imageElement.download_url"
      @click="$refs.imageModal.openModal()"
    />
    <div>
      <div>
        <button class="noselect" v-on:click="createImageURL('blur')">
          Blur
        </button>
        <button class="noselect" v-on:click="createImageURL('grayscale')">
          Grayscale
        </button>
        <button class="noselect" v-on:click="createImageURL()">Normal</button>
      </div>
      <p class="noselect card__author">
        {{ imageElement.author }}
      </p>
      <p># {{ imageElement.id }}</p>
      <image-modal ref="imageModal" name="imageModal">
        <template v-slot:header>
          <h1>Download</h1>
        </template>
        <template v-slot:body>
          <iframe
            width="560"
            height="315"
            v-bind:src="imageElement.url"
            v-bind:key="imageElement.id"
          ></iframe>
        </template>
        <template v-slot:footer>
          <div class="d-flex align-items-center justify-content-between">
            <button
              class="btn btn--secondary"
              @click="$refs.imageModal.closeModal()"
            >
              Close
            </button>
          </div>
        </template>
      </image-modal>
    </div>
  </section>
</template>

<script>
import ImageModal from "@/components/ImageModal.vue";
const heightReductionSizeRate = 0.09;
const defaultWidth = 0.09;
export default {
  name: "ImageElement",
  components: {
    ImageModal,
  },
  props: {
    imageElement: null,
  },
  methods: {
    createImageURL(options = null) {
      this.builtImageUrl = `https://picsum.photos/id/${
        this.imageElement.id
      }/${parseInt(this.imageElement.width * defaultWidth)}/${parseInt(
        this.imageElement.height * heightReductionSizeRate
      )}?${options ? options : ""}`;
    },
    classSlection() {},
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
  cursor: pointer;
  border-radius: 8px;
  background: #f2f2f2;
  box-shadow: 0 4px 2px -2px rgba(58, 58, 58, 0.6);
}
.card img {
  width: 100%;
  height: auto;
}
.card button,
a {
  background-color: #008cba;
  border: solid black 1px;
  margin: 1px;
  color: white;
  padding: 5px 3px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 5px;
}
.card a {
  width: 100%;
  border-radius: 0px;
  box-sizing: border-box;
  margin: 0px;
}
.card__author {
  display: inline-block;
  width: 60%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: medium;
}
.level-1 {
  grid-row-end: span 3;
}
.level-2 {
  grid-row-end: span 2;
}
.level-3 {
  grid-row-end: span 1;
}
</style>
