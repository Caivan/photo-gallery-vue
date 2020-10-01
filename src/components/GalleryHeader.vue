<template>
  <header class="separador">
    <nav>
      <nav >
        <div >
          <gallery-icon style="width: 50px"/>
          <span >Awesome Image Gallery !!!</span>
        </div>
        <div >
          <div ></div>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
import GalleryIcon from "@/components/GalleryIcon";

export default {
  name: "GalleryHeader",
  components: { GalleryIcon }
};
</script>
<style scoped>
    header {
        display: flex;
        background: #42b983;
        box-shadow: 0px 0px 8px rgba(0,0,0,.6);
    }
</style>
