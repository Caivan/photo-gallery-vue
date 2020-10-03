<template>
  <div>
    <div class="navigation item">
      <div>
        <label for="pageSizeField" class="noselect"
          >Set the size of each page</label
        >
        <input
          name="pageSizeField"
          v-model="pageSize"
          placeholder="Select The size of Pages (default 100)"
          type="number"
          max="100"
          min="1"
        />
        <br />
        <label for="filter" class="noselect">Filter by author</label>
        <input
          name="filter"
          v-model="filterAuthor"
          placeholder="author"
          type="text"
        />
      </div>
      <div id="pagination">
        <button
          class="noselect"
          v-if="!isFirstPage"
          @click="loadPage('previous')"
        >
          Previous
        </button>

        <input
          v-model="inputPageNumber"
          placeholder="Select Page"
          type="number"
          min="1"
        />
        <button           
          class="noselect" 
          @click="loadPage('specific')">
          Go
        </button>
        <button
          v-if="!isLastPage"
          class="noselect"
          @click="loadPage('next')"
        >
          Next
        </button>
      </div>
    </div>

    <div class="imagecontainer">
      <div v-if="messageUser">
          {{ messageUser }}
      </div>
      <image-element
        v-for="image in filterImagesByAuthor"
        v-bind:key="image.id"
        class="item"
        v-bind:imageElement="image"
      ></image-element>
    </div>
  </div>
</template>

<script>
import ImageElement from "@/components/ImageElement.vue";
import picusmApi from "@/services/picsum.api.js";
import _ from 'lodash';

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
      filterAuthor: '',
      isLastPage: false,
      isFirstPage: true,
      messageUser: ''
    };
  }, // End Data
  computed : {
    filterImagesByAuthor() {
      return this.imagesList.filter(a => a.author.toLowerCase().includes(this.filterAuthor.toLowerCase()));
    }// End filtering function
  },
  created() {
    this.makeDataRequest ();
  }, // End Created
  watch: {
    pageSize: _.debounce(function () {
        this.pageSize = this.pageSize > 100 || this.pageSize < 0 ? 100 : this.pageSize;
        this.makeDataRequest();
    }, 500)
  },
  methods: {
    makeDataRequest (specificPage=this.currentPage){
      picusmApi.getAllImages(specificPage, this.pageSize ? this.pageSize : 100 ).then((response) => {            
            response.results.then (results => {
                if (results && results.length > 0){                  
                  this.isLastPage = response.isLastPage,
                  this.isFirstPage = response.isFirstPage,
                  this.imagesList=results;
                  this.messageUser = ''
                } else {
                  this.messageUser = 'Any data returned for the requested page';
                }
            });            
      });
    },
    loadPage: _.debounce(function (stepDirection) {
      if (this.currentPage >= 1) {
        if (stepDirection === "next" && !this.isLastPage) {
          this.currentPage += 1;
          this.makeDataRequest ();
        }else if (stepDirection === "previous" && !this.isFirstPage) {
          this.currentPage -= 1;
          this.makeDataRequest ();
        }else if (stepDirection === "specific") {          
          if (this.currentPage != parseInt(this.inputPageNumber)) {              
              this.makeDataRequest (this.inputPageNumber);
          }
        }        
      } 
      this.inputPageNumber = this.currentPage;
    }, 500), // End function
  }, // End Methods
};
</script>

<style scoped>
button {
  background-color: #008cba;
  border: solid black 1px;
  margin: 1px;
  color: white;
  padding: 5px 3px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
.imagecontainer {
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-gap: 15px;
  justify-content: center;
  margin: 20px;
}
.item:nth-of-type(1) {
  grid-column: 1;
}
.navigation {
  display: grid;
  grid-template-rows: 50% 50%;
  grid-gap: 15px;
  justify-content: center;
  margin: 20px;
}

@media screen and (max-width: 760px) {
  .imagecontainer {
    grid-template-columns: 50% 50%;
  }
}
@media screen and (max-width: 412px) {
  .imagecontainer {
    grid-template-columns: 100%;
  }
}
</style>
