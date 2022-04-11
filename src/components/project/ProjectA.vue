<template>
<section>
  <div class="container py-32">
    <h1 class="font-bold text-dark text-3xl lg:text-4xl text-center mb-6">Projek Terakhir Saya</h1>
    <div>
      <ul class="flex flex-wrap gap-4 justify-center">
        <project-show v-for="project in project_data" :key="project.src" :url="require(`@/assets/assets_project/${project.img}`)" :tagline="project.tagline" :link="project.link"></project-show>
      </ul>
    </div>
  </div>
</section>
</template>

<script>
import ProjectShow from "@/components/project/ProjectShow";
export default {
  name: "ProjectA",
  components: {ProjectShow},
  data(){
    return {
      project_data : [
        {
          img: 'assets_1.gif',
          tagline: "Typewritter with HTML, CSS, JS",
          link: "https://mtypewritter.netlify.app/"
        },
        {
          img: 'assets_2.gif',
          tagline: "News Blog with CSS Grid",
          link:"https://eager-noether-5a3c11.netlify.app/"
        },
        {
          img: 'assets_3.gif',
          tagline: "Count Day to Next Year with JS Date",
          link: "https://nextyears.netlify.app/"
        },
        {
          img: 'assets_4.gif',
          tagline: "Static Website Html, Css",
          link: "https://sunnysidefikri.netlify.app/"
        },
        {
          img: 'assets_5.gif',
          tagline: "Web Company Profile",
          link: "https://website-company.netlify.app/"
        },
        {
          img: 'assets_6.png',
          tagline: "Simple Membership Page",
          link: "https://confident-heyrovsky-a844cd.netlify.app/"
        },
      ]
    }
  }

}
</script>

<style scoped>

</style>