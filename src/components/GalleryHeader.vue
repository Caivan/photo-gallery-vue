<template>
  <header class="header">    
        <div>
          <gallery-icon class="header__icon"/>
        </div>
        <span class="header__span" >Awesome Image Gallery !!!</span>        
        <select class="header__locale" v-model="$i18n.locale">
                <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
        </select>            
        
  </header>
</template>

<script>
import GalleryIcon from "@/components/GalleryIcon";

export default {
  name: "GalleryHeader",
  components: { GalleryIcon },
  data () {
    return { langs: ['en', 'es'] }
  }
};
</script>
<style scoped>
    .header {
        display: flex;
        flex-direction: row;
        background:#008CBA;
        box-shadow: 0px 0px 8px rgba(0,0,0,.6);
        justify-content: space-between;
        align-items: center;
    }
    .header__icon {
        width: 60px;
        margin: 10px;
        order: 1;
        flex-grow: 1;
    }
    .header__span {        
        margin: 5px;        
        font-size: 20px;
        color: aliceblue;
        justify-self: center;
        order: 2;
        flex-grow: 2;
    }    
    .header__locale {                
        order: 3;
        flex-grow: 1;
        max-width: 50px;
        height: 100%;
        width: 100%;
        padding: 8px 4px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;        
        box-sizing: border-box;
    }    

</style>
