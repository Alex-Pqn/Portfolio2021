<template>
  <!-- introduction container -->
  <section class="introduction-container">
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>

    <!-- top -->
    <div class="introduction-container__top"></div>

    <!-- mid -->
    <div class="introduction-container__mid">
      <!-- main animation -->
      <div class="main-animation">
        <!-- text -->
        <div class="main-animation__text">
          <h1 id="typed_h1"></h1>
          <h2 id="typed_h2"></h2>
          <h3 id="typed_h3"></h3>
          <h4 id="typed_h4"></h4>
        </div>
        <!-- geometric shapes -->
        <div class="main-animation__shape-message"></div>
      </div>
    </div>

    <!-- bot -->
    <div class="introduction-container__bot">
      <!-- redirect about -->
      <div class="redirect-about">
        <p>
          <a href="#about">
            <span>
              Laissez-moi
            </span>
          </a>
          me présenter
        </p>
        <a href="#about">
          <svg viewBox="0 0 512 512">
            <path
              fill="currentColor"
              d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm-32-316v116h-67c-10.7 0-16 12.9-8.5 20.5l99 99c4.7 4.7 12.3 4.7 17 0l99-99c7.6-7.6 2.2-20.5-8.5-20.5h-67V140c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import Typed from "typed.js";

export default {
  name: "introduction",
  mounted() {
    new Typed("#typed_h1", {
      strings: ['<span>"</span>Bonjour,'],
      typeSpeed: 70,
      showCursor: false
    });

    new Typed("#typed_h2", {
      strings: ["Je suis"],
      typeSpeed: 80,
      startDelay: 1400,
      showCursor: false
    });

    new Typed("#typed_h3", {
      strings: ['Alexandre Paquien<span>"</span>'],
      typeSpeed: 60,
      startDelay: 2150,
      showCursor: false
    });

    new Typed("#typed_h4", {
      strings: ["<span>Dév</span>eloppeur Web Junior"],
      typeSpeed: 40,
      startDelay: 4075,
      showCursor: false
    });
  }
};
</script>

<style scoped lang="scss">
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
    height: 96%;
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

@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes cube {
  from {
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    opacity: 1;
  }
  to {
    transform: scale(20) rotate(960deg) translate(-50%, -50%);
    opacity: 0;
  }
}

// introduction container
.introduction-container {
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    132deg,
    rgb(255, 255, 255),
    rgb(232, 222, 233),
    rgb(225, 209, 226)
  );
  background-size: 400% 400%;
  animation: Gradient 15s ease infinite;
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0px;

  // top
  &__top {
    height: 10%;
    width: 100%;
  }

  // mid
  &__mid {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75%;
    width: 100%;
  }

  // bot
  &__bot {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 15%;
    width: 100%;
  }
}

.cube {
  position: absolute;
  top: 80vh;
  left: 45vw;
  width: 10px;
  height: 10px;
  border: solid 1px #a240af;
  transform-origin: top left;
  transform: scale(0) rotate(0deg) translate(-50%, -50%);
  animation: cube 12s ease-in forwards infinite;
}
.cube:nth-child(1) {
  animation-delay: 7s;
}
.cube:nth-child(2) {
  animation-delay: 7s;
  left: 25vw;
  top: 40vh;
}
.cube:nth-child(3) {
  border-color: #fff;
  animation-delay: 7s;
  left: 85vw;
  top: 40vh;
}
.cube:nth-child(4) {
  animation-delay: 9s;
  left: 92vw;
  top: 10vh;
}
.cube:nth-child(5) {
  border-color: #fff;
  animation-delay: 11s;
  left: 10vw;
  top: 85vh;
}
.cube:nth-child(6) {
  border: solid 1px #a240af;
  animation-delay: 13s;
  left: 50vw;
  top: 10vh;
}

// main animation
::v-deep.main-animation {
  display: flex;
  justify-content: center;
  align-items: center;

  // text
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
      animation-delay: 13s;
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

  // geometric shapes
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
    background-color: $border_shape_message_introduction;
    border: 2px solid $border_shape_message_introduction;
    position: relative;
    opacity: 0;
    animation: opacityFade 9s;
    animation-fill-mode: forwards;
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
      background-color: white;
      display: block;
      position: absolute;
      animation: heightFade 2.5s;
      animation-fill-mode: forwards;
      animation-delay: 6.8s;
    }
  }
}

// redirect about
.redirect-about {
  text-align: center;
  font-size: 1.2em;
  margin-bottom: 15px;
  opacity: 0;
  animation: opacityFade 1.5s;
  animation-fill-mode: forwards;
  animation-delay: 8.15s;

  p {
    color: rgb(88, 88, 88);
    span {
      border-bottom: 1px solid rgb(119, 119, 119);
      color: rgb(68, 68, 68);
    }
  }
  svg {
    margin-top: 10px;
    width: 30px;
    color: rgb(141, 60, 207);
  }
}
</style>
