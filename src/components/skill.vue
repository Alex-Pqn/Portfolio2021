<template>
  <!-- skill container -->
  <section id="skill" class="skill">
    <!-- top -->
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

    <!-- middle -->
    <div class="skill__middle">
      <button id="front-button" v-on:click="switchSkillContainer('front')">
        Front
      </button>
      <button id="back-button" v-on:click="switchSkillContainer('back')">
        Back
      </button>
      <button id="tools-button" v-on:click="switchSkillContainer('tools')">
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
  height: 100vh;
  padding: 30px 0;
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
