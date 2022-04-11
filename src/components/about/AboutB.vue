<template>
  <section class="py-20">
    <div class="container">
      <h1 class="font-bold  text-3xl mb-10 lg:w-2/3 lg:mx-auto">SKILL TEKNIS</h1>
      <!-- Skill bar -->
      <div class="lg:mx-auto lg:w-2/3">
       <about-skill v-for="skill in skills" :key="skill.text" :text="skill.text" :width="skill.width"></about-skill>
      </div>

    </div>

  </section>
</template>

<script>
import AboutSkill from "@/components/about/AboutSkill";
export default {
  name: "AboutB",
  components: {AboutSkill},
  data(){
    return {
      skills: [
        {
          text: "HTML",
          width: "width: 87%"
        },
        {
          text: "CSS",
          width: "width: 80%"
        },
        {
          text: "Javascript",
          width: "width: 65%"
        },
        {
          text: "Vue",
          width: "width: 45%"
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>