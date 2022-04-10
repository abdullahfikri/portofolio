<template>
  <nav class="bg-transparent navbarOffset">
    <div class="px-0 flex items-center py-3 flex-wrap container">
      <div class="flex w-full lg:w-auto">
        <router-link to="/" class="p-2 mr-4 inline-flex items-center pl-4">
          <span class="text-xl text-primary font-black uppercase tracking-wide hover:bg-gradient-to-l from-dark via-[#0a3a55] to-primary hover:bg-clip-text hover:text-transparent">Muhammad Fikri</span>
        </router-link>
        <!-- Burger button -->
        <button class="text-primary inline-flex p-3 hover:bg-dark rounded lg:hidden ml-auto  nav-toggler" @click="togglerHidden">
          <font-awesome-icon icon="bars"/>
        </button>
      </div>
      <div id="navigation" class="top-navbar hidden w-full mt-4 lg:inline-flex lg:flex-grow lg:w-auto lg:mt-0" @click="togglerHidden">
        <div class="lg:inline-flex lg:flex-row lg:ml-auto flex flex-col left-0 right-0 static top-full" >
          <router-link to="/" class="navbar-mobile border-b-2 lg:border-none">
            <span>Beranda</span>
          </router-link >
          <router-link to="/about" class="navbar-mobile border-b-2 lg:border-none">
            <span>Tentang</span>
          </router-link>
          <router-link to="/project" class="navbar-mobile border-b-2 lg:border-none">
            <span>Project</span>
          </router-link>
          <router-link to="/service" class="navbar-mobile border-b-2 lg:border-none">
            <span>Service</span>
          </router-link>
          <router-link to="/contact" class="navbar-mobile">
            <span>Kontak</span>
          </router-link>
        </div>
      </div>
      <div class="overl hidden" @click="togglerOverlay"></div>
    </div>
 </nav>
</template>

<script>
window.addEventListener('keydown', function (e){
  if (e.code === 'Escape'){
    document.querySelector('.overl').classList.add('hidden');
  }
})
export default {
  name: "TheNavResponsive",
  methods: {
    togglerHidden (){
      document.querySelector('#navigation').classList.toggle('hidden');
    },
    togglerOverlay(){
      document.querySelector('.overl').classList.toggle('hidden');

    }
  }
}
</script>

<style scoped>
  .navbarOffset{
    @apply fixed z-[9999] bg-white bg-opacity-70 left-0 right-0;
    backdrop-filter: blur(5px);
    box-shadow: inset 0 -1px 0 0 rgba(0,0,0,0.1);
  }
  .overl {
    position: fixed;
    z-index: -666;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    background-color: transparent;
    opacity: 0.8;
  }
</style>