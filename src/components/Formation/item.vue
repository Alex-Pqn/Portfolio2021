<template>
  <!-- formation item -->
  <div class="formation-item">
    <!-- content -->
    <div class="formation-item__content">
      <!-- date -->
      <div class="formation-item__content__date">
        <p>
          <span>
            {{ date }}
          </span>
        </p>
      </div>
      <!-- name -->
      <div class="formation-item__content__name">
        <p>
          {{ name }}
        </p>
      </div>
      <!-- description -->
      <div class="formation-item__content__description">
        <p>
          {{ description }}
        </p>
      </div>
    </div>
    <!-- img -->
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
      let itemContainer = document.querySelectorAll(".formation-item")[itemId];
      let itemContent = itemContainer.childNodes[1];

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
// formation item
.formation-item {
  display: flex;
  justify-content: left;
  align-items: center;
  width: 50%;
  margin-top: 35px;
  margin-bottom: 20px;
  z-index: 10;

  // content
  &__content {
    width: 37.5%;
    display: flex;
    flex-direction: column;
    text-align: right;

    // date
    &__date {
      p {
        font-size: 1.4em;
        line-height: 17px;
        color: rgb(160, 50, 194);
        & span {
          border-top: 3px solid rgb(160, 50, 194);
        }
      }
    }
    // name
    &__name {
      p {
        line-height: 48px;
        font-size: 1.65em;
        color: rgb(176, 56, 212);
      }
    }
    // description
    &__description {
      p {
        font-size: 1.25em;
        color: rgb(0, 0, 0);
      }
    }
  }
  // img
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
