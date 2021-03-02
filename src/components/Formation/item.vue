<template>
  <div class="formation-item" :id="`formation-container-${id}`">
    <div class="formation-item__content" :id="`formation-content-${id}`">
      <div class="formation-item__content__date">
        <h2>
          {{ date }}
        </h2>
      </div>
      <div class="formation-item__content__name">
        <h3>
          {{ name }}
        </h3>
      </div>
      <div class="formation-item__content__description">
        <p>
          {{ description }}
        </p>
      </div>
    </div>
    <div class="formation-item__img">
      <img :src="getAssetPath(img)" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "formationItem",
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    }
  },
  mounted() {
    let itemId = this.id;

    if (!Number.isInteger(itemId / 2)) {
      let itemContainer = document.getElementById(
        `formation-container-${itemId}`
      );
      let itemContent = document.getElementById(`formation-content-${itemId}`);

      itemContent.style.textAlign = "left";
      itemContainer.style.flexDirection = "row-reverse";
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
.formation-item {
  display: flex;
  justify-content: left;
  align-items: center;
  width: 50%;
  margin-bottom: 50px;

  &__content {
    width: 37.5%;
    display: flex;
    flex-direction: column;
    text-align: right;

    h2 {
      font-size: 1.3em;
      line-height: 17px;
      color: rgba(126, 30, 155, 0.8);
    }
    h3 {
      line-height: 45px;
      font-size: 1.6em;
      color: rgb(172, 55, 207);
    }
    p {
      font-size: 1.2em;
      color: rgb(0, 0, 0);
    }
  }
  &__img {
    display: flex;
    justify-content: center;
    width: 25%;
    img {
      z-index: 9;
      width: 150px;
      border-radius: 50%;
      border: 5px solid $timeline_formation-part;
    }
  }
}
</style>
