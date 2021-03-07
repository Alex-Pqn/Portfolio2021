<template>
  <!-- fixed header -->
  <headerComponent id="header-fixed" />

  <!-- introduction part -->
  <headerComponent id="header-introduction" />
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

  <!-- cv part -->
  <cvComponent />

  <!-- contact part -->
  <contactComponent />

  <!-- footer part -->
  <footerComponent />
</template>

<script>
import introductionComponent from "@/components/introduction.vue";
import headerComponent from "@/components/header.vue";
import aboutComponent from "@/components/about.vue";
import skillComponent from "@/components/skill.vue";
import portfolioComponent from "@/components/portfolio.vue";
import formationComponent from "@/components/formation.vue";
import cvComponent from "@/components/cv.vue";
import contactComponent from "@/components/contact.vue";
import footerComponent from "@/components/footer.vue";

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
    formationComponent,
    cvComponent,
    contactComponent,
    footerComponent
  },
  beforeMount() {
    AOS.init({
      once: true
    });
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Mukta:wght@800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Syne:wght@500&display=swap");

#skill-sep {
  height: 60px;
  background-color: #724a75;
  transform: rotate(180deg);
}
</style>
