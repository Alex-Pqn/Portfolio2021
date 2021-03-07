<template>
  <!-- contact container -->
  <section class="contact" id="contact">
    <div class="contact__content">
      <!-- title -->
      <div class="contact__content__title">
        <h1>
          Contactez-moi !
        </h1>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="comment"
          role="img"
          viewBox="0 0 512 512"
        >
          <path
            d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"
          ></path>
        </svg>
      </div>
      <form :onsubmit="sendMail">
        <!-- subject -->
        <div class="contact__content__subject">
          <label for="subject">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="arrow-right"
              role="img"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
              ></path>
            </svg>
            Sujet
          </label>
          <input
            value="Sujet de la demande"
            id="subject"
            name="subject"
            type="text"
          />
        </div>
        <!-- message -->
        <div class="contact__content__message">
          <label for="body">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="arrow-right"
              role="img"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
              ></path>
            </svg>
            Message
          </label>
          <textarea value="Bonjour," name="body" id="body"></textarea>
        </div>

        <!-- submit -->
        <button type="submit">
          Envoyer
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="location-arrow"
            role="img"
            viewBox="0 0 512 512"
          >
            <path
              d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z"
            ></path>
          </svg>
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "contact",
  methods: {
    sendMail: function() {
      let subject = document.getElementById("subject").value;
      let body = document.getElementById("body").value;

      // open mailto modal
      window.location.href = `mailto:paquienalexandre0@gmail.com?subject=${subject}&body=${body}`;

      return false;
    }
  }
};
</script>

<style lang="scss">
// contact container
.contact {
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-margin-top: 6.5em;
  padding: 50px 0;

  // content
  &__content {
    width: 50%;
    // title
    &__title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: $main-color_contact-part;
      padding: 8px 17px 8px 15px;
      border-radius: 0.3em;

      h1 {
        font-size: 3.8em;
        letter-spacing: 3px;
        color: white;
      }
      svg {
        width: 62px;
        fill: white;
      }
    }
    // subject & message
    &__subject,
    &__message {
      display: flex;
      flex-direction: column;
      line-height: 60px;
      label {
        display: flex;
        color: rgb(120, 20, 202);
        font-size: 1.8em;
        svg {
          width: 23px;
          fill: $main-color_contact-part;
          margin-right: 12px;
        }
      }
      input,
      textarea {
        border: none;
        font-family: Arial, Helvetica, sans-serif;
        background-color: rgba(177, 177, 177, 0.4);
        border-left: 7px solid $main-color_contact-part;
        font-size: 1.6em;
        padding: 12px;
        border-radius: 0.15em;
        color: rgba(0, 0, 0, 0.75);
        &:focus {
          transition: all 250ms ease-in-out;
          border-left: 9px solid $main-color_contact-part;
          background-color: rgba(177, 177, 177, 0.2);
          color: rgb(0, 0, 0);
          outline: none;
        }
      }
    }
    // subject
    &__subject {
      margin: 15px 0 20px;
      input {
        height: 50px;
        &:focus {
          height: 55px;
        }
      }
    }
    // message
    &__message {
      textarea {
        resize: none;
        height: 375px;
        &:focus {
          height: 385px;
          border-top-right-radius: 0.5em;
        }
      }
    }
    // submit button
    button[type="submit"] {
      display: flex;
      align-items: center;
      margin-top: 30px;
      padding: 12px 17px;
      font-size: 1.55em;
      background-color: $main-color_contact-part;
      color: white;
      border: none;
      border-radius: 0.25em;
      &:hover {
        opacity: 0.85;
      }
      svg {
        fill: white;
        padding-left: 10px;
        width: 32px;
      }
    }
  }
}
</style>
