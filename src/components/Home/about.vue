<template>
  <section class="about-container">
    <!-- profile pic -->
    <div class="profile-pic">
      <img src="@/assets/testimg.png" alt="" />
    </div>

    <!-- presentation -->
    <div class="presentation">
      <!-- start quote icon -->
      <svg
        id="start-quote"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="quote-left"
        role="img"
        viewBox="0 0 512 512"
      >
        <path
          d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
        ></path>
      </svg>

      <!-- text -->
      <p>
        Dynamique, motivé et appliqué, je touche à l'univers du Développement
        Web depuis maintenant plus d'un an.
      </p>
      <p>
        Diplômé il y a quelques mois, je m'efforce de me spécialier dans les
        technologies et frameworks du front-end.
      </p>

      <!-- end quote icon -->
      <svg
        id="end-quote"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="quote-right"
        role="img"
        viewBox="0 0 512 512"
      >
        <path
          d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"
        ></path>
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  name: "about"
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap");

// about container
.about-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $background_about-part;
  padding: 35px 0;
}

// profile pic
.profile-pic {
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  img {
    height: 550px;
  }
}

// presentation
.presentation {
  position: relative;
  width: 25%;
  padding-left: 50px;

  p {
    line-height: 50px;
    font-size: 2em;
    font-family: "Roboto", sans-serif;
  }

  // container quotes
  svg {
    position: absolute;
    fill: rgba(134, 0, 0, 0.2);
    width: 75px;
  }
  // start quote
  #start-quote {
    margin: -20px 0 0 -30px;
  }
  // end quote
  #end-quote {
    right: 35px;
    margin-top: -50px;
  }
}
</style>
