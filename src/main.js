import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import {library} from "@fortawesome/fontawesome-svg-core";

//Import icon
import {faCodeBranch, faUsers, faHourglassStart, faBars, faEnvelope, faPhone, faCheck} from "@fortawesome/free-solid-svg-icons";
import {faInstagram, faLinkedin, faTwitter, faWhatsapp} from "@fortawesome/free-brands-svg-icons"
//Import component icon
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

// Add icons to the library
library.add(faCodeBranch, faUsers, faHourglassStart, faBars, faEnvelope, faPhone, faInstagram, faLinkedin,faTwitter, faWhatsapp, faCheck)

// Import global component
import BaseButton from "@/components/UI/BaseButton";
import TheAbout from "@/components/layout/TheAbout";
import TheFooter from "@/components/layout/TheFooter";
import TheNavResponsive from "@/components/nav/TheNavResponsive";
import TheContent from "@/components/layout/TheContent";

const app = createApp(App)
app.component('navbar-res', TheNavResponsive)
app.component('base-button', BaseButton)
app.component('about-page', TheAbout)
app.component('content-page', TheContent)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('footer-page', TheFooter)

app.use(router)

app.mount('#app')
