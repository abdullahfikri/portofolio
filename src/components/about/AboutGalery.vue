<template>
  <div class="flex justify-center w-96 h-60 relative">
      <inner-galery @click="text" v-for="(img, index) in images" :key="`item-${index}`" :url="require(`@/assets/assets_project/${img}`)" :index="index"></inner-galery>
  </div>
</template>

<script>
import InnerGalery from "@/components/about/InnerGalery";
export default {
  props: ['images'],
  name: "AboutGalery",
  components: {InnerGalery},
  methods:{
    text(){
      console.log(this.images[0])
    }
  }
}
</script>

<style scoped>

</style>