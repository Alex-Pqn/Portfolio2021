<template>
  <section id="formation" class="formation">
    <div class="formation__title">
      <h1>
        Mon parcours de formation
      </h1>
    </div>
    <div id="items-container">
      <formationItemComponent
        v-for="(formation, index) in items"
        :key="index"
        :id="index"
        :name="formation.name"
        :description="formation.description"
        :date="formation.date"
        :img="formation.img"
      />
      <div class="formation__timeline"></div>
    </div>
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
          name: "Bac +2 Développeur Web",
          img: "OpenClassrooms_icon.jpg",
          description: "Certification RNCP de niveau 5 OpenClassrooms.",
          date: "2020-2021"
        },
        {
          name: "2nd en Bac Pro MELEC",
          img: "Lycee_icon.jpg",
          description: "Une année en 2nd Bac PRO MELEC au lycée la Saulaie.",
          date: "2019-2020"
        },
        {
          name: "Brevet des collèges",
          img: "College_icon.jpg",
          description:
            "Diplôme national du brevet des collèges à Les Echelles.",
          date: "2019"
        },
        {
          name: "Stage en informatique",
          img: "GC-Informatique_icon.jpg",
          description:
            "Stage d'observation durant ma 4ème à GC Informatique à les Echelles.",
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
.formation {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Noto Sans KR", sans-serif;
  scroll-margin-top: 5em;
  padding-bottom: 25px;
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
      circle 12px at 44% 56%,
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

  &__title {
    margin-bottom: 35px;
    h1 {
      font-size: 3em;
    }
  }

  &__timeline {
    position: absolute;
    background-color: $timeline_formation-part;
    height: 100%;
    width: 3.5px;
  }

  &__timeline-end {
    p {
      color: rgb(153, 19, 180);
      font-size: 1.5em;
    }
  }
}

#items-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>
