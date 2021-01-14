<template>
  <section class="home">
    <header>
      <p>
        <a href="">
          ALEXANDRE 
          <br>
          PAQUIEN<span>.fr</span> 
        </a>
      </p>
      <nav>
        <ul>
          <li>
            <a href="#about">
              À PROPOS
            </a>
          </li>
          <li>
            <a href="">
              PROJETS
            </a>
          </li>
          <li>
            <a href="">
              C.V
            </a>
          </li>
          <li>
            <a href="">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </header>
    <article>
        <h1>
          Développ<span>eur</span> Web
        </h1>
        <h2>
          Alexandre Paquien
        </h2>
        <a href="#about">
          <button>
            En savoir plus !
          </button>
        </a>
    </article>
  </section>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    const button = document.querySelector('.home article a button');
    let buttonClick;

    function classUpdate () {
      button.className = 'wiggle-animation';
      setTimeout(() => {
          button.classList.remove('wiggle-animation')
      }, 1000);
    }

    window.onload = () => {
      for (let i = 1; i < 99; i++) {
        //eslint-disable-next-line
        button.addEventListener('click', e => {
          buttonClick = 99;
        })
        setTimeout(() => { 
          if(buttonClick!==99) {
            classUpdate()
          }
        }, i * 10500);
      }
    }
  },
};
</script>

<style lang="scss">
.home {
  @include flex-parts;
  background-image: url('../assets/home.jpg');
  background-size: cover;
  border-bottom: 75px solid #242424;
  header {
    width: 100%;
    display: flex;
    p {
      display: flex;
      text-align: start;
      width: 50%;
      margin: 30px 0 0 35px;
      letter-spacing: 3px;
      font-size: 1.25em;
      & a {
        padding: 7px 10px;
        line-height: 28px;
      }
    }
    nav {
      display: flex;
      justify-content: flex-end;
      width: 50%;
      ul {
        display: flex;
        margin: 40px 120px 0 0;
        li {
          margin-right: 23px;
          font-size: 1.45em;
          letter-spacing: 1px;
          a {
            padding-bottom: 5px;
          }
        }
      }
    }
  }
  article {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 1em;
    padding: 50px 75px;
    text-align: right;
    margin-top: 110px;
    margin-bottom: 330px;
    h1 {
      text-align: left;
      color: rgb(70, 113, 255);
      font-size: 5em;
      text-shadow: 2px 4px rgba(0, 0, 0, 0.5);
      & span {
        border-bottom: 3px solid rgb(120, 152, 255);
        padding-bottom: 13px;
      }
    }
    h2 {
      color: rgb(231, 237, 255);
      text-shadow: 2px 4px rgba(0, 0, 0, 0.7);
      text-align: left;
      font-size: 4.3em;
      padding-bottom: 17px;
      margin: 25px 0 30px;
      border-bottom: 1px solid rgba(185, 185, 185, 0.3);
    }
    button {
      padding: 14px 17px;
      background-color: rgb(67, 99, 202);
      border-left-color: rgb(125, 155, 255);
      border-right-color: rgb(125, 155, 255);
      color: rgb(228, 228, 228);
      text-shadow: 1px 2px rgba(0, 0, 0, 0.5);
      border-radius: 2em;
      font-size: 1.25em;
      cursor: pointer;
    }
  }
}
</style>