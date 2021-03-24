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
        data-aos-offset="1700"
        data-aos-delay="150"
      >
        <path
          d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"
        ></path>
      </svg>
    </div>

    <!-- middle -->
    <div class="skill__middle">
      <button
        id="front-button"
        data-aos="zoom-in-up"
        data-aos-duration="500"
        v-on:click="switchSkillContainer('front')"
      >
        Front
      </button>
      <button
        id="back-button"
        data-aos="zoom-in-up"
        data-aos-duration="500"
        data-aos-delay="150"
        v-on:click="switchSkillContainer('back')"
      >
        Back
      </button>
      <button
        id="tools-button"
        data-aos="zoom-in-up"
        data-aos-duration="500"
        data-aos-delay="250"
        v-on:click="switchSkillContainer('tools')"
      >
        Outils
      </button>
    </div>

    <!-- bottom -->
    <article class="skill__bottom">
      <!-- default title -->
      <h2 id="title-container">
        front
      </h2>
      <!-- front container -->
      <div id="front-container">
        <!-- skill front item -->
        <skillItemComponent
          v-for="(skill, index) in front"
          :key="index"
          data-aos="fade-up"
          data-aos-duration="750"
          data-aos-offset="-5"
          :data-aos-delay="index * 250"
          :icon="skill.icon"
          :name="skill.name"
          :nameColor="skill.name_color"
          :percent="skill.percent"
        />
      </div>
      <!-- back container -->
      <div id="back-container">
        <!-- skill back item -->
        <skillItemComponent
          v-for="(skill, index) in back"
          :key="index"
          :icon="skill.icon"
          :name="skill.name"
          :nameColor="skill.name_color"
          :percent="skill.percent"
        />
      </div>
      <!-- tools container -->
      <div id="tools-container">
        <!-- skill tools item -->
        <skillItemComponent
          v-for="(skill, index) in tools"
          :key="index"
          :icon="skill.icon"
          :name="skill.name"
          :nameColor="skill.name_color"
          :percent="skill.percent"
        />
      </div>
    </article>
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
          icon: "VUEJS_icon.png",
          name: "Vue.js & CLI",
          name_color: "#00BC32",
          percent: 45
        },
        {
          icon: "HTMLCSS_icon.png",
          name: "HTML5 / CSS3",
          name_color: "#448FFF",
          percent: 85
        },
        {
          icon: "JS_icon.png",
          name: "Javascript",
          name_color: "yellow",
          percent: 55
        },
        {
          icon: "BOOTSTRAP_icon.png",
          name: "Bootstrap",
          name_color: "#FFFFFF",
          percent: 70
        },
        {
          icon: "SASS_icon.png",
          name: "Sass",
          name_color: "#FF9CC3",
          percent: 80
        }
      ],
      back: [
        {
          icon: "NODEJS_icon.png",
          name: "Node.js",
          name_color: "#00BC32",
          percent: 35
        },
        {
          icon: "MYSQL_icon.png",
          name: "MySQL",
          name_color: "#8799F5",
          percent: 50
        },
        {
          icon: "MONGODB_icon.png",
          name: "MongoDB",
          name_color: "#A6FC90",
          percent: 75
        },
        {
          icon: "MONGOOSEJS.png",
          name: "Mongoose.js",
          name_color: "#9A1212",
          percent: 75
        },
        {
          icon: "EXPRESSJS_icon.png",
          name: "Express.js",
          name_color: "white",
          percent: 75
        }
      ],
      tools: [
        {
          icon: "GIT_icon.png",
          name: "Git/Github",
          name_color: "white",
          percent: 70
        },
        {
          icon: "JOI_icon.png",
          name: "Joi",
          name_color: "yellow",
          percent: 35
        },
        {
          icon: "ESLINT_icon.png",
          name: "ESLint",
          name_color: "#22269B",
          percent: 65
        },
        {
          icon: "CHAI_icon.png",
          name: "Chai",
          name_color: "#981C1C",
          percent: 35
        },
        {
          icon: "PRETTIER_icon.png",
          name: "Prettier",
          name_color: "#5199C3",
          percent: 35
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
      // title container
      const titleContainer = document.getElementById("title-container");
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
          titleContainer.innerHTML = "front";
          break;

        case "back":
          backContainer.style.display = "flex";
          backButton.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
          titleContainer.innerHTML = "back";
          break;

        case "tools":
          toolsContainer.style.display = "flex";
          toolsButton.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
          titleContainer.innerHTML = "outils";
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
// skill container
.skill {
  text-align: center;
  position: relative;
  scroll-margin-top: 1.7rem;
  font-family: "Syne", sans-serif;
  z-index: 999;
  padding-bottom: 35px;
  background-image: radial-gradient(
      circle at 10% 0%,
      #734a75 0%,
      #734a75 7.5%,
      transparent 7.5%,
      transparent 100%
    ),
    radial-gradient(
      circle at 8% 90%,
      #734a75 0%,
      #734a75 20%,
      transparent 20%,
      transparent 100%
    ),
    radial-gradient(
      circle at 100% 40%,
      #764b79 0%,
      #734a75 11%,
      transparent 11%,
      transparent 100%
    ),
    radial-gradient(
      circle at 100% 65%,
      #764b79 0%,
      #734a75 6%,
      transparent 6%,
      transparent 100%
    ),
    radial-gradient(
      circle at 97% 17%,
      rgb(132, 81, 134) 0%,
      rgb(138, 83, 139) 58%,
      transparent 58%,
      transparent 100%
    ),
    radial-gradient(
      circle at 35% 100%,
      rgb(115, 74, 117) 0%,
      rgb(115, 74, 117) 22%,
      transparent 22%,
      transparent 100%
    ),
    linear-gradient(90deg, rgb(139, 88, 142), rgb(139, 88, 142));

  // top
  &__top {
    margin-bottom: 30px;

    svg {
      margin-top: -15px;
      width: 45px;
      fill: white;
      z-index: 999;
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
      font-size: 1.5em;
      background-color: rgba(82, 0, 114, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.75);
      color: white;
      transition: all 350ms ease-in-out;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1) !important;
        border-color: rgb(255, 255, 255);
      }
    }
    // default container
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
      font-size: 2.3em;
      color: rgba(96, 34, 102, 0.3);
    }
  }
}

// front, back & tools containers
#front-container,
#back-container,
#tools-container {
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
</style>
