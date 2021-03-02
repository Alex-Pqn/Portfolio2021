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
          <a href="#skill"> <span>C</span>ompétences </a>
        </li>
        <li>
          <a href="#portfolio"> <span>P</span>ortfolio </a>
        </li>
        <li>
          <a href="#formation"> <span>F</span>ormation </a>
        </li>
        <li>
          <a href="#cv">
            <span>
              CV
            </span>
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
      const headerDisplayDistance = 700;
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
      }
    }
  }
}

// introduction header
#header-introduction {
  position: absolute;
  width: 100%;
  opacity: 1;
  transition-duration: 2.7s;
  border-top: 5px solid rgb(144, 62, 177);
  margin-top: -999px;
  animation: marginTop 2s;
  animation-fill-mode: forwards;
  animation-delay: 4.7s;

  // nav
  nav {
    ul li span {
      color: rgb(125, 54, 153);
      font-size: 1.36em;
    }
    a {
      color: rgb(144, 70, 173);
      &:hover {
        opacity: 0.7;
        transition-property: all;
        transition-duration: 350ms;
      }
    }
  }
}

// fixed header
#header-fixed {
  background-color: white;
  border-bottom: 1px solid $border_header_scrollbar;
  position: fixed;
  width: 60%;
  opacity: 0;
  transition-duration: 500ms;

  nav ul li {
    a {
      color: rgb(128, 128, 128);
      &:hover {
        opacity: 0.8;
        transition-property: all;
        transition-duration: 250ms;
      }
    }
    span {
      font-size: 1.1em;
    }
  }
}
</style>
