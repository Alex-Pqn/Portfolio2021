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

  <!-- portfolio part -->
  <portfolioComponent />
</template>

<script>
import introductionComponent from "@/components/introduction.vue";
import headerComponent from "@/components/header.vue";
import aboutComponent from "@/components/about.vue";
import skillComponent from "@/components/skill.vue";
import portfolioComponent from "@/components/portfolio.vue";

import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "Home",
  components: {
    introductionComponent,
    headerComponent,
    aboutComponent,
    skillComponent,
    portfolioComponent
  },
  beforeMount() {
    AOS.init();
  }
};
</script>

<style lang="scss"></style>
