<template>
  <!-- fixed header -->
  <headerComponent :id="'header-fixed'" />

  <!-- introduction part -->
  <headerComponent :id="'header-introduction'" />
  <introductionComponent />

  <!-- about part -->
  <aboutComponent />
</template>

<script>
import introductionComponent from "@/components/Home/introduction.vue";
import headerComponent from "@/components/Home/header.vue";
import aboutComponent from "@/components/Home/about.vue";

export default {
  name: "Home",
  components: {
    introductionComponent,
    headerComponent,
    aboutComponent
  }
};
</script>

<style lang="scss"></style>
