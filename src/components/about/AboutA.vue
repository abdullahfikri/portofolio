<template>
  <section id="about-a">
    <div class=" py-36">
      <div class="text text-center mb-10 md:mb-16 lg:bg-white lg:bg-opacity-60 lg:backdrop-blur lg:py-10 lg:w-full lg:mb-16">
        <h2 class="font-bold text-3xl text-slate-600 mb-10 md:text-4xl">Tentang Saya</h2>
        <p class="max-w-md mx-auto font-medium text-base px-5 md:px-2 md:text-slate-500  ">Biarkan saya untuk memperkenalkan tentang diri saya dan apa yang saya lakukan...</p>
      </div>
      <div class="container lg:px-0">
        <div class="flex flex-col mx-4 py-16 gap-10 md:flex-row md: md:justify-center lg:bg-white lg:bg-opacity-60 lg:backdrop-blur lg:w-3/5 lg:mx-auto lg:rounded-lg lg:px-9">
          <div>
            <img src="../../assets/about_img_.png" class="w-64 mx-auto">
          </div>
          <div class="border-l-4 border-primary border-solid pl-4 md:w-2/3 md:flex md:flex-col md:justify-center">
            <h2 class="mb-2 font-bold text-lg md:text-xl">Projek anda aman ditangan yang tepat</h2>
            <p class="text-sm text-med md:text-base">Saya saat ini belajar di Universitas Islam Sultan Syarif Kasim Riau, yang mengambil program S1 ilmu Teknik Informatika. Saat ini saya sedang mempelajari Vue Js dan memperdalam javascript.</p>
          </div>
        </div>
      </div>
    </div>



  </section>
</template>

<script>
export default {
  name: "AboutA"
}
</script>

<style scoped>
@media (min-width: 1024px ) {
  #about-a {
    background: url('../../assets/pexel-.png') no-repeat center right/cover;
  }
}

</style>