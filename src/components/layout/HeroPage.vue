<template>
  <section id="home" class="pt-36">
    <div class="container mb-24">
      <div class="flex flex-wrap">
        <div class="w-full self-center px-4 lg:w-1/2 text-center lg:text-left">
          <h1 class="text-base font-semibold text-dark lg:text-xl">Hallo, saya <span class="block font-bold bg-gradient-to-l from-dark via-[#0a3a55]   to-primary bg-clip-text text-transparent text-dark text-4xl lg:text-6xl">Muhammad Fikri</span></h1>
          <h2 class="font-medium text-med text-lg mb-5 lg:text-2xl ">Desainer Web & Front-End Developer</h2>
          <p class="font-medium text-med mb-10 leading-relaxed lg:text-xl lg:mb-14">Projek anda ditangan orang yang tepat dan terpercaya! <span class="text-dark font-bold">Emang iya?</span></p>
          <base-button><router-link to="/about">Tentang Saya</router-link></base-button>
        </div>
        <div class="w-full self-end px-4 lg:w-1/2">
          <div class="mt-10 relative">
            <img src="../../assets/hero_img_scale.png" alt="Muhammad Fikri" class="max-w-full mx-auto">
            <span class="absolute top-0 left-4 -z-10 left-1/2 -translate-x-1/2 lg:scale-150 lg:top-16">
              <svg width="300" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#14B8A6" d="M58.5,-44.2C68.6,-34.1,64.4,-10.1,57.5,10.2C50.5,30.5,40.7,47.3,24.8,57.2C8.8,67.2,-13.2,70.2,-27.7,61.6C-42.1,53.1,-48.9,32.9,-50.5,14.7C-52.1,-3.5,-48.5,-19.6,-39.2,-29.6C-29.9,-39.7,-15,-43.5,4.6,-47.2C24.2,-50.9,48.5,-54.4,58.5,-44.2Z" transform="translate(100 100) scale(1.3)"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroPage"
}
</script>

<style scoped>

</style>