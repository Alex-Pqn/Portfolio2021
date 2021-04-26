<template>
  <!-- about container -->
  <section id="about" class="about-container">
    <!-- hobbie video -->
    <div id="hobbie-video">
      <iframe
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        :src="ytbIframeUrl"
        frameborder="0"
      ></iframe>
    </div>

    <!-- hobbie circle : drone -->
    <div
      class="hobbie-circle"
      id="hobbie-drone"
      data-aos="fade-right"
      data-aos-duration="750"
      data-aos-delay="150"
      data-aos-offset="200"
      v-on:click="displayHobbieVideo()"
    >
      <img src="@/assets/Home/About/drone_hobbie-img-400x400.jpg" alt="" />
      <p>
        Drone
        <svg viewBox="0 0 512 512">
          <g>
            <circle cx="256" cy="379.396" r="19.429" />
            <path
              d="m512 76.533v-30h-137.714v30h53.856v48.071h-25.214v25.214h-85.571l-26.929-53.857h-68.857l-26.929 53.857h-85.571v-25.214h-25.214v-48.071h53.857v-30h-137.714v30h53.857v48.071h-25.214v40.214c0 22.21 18.005 40.214 40.214 40.214 16.906 0 31.365-10.437 37.312-25.214h54.046l19.428 38.857h152.714l19.428-38.857h54.046c5.947 14.777 20.406 25.214 37.312 25.214 22.21 0 40.214-18.004 40.214-40.214v-40.214h-25.215v-48.071z"
            />
            <path
              d="m342.072 293.325h-47.553v-44.649h-72.947v44.649h-51.643c-19.014 0-34.429 15.414-34.429 34.428v103.286c0 19.014 15.414 34.429 34.429 34.429h172.143c19.014 0 34.428-15.414 34.428-34.429v-103.286c0-19.014-15.414-34.428-34.428-34.428zm-86.072 135.5c-27.255 0-49.429-22.174-49.429-49.429s22.174-49.429 49.429-49.429 49.429 22.174 49.429 49.429-22.174 49.429-49.429 49.429z"
            />
          </g>
        </svg>
      </p>
    </div>

    <!-- hobbie circle : montage -->
    <div
      class="hobbie-circle"
      id="hobbie-montage"
      data-aos="fade-up"
      data-aos-duration="750"
      data-aos-delay="500"
      data-aos-offset="200"
      v-on:click="displayHobbieVideo()"
    >
      <img src="@/assets/Home/About/montage_hobbie-img-400x400.jpg" alt="" />
      <p>
        Montage Vidéo
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="photo-video"
          role="img"
          viewBox="0 0 640 512"
        >
          <path
            d="M608 0H160a32 32 0 0 0-32 32v96h160V64h192v320h128a32 32 0 0 0 32-32V32a32 32 0 0 0-32-32zM232 103a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm352 208a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm-168 57H32a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32zM96 224a32 32 0 1 1-32 32 32 32 0 0 1 32-32zm288 224H64v-32l64-64 32 32 128-128 96 96z"
          ></path>
        </svg>
      </p>
    </div>

    <!-- decoration circles -->
    <div
      class="hobbie-circle hobbie-video_close"
      id="deco-circle_1"
      data-aos="fade-right"
      data-aos-duration="750"
      data-aos-delay="150"
      data-aos-offset="-5"
    >
      <!-- integrate button to close youtube iframe -->
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="times"
        role="img"
        viewBox="0 0 352 512"
        v-on:click="closeHobbieVideo()"
      >
        <path
          d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
        ></path>
      </svg>
    </div>
    <div class="hobbie-circle" id="deco-circle_2"></div>
    <div
      class="hobbie-circle"
      id="deco-circle_3"
      data-aos="fade-right"
      data-aos-duration="750"
      data-aos-delay="300"
    ></div>

    <!-- profile pic -->
    <!-- <div class="profile-pic">
      <img
        src="@/assets/Home/About/testimg.png"
        alt=""
        data-aos="fade-up-left"
        data-aos-duration="600"
        data-aos-offset="300"
      />
    </div> -->

    <!-- presentation -->
    <div class="presentation">
      <!-- quote icon -->
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="quote-left"
        role="img"
        viewBox="0 0 512 512"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-offset="1250"
      >
        <path
          d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
        ></path>
      </svg>

      <!-- text -->
      <div
        class="presentation__text"
        data-aos="fade-right"
        data-aos-duration="600"
        data-aos-offset="300"
        data-aos-delay="150"
      >
        <p>
          <span>D</span>ynamique, motivé et appliqué, je touche à l'univers du
          Développement Web depuis maintenant plus d'un an.
        </p>
        <span>
          <p>
            Diplômé il y a quelques mois, je m'efforce de me spécialiser dans
            les technologies et frameworks du front-end.
          </p>
        </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      ytbIframeUrl:
        "https://www.youtube-nocookie.com/embed/UrVLw8n9f2Q?vq=hd1080&loop=1&modestbranding=1&showinfo=1&rel=0&iv_load_policy=3&theme=light&fs=1&color=white"
    };
  },
  methods: {
    displayHobbieVideo: function() {
      const ytbIframeContainer = document.querySelector("#hobbie-video iframe");
      ytbIframeContainer.src = `${this.ytbIframeUrl}&autoplay=1`;

      document.getElementById("hobbie-video").style.width = "100%";
      document.querySelector(".hobbie-video_close svg").style.opacity = "1";
      ytbIframeContainer.style.opacity = "1";
    },
    closeHobbieVideo: function() {
      const ytbIframeContainer = document.querySelector("#hobbie-video iframe");

      ytbIframeContainer.style.opacity = "0";
      document.querySelector(".hobbie-video_close svg").style.opacity = "0";
      setTimeout(() => {
        document.getElementById("hobbie-video").style.width = "0";
      }, 500);

      ytbIframeContainer.src = `${this.ytbIframeUrl}`;
    }
  }
};
</script>

<style scoped lang="scss">
// about container
.about-container {
  display: flex;
  justify-content: center;
  position: relative;
  scroll-margin-top: 9.7rem;
}

// profile pic
.profile-pic {
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  padding-right: 40px;
  img {
    height: 700px;
  }
  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    padding-right: 20px;
    img {
      height: 730px;
    }
  }
}

// presentation
.presentation {
  position: relative;
  align-self: center;
  width: 25%;
  padding-left: 30px;
  padding-bottom: 45px;
  padding-top: 40px;
  @media screen and (min-width: 1280px) and (max-width: 1439px) {
    width: 37%;
    padding-left: 25px;
    padding-bottom: 55px;
  }
  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    width: 50%;
    padding-left: 15px;
    padding-bottom: 50px;
  }

  // text
  &__text {
    p {
      line-height: 48px;
      letter-spacing: 1px;
      margin: 20px 0;
      font-size: 2.05em;
      color: rgb(154, 65, 172);
      span {
        font-size: 1.85em;
      }
    }
    @media screen and (min-width: 1440px) and (max-width: 1900px) {
      p {
        line-height: 45px;
        margin: 35px 0;
      }
    }
    @media screen and (min-width: 1280px) and (max-width: 1439px) {
      p {
        letter-spacing: 0.8px;
        margin: 17px 0;
        span {
          font-size: 1.85em;
        }
      }
    }

    span p {
      color: rgb(110, 50, 122);
      border-left: 5px solid rgb(110, 50, 122);
      padding-left: 13px;
    }
  }

  // quote icon
  svg {
    position: absolute;
    fill: rgba(199, 116, 231, 0.17);
    width: 90px;
    margin: -15px 0 0 -23px;
  }
}

// hobbie video container
#hobbie-video {
  height: 100%;
  width: 0;
  z-index: 999;
  position: absolute;
  border-top: 10px solid rgb(159, 95, 196);
  iframe {
    transition: all 750ms ease-in-out;
    height: 100%;
    width: 100%;
    opacity: 0.5;
  }
}
// hobbie video close
.hobbie-video_close {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  svg {
    margin-top: 28px;
    width: 50px;
    fill: #5d355f;
    opacity: 0;
    transition: opacity 150ms ease-in-out, height 1s ease-in-out;
    &:hover {
      transition: all 0.5s ease-in-out;
      transform: rotate(180deg) scale(0.8);
      fill: rgb(148, 30, 30);
      cursor: pointer;
    }
    @media screen and (min-width: 1280px) and (max-width: 1439px) {
      margin-top: 22px;
      width: 40px;
    }
    @media screen and (min-width: 1024px) and (max-width: 1279px) {
      margin-top: 19px;
      width: 38px;
    }
  }
}

// hobbies circles (position absolute)
.hobbie-circle {
  position: absolute;
  border-radius: 50%;
  text-align: center;
  background-color: black;
  z-index: 99;

  &:hover {
    img {
      transition: all 250ms ease-in-out;
      opacity: 0.5;
    }
    p {
      transition: all 500ms ease-in-out;
      opacity: 1;
    }
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  p {
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    opacity: 0;
    right: 0;
    left: 0;
    color: white;
    svg {
      fill: white;
    }
  }
}

// hobbie circle : drone
#hobbie-drone {
  border: 15px solid #8b588e;
  height: 400px;
  width: 400px;
  left: -75px;
  bottom: -120px;
  cursor: pointer;
  p {
    font-size: 2em;
    line-height: 50px;
    top: 23%;
    svg {
      height: 50px;
      width: 50px;
    }
  }
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    height: 340px;
    width: 340px;
  }
  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    left: -75px;
    bottom: -120px;
    p {
      top: 15.5%;
    }
  }
}
// hobbie circle : montage video
#hobbie-montage {
  border: 20px solid #89538a;
  height: 275px;
  width: 275px;
  right: 130px;
  bottom: -110px;
  cursor: pointer;
  p {
    font-size: 1.5em;
    line-height: 45px;
    top: 17%;
    svg {
      height: 35px;
      width: 35px;
    }
  }
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    height: 245px;
    width: 245px;
    right: 90px;
  }
  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    height: 240px;
    width: 240px;
    right: 40px;
    bottom: -110px;
    p {
      font-size: 1.27em;
      top: 15%;
      line-height: 37px;
      svg {
        height: 27px;
        width: 27px;
      }
    }
  }
}
// decoration circles
#deco-circle_1 {
  background-color: #734a75;
  height: 245px;
  width: 260px;
  left: 190px;
  bottom: -125px;
  z-index: 999;
  @media screen and (min-width: 1280px) and (max-width: 1439px) {
    height: 215px;
    width: 220px;
    left: 150px;
  }
  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    height: 210px;
    width: 200px;
    left: 130px;
  }
}
#deco-circle_2 {
  background-color: rgb(132, 81, 134);
  height: 110px;
  width: 110px;
  left: 0;
  right: 0;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  bottom: -68px;
  z-index: 999;
}
#deco-circle_3 {
  background-color: rgb(138, 83, 139);
  height: 185px;
  width: 185px;
  right: 340px;
  bottom: -90px;
  @media screen and (min-width: 1280px) and (max-width: 1439px) {
    height: 160px;
    width: 160px;
    right: 265px;
  }
  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    height: 170px;
    width: 170px;
    right: 200px;
  }
}
</style>
