<template>
  <section id="about ">
    <hr>
    <div class="container">
      <div class="textDescription text-center py-14">
        <h2 class="font-bold text-3xl mb-5 md:text-4xl">Kenapa Memilih Saya ?</h2>
        <p class="max-w-screen-md mx-auto mb-8 font-medium text-med md:text-lg">Saya memiliki pengalaman menyelesaikan lebih dari 10 projek web dan android.</p>
        <router-link to="/project"><base-button>Lihat Projek Saya</base-button></router-link>
      </div>
    </div>
    <div class="bg-dark">
      <div class="container">
        <div class="flex flex-wrap text-white text-center">
          <div class="w-full lg:w-1/3 py-16 border-b-2 border-white border-solid  lg:border-none">
            <font-awesome-icon icon="code-branch"  class="mb-8 text-7xl md:text-87xl" />
            <h3 class="font-medium text-3xl mb-5">Project</h3>
            <p class="font-bold text-4xl ">10</p>
          </div>
          <div class="w-full lg:w-1/3 py-16 border-b-2 border-white border-solid lg:border-none">
            <font-awesome-icon icon="users"  class="mb-8 text-7xl md:text-7xl" />
            <h3 class="font-medium text-3xl mb-5">Client</h3>
            <p class="font-bold text-4xl ">0</p>
          </div>
          <div class="w-full lg:w-1/3 py-16">
            <font-awesome-icon icon="hourglass-start"  class="mb-8 text-6xl md:text-7xl" />
            <h3 class="font-medium text-3xl mb-5">Pengalaman</h3>
            <p class="font-bold text-4xl flex items-center justify-center">100 <span class="text-2xl ml-1">Hours</span></p>
          </div>
        </div>
      </div>
    </div>


  </section>
</template>

<script>
import BaseButton from "@/components/UI/BaseButton";

export default {
  name: "TheAbout",
  components: {BaseButton}
}
</script>

<style scoped>

</style>