<template>
  <!-- header -->
  <header :id="id">
    <!-- credit -->
    <p>
      <span> </span>
    </p>
    <!-- nav -->
    <nav>
      <ul>
        <li>
          <a href="#about"> <span>à</span> propos </a>
        </li>
        <li>
          <a href="#portfolio"> <span>P</span>ortfolio </a>
        </li>
        <li>
          <a href="#formation"> <span>F</span>ormation </a>
        </li>
        <li>
          <a href="#cv">
            <span>CV</span>
          </a>
        </li>
        <li>
          <a href="#contact"> <span>C</span>ontact </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "header",
  props: {
    id: {
      type: String
    }
  },
  mounted() {
    window.onscroll = function() {
      displayFixedHeader();
    };

    // fixed header
    function displayFixedHeader() {
      const headerDisplayDistance = 200;
      const headerElement = document.querySelector("#header-fixed");

      if (
        document.body.scrollTop >= headerDisplayDistance ||
        document.documentElement.scrollTop >= headerDisplayDistance
      ) {
        headerElement.style.opacity = 1;
        headerElement.style.width = "100%";
      } else {
        headerElement.style.opacity = 0;
        headerElement.style.width = "60%";
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap");

@keyframes marginTop {
  from {
    margin-top: -999px;
  }
  to {
    margin-top: 0;
  }
}

// header
header {
  display: flex;
  justify-content: center;
  top: 0;
  text-transform: uppercase;
  padding: 12px 0;
  z-index: 999;
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 1.41em;
  border-bottom: 1px solid $border_header_scrollbar;
  transition-property: all;

  // credit
  p {
    display: flex;
    letter-spacing: 2px;
    margin-left: 25px;
    width: 50%;
  }
  // nav
  nav {
    display: flex;
    justify-content: flex-end;
    margin-right: 25px;
    width: 50%;
    ul {
      display: flex;
      li {
        margin-right: 9px;
        margin-left: 9px;
        letter-spacing: 1px;
        a {
          padding-bottom: 5px;
        }
        span {
          font-size: 1.35em;
        }
      }
    }
  }
}

// presentation header
#header-presentation {
  background-color: rgb(255, 255, 255);
  position: absolute;
  width: 100%;
  opacity: 1;
  transition-duration: 2.7s;
  border-top: 5px solid rgb(102, 31, 131);
  margin-top: -999px;
  animation: marginTop 2s;
  animation-fill-mode: forwards;
  animation-delay: 7s;

  // nav
  nav {
    color: black;
    ul li span {
      color: rgb(133, 58, 163);
    }
  }
}

// fixed header
#header-fixed {
  background-color: white;
  position: fixed;
  width: 60%;
  opacity: 0;
  transition-duration: 500ms;
}
</style>
