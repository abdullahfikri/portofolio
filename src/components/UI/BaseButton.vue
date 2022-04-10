<template>
  <button class="text-base font-semibold text-white bg-primary py-3 px-8 rounded-lg hover:opacity-80 transition duration-300 ease-in-out md:w-auto lg:text-xl lg:py-3.5 lg:px-14">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton"
}
</script>
