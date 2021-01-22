<template>
  <!-- headers -->
  <headerComponent :id="'header-presentation'" />
  <headerComponent :id="'header-fixed'" />

  <!-- introduction part -->
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
