module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
        @import "@/sass/_animations.scss"; 
        @import "@/sass/_scrollbar.scss";
        @import "@/sass/_fonts.scss";
        @import "@/sass/_variables.scss";
        @import "@/sass/_mixins.scss";
        `
      }
    }
  }
};
