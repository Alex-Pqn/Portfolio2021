<template>
  <!-- presentation -->
  <section class="presentation">
    <!-- container -->
    <div class="presentation__container">
      <!-- text -->
      <div class="presentation__text">
        <h1 id="typed_h1"></h1>
        <h2 id="typed_h2"></h2>
        <h3 id="typed_h3"></h3>
        <h4 id="typed_h4"></h4>
      </div>
      <!-- geometric shapes -->
      <div class="presentation__shape-message"></div>
      <div class="presentation__shape-circle">
        <div class="presentation__shape-circle__background"></div>
      </div>
    </div>
  </section>
</template>

<script>
import Typed from "typed.js";

export default {
  name: "presentation",
  mounted() {
    new Typed("#typed_h1", {
      strings: ['<span>"</span>Bonjour,'],
      typeSpeed: 100,
      showCursor: false
    });

    new Typed("#typed_h2", {
      strings: ["Je suis"],
      typeSpeed: 100,
      startDelay: 2000,
      showCursor: false
    });

    new Typed("#typed_h3", {
      strings: ['Alexandre Paquien<span>"</span>'],
      typeSpeed: 60,
      startDelay: 2900,
      showCursor: false
    });

    new Typed("#typed_h4", {
      strings: ["<span>Dév</span>eloppeur Web Junior"],
      typeSpeed: 40,
      startDelay: 4775,
      showCursor: false
    });
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap");

@keyframes widthFade {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes heightFade {
  from {
    height: 0;
  }
  to {
    height: 97%;
  }
}

@keyframes opacityFade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.typed-cursor {
  text-align: right;
}

// presentation
.presentation {
  display: flex;
  flex-direction: column;
  background-color: rgb(236, 236, 236);
  // container
  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 950px;
  }
  // geometric shapes
  &__shape-circle {
    position: absolute;
    z-index: 1;
    clip-path: circle(50% at 50% 50%);
    width: 650px;
    height: 650px;
    margin-bottom: 50px;
    &__background {
      animation: opacityFade 9s;
      height: 100%;
      animation-fill-mode: forwards;
      background-color: rgba(230, 188, 255, 0.315);
    }
  }
  &__shape-message {
    width: 370px;
    height: 450px;
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 75%,
      43% 76%,
      25% 100%,
      17% 75%,
      0% 75%
    );
    background-color: $border_shape_message_presentation;
    border: 2px solid $border_shape_message_presentation;
    position: relative;
    opacity: 0;
    animation: opacityFade 2.5s;
    animation-fill-mode: forwards;
    animation-delay: 6.4s;
    &:before {
      content: "";
      width: 366px;
      z-index: 5;
      clip-path: polygon(
        0% 0%,
        100% 0%,
        100% 75%,
        43% 76%,
        25% 100%,
        17% 75%,
        0% 75%
      );
      background-color: rgb(230, 188, 255);
      display: block;
      position: absolute;
      animation: heightFade 2.5s;
      animation-fill-mode: forwards;
      animation-delay: 8s;
    }
  }
  &__text {
    position: absolute;
    z-index: 10;
    height: 433px;
    width: 701px;
    margin-bottom: 175px;
    font-family: "Amatic SC", cursive;
    letter-spacing: 10px;
    margin-left: 10;

    h1 span,
    h3 span {
      color: rgb(102, 31, 131);
      opacity: 0;
      animation: opacityFade 2.5s;
      animation-fill-mode: forwards;
      animation-delay: 6.4s;
    }
    h1 {
      font-size: 8em;
    }
    h2 {
      text-align: center;
      line-height: 107px;
    }
    h3 {
      text-align: right;
      padding-left: 10px;
    }
    h2,
    h3 {
      font-size: 5.8em;
    }
    h1,
    h2,
    h3 {
      color: rgb(145, 64, 177);
    }
    h4 {
      text-align: right;
      font-size: 1.9em;
      padding-top: 7px;
      letter-spacing: 5px;
      color: rgb(102, 31, 131);
      & span {
        border-bottom: 2px solid rgb(107, 34, 136);
      }
    }
  }
}
</style>
