<template>
  <navbar-res></navbar-res>
  <about-a></about-a>
  <about-page></about-page>
  <about-b></about-b>
  <footer-page></footer-page>
</template>

<script>
import AboutA from "@/components/about/AboutA.vue";
import AboutB from "@/components/about/AboutB";
export default {
  name: "PageAbout",
  components:{ AboutA, AboutB}
}
</script>

<style scoped>

</style>