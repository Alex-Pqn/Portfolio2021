<template>
  <!-- formation container -->
  <section id="formation" class="formation">
    <!-- title -->
    <div class="formation__title">
      <h1>
        Mon parcours
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="graduation-cap"
          role="img"
          viewBox="0 0 640 512"
        >
          <path
            d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"
          ></path>
        </svg>
        de formation
      </h1>
    </div>

    <!-- items container -->
    <div id="items-container">
      <formationItemComponent
        v-for="(formation, index) in items"
        :key="index"
        :id="index"
        :name="formation.name"
        :description="formation.description"
        :date="formation.date"
        :img="formation.img"
        :link="formation.link"
        data-aos="slide-up"
        data-aos-offset="-5"
        data-aos-duration="750"
        :data-aos-delay="index * 150"
      />
      <!-- timeline -->
      <div class="formation__timeline"></div>
    </div>
    <!-- timeline end -->
    <div class="formation__timeline-end">
      <p>
        Début de mon parcours
      </p>
    </div>
  </section>
</template>

<script>
import formationItemComponent from "@/components/Formation/item.vue";

export default {
  name: "formation",
  data() {
    return {
      items: [
        {
          link: "https://www.francecompetences.fr/recherche/rncp/32173/",
          name: "Bac +2 Développeur Web",
          img: "OpenClassrooms_icon.jpg",
          description: "Certification RNCP de niveau 5 OpenClassrooms",
          date: "2020-2021"
        },
        {
          link: "https://lasaulaie.ent.auvergnerhonealpes.fr/",
          name: "2nd en Bac Pro MELEC",
          img: "Lycee_icon.jpg",
          description: "2nd en Bac PRO MELEC au lycée la Saulaie",
          date: "2019-2020"
        },
        {
          link: "https://college-bds-les-echelles.web.ac-grenoble.fr/",
          name: "Brevet des collèges",
          img: "College_icon.jpg",
          description:
            "Diplôme national du brevet des collèges à Béatrice de Savoie, Les Echelles",
          date: "2019"
        },
        {
          link: "https://www.gc-informatique.com/",
          name: "Stage en informatique",
          img: "GC-Informatique_icon.jpg",
          description:
            "Stage d'observation de 4ème à GC Informatique, à les Echelles",
          date: "2018"
        }
      ]
    };
  },
  components: {
    formationItemComponent
  }
};
</script>

<style scoped lang="scss">
// formation container
.formation {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Noto Sans KR", sans-serif;
  scroll-margin-top: 3.5em;
  padding: 25px 0 50px;
  background-image: radial-gradient(
      circle 8px at 80% 68%,
      rgb(143, 94, 212) 0%,
      rgb(143, 94, 212) 50%,
      transparent 50%,
      transparent 100%
    ),
    radial-gradient(
      circle 8px at 24% 41%,
      rgb(143, 94, 212) 0%,
      rgb(143, 94, 212) 50%,
      transparent 50%,
      transparent 100%
    ),
    radial-gradient(
      circle 6px at 34% 66%,
      rgb(110, 66, 171) 0%,
      rgb(110, 66, 171) 50%,
      transparent 50%,
      transparent 100%
    ),
    radial-gradient(
      circle 6px at 56% 55%,
      rgb(110, 66, 171) 0%,
      rgb(110, 66, 171) 50%,
      transparent 50%,
      transparent 100%
    ),
    radial-gradient(
      circle 6px at 11% 60%,
      rgb(110, 66, 171) 0%,
      rgb(110, 66, 171) 50%,
      transparent 50%,
      transparent 100%
    ),
    radial-gradient(
      circle 6px at 6% 89%,
      rgb(110, 66, 171) 0%,
      rgb(110, 66, 171) 50%,
      transparent 50%,
      transparent 100%
    ),
    radial-gradient(
      circle 6px at 0% 36%,
      rgb(110, 66, 171) 0%,
      rgb(110, 66, 171) 50%,
      transparent 50%,
      transparent 100%
    ),
    radial-gradient(
      circle 12px at 20% 56%,
      rgb(143, 94, 212) 0%,
      rgb(143, 94, 212) 50%,
      transparent 50%,
      transparent 100%
    ),
    radial-gradient(
      circle 12px at 46% 54%,
      rgb(143, 94, 212) 0%,
      rgb(143, 94, 212) 50%,
      transparent 50%,
      transparent 100%
    ),
    radial-gradient(
      circle 12px at 0% 43%,
      rgb(143, 94, 212) 0%,
      rgb(143, 94, 212) 50%,
      transparent 50%,
      transparent 100%
    ),
    radial-gradient(
      circle 12px at 19% 33%,
      rgb(143, 94, 212) 0%,
      rgb(143, 94, 212) 50%,
      transparent 50%,
      transparent 100%
    ),
    radial-gradient(
      circle at center left,
      rgb(143, 94, 212) 0%,
      rgb(143, 94, 212) 10%,
      transparent 10%,
      transparent 90%
    ),
    linear-gradient(0deg, rgb(218, 218, 218), rgb(233, 233, 233));

  // title
  &__title {
    text-align: center;
    padding-right: 25px;
    h1 {
      display: flex;
      border-top: 1px solid $timeline_formation-part;
      border-bottom: 1px solid $timeline_formation-part;
      padding: 0 50px 15px 50px;
      font-size: 3.7em;
      letter-spacing: 2px;
      word-spacing: 3px;
      color: rgb(180, 66, 202);
      svg {
        fill: rgb(165, 57, 187);
        width: 80px;
        margin: 8px 25px 0 35px;
      }
      @media screen and (min-width: 1024px) and (max-width: 1279px) {
        font-size: 3.2em;
        svg {
          width: 70px;
        }
      }
    }
  }

  // timeline
  &__timeline {
    position: absolute;
    background-color: $timeline_formation-part;
    z-index: 1;
    height: 100%;
    width: 3px;
  }

  // timeline end
  &__timeline-end {
    margin-top: 5px;
    p {
      color: rgb(180, 35, 209);
      font-size: 1.5em;
    }
  }
}

// items container
#items-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>
