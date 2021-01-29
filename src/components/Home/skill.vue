<template>
  <section id="skill" class="skill">
    <div class="skill__top">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="info-circle"
        class="svg-inline--fa fa-info-circle fa-w-16"
        role="img"
        viewBox="0 0 512 512"
      >
        <path
          d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
        ></path>
      </svg>
      <h1>
        Compétences
      </h1>
    </div>
    <article class="skill__bottom">
      <div class="front-skill" v-for="skill in front" :key="skill.id">
        <div class="front-skill__top">
          <img v-if="skill.icon" :src="getAssetPath(skill.icon)" alt="" />
          <p :style="`color: ${skill.name_color}`">
            {{ skill.name }}
          </p>
        </div>
        <div
          :style="`background-color: ${skill.perc_background_color}`"
          class="front-skill__bottom"
        >
          <div
            :style="
              `width: ${skill.perc}%; background-color: ${skill.perc_filled_color}`
            "
          ></div>
          <p>
            {{ skill.perc }}
          </p>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "skill",
  data() {
    return {
      front: [
        {
          id: 1,
          icon: "VUEJS_icon.png",
          name: "Vue.js",
          name_color: "green",
          perc_background_color: "rgba(0, 0, 0, 0.1)",
          perc_filled_color: "rgb(110, 0, 161)",
          perc_color: "",
          perc: 50
        },
        {
          id: 2,
          icon: "HTMLCSS_icon.png",
          name: "HTML/CSS",
          name_color: "blue",
          perc_background_color: "rgba(0, 0, 0, 0.1)",
          perc_filled_color: "rgb(110, 0, 161)",
          perc_color: "",
          perc: 85
        },
        {
          id: 3,
          icon: "JS_icon.png",
          name: "Javascript",
          name_color: "yellow",
          perc_background_color: "rgba(0, 0, 0, 0.1)",
          perc_filled_color: "rgb(110, 0, 161)",
          perc_color: "",
          perc: 70
        }
      ],
      back: {},
      tools: {}
    };
  },
  methods: {
    getAssetPath: function(icon) {
      return require(`@/assets/${icon}`);
    }
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Syne:wght@500&display=swap");

.skill {
  text-align: center;
  height: 100vh;
  padding: 50px 0;
  border-top: 7px solid $border_skill-part;
  border-bottom: 7px solid $border_skill-part;
  font-family: "Syne", sans-serif;

  background-image: radial-gradient(
      circle at 13% 47%,
      rgb(135, 85, 138) 0%,
      rgb(135, 85, 138) 25%,
      transparent 25%,
      transparent 100%
    ),
    radial-gradient(
      circle at 28% 63%,
      rgb(123, 76, 128) 0%,
      rgb(126, 78, 130) 16%,
      transparent 16%,
      transparent 100%
    ),
    radial-gradient(
      circle at 81% 56%,
      rgb(117, 70, 121) 0%,
      rgb(121, 74, 124) 12%,
      transparent 12%,
      transparent 100%
    ),
    radial-gradient(
      circle at 26% 48%,
      rgba(189, 24, 24, 0) 0%,
      rgba(189, 24, 24, 0) 6%,
      transparent 6%,
      transparent 100%
    ),
    radial-gradient(
      circle at 97% 17%,
      rgb(132, 81, 134) 0%,
      rgb(138, 83, 139) 56%,
      transparent 56%,
      transparent 100%
    ),
    radial-gradient(
      circle at 50% 100%,
      rgb(115, 74, 117) 0%,
      rgb(115, 74, 117) 36%,
      transparent 36%,
      transparent 100%
    ),
    radial-gradient(
      circle at 55% 52%,
      rgba(74, 46, 46, 0) 0%,
      rgba(74, 46, 46, 0) 6%,
      transparent 6%,
      transparent 100%
    ),
    linear-gradient(90deg, rgb(139, 88, 142), rgb(139, 88, 142));

  &__top {
    line-height: 65px;
    margin-bottom: 40px;
    h1 {
      text-align: center;
      color: rgb(255, 255, 255);
      font-size: 4.6em;
      letter-spacing: 3px;
    }
    svg {
      width: 70px;
      fill: white;
    }
  }
  &__bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.front-skill {
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  width: 40%;

  &__top {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    img {
    }
    p {
      font-size: 1.3em;
      margin-left: 12px;
    }
  }
  &__bottom {
    display: flex;
    justify-content: space-between;
    height: 27px;
    width: 100%;

    div {
      display: flex;
      align-items: center;
      height: 27px;
    }
    p {
      padding-right: 7px;
    }
  }
}
</style>
