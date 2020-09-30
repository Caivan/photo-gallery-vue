<template>
  <header>
    <nav>
      <nav class="flex items-center justify-between flex-wrap bg-green-400 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <gallery-icon style="width: 100px"/>
          <span class="font-semibold text-xl tracking-tight">Awesome Image Gallery !!!</span>
        </div>
        <div class="hidden sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow"></div>
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
