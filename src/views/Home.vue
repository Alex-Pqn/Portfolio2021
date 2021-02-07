<template>
  <!-- fixed header -->
  <headerComponent :id="'header-fixed'" />

  <!-- introduction part -->
  <headerComponent :id="'header-introduction'" />
  <introductionComponent />

  <!-- about part -->
  <aboutComponent />

  <!-- skill part -->
  <skillComponent />

  <div
    style="clip-path: polygon(50% 35%, 0% 100%, 100% 100%)"
    id="skill-sep"
  ></div>

  <!-- portfolio part -->
  <portfolioComponent />

  <!-- formation part -->
  <formationComponent />
</template>

<script>
import introductionComponent from "@/components/introduction.vue";
import headerComponent from "@/components/header.vue";
import aboutComponent from "@/components/about.vue";
import skillComponent from "@/components/skill.vue";
import portfolioComponent from "@/components/portfolio.vue";
import formationComponent from "@/components/formation.vue";

import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "Home",
  components: {
    introductionComponent,
    headerComponent,
    aboutComponent,
    skillComponent,
    portfolioComponent,
    formationComponent
  },
  beforeMount() {
    AOS.init({
      once: true
    });
  }
};
</script>

<style lang="scss">
#skill-sep {
  height: 60px;
  background-color: #724a75;
  transform: rotate(180deg);
}
</style>
