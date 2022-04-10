<template>
  <navbar-res></navbar-res>
  <hero-page></hero-page>
  <about-page></about-page>
  <content-page></content-page>
  <footer-page></footer-page>
</template>

<script>
import HeroPage from "@/components/layout/HeroPage.vue";
export default {
  name: "PageHome",
  components: {
    HeroPage
  }
}
</script>
