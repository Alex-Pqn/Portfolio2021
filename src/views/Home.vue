<template>
  <headerComponent
    :backgroundColor="'rgb(242, 242, 242)'"
    :textColor="'black'"
    :textSpanColor="'rgb(133, 58, 163)'"
    :opacity="1"
    :width="'100%'"
    :position="'relative'"
    id="header-relative"
  />
  <headerComponent
    :backgroundColor="'white'"
    :textColor="''"
    :textSpanColor="''"
    :opacity="0"
    :width="'60%'"
    :position="'fixed'"
    id="header-fixed"
  />
  <!-- introduction part -->
  <introductionComponent />
</template>

<script>
import introductionComponent from "@/components/Home/introduction.vue";
import headerComponent from "@/components/Home/header.vue";

export default {
  name: "Home",
  mounted() {
    window.onscroll = function() {
      displayFixedHeader();
    };

    const headerDisplayDistance = 200;
    const headerElement = document.querySelector("#header-fixed");

    function displayFixedHeader() {
      if (
        document.body.scrollTop >= headerDisplayDistance ||
        document.documentElement.scrollTop >= headerDisplayDistance
      ) {
        headerElement.style.opacity = 1;
        headerElement.style.width = "100%";
      } else {
        headerElement.style.opacity = 0;
        headerElement.style.width = "60%";
      }
    }
  },
  components: {
    introductionComponent,
    headerComponent
  }
};
</script>

<style lang="scss"></style>
