<template>
  <div class="mb-3">
    <h5 class="text-xl mb-2">{{ text }}</h5>
    <div class="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700 overflow-hidden">
      <div class="bg-primary h-4" :style="width"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutSkill",
  props: ['text', 'width']
}
</script>

<style scoped>

</style>