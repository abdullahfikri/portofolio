<template>
  <li>
    <div class="py-6 px-4 rounded-xl border-2  " >
      <img :src="url" width="400" class="hover:scale-110 transition-transform duration-500" alt="">
      <div>
        <h3 class="text-primary font-bold text-xl mt-2 mb-4">{{ tagline }}</h3>
        <a :href="link" target="_blank"><base-button class="bg-dark py-2 lg:py-3">Visit</base-button></a>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "project_show",
  props: ['url', 'tagline', 'link']
}
</script>

<style scoped>

</style>