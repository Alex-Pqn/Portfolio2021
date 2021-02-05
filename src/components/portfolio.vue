<template>
  <section id="portfolio" class="portfolio">
    <!-- top -->
    <div class="portfolio__top">
      <h1>
        Découvrez mes projets !
      </h1>
    </div>
    <div class="portfolio__bottom">
      <div v-for="item in items" :key="item.id"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "portfolio"
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@700&display=swap");

.portfolio {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 35px 0;
  scroll-margin-top: 3em;
  font-family: "Noto Sans KR", sans-serif;

  &__top {
    margin-bottom: 25px;
    h1 {
      font-size: 3.15em;
    }
  }

  &__bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 65%;

    svg {
      width: 50px;
      color: red;
    }
  }
}
</style>
