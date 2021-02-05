<template>
  <section id="portfolio" class="portfolio">
    <!-- top -->
    <div class="portfolio__top">
      <h1>
        Découvrez mes projets !
      </h1>
    </div>
    <div class="portfolio__bottom">
      <div v-for="item in items" :key="item.id">
        <portfolioItemComponent
          :id="item.id"
          :title="item.title"
          :img="item.img"
          :description="item.description"
          :technologies="item.technologies"
          :githubUrl="item.githubUrl"
          :siteUrl="item.siteUrl"
          maxItems="6"
        />
      </div>
    </div>
  </section>
</template>

<script>
import portfolioItemComponent from "@/components/Portfolio/item.vue";

export default {
  name: "portfolio",
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Mon CV 1",
          img: "CV.png",
          description:
            "Le projassrooms consistait à créer son propre CV sous foeb à l'aide du HTML et CSS seulement.",
          technologies: {
            HTMLCSS: true
          },
          githubUrl: "https://github.com/Alex-Pqn?tab=repositories",
          siteUrl: "https://github.com/Alex-Pqn?tab=repositories"
        },
        {
          id: 2,
          title: "Mon CV 2",
          img: "CV.png",
          description:
            "sistait à créer son propre CV sous forme d'une page web à l'a HTML et CSS seulement.",
          technologies: {
            HTMLCSS: true,
            JS: true
          },
          githubUrl: "https://github.com/Alex-Pqn?tab=repositories",
          siteUrl: "https://github.com/Alex-Pqn?tab=repositories"
        },
        {
          id: 3,
          title: "Mon CV 3",
          img: "CV.png",
          description:
            "Le projet 2 Openms consistait à créer son proprpage web à l'aide du HTML et CSS seulement.",
          technologies: {
            HTMLCSS: true,
            BOOTSTRAP: true
          },
          githubUrl: "https://github.com/Alex-Pqn?tab=repositories",
          siteUrl: "https://github.com/Alex-Pqn?tab=repositories"
        },
        {
          id: 4,
          title: "Mon CV 4",
          img: "CV.png",
          description:
            "Le projet à créer son propre CV sous forme d'une page web à l'aide du HTML et CSS seulement.",
          technologies: {
            VUEJS: true
          },
          githubUrl: "https://github.com/Alex-Pqn?tab=repositories",
          siteUrl: "https://github.com/Alex-Pqn?tab=repositories"
        },
        {
          id: 5,
          title: "Mon CV 5",
          img: "CV.png",
          description:
            "Le projet 2 OpenClassrooms consiste d'une page web à l'aide du HTML et CSS seulement.",
          technologies: {
            HTMLCSS: true
          },
          githubUrl: "https://github.com/Alex-Pqn?tab=repositories",
          siteUrl: "https://github.com/Alex-Pqn?tab=repositories"
        },
        {
          id: 6,
          title: "Mon CV 6",
          img: "CV.png",
          description:
            "Le projet 2 OpenClassrooms consistait à créer son propre CV sous form",
          technologies: {
            JS: true
          },
          githubUrl: "https://github.com/Alex-Pqn?tab=repositories",
          siteUrl: "https://github.com/Alex-Pqn?tab=repositories"
        }
      ]
    };
  },
  components: {
    portfolioItemComponent
  }
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
