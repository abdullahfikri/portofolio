<template>
  <section>
    <div class="container">
        <about-galery :images="sources"></about-galery>
    </div>
  </section>
</template>

<script>
import AboutGalery from "@/components/about/AboutGalery";
export default {
  name: "AboutC",
  components: {AboutGalery},
  data(){
    return {
      sources: [
        'assets_1.gif',
        'assets_2.gif',
        'assets_3.gif',
        'assets_4.gif',
        'assets_5.gif',
        'assets_6.png',
      ]
    }
  }
}
</script>

<style scoped>

</style>