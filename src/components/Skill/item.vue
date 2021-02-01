<template>
  <div class="skill-item__top">
    <img :src="getAssetPath(icon)" alt="" />
    <p :style="`color: ${nameColor}`">
      {{ name }}
    </p>
  </div>
  <div class="skill-item__bottom">
    <div :style="`width: ${perc}%`"></div>
    <p :style="`background-color: ${percBackground}`">{{ perc }}%</p>
  </div>
</template>

<script>
export default {
  name: "skillItem",
  props: {
    icon: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    nameColor: {
      type: String,
      required: true
    },
    perc: {
      type: Number,
      required: true
    },
    percBackground: {
      type: String,
      required: true
    }
  },
  methods: {
    getAssetPath: function(icon) {
      return require(`@/assets/${icon}`);
    }
  }
};
</script>

<style scoped lang="scss">
.skill-item__top {
  display: flex;
  align-items: center;
  margin-bottom: 17px;
  img {
  }
  p {
    font-size: 1.3em;
    margin-left: 12px;
  }
}
.skill-item__bottom {
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.1);
  height: 30px;
  width: 100%;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(148, 0, 216);
    height: 30px;
  }
  p {
    text-align: center;
    font-size: 1.2em;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    padding: 0 5.5px 0 9px;
    line-height: 31px;
  }
}
</style>
