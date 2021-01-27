<template>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

html {
  scroll-behavior: smooth;
}

body {
  cursor: default;
  a {
    text-decoration: none;
    color: white;
  }
  li {
    list-style-type: none;
  }
  button,
  input[type="button"] {
    outline: none;
  }
}
</style>
