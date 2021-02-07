<template>
  <section id="portfolio" class="portfolio">
    <!-- top -->
    <div
      class="portfolio__top"
      data-aos="fade-up"
      data-aos-duration="750"
      data-aos-offset="250"
      data-aos-delay="150"
    >
      <h1>
        Découvrez mes projets !
      </h1>
    </div>
    <div class="portfolio__bottom">
      <div
        v-for="(project, index) in items"
        :key="index"
        data-aos="fade-up"
        data-aos-duration="1000"
        :data-aos-delay="index * 150 + 150"
      >
        <!-- substracted 1 on maxItems since the indexes start at 0 -->
        <portfolioItemComponent
          :id="index"
          :title="project.title"
          :img="project.img"
          :description="project.description"
          :technologies="project.technologies"
          :githubUrl="project.githubUrl"
          :siteUrl="project.siteUrl"
          :maxItems="items.length - 1"
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
  margin-top: -100px;
  height: 100vh;
  padding: 35px 0;
  scroll-margin-top: 20px;
  font-family: "Noto Sans KR", sans-serif;
  background-image: radial-gradient(
      circle 7px at 84% 90%,
      rgb(131, 83, 197) 0%,
      rgb(131, 83, 197) 50%,
      transparent 50%,
      transparent 100%
    ),
    radial-gradient(
      circle 7px at 81% 15%,
      rgb(131, 83, 197) 0%,
      rgb(131, 83, 197) 50%,
      transparent 50%,
      transparent 100%
    ),
    radial-gradient(
      circle 7px at 2% 78%,
      rgb(131, 83, 197) 0%,
      rgb(131, 83, 197) 50%,
      transparent 50%,
      transparent 100%
    ),
    radial-gradient(
      circle 7px at 41% 48%,
      rgb(131, 83, 197) 0%,
      rgb(131, 83, 197) 50%,
      transparent 50%,
      transparent 100%
    ),
    radial-gradient(
      circle 7px at 77% 61%,
      rgb(131, 83, 197) 0%,
      rgb(131, 83, 197) 50%,
      transparent 50%,
      transparent 100%
    ),
    radial-gradient(
      circle 5px at 0% 53%,
      rgb(131, 83, 197) 0%,
      rgb(131, 83, 197) 50%,
      transparent 50%,
      transparent 100%
    ),
    radial-gradient(
      circle 5px at 78% 89%,
      rgb(131, 83, 197) 0%,
      rgb(131, 83, 197) 50%,
      transparent 50%,
      transparent 100%
    ),
    radial-gradient(
      circle 5px at 40% 61%,
      rgb(131, 83, 197) 0%,
      rgb(131, 83, 197) 50%,
      transparent 50%,
      transparent 100%
    ),
    radial-gradient(
      circle 5px at 53% 74%,
      rgb(131, 83, 197) 0%,
      rgb(131, 83, 197) 50%,
      transparent 50%,
      transparent 100%
    ),
    radial-gradient(
      circle 5px at 75% 87%,
      rgb(131, 83, 197) 0%,
      rgb(131, 83, 197) 50%,
      transparent 50%,
      transparent 100%
    ),
    radial-gradient(
      circle 12px at 66% 50%,
      rgb(174, 93, 206) 0%,
      rgb(174, 93, 206) 50%,
      transparent 50%,
      transparent 100%
    ),
    radial-gradient(
      circle 12px at 56% 29%,
      rgb(174, 93, 206) 0%,
      rgb(174, 93, 206) 50%,
      transparent 50%,
      transparent 100%
    ),
    radial-gradient(
      circle 12px at 87% 94%,
      rgb(174, 93, 206) 0%,
      rgb(174, 93, 206) 50%,
      transparent 50%,
      transparent 100%
    ),
    radial-gradient(
      circle 12px at 97% 6%,
      rgb(174, 93, 206) 0%,
      rgb(174, 93, 206) 50%,
      transparent 50%,
      transparent 100%
    ),
    radial-gradient(
      circle 12px at 65% 56%,
      rgb(174, 93, 206) 0%,
      rgb(174, 93, 206) 50%,
      transparent 50%,
      transparent 100%
    ),
    radial-gradient(
      circle at top center,
      rgb(114, 74, 117) 0%,
      rgb(114, 74, 117) 10%,
      transparent 10%,
      transparent 90%
    ),
    linear-gradient(
      0deg,
      rgb(233, 233, 233),
      rgb(255, 255, 255),
      rgb(255, 255, 255)
    );

  &__top {
    margin: 112px 0 18px 0;
    h1 {
      font-size: 3.15em;
      color: rgb(172, 77, 228);
    }
  }

  &__bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 75%;

    svg {
      width: 50px;
      color: red;
    }
  }
}
</style>
