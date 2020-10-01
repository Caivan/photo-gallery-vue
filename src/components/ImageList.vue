<template>
  <div class="container">
    <div id="navigationButtons" class="item">
      <div>        
        <label for="pageSizeField">Select the size of each page</label>
        <input
          name="pageSizeField"
          v-model="pageSize"
          placeholder="Select The size of Pages (default 100)"
        />
      </div>
      <div>
        <span>
          <button
            class="noselect"
            v-if="currentPage > 1"
            v-on:click="loadPage('previous')"
          >
            Previous
          </button>
        </span>
        <input
          v-model="inputPageNumber"
          placeholder="Select Page and Press Enter"
        />
        <button class="noselect" v-on:click="loadSpecificPage()">Go</button>
        <button class="noselect" v-on:click="loadPage('next')">Next</button>
      </div>
    </div>
    <image-element
      class="item"
      v-for="image in imagesList"
      v-bind:key="image.id"
      v-bind:imageElement="image"
    ></image-element>
  </div>
</template>

<script>
import ImageElement from "@/components/ImageElement.vue";
import picusmApi from "@/services/picsum.api.js";

export default {
  name: "ImageList",
  components: {
    ImageElement,
  }, // End components
  data() {
    return {
      imagesList: [],
      currentPage: 1,
      inputPageNumber: 1,
      pageSize: 100,
    };
  }, // End Data
  created() {
    picusmApi.getAllImages().then((imagesResponse) => {
      this.imagesList = imagesResponse;
      console.log("Response:", this.imagesList);
    });
  }, // End Created
  methods: {
    loadPage(stepDirection) {
      if (this.currentPage >= 1) {
        stepDirection === "next"
          ? (this.currentPage += 1)
          : (this.currentPage -= 1);
        picusmApi
          .getAllImages(this.currentPage, this.pageSize)
          .then((imagesResponse) => {
            if (imagesResponse && imagesResponse.length > 0) {
              this.imagesList = imagesResponse;
              this.inputPageNumber = this.currentPage;
            } else {
              stepDirection === "next"
                ? (this.currentPage -= 1)
                : (this.currentPage += 1);
            }
          });
      }
    }, // End function
    loadSpecificPage() {
      if (this.currentPage != parseInt(this.inputPageNumber)) {
        let pageNumber = parseInt(this.inputPageNumber);
        picusmApi
          .getAllImages(pageNumber, this.pageSize)
          .then((imagesResponse) => {
            if (imagesResponse && imagesResponse.length > 0) {
              this.imagesList = imagesResponse;
              this.currentPage = pageNumber;
            } else {
              this.inputPageNumber = this.currentPage;
            }
          });
      }
    }, // End function
  }, // End Methods
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-gap: 15px;
  justify-content: center;
  margin: 20px;
}

a {
  color: #42b983;
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
}
</style>
