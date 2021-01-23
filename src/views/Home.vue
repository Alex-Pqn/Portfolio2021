<template>
  <!-- fixed header -->
  <headerComponent :id="'header-fixed'" />

  <!-- introduction part -->
  <headerComponent :id="'header-introduction'" />
  <introductionComponent />
</template>

<script>
import introductionComponent from "@/components/Home/introduction.vue";
import headerComponent from "@/components/Home/header.vue";

export default {
  name: "Home",
  components: {
    introductionComponent,
    headerComponent
  }
};
</script>

<style lang="scss"></style>
