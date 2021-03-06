<template>
  <!-- cv -->
  <section class="cv" id="cv">
    <video autoplay loop muted>
      <source src="@/assets/drone_hobbie-video.mp4" type="video/mp4" />
    </video>

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
