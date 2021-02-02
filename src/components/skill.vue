<template>
  <!-- skill container -->
  <section id="skill" class="skill">
    <!-- top -->
    <div class="skill__top">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="book-open"
        class="svg-inline--fa fa-book-open fa-w-18"
        role="img"
        viewBox="0 0 576 512"
        data-aos="fade-up"
        data-aos-duration="750"
        data-aos-offset="2000"
        data-aos-delay="150"
      >
        <path
          d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"
        ></path>
      </svg>
      <h1
        data-aos="fade-up"
        data-aos-duration="750"
        data-aos-offset="200"
        data-aos-delay="150"
      >
        Compétences
      </h1>
    </div>

    <!-- middle -->
    <div class="skill__middle">
      <button
        id="front-button"
        data-aos="zoom-in-up"
        data-aos-duration="500"
        data-aos-offset="370"
        v-on:click="switchSkillContainer('front')"
      >
        Front
      </button>
      <button
        id="back-button"
        data-aos="zoom-in-up"
        data-aos-duration="500"
        data-aos-offset="370"
        data-aos-delay="200"
        v-on:click="switchSkillContainer('back')"
      >
        Back
      </button>
      <button
        id="tools-button"
        data-aos="zoom-in-up"
        data-aos-duration="500"
        data-aos-offset="370"
        data-aos-delay="400"
        v-on:click="switchSkillContainer('tools')"
      >
        Outils
      </button>
    </div>

    <!-- bottom -->
    <article class="skill__bottom">
      <!-- font container -->
      <div id="front-container">
        <h2>
          front - front - front
        </h2>
        <!-- skill items -->
        <div class="skill-item" v-for="skill in front" :key="skill.id">
          <skillItemComponent
            :icon="skill.icon"
            :name="skill.name"
            :nameColor="skill.name_color"
            :perc="skill.perc"
            :percBackground="skill.perc_background"
          />
        </div>
      </div>
      <!-- back container -->
      <div id="back-container">
        <h2>
          back - back - back
        </h2>
        <!-- skill items -->
        <div class="skill-item" v-for="skill in back" :key="skill.id">
          <skillItemComponent
            :icon="skill.icon"
            :name="skill.name"
            :nameColor="skill.name_color"
            :perc="skill.perc"
            :percBackground="skill.perc_background"
          />
        </div>
      </div>
      <!-- tools container -->
      <div id="tools-container">
        <h2>
          outils - outils
        </h2>
        <!-- skill items -->
        <div class="skill-item" v-for="skill in tools" :key="skill.id">
          <skillItemComponent
            :icon="skill.icon"
            :name="skill.name"
            :nameColor="skill.name_color"
            :perc="skill.perc"
            :percBackground="skill.perc_background"
          />
        </div>
      </div>
    </article>

    <div
      style="clip-path: polygon(50% 35%, 0% 100%, 100% 100%)"
      class="skill__end-shape"
    ></div>
  </section>
</template>

<script>
import skillItemComponent from "@/components/Skill/item.vue";

export default {
  name: "skill",
  data() {
    return {
      front: [
        {
          id: 1,
          icon: "VUEJS_icon.png",
          name: "Vue.js",
          name_color: "#00BC32",
          perc: 50,
          perc_background: "rgb(0, 188, 50, 0.7)"
        },
        {
          id: 2,
          icon: "HTMLCSS_icon.png",
          name: "HTML/CSS",
          name_color: "#448FFF",
          perc: 85,
          perc_background: "rgb(68, 143, 255, 0.7)"
        },
        {
          id: 3,
          icon: "JS_icon.png",
          name: "Javascript",
          name_color: "yellow",
          perc: 70,
          perc_background: "rgb(255, 255, 0, 0.75)"
        }
      ],
      back: [
        {
          id: 2,
          icon: "HTMLCSS_icon.png",
          name: "HTML/CSS",
          name_color: "#448FFF",
          perc: 85,
          perc_background: "rgb(68, 143, 255, 0.7)"
        },
        {
          id: 1,
          icon: "VUEJS_icon.png",
          name: "Vue.js",
          name_color: "#00BC32",
          perc: 50,
          perc_background: "rgb(0, 188, 50, 0.7)"
        },
        {
          id: 3,
          icon: "JS_icon.png",
          name: "Javascript",
          name_color: "yellow",
          perc: 70,
          perc_background: "rgb(255, 255, 0, 0.75)"
        }
      ],
      tools: [
        {
          id: 3,
          icon: "JS_icon.png",
          name: "Javascript",
          name_color: "yellow",
          perc: 70,
          perc_background: "rgb(255, 255, 0, 0.75)"
        },
        {
          id: 1,
          icon: "VUEJS_icon.png",
          name: "Vue.js",
          name_color: "#00BC32",
          perc: 50,
          perc_background: "rgb(0, 188, 50, 0.7)"
        },
        {
          id: 2,
          icon: "HTMLCSS_icon.png",
          name: "HTML/CSS",
          name_color: "#448FFF",
          perc: 85,
          perc_background: "rgb(68, 143, 255, 0.7)"
        }
      ]
    };
  },
  methods: {
    // switch skill container function
    switchSkillContainer: function(skillContainer) {
      // containers
      const frontContainer = document.getElementById("front-container");
      const backContainer = document.getElementById("back-container");
      const toolsContainer = document.getElementById("tools-container");
      // buttons
      const frontButton = document.getElementById("front-button");
      const backButton = document.getElementById("back-button");
      const toolsButton = document.getElementById("tools-button");

      // reset styles
      frontContainer.style.display = "none";
      backContainer.style.display = "none";
      toolsContainer.style.display = "none";
      frontButton.style.backgroundColor = "rgba(82, 0, 114, 0.15)";
      backButton.style.backgroundColor = "rgba(82, 0, 114, 0.15)";
      toolsButton.style.backgroundColor = "rgba(82, 0, 114, 0.15)";

      // switch containers & styles
      switch (skillContainer) {
        case "front":
          frontContainer.style.display = "flex";
          frontButton.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
          break;

        case "back":
          backContainer.style.display = "flex";
          backButton.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
          break;

        case "tools":
          toolsContainer.style.display = "flex";
          toolsButton.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
          break;
      }
    }
  },
  components: {
    skillItemComponent
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Syne:wght@500&display=swap");

// skill container
.skill {
  text-align: center;
  scroll-margin-top: 3rem;
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

  // top
  &__top {
    margin-bottom: 30px;
    h1 {
      text-transform: uppercase;
      color: rgb(255, 255, 255);
      font-size: 3.2em;
      letter-spacing: 3px;
      margin-top: 18px;
      background-color: rgba(63, 0, 100, 0.05);
      padding: 10px;
    }
    svg {
      width: 50px;
      fill: white;
    }
  }

  // middle
  &__middle {
    justify-content: center;
    position: relative;
    margin-bottom: 30px;

    button {
      padding: 7px;
      margin: 0 7px;
      font-size: 1.3em;
      background-color: rgba(82, 0, 114, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.75);
      color: white;
      transition-property: all;
      transition-duration: 350ms;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1) !important;
        border: 1px solid rgb(255, 255, 255);
      }
    }
    // for default container
    #front-button {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  // bottom
  &__bottom {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      letter-spacing: 15px;
      font-size: 2.2em;
      color: rgba(96, 34, 102, 0.25);
      padding: 0 10px;
    }
  }

  // end shape
  &__end-shape {
    width: 100%;
    height: 30px;
    position: absolute;
    bottom: 0;
    background-color: white;
  }
}

// front, back & tools containers
#front-container,
#back-container,
#tools-container {
  width: 100%;
  flex-direction: column;
  align-items: center;
}
// front container
#front-container {
  display: flex;
}
// back & tools containers
#back-container,
#tools-container {
  display: none;
}

// skill item
.skill-item {
  display: flex;
  flex-direction: column;
  margin: 27px 0 23px;
  width: 40%;

  // top
  &__top {
    display: flex;
    align-items: center;
    margin-bottom: 17px;
    img {
    }
    p {
      font-size: 1.3em;
      margin-left: 12px;
    }
  }

  // bottom
  &__bottom {
    display: flex;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.1);
    height: 30px;
    width: 100%;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgb(148, 0, 216);
      height: 30px;
    }
    p {
      text-align: center;
      font-size: 1.2em;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      padding: 0 5.5px 0 9px;
      line-height: 31px;
    }
  }
}
</style>
