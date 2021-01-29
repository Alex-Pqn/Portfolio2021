<template>
  <!-- fixed header -->
  <headerComponent :id="'header-fixed'" />

  <!-- introduction part -->
  <headerComponent :id="'header-introduction'" />
  <introductionComponent />

  <!-- about part -->
  <aboutComponent />

  <!-- portfolio part -->
  <skillComponent />
</template>

<script>
import introductionComponent from "@/components/Home/introduction.vue";
import headerComponent from "@/components/Home/header.vue";
import aboutComponent from "@/components/Home/about.vue";
import skillComponent from "@/components/Home/skill.vue";

export default {
  name: "Home",
  components: {
    introductionComponent,
    headerComponent,
    aboutComponent,
    skillComponent
  }
};
</script>

<style lang="scss"></style>
