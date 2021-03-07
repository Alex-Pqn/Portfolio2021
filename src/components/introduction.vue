<template>
  <!-- introduction container -->
  <section class="introduction-container">
    <!-- square rotations : background animation -->
    <ul class="background-animation">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>

    <!-- top -->
    <div class="introduction-container__top"></div>

    <!-- middle -->
    <div class="introduction-container__middle">
      <!-- typed : main animation -->
      <div class="main-animation">
        <!-- geometric shapes -->
        <div class="main-animation__shape-message">
          <!-- typed text -->
          <div class="main-animation__text">
            <h1 id="typed_h1"></h1>
            <h2 id="typed_h2"></h2>
            <h3 id="typed_h3"></h3>
            <h4 id="typed_h4"></h4>
          </div>
        </div>
      </div>
      <!-- dev typed text on left -->
      <h5 id="typed_h5"></h5>
    </div>

    <!-- bottom -->
    <div class="introduction-container__bottom">
      <!-- redirect about -->
      <div class="redirect-about">
        <p>
          <a rel="noreferrer" href="#about">
            Laissez-moi
          </a>
          me présenter
        </p>
        <a rel="noreferrer" href="#about">
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
    // typed js
    new Typed("#typed_h1", {
      strings: ["Bonjour,"],
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
      strings: ["Alexandre"],
      typeSpeed: 60,
      startDelay: 2150,
      showCursor: false
    });

    new Typed("#typed_h4", {
      strings: ["Paquien"],
      typeSpeed: 60,
      startDelay: 3050,
      showCursor: false
    });
    new Typed("#typed_h5", {
      strings: ["Développeur Web Junior"],
      typeSpeed: 40,
      startDelay: 8000,
      showCursor: false
    });
  }
};
</script>

<style scoped lang="scss">
@keyframes borderFade {
  from {
    border: 2px solid rgba(255, 255, 255, 0);
  }
  to {
    border: 2px solid $border_shape_message_introduction;
  }
}
@keyframes backgroundFade {
  from {
  }
  to {
    background-color: $border_shape_message_introduction;
  }
}
@keyframes heightFade {
  from {
    height: 0;
  }
  to {
    height: 95%;
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
@keyframes gradientBackground {
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

// introduction container
.introduction-container {
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    132deg,
    rgb(255, 255, 255),
    rgb(255, 255, 255),
    rgb(223, 206, 224)
  );
  background-size: 400% 400%;
  animation: gradientBackground 10s ease infinite;
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0px;

  // top
  &__top {
    height: 7%;
    width: 100%;
  }

  // middle
  &__middle {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 81%;
    width: 100%;
    // dev typed text on left
    h5 {
      position: absolute;
      z-index: 999;
      left: 0;
      font-size: 1.3em;
      letter-spacing: 2px;
      padding-left: 1px;
      border-left: 2px solid rgb(148, 78, 175);
      color: rgb(148, 78, 175);
      writing-mode: vertical-rl;
    }
  }

  // bottom
  &__bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 12%;
    width: 100%;
  }
}

// main animation
::v-deep.main-animation {
  display: flex;
  justify-content: center;
  align-items: center;

  // text
  &__text {
    position: absolute;
    z-index: 5;
    font-family: "Amatic SC", cursive;
    letter-spacing: 10px;
    width: 100%;
    color: rgb(169, 90, 201);

    h1,
    h2,
    h3 {
      text-align: center;
    }

    h1 {
      font-size: 6em;
    }
    h2 {
      line-height: 85px;
      font-size: 4.9em;
    }
    h3 {
      font-size: 4.7em;
    }
    h4 {
      position: absolute;
      writing-mode: vertical-lr;
      opacity: 0.5;
      font-size: 2em;
      right: 0;
      bottom: 5px;
    }
  }

  // geometric shapes
  &__shape-message {
    position: relative;
    width: 370px;
    height: 450px;
    animation: backgroundFade 16s, borderFade 35s;
    animation-fill-mode: forwards;
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 75%,
      43% 76%,
      25% 100%,
      17% 75%,
      0% 75%
    );
    &:before {
      content: "";
      display: block;
      position: absolute;
      background-color: rgb(250, 250, 250);
      width: 366px;
      z-index: 5;
      animation: heightFade 2.5s;
      animation-fill-mode: forwards;
      animation-delay: 4.2s;
      clip-path: polygon(
        0% 0%,
        100% 0%,
        100% 75%,
        43% 76%,
        25% 100%,
        17% 75%,
        0% 75%
      );
    }
  }
}

// redirect about
.redirect-about {
  text-align: center;
  opacity: 0;
  font-size: 1.2em;
  animation: opacityFade 1.5s;
  animation-fill-mode: forwards;
  animation-delay: 6.2s;

  p {
    color: rgb(88, 88, 88);
    a {
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

// background animation
@keyframes squareRotations {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }
  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}

.background-animation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: 0;
  animation: opacityFade;
  animation-fill-mode: forwards;
  animation-duration: 4s;
  animation-delay: 5.5s;
  li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    animation: squareRotations 20s linear infinite;
    bottom: -150px;
  }
}
.background-animation li:nth-child(1) {
  background: rgba(167, 53, 202, 0.3);
  left: 20%;
  width: 80px;
  height: 80px;
}
.background-animation li:nth-child(2) {
  background: rgba(143, 59, 168, 0.2);
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 3s;
  animation-duration: 12s;
}
.background-animation li:nth-child(3) {
  background: rgba(175, 61, 209, 0.3);
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 7s;
}
.background-animation li:nth-child(4) {
  background: rgba(169, 69, 199, 0.2);
  left: 27%;
  width: 60px;
  height: 60px;
  animation-delay: 2s;
  animation-duration: 24s;
}
.background-animation li:nth-child(5) {
  background: rgba(146, 56, 173, 0.1);
  left: 65%;
  width: 20px;
  height: 20px;
}
.background-animation li:nth-child(6) {
  background: rgba(167, 69, 197, 0.25);
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 4s;
}
.background-animation li:nth-child(7) {
  background: rgba(160, 62, 190, 0.2);
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 8s;
}
.background-animation li:nth-child(8) {
  background: rgba(172, 56, 207, 0.3);
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 16s;
  animation-duration: 45s;
}
.background-animation li:nth-child(9) {
  background: rgba(152, 61, 180, 0.4);
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 3s;
  animation-duration: 35s;
}
.background-animation li:nth-child(10) {
  background: rgba(185, 82, 216, 0.2);
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 1s;
  animation-duration: 14s;
}
.background-animation li:nth-child(11) {
  background: rgba(158, 55, 189, 0.2);
  left: 85%;
  width: 80px;
  height: 80px;
  animation-delay: 20s;
  animation-duration: 14s;
}
.background-animation li:nth-child(12) {
  background: rgba(135, 50, 161, 0.4);
  left: 55%;
  width: 30px;
  height: 30px;
  animation-delay: 11s;
  animation-duration: 35s;
}
.background-animation li:nth-child(13) {
  background: rgba(135, 55, 160, 0.2);
  left: 15%;
  width: 65px;
  height: 65px;
  animation-delay: 4s;
}
.background-animation li:nth-child(14) {
  background: rgba(160, 59, 190, 0.1);
  left: 65%;
  width: 15px;
  height: 15px;
  animation-delay: 7s;
}
</style>
