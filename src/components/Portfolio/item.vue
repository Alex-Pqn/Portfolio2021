<template>
  <!-- portfolio item -->
  <div
    :style="`background-image: url(${getAssetPath(img)})`"
    class="portfolio-item"
    v-on:click="displayModal(id)"
  >
    <!-- content -->
    <div class="portfolio-item__content">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="far"
        data-icon="eye"
        role="img"
        viewBox="0 0 576 512"
      >
        <path
          d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"
        ></path>
      </svg>
    </div>

    <!-- footer -->
    <div class="portfolio-item__footer">
      <p>
        {{ title }}
      </p>
    </div>
  </div>

  <!-- modal container -->
  <div class="modal-container">
    <!-- portfolio modal -->
    <div class="portfolio-modal">
      <!-- header -->
      <div class="portfolio-modal__header">
        <h1>
          {{ title }}
        </h1>
        <div class="portfolio-modal__header__nextPrev">
          <svg
            v-on:click="prevProject(id)"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="caret-left"
            role="img"
            viewBox="0 0 192 512"
          >
            <path
              d="M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z"
            ></path>
          </svg>
          <svg
            v-on:click="nextProject(id)"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="caret-right"
            role="img"
            viewBox="0 0 192 512"
          >
            <path
              d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
            ></path>
          </svg>
        </div>
        <svg
          v-on:click="closeModal(id)"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="times"
          role="img"
          viewBox="0 0 352 512"
        >
          <path
            d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
          ></path>
        </svg>
      </div>
      <!-- content -->
      <div class="portfolio-modal__content">
        <!-- left -->
        <div class="portfolio-modal__content__left">
          <img :src="getAssetPath(img)" alt="" />
        </div>
        <!-- right -->
        <div class="portfolio-modal__content__right">
          <div class="portfolio-modal__content__right__description">
            <h2>
              Description
            </h2>
            <p>
              {{ description }}
            </p>
          </div>
          <div class="portfolio-modal__content__right__technologies">
            <h2>
              Technologies
            </h2>
            <img
              v-if="technologies.HTMLCSS"
              :src="getAssetPathSkill('HTMLCSS_icon.png')"
              title="HTML5/CSS3"
              alt="HTML/CSS icon"
            />
            <img
              v-if="technologies.VUEJS"
              :src="getAssetPathSkill('VUEJS_icon.png')"
              title="Vue.js"
              alt="Vue.js icon"
            />
            <img
              v-if="technologies.JS"
              :src="getAssetPathSkill('JS_icon.png')"
              title="Javascript"
              alt="Javascript icon"
            />
            <img
              v-if="technologies.BOOTSTRAP"
              :src="getAssetPathSkill('BOOTSTRAP_icon.png')"
              title="Bootstrap"
              alt="Bootstrap icon"
            />
            <img
              v-if="technologies.MONGODB"
              :src="getAssetPathSkill('MONGODB_icon.png')"
              title="MongoDB"
              alt="MongoDB icon"
            />
            <img
              v-if="technologies.MONGOOSEJS"
              :src="getAssetPathSkill('MONGOOSEJS.png')"
              title="Mongoose.js"
              alt="Mongoose.js icon"
            />
            <img
              v-if="technologies.MYSQL"
              :src="getAssetPathSkill('MYSQL_icon.png')"
              title="MySQL"
              alt="MySQL icon"
            />
            <img
              v-if="technologies.NODEJS"
              :src="getAssetPathSkill('NODEJS_icon.png')"
              title="NodeJS"
              alt="NodeJS icon"
            />
            <img
              v-if="technologies.SASS"
              :src="getAssetPathSkill('SASS_icon.png')"
              title="Sass"
              alt="Sass icon"
            />
            <img
              v-if="technologies.EXPRESSJS"
              :src="getAssetPathSkill('EXPRESSJS_icon.png')"
              title="Express.js"
              alt="Express.js icon"
            />
          </div>
          <div class="portfolio-modal__content__right__informations">
            <a
              v-if="githubUrl"
              target="_blank"
              rel="noreferrer"
              :href="githubUrl"
            >
              <svg
                id=""
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="github"
                role="img"
                viewBox="0 0 496 512"
              >
                <path
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                ></path>
              </svg>
            </a>
            <a v-if="siteUrl" target="_blank" rel="noreferrer" :href="siteUrl">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="hand-point-right"
                role="img"
                viewBox="0 0 512 512"
              >
                <path
                  d="M428.8 137.6h-86.177a115.52 115.52 0 0 0 2.176-22.4c0-47.914-35.072-83.2-92-83.2-45.314 0-57.002 48.537-75.707 78.784-7.735 12.413-16.994 23.317-25.851 33.253l-.131.146-.129.148C135.662 161.807 127.764 168 120.8 168h-2.679c-5.747-4.952-13.536-8-22.12-8H32c-17.673 0-32 12.894-32 28.8v230.4C0 435.106 14.327 448 32 448h64c8.584 0 16.373-3.048 22.12-8h2.679c28.688 0 67.137 40 127.2 40h21.299c62.542 0 98.8-38.658 99.94-91.145 12.482-17.813 18.491-40.785 15.985-62.791A93.148 93.148 0 0 0 393.152 304H428.8c45.435 0 83.2-37.584 83.2-83.2 0-45.099-38.101-83.2-83.2-83.2zm0 118.4h-91.026c12.837 14.669 14.415 42.825-4.95 61.05 11.227 19.646 1.687 45.624-12.925 53.625 6.524 39.128-10.076 61.325-50.6 61.325H248c-45.491 0-77.21-35.913-120-39.676V215.571c25.239-2.964 42.966-21.222 59.075-39.596 11.275-12.65 21.725-25.3 30.799-39.875C232.355 112.712 244.006 80 252.8 80c23.375 0 44 8.8 44 35.2 0 35.2-26.4 53.075-26.4 70.4h158.4c18.425 0 35.2 16.5 35.2 35.2 0 18.975-16.225 35.2-35.2 35.2zM88 384c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "portfolioItem",
  mounted() {
    let itemId = this.id;
    let itemTitle = this.title;

    setPortfolioImg();
    pushModalImg();

    // push img's in modal
    function pushModalImg() {
      for (let i = 1; i < 99; i++) {
        try {
          let imgContainer = document.querySelectorAll(
            ".portfolio_img-container"
          )[itemId];
          let imgElement = document.createElement("img");

          imgElement.src = require(`@/assets/Portfolio/${itemTitle}/img-${i}.png`);
          imgElement.style.width = "100%";
          imgElement.style.objectFit = "contain";

          imgContainer.appendChild(imgElement);
          if (i > 1) {
            imgElement.style.display = "none";
          }
        } catch {
          i = 999;
        }
      }
    }

    // define the portfolio img
    function setPortfolioImg() {
      let imgContainer = document.querySelectorAll(".portfolio-item")[itemId];
      imgContainer.style.backgroundImage =
        "url(" + require(`@/assets/Portfolio/${itemTitle}/img-intro.png`) + ")";
    }
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    technologies: {
      type: Object,
      required: true
    },
    githubUrl: {
      type: String
    },
    siteUrl: {
      type: String
    }
  },
  data() {
    return {
      indexCurrentImg: 0
    };
  },
  methods: {
    // get asset path on skill folder
    getAssetPathSkill: function(icon) {
      return require(`@/assets/Skill/${icon}`);
    },
    // get asset path on portfolio folder
    getAssetPathPortfolio: function(icon) {
      return require(`@/assets/Portfolio/${icon}`);
    },
    // display modal
    displayModal: function(prevNextItemId) {
      let itemId;

      if (prevNextItemId == undefined) {
        itemId = this.id;
      } else {
        itemId = prevNextItemId;
      }

      let modalContainer = document.querySelectorAll(".modal-container")[
        itemId
      ];
      let portfolioModal = document.querySelectorAll(".portfolio-modal")[itemId]
        .style;

      modalContainer.style.setProperty("display", "flex");
      setTimeout(() => {
        portfolioModal.setProperty("margin-top", "-8em");
      }, 150);
    },
    // close modal
    closeModal: function() {
      let itemId = this.id;

      let modalContainer = document.querySelectorAll(".modal-container")[
        itemId
      ];
      let portfolioModal = document.querySelectorAll(".portfolio-modal")[itemId]
        .style;

      portfolioModal.setProperty("margin-top", "110em");
      setTimeout(() => {
        modalContainer.style.setProperty("display", "none");
      }, 300);
    },
    // next project
    nextProject(projectId) {
      // substracted 1 on maxItems since the indexes of portfolio items start at 0
      const maxItems = document.querySelectorAll(".portfolio-item").length - 1;

      this.closeModal(projectId);
      setTimeout(() => {
        if (projectId == maxItems) {
          this.displayModal(0);
        } else {
          this.displayModal(projectId + 1);
        }
      }, 300);
    },
    // prev project
    prevProject(projectId) {
      // substracted 1 on maxItems since the indexes of portfolio items start at 0
      const maxItems = document.querySelectorAll(".portfolio-item").length - 1;

      this.closeModal(projectId);
      setTimeout(() => {
        if (projectId === 0) {
          this.displayModal(maxItems);
        } else {
          this.displayModal(projectId - 1);
        }
      }, 300);
    }
  }
};
</script>

<style scoped lang="scss">
// portfolio item
.portfolio-item {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 310px;
  width: 290px;
  margin: 13px 20px;
  border: 1px solid rgb(148, 61, 199);
  background-size: cover;

  &:hover {
    cursor: pointer;
    ::before {
      width: 100%;
      background-color: rgba(0, 0, 0, 0.07);
    }
    svg {
      opacity: 100%;
    }
  }
  ::before {
    transition: all 350ms ease-in-out;
    width: 0;
    position: absolute;
    content: "";
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
  }

  // content
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    svg {
      transition: all 250ms ease-in-out;
      width: 30px;
      opacity: 0;
    }
  }

  // footer
  &__footer {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    justify-content: space-between;
    width: 100%;
    background-color: rgba(158, 67, 211, 0.9);
    p {
      color: rgb(255, 255, 255);
      font-size: 1em;
    }
  }
}

// modal container
.modal-container {
  display: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 9999;
  transition: all 1s ease-in-out;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.35);
}

// portfolio modal
.portfolio-modal {
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 44%;
  padding: 7px;
  border-bottom: 5px solid rgb(138, 50, 209);
  transition: all 300ms ease-in-out;
  margin-top: 110em;

  // header
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    letter-spacing: 1px;
    margin-bottom: 7px;
    padding: 4px 10px;
    background-color: rgb(166, 55, 230);
    color: white;

    h1 {
      font-size: 1.15em;
    }
    svg {
      width: 15px;
      fill: rgb(255, 255, 255);
      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }

    &__nextPrev {
      display: flex;

      svg {
        width: 10px;
        margin: 0 5px;
      }
    }
  }

  // content
  &__content {
    display: flex;
    // left
    &__left {
      width: 60%;
      img {
        width: 100%;
      }
    }
    // right
    &__right {
      width: 40%;
      padding: 0 10px;
      h2 {
        font-size: 1.17em;
        border-bottom: 1px solid rgba(0, 0, 0, 0.5);
        padding-top: 7px;
        padding-bottom: 3px;
        margin-bottom: 5px;
      }
      div {
        line-height: 25px;
      }
      &__description {
        height: 50%;
      }
      &__technologies {
        height: 40%;
        img {
          margin: 5px 8px;
        }
      }
      &__informations {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        height: 10%;
        svg {
          fill: rgb(132, 43, 233);
          width: 27px;
          margin-left: 10px;
          &:hover {
            transition: all 200ms ease-in-out;
            opacity: 0.8;
          }
        }
      }
    }
  }
}
</style>
