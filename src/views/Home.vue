<template>
  <!-- header -->
  <header>
    <p>
      <a href="">
        ALEXANDRE
        <br />
        PAQUIEN<span>.fr</span>
      </a>
    </p>
    <!-- nav -->
    <nav>
      <ul>
        <li>
          <a href="#about">
            À PROPOS
          </a>
        </li>
        <li>
          <a href="">
            PROJETS
          </a>
        </li>
        <li>
          <a href="">
            C.V
          </a>
        </li>
        <li>
          <a href="">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  </header>
  <!-- presentation part -->
  <presentationComponent />
</template>

<script>
import presentationComponent from "@/components/Home/presentation.vue";

export default {
  name: "Home",
  components: {
    presentationComponent
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap");

// header
header {
  display: flex;
  position: fixed;
  z-index: 999;
  width: 100%;
  p {
    display: flex;
    text-align: start;
    width: 50%;
    margin: 30px 0 0 35px;
    letter-spacing: 3px;
    font-size: 1.25em;
    a {
      padding: 7px 10px;
      line-height: 28px;
    }
  }
  // nav
  nav {
    display: flex;
    justify-content: flex-end;
    font-family: "Amatic SC", cursive;
    width: 50%;
    ul {
      display: flex;
      margin: 40px 120px 0 0;
      li {
        margin-right: 23px;
        font-size: 1.45em;
        letter-spacing: 1px;
        a {
          padding-bottom: 5px;
        }
      }
    }
  }
}
</style>
