<template>
  <navbar-res></navbar-res>
  <service-a></service-a>
  <service-b></service-b>
  <footer-page></footer-page>
</template>

<script>
import ServiceA from "@/components/service/ServiceA";
import ServiceB from "@/components/service/ServiceB";
export default {
  name: "PageService",
  components: {
    ServiceB,
    ServiceA
  }
}
</script>

<style scoped>

</style>