<template>
  <!-- cv -->
  <section class="cv" id="cv">
    <video autoplay loop muted>
      <source src="@/assets/drone_hobbie-video.mp4" type="video/mp4" />
    </video>

    <!-- icon -->
    <div class="cv__icon">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="far"
        data-icon="arrow-alt-circle-down"
        role="img"
        viewBox="0 0 512 512"
      >
        <path
          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm-32-316v116h-67c-10.7 0-16 12.9-8.5 20.5l99 99c4.7 4.7 12.3 4.7 17 0l99-99c7.6-7.6 2.2-20.5-8.5-20.5h-67V140c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12z"
        ></path>
      </svg>
    </div>
    <!-- title -->
    <div class="cv__title">
      <h1><span>Découvrez</span> mon Curriculum vitæ</h1>
    </div>
    <!-- download -->
    <div class="cv__download">
      <button>
        <a href="">
          Télécharger
        </a>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "cv"
};
</script>

<style lang="scss">
.cv {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  font-family: "Noto Sans KR", sans-serif;
  scroll-margin-top: 9em;
  background-color: rgba(0, 0, 0, 0.9);
  border-top: 7px solid $main-color_cv-part;
  border-bottom: 7px solid $main-color_cv-part;
  height: 700px;
  z-index: 99;

  video {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    opacity: 0.3;
  }
  // icon
  &__icon {
    width: 62px;
    z-index: 999;
    fill: $main-color_cv-part;
  }
  // title
  &__title {
    margin-bottom: 35px;
    z-index: 999;
    h1 {
      font-size: 4em;
      color: rgba(255, 255, 255, 0.87);
      & span {
        color: $main-color_cv-part;
        border-top: 8px solid $main-color_cv-part;
        border-left: 8px solid $main-color_cv-part;
        padding-left: 20px;
      }
    }
  }
  // download
  &__download {
    margin-bottom: 50px;
    z-index: 999;

    button {
      font-size: 2em;
      padding: 15px 25px;
      border-radius: 0.3em;
      cursor: pointer;
      background-color: rgba(255, 255, 255, 0.85);
      border: 3px solid rgba(255, 255, 255, 0);
      &:hover {
        transition: all 500ms ease-out;
        transform: scale(0.9);
        background-color: rgb(119, 0, 230);
        border-radius: 5em;
        border: 3px solid rgb(255, 255, 255);
        a {
          color: rgb(255, 255, 255);
        }
      }

      a {
        color: rgb(108, 0, 209);
        font-size: 0.9em;
        letter-spacing: 1.5px;
      }
    }
  }
}
</style>
