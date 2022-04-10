<template>
 <section>
    <div class="container py-36  ">
      <div class="p-9 w-full lg:flex lg:gap-5 lg:border-2 lg:rounded-lg">
        <div class="pb-4 mb-5 border-b-2 lg:mb-0 lg:border-b-0  lg:w-1/3 lg:border-r lg:mr-4 ">
          <h2 class="font-bold text-2xl pb-4 text-slate-600">Anda bisa menjangkau kami</h2>
          <div class="flex items-center gap-3 pb-3">
            <font-awesome-icon :icon="['fab', 'whatsapp']"  size="2x" class="text-primary"/>
            <h3 class="font-medium text-lg text-med ">0813-8393-8383</h3>
          </div>
          <div class="flex items-center gap-3 pb-3">
            <font-awesome-icon icon="envelope" size="2x" class="text-primary"/>
            <h3 class="font-medium text-lg text-med">mfikri.dev@localhost.com</h3>
          </div>
          <div class="inline-flex items-center gap-3">
            <font-awesome-icon icon="phone" size="2x" class="text-primary"/>
            <h3 class="font-medium text-lg text-med">021-773-4484</h3>
          </div>
        </div>
        <div class="lg:w-2/3">
          <form @submit.prevent>
            <h2 class="font-bold text-slate-600 text-2xl pb-4">Kontak Kami</h2>
            <div class="pb-2">
              <label for="name" class="block font-medium text-lg text-primary">Nama: </label>
              <input type="text" id="name" class="border-slate-600 rounded-md border-2 w-full p-2 text-med font-medium focus:border-2">
            </div>
            <div class="pb-2">
              <label for="email" class="block font-medium text-lg text-primary">Email: </label>
              <input type="email" id="email" class="border-slate-600 rounded-md border-2 w-full p-2 text-med font-medium focus:border-2">
            </div>
            <div class="pb-2">
              <label for="phone" class="block font-medium text-lg text-primary">Phone Number: </label>
              <input type="number" id="phone" class="border-slate-600 rounded-md border-2 w-full p-2 text-med font-medium focus:border-2">
            </div>
            <div>
              <label for="message" class="block font-medium text-lg text-primary">Pesan: </label>
              <textarea name="message" id="message" cols="30" rows="10" class="border-slate-600 rounded-md border-2 w-full p-2 text-med font-medium focus:border-2"></textarea>
            </div>
            <base-button>Kirim</base-button>
          </form>
        </div>
      </div>

      </div>


 </section>
</template>

<script>
export default {
  name: "ContactA",
  components: {}

}
</script>

<style scoped>

</style>