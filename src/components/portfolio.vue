<template>
  <!-- portfolio container -->
  <section id="portfolio" class="portfolio">
    <!-- top -->
    <div class="portfolio__top">
      <h1>
        Découvrez
        <span>mes</span>
        projets !
      </h1>
    </div>

    <!-- bottom -->
    <div class="portfolio__bottom">
      <div
        v-for="(project, index) in items"
        :key="index"
        data-aos="fade-up"
        data-aos-offset="-5"
        data-aos-duration="1000"
        :data-aos-delay="index * 250"
      >
        <portfolioItemComponent
          :id="index"
          :title="project.title"
          :description="project.description"
          :technologies="project.technologies"
          :githubUrl="project.githubUrl"
          :siteUrl="project.siteUrl"
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
          title: "Mon site",
          description: "Mon site Front & back",
          technologies: {
            HTMLCSS: true,
            JS: true,
            VUEJS: true,
            SASS: true
          },
          githubUrl: "https://github.com/Alex-Pqn/portfolio",
          siteUrl: "https://github.com/Alex-Pqn/portfolio"
        },
        {
          title: "Launcher pour un jeu-vidéo",
          description: "Launcher pour un jeu-vidéo",
          technologies: {
            SASS: true,
            HTMLCSS: true,
            JS: true
          },
          githubUrl: "https://github.com/Alex-Pqn/marie-madeleine-launcher",
          siteUrl:
            "https://github.com/Alex-Pqn/marie-madeleine-launcher/releases"
        },
        {
          title: "Réseau social d'entreprise",
          description: "Projet 7 Openclassrooms: Front & back",
          technologies: {
            HTMLCSS: true,
            VUEJS: true,
            SASS: true,
            NODEJS: true,
            MYSQL: true,
            EXPRESSJS: true,
            JS: true
          },
          githubUrl: "https://github.com/Alex-Pqn/project7ocr",
          siteUrl: "https://github.com/Alex-Pqn/project7ocr"
        },
        {
          title: "Application d'évaluation de sauces piquantes",
          description: "Projet 6 Openclassrooms: Back",
          technologies: {
            EXPRESSJS: true,
            MONGOOSEJS: true,
            MONGODB: true,
            NODEJS: true
          },
          githubUrl: "https://github.com/Alex-Pqn/project6ocr",
          siteUrl: "https://github.com/Alex-Pqn/project6ocr"
        },
        {
          title: "Site de vente de matériel photographique",
          description: "Projet 5 Openclassrooms: Front & Back",
          technologies: {
            HTMLCSS: true,
            MONGOOSEJS: true,
            EXPRESSJS: true,
            SASS: true,
            JS: true
          },
          githubUrl: "https://github.com/Alex-Pqn/project5ocr",
          siteUrl: "https://github.com/Alex-Pqn/project5ocr"
        },
        {
          title: "Site d'une agence de web design",
          description: "Projet 4 Openclassrooms: Front SEO/Accésibilité",
          technologies: {
            JS: true,
            BOOTSTRAP: true,
            HTMLCSS: true
          },
          githubUrl: "https://github.com/Alex-Pqn/project4ocr",
          siteUrl: "https://github.com/Alex-Pqn/project4ocr"
        },
        {
          title: "Application de restauration gastronomique",
          description: "Projet 3 Openclassrooms: Front",
          technologies: {
            JS: true,
            BOOTSTRAP: true,
            HTMLCSS: true
          },
          githubUrl: "https://github.com/Alex-Pqn/project3ocr",
          siteUrl: "https://github.com/Alex-Pqn/project3ocr"
        },
        {
          title: "Réalisation de mon CV",
          description: "Projet 2 Openclassrooms: Front",
          technologies: {
            BOOTSTRAP: true,
            HTMLCSS: true
          },
          githubUrl: "https://github.com/Alex-Pqn/CV",
          siteUrl: "https://github.com/Alex-Pqn/CV"
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
// portfolio container
.portfolio {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -100px;
  padding: 35px 0 75px;
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
    linear-gradient(
      0deg,
      rgb(233, 233, 233),
      rgb(255, 255, 255),
      rgb(255, 255, 255)
    );

  // top
  &__top {
    margin: 45px 45px 55px 0;
    h1 {
      font-size: 3.7em;
      color: rgb(162, 69, 216);
      & span {
        color: white;
        padding: 75px 35px;

        background-image: radial-gradient(
            circle at 50% 48%,
            rgb(114, 74, 117) 0%,
            rgb(114, 74, 117) 57%,
            transparent 10%,
            transparent 90%
          ),
          linear-gradient(
            0deg,
            rgb(255, 255, 255),
            rgb(255, 255, 255),
            rgb(255, 255, 255)
          );
      }
    }
  }

  // bottom
  &__bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 80%;

    svg {
      width: 50px;
      color: red;
    }
  }
}
</style>
