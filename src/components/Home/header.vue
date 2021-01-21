<template>
  <!-- header -->
  <header
    :style="{
      '--background-color': backgroundColor,
      '--position': position,
      '--opacity': opacity,
      '--width': width,
      '--text-color': textColor,
      '--text-span-color': textSpanColor
    }"
  >
    <!-- credit -->
    <p>
      <span> </span>
    </p>
    <!-- nav -->
    <nav>
      <ul>
        <li>
          <a href="technologie"> <span>à</span> propos </a>
        </li>
        <li>
          <a href=""> <span>P</span>ortfolio </a>
        </li>
        <li>
          <a href=""> <span>F</span>ormation </a>
        </li>
        <li>
          <a href="">
            <span>CV</span>
          </a>
        </li>
        <li>
          <a href=""> <span>C</span>ontact </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "header",
  props: {
    backgroundColor: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    opacity: {
      type: Number,
      required: true
    },
    width: {
      type: String,
      required: true
    },
    textColor: {
      type: String,
      required: true
    },
    textSpanColor: {
      type: String
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap");

// header
header {
  background-color: var(--background-color);
  display: flex;
  justify-content: center;
  top: 0;
  position: var(--position);
  text-transform: uppercase;
  padding: 12px 0;
  z-index: 999;
  width: var(--width);
  opacity: var(--opacity);
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 1.41em;
  border-bottom: 1px solid $border_header_scrollbar;
  transition-property: all;
  transition-duration: 500ms;

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
    color: var(--text-color);
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
          color: var(--text-span-color);
          font-size: 1.35em;
        }
      }
    }
  }
}
</style>
