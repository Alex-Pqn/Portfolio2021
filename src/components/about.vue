<template>
  <!-- about container -->
  <section id="about" class="about-container">
    <!-- hobbie video container -->
    <video class="hobbie-video" id="hobbie-video_drone" autoplay loop muted>
      <source src="@/assets/drone_hobbie-video-1920x750.mp4" type="video/mp4" />
    </video>

    <!-- hobbie circle : drone -->
    <div
      class="hobbie-circle"
      id="hobbie-drone"
      data-aos="fade-right"
      data-aos-duration="750"
      data-aos-delay="150"
      data-aos-offset="200"
      @mouseenter="displayHobbie('hobbie-video_drone')"
      @mouseleave="closeHobbie('hobbie-video_drone')"
    >
      <video autoplay loop muted>
        <source
          src="@/assets/drone_hobbie-video-400x400.mp4"
          type="video/mp4"
        />
      </video>
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
    >
      <img src="../assets/CV.png" alt="" />
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
    <div class="hobbie-circle" id="deco-circle_1"></div>
    <div class="hobbie-circle" id="deco-circle_2"></div>
    <div
      class="hobbie-circle"
      id="deco-circle_3"
      data-aos="fade-right"
      data-aos-duration="750"
      data-aos-delay="300"
      data-aos-offset="200"
    >
      <img src="../assets/CV.png" alt="" />
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

    <!-- profile pic -->
    <div class="profile-pic">
      <img
        src="@/assets/testimg.png"
        alt=""
        data-aos="fade-up-left"
        data-aos-duration="600"
        data-aos-offset="300"
      />
    </div>

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
  methods: {
    displayHobbie: function(id) {
      document.getElementById(id).style.width = "100%";
      document.getElementById(id).style.opacity = "1";
    },
    closeHobbie: function(id) {
      document.getElementById(id).style.width = "0";
      document.getElementById(id).style.opacity = ".5";
    }
  }
};
</script>

<style scoped lang="scss">
// hobbie video container
.hobbie-video {
  height: 100%;
  width: 0;
  opacity: 0.5;
  position: absolute;
  object-fit: cover;
  transition: all 350ms ease-in-out;
  z-index: 99;
  border-top: 5px solid #a557d8;
}

// hobbies circles (position absolute)
.hobbie-circle {
  position: absolute;
  border-radius: 50%;
  text-align: center;
  background-color: black;
  cursor: pointer;

  &:hover {
    img {
      transition: all 250ms ease-in-out;
      opacity: 0.6;
    }
    p {
      display: flex !important;
    }
  }

  img {
    width: 100%;
    border-radius: 50%;
  }
  p {
    display: none !important;
    position: absolute;
    flex-direction: column;
    align-items: center;
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
  border: 20px solid #8b588e;
  height: 400px;
  width: 400px;
  left: -75px;
  bottom: -120px;
  p {
    font-size: 2em;
    line-height: 50px;
    top: 23%;
    svg {
      height: 50px;
      width: 50px;
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

  p {
    font-size: 1.5em;
    line-height: 45px;
    top: 17%;
    svg {
      height: 35px;
      width: 35px;
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
}
#deco-circle_2 {
  background-color: #89538a;
  height: 110px;
  width: 110px;
  left: 0;
  right: 0;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  bottom: -68px;
}
#deco-circle_3 {
  background-color: #734a75;
  height: 185px;
  width: 185px;
  right: 340px;
  bottom: -90px;
}
</style>
