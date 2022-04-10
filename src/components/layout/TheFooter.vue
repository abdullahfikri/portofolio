<template>
 <footer class="bg-primary text-white">
    <div class="container py-10 leading-relaxed">
<!--      <div class="flex flex-wrap mb-10 md:hidden">-->
<!--        <div id="contact" class="mb-7 w-full lg:w-1/2">-->
<!--          <h2 class="font-bold mb-2 text-2xl">Contact</h2>-->
<!--          <p class="font-medium text-lg mb-4">Jika anda tertarik, silahkan kirimkan pesan ke fikri@localhost.com</p>-->
<!--          <base-button class="w-full bg-dark text-primary">Kontak Selengkapnya</base-button>-->
<!--        </div>-->
<!--        <div id="about" class=" w-full lg:w-1/2">-->
<!--          <h2 class="font-bold mb-2 text-xl">About</h2>-->
<!--          <p class="font-medium text-lg mb-4">Dan jika anda ingin lebih tau tentang saya. <span class="lg:block">Silahkan klik tombol di bawah</span></p>-->
<!--          <base-button class="w-full bg-dark text-primary">Info Lebih Lanjut</base-button>-->
<!--        </div>-->
<!--      </div>-->

      <p class="text-center text-dark text-xl font-bold mb-2">Ikuti Kami</p>
      <div class="social mx-auto flex flex-wrap gap-x-3 justify-center mb-7">
        <a href="#" @click.prevent class="hover:text-dark"><font-awesome-icon :icon="['fab', 'instagram']" size="3x" /></a>
        <a href="#" @click.prevent class="hover:text-dark"><font-awesome-icon :icon="['fab', 'linkedin']" size="3x" /></a>
        <a href="#" @click.prevent class="hover:text-dark"><font-awesome-icon :icon="['fab', 'twitter']" size="3x" /></a>
      </div>
      <div class="copy text-center">
        <p class="font-medium">&copy; 2022 Muhammad Fikri. All Rights Reserved</p>
      </div>
    </div>
 </footer>
</template>

<script>
export default {
  name: "TheFooter"
}
</script>

<style scoped>

</style>