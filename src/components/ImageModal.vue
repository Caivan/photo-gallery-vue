<template>
  <transition name="fade">
    <div class="modal" v-if="show">          
      
        <div class="modal__header">
          <slot name="header"/>
        </div>
        <div>
            <slot name="body"/>
            <slot name="footer"/>
        </div>
            
      
    </div>
  </transition>
</template>
<script>
export default {
  name: "ImageModal",
  props: { 
      urlImage: null
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    closeModal() {
      this.show = false;
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    openModal() {
      this.show = true;
      document.querySelector("body").classList.add("overflow-hidden");
    }
  }
};
</script>
<style scoped>
.modal {
  display:grid;
  grid-template-columns: 100%;  
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  background-image: linear-gradient(to top, rgba(255,0,0,0), rgb(49, 47, 47));
}

  .modal__header {
    padding: 20px 20px 10px;
    color: azure;
  }
</style>