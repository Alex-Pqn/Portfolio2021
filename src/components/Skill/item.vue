<template>
  <!-- skill item -->
  <div class="skill-item">
    <!-- top -->
    <div class="skill-item__top">
      <img :src="getAssetPath(icon)" alt="" />
      <p :style="`color: ${nameColor}`">
        {{ name }}
      </p>
    </div>

    <!-- bottom -->
    <div class="skill-item__bottom">
      <div :style="`width: ${percent}%`"></div>
      <p>{{ percent }} %</p>
    </div>
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
    percent: {
      type: Number,
      required: true
    }
  },
  methods: {
    getAssetPath: function(icon) {
      return require(`@/assets/Home/Skill/${icon}`);
    }
  }
};
</script>

<style scoped lang="scss">
// skill item
.skill-item {
  display: flex;
  flex-direction: column;
  margin: 23px 0;
  width: 680px;

  // top
  &__top {
    display: flex;
    align-items: center;
    margin-bottom: 17px;
    p {
      font-size: 1.45em;
      margin-left: 15px;
    }
  }

  // bottom
  &__bottom {
    display: flex;
    justify-content: space-between;
    background-color: white;
    height: 32px;
    width: 100%;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: $item-color_skill-part;
      height: 100%;
    }
    p {
      text-align: center;
      font-size: 1.2em;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      padding: 0 5.5px 0 9px;
      line-height: 31px;
      color: white;
      background-color: $item-color_skill-part;
    }
  }
}
</style>
