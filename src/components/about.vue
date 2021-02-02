<template>
  <section id="about" class="about-container">
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
        <p>
          Diplômé il y a quelques mois, je m'efforce de me spécialier dans les
          technologies et frameworks du front-end.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "about"
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap");

// about container
.about-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 25px;
  background-image: radial-gradient(
      circle at 28% 63%,
      rgba(170, 90, 201, 0.267) 0%,
      rgba(179, 102, 209, 0.123) 16%,
      transparent 16%,
      transparent 100%
    ),
    radial-gradient(
      circle at 81% 56%,
      rgba(153, 50, 194, 0.116) 0%,
      rgba(158, 37, 206, 0.116) 12%,
      transparent 12%,
      transparent 100%
    ),
    radial-gradient(
      circle at 26% 48%,
      rgba(191, 128, 216, 0.322) 0%,
      rgba(196, 126, 223, 0.171) 6%,
      transparent 6%,
      transparent 100%
    ),
    radial-gradient(
      circle at 97% 17%,
      rgba(185, 185, 185, 0.03) 0%,
      rgba(180, 180, 180, 0.03) 56%,
      transparent 56%,
      transparent 100%
    ),
    radial-gradient(
      circle at 50% 100%,
      rgba(218, 147, 247, 0.205) 0%,
      rgba(199, 118, 231, 0.11) 36%,
      transparent 36%,
      transparent 100%
    ),
    radial-gradient(
      circle at 55% 52%,
      rgba(170, 90, 201, 0.219) 0%,
      rgba(156, 79, 187, 0.212) 6%,
      transparent 6%,
      transparent 100%
    ),
    linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 255, 255));
}

// profile pic
.profile-pic {
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  img {
    height: 585px;
  }
}

// presentation
.presentation {
  position: relative;
  width: 25%;
  padding-left: 50px;

  // text
  &__text {
    font-family: "Noto Sans JP", sans-serif;
    padding: 3px 6px 3px 17px;
    background-color: rgba(190, 121, 218, 0.15);
    border-radius: 0.5em;
    p {
      line-height: 50px;
      margin: 7px 0;
      font-size: 1.9em;
      font-family: "Yantramanav", sans-serif;
      color: rgba(62, 0, 112, 0.8);
      span {
        font-size: 1.5em;
      }
    }
  }

  // quote icon
  svg {
    position: absolute;
    fill: rgba(190, 114, 219, 0.35);
    width: 90px;
    margin: -25px 0 0 -32px;
  }
}
</style>
