<template>
  <!-- import scripts -->
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity=""
    crossorigin="anonymous"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.css"
    crossorigin="anonymous"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
    crossorigin="anonymous"
  />

  <!-- container -->
  <div class="container">
    <div class="col-lg-12">
      <div class="row">
        <!-- Responsive pic Left Side <992px -->
        <aside class="col-lg-12">
          <div class="row">
            <img
              class="principal_pic_responsive"
              src="@/assets/CV/pic.jpg"
              alt="Principal pic"
            />
          </div>
        </aside>
        <!-- Left Side -->
        <section class="col-lg-4 left_side">
          <div class="row">
            <div class="col-lg-12">
              <img
                class="principal_pic"
                src="@/assets/CV/pic.jpg"
                alt="Principal pic"
              />
            </div>
            <div class="col-lg-12 title_contact">
              <h2 class="titles_left_side"><strong>CONTACT</strong></h2>
            </div>
            <div class="col-lg-12 text_contact">
              <div class="texts_left_side">
                <address>
                  Adresse<br />
                  38470 Isère, France
                </address>
                <p>
                  Téléphone<br />
                  <a class="link_decoration" href="tel:+33623754964"
                    >+33 6 23 75 49 64</a
                  >
                </p>
                <p>
                  E-mail<br />
                  <a
                    class="link_decoration"
                    href="mailto:paquienalexandre0@gmail.com"
                    >paquienalexandre0@gmail.com</a
                  >
                </p>
                <p>
                  Site web<br />
                  <a
                    class="link_decoration"
                    target="_blank"
                    href="https://alex-pqn.fr/"
                    >alex-pqn.fr</a
                  >
                </p>
                <p>
                  Github<br />
                  <a
                    class="link_decoration"
                    target="_blank"
                    href="https://github.com/Alex-Pqn"
                    >Alex-Pqn</a
                  >
                </p>
                <p>
                  LinkedIn<br />
                  <a
                    class="link_decoration"
                    target="_blank"
                    href="https://www.linkedin.com/in/alexandre-paquien-1848821a5/"
                    >AlexandrePaquien</a
                  >
                </p>
              </div>
            </div>
            <div class="col-lg-12 title_about">
              <h2 class="titles_left_side"><strong>À PROPOS</strong></h2>
            </div>
            <div class="col-lg-12 text_about">
              <p class="texts_left_side">
                Je m'appelle Alexandre, j'ai 17 ans et je suis passionné par
                l'environnement informatique depuis de nombreuses années.
                <br />J'ai quitté le milieu des études secondaires et ai
                découvert le domaine du développement informatique auquel j'ai
                directement accroché. <br /><br />Je décide plus
                particulièrement de me lancer dans le milieu du web avec ses
                caractéristiques atypiques (front-end, back-end,fullstack).
                <br />Je commence à me former en autodidacte et finis par me
                lancer dans une formation OpenClassrooms
                réunissantprincipalementleslangagesettechnologies d'une page
                web, d'un serveur sous Node.js ou bien encore d'une base de
                données relationnelle SQL.
              </p>
            </div>
            <div class="col-lg-12 title_leisure">
              <h2 class="titles_left_side"><strong>LOISIR</strong></h2>
            </div>
            <div class="col-lg-12 pics_leisure fa_left_side">
              <i class="fa fa-music fa-3x" title="Musique"></i>
              <i class="fa fa-laptop fa-3x" title="Informatique"></i>
              <i
                class="fa fa-photo-video fa-3x"
                title="Montage Vidéo et Drône"
              ></i>
            </div>
          </div>
        </section>
        <!-- Right Side -->
        <section class="col-lg-8">
          <div class="row">
            <div class="col-lg-11 offset-lg-1">
              <aside class="col-lg-12 principal_title">
                <h1 class="principal_title_name">
                  <strong
                    ><span class="principal_title_name_2">ALEXANDRE</span>
                    PAQUIEN</strong
                  >
                </h1>
                <h5 class="principal_title_job">
                  <span class="principal_title_job_line">Dévelo</span>ppeur Web
                </h5>
              </aside>
              <aside>
                <div class="col-lg-12 title_formation">
                  <div class="row">
                    <i class="fa fa-graduation-cap fa-3x fa_right_side"></i>
                    <h2 class="titles_right_side">
                      <strong>FORMATION</strong>
                    </h2>
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12">
                  <div class="row">
                    <div class="col-lg-4 col-sm-4">
                      <div class="row">
                        <svg
                          class="current_icon"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 7c-2760-5224-55s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4420-8-358-8-8s358-8 8-88 3.58 8 8-3.58 8-8 8z"
                          />
                        </svg>
                        <p class="current_date"><strong>2020-2021</strong></p>
                      </div>
                      <div class="row">
                        <p class="current_location">
                          <strong>À distance</strong>
                        </p>
                      </div>
                    </div>
                    <div class="col-lg-8 col-sm-8">
                      <div class="row">
                        <h4 class="titles_FRMT_EXPPRO_RCMD">
                          <strong>OPENCLASSROOMS</strong>
                        </h4>
                      </div>
                      <div class="row">
                        <p class="subtitles_texts_FRMT_EXPPRO_RCMD">
                          Bac +2 Développeur Web (certification de niveau 5)
                        </p>
                      </div>
                      <div class="row">
                        <p class="subtitles_texts_FRMT_EXPPRO_RCMD">
                          Formation diplomante pour devenir développeur web,
                          utilisantnotammentleslangagesHTML5CSS3, Javascript
                          mais également VueJS, Bootstrap et Sass pour
                          l'intégration. <br />Développer et utiliser une API
                          REST, en passant par Mongoose et Express en Node.js
                          ainsi que MySQL pourlabasededonnéesrelationnelle ou
                          bien encore MongoDB. <br />Ce parcours m'a fait
                          valider un total de 7 modules (projets) avec un suivi
                          hebdomadaire et détaillé parlementorKevinMonteiro.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12">
                  <div class="row">
                    <div class="col-lg-4 col-sm-4">
                      <div class="row">
                        <svg
                          class="icon"
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 15l-66-142-142L151716H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"
                          />
                        </svg>
                        <p class="date"><strong>2020</strong></p>
                      </div>
                      <div class="row">
                        <p class="location"><strong>À distance</strong></p>
                      </div>
                    </div>
                    <div class="col-lg-8 col-sm-8">
                      <div class="row">
                        <h4 class="titles_FRMT_EXPPRO_RCMD">
                          <strong>AUTODIDACTE</strong>
                        </h4>
                      </div>
                      <div class="row">
                        <p class="subtitles_texts_FRMT_EXPPRO_RCMD">
                          Développement web en autodidacte
                        </p>
                      </div>
                      <div class="row">
                        <p class="subtitles_texts_FRMT_EXPPRO_RCMD">
                          Apprentissage des bases du développement web en
                          autodidacte.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12">
                  <div class="row">
                    <div class="col-lg-4 col-sm-4">
                      <div class="row">
                        <svg
                          class="current_icon"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 7c-2760-5224-55s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4420-8-358-8-8s358-8 8-88 3.58 8 8-3.58 8-8 8z"
                          />
                        </svg>
                        <p class="current_date"><strong>2019</strong></p>
                      </div>
                      <div class="row">
                        <p class="current_location">
                          <strong>Présentiel</strong>
                        </p>
                      </div>
                    </div>
                    <div class="col-lg-8 col-sm-8">
                      <div class="row">
                        <h4 class="titles_FRMT_EXPPRO_RCMD">
                          <strong>BREVET DES COLLÈGES</strong>
                        </h4>
                      </div>
                      <div class="row">
                        <p class="subtitles_texts_FRMT_EXPPRO_RCMD">
                          Diplôme national du brevet des collèges
                        </p>
                      </div>
                      <div class="row">
                        <p class="subtitles_texts_FRMT_EXPPRO_RCMD">
                          Obtention du diplôme national du brevet des collèges
                          au collège BéatricedeSavoieàLesEchelles.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
              <aside>
                <div class="col-lg-12 title_experience">
                  <div class="row">
                    <i class="fa fa-user-tie fa-3x fa_right_side"></i>
                    <h2 class="titles_right_side">
                      <strong>EXPÉRIENCE PROFESSIONNELLE</strong>
                    </h2>
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12">
                  <div class="row">
                    <div class="col-lg-4 col-sm-4">
                      <div class="row">
                        <svg
                          class="icon"
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 15l-66-142-142L151716H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"
                          />
                        </svg>
                        <p class="current_date"><strong>2019-2020</strong></p>
                      </div>
                      <div class="row">
                        <p class="current_location">
                          <strong>Présentiel</strong>
                        </p>
                      </div>
                    </div>
                    <div class="col-lg-8 col-sm-8">
                      <div class="row">
                        <h4 class="titles_FRMT_EXPPRO_RCMD">
                          <strong>Bac Pro MELEC</strong>
                        </h4>
                      </div>
                      <div class="row">
                        <p class="subtitles_texts_FRMT_EXPPRO_RCMD">
                          2nd en Bac Pro MELEC au lycée la Saulaie
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12">
                  <div class="row">
                    <div class="col-lg-4 col-sm-4">
                      <div class="row">
                        <svg
                          class="current_icon"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 7c-2760-5224-55s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4420-8-358-8-8s358-8 8-88 3.58 8 8-3.58 8-8 8z"
                          />
                        </svg>
                        <p class="date"><strong>2018</strong></p>
                      </div>
                      <div class="row">
                        <p class="location"><strong>Présentiel</strong></p>
                      </div>
                    </div>
                    <div class="col-lg-8 col-sm-8">
                      <div class="row">
                        <h4 class="titles_FRMT_EXPPRO_RCMD">
                          <strong>Stage en informatique</strong>
                        </h4>
                      </div>
                      <div class="row">
                        <p class="subtitles_texts_FRMT_EXPPRO_RCMD">
                          Stage d'observation de 4ème
                        </p>
                      </div>
                      <div class="row">
                        <p class="subtitles_texts_FRMT_EXPPRO_RCMD">
                          Stage d'observation à l'enseigne GC Informatique, à
                          les Echelles. <br />Réparation et remise en marche
                          matériel informatique défectueux, allant du simple
                          démontage del'appareilàlaréinstallationcomplète
                          d'outils et du système d'exploitation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
              <aside>
                <div class="col-lg-12 title_recommandation">
                  <div class="row">
                    <i class="fa fa-pen-fancy fa-3x fa_right_side"></i>
                    <h2 class="titles_right_side"><strong>DIVERS</strong></h2>
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12">
                  <div class="row">
                    <div class="col-lg-6 col-sm-6">
                      <div class="row name_recommandation">
                        <p><strong>ALEX PAQUIN</strong></p>
                      </div>
                      <div class="row text_recommandation">
                        <p><strong>My Company two</strong></p>
                      </div>
                      <div class="row text_recommandation">
                        <p><strong>Téléphone : </strong>+3360000002</p>
                      </div>
                      <div class="row text_recommandation">
                        <p><strong>Email : </strong>email.two@gmail.com</p>
                      </div>
                    </div>
                    <div class="col-lg-6 col-sm-6">
                      <div class="row name_recommandation">
                        <p><strong>ALEX PAQUIN</strong></p>
                      </div>
                      <div class="row text_recommandation">
                        <p><strong>My Company</strong></p>
                      </div>
                      <div class="row text_recommandation">
                        <p><strong>Téléphone : </strong>+33600000001</p>
                      </div>
                      <div class="row text_recommandation">
                        <p><strong>Email : </strong>email@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
        <!-- Responsive Left Side <992px -->
        <section class="col-lg-12 left_side_responsive">
          <div class="row">
            <div class="col-lg-12 title_contact">
              <h2 class="titles_left_side"><strong>CONTACT</strong></h2>
            </div>
            <div class="col-lg-12 text_contact">
              <div class="texts_left_side">
                <address>
                  Adresse<br />
                  38470 Isère, France
                </address>
                <p>
                  Téléphone<br />
                  <a class="link_decoration" href="tel:+33623754964"
                    >+33 6 23 75 49 64</a
                  >
                </p>
                <p>
                  E-mail<br />
                  <a
                    class="link_decoration"
                    href="mailto:paquienalexandre0@gmail.com"
                    >paquienalexandre0@gmail.com</a
                  >
                </p>
                <p>
                  Site web<br />
                  <a
                    class="link_decoration"
                    target="_blank"
                    href="https://alex-pqn.fr/"
                    >alex-pqn.fr</a
                  >
                </p>
                <p>
                  Github<br />
                  <a
                    class="link_decoration"
                    target="_blank"
                    href="https://github.com/Alex-Pqn"
                    >Alex-Pqn</a
                  >
                </p>
                <p>
                  LinkedIn<br />
                  <a
                    class="link_decoration"
                    target="_blank"
                    href="https://www.linkedin.com/in/alexandre-paquien-1848821a5/"
                    >Alexandre Paquien</a
                  >
                </p>
              </div>
            </div>
            <div class="col-lg-12 title_about">
              <h2 class="titles_left_side"><strong>À PROPOS</strong></h2>
            </div>
            <div class="col-lg-12 text_about">
              <p class="texts_left_side">
                Je m'appelle Alexandre, j'ai 17 ans et je suis passionné par
                l'environnement informatique depuis de nombreuses années.
                <br />J'ai quitté le milieu des études secondaires et ai
                découvert le domaine du développement informatique auquel j'ai
                directement accroché. <br /><br />Je décide plus
                particulièrement de me lancer dans le milieu du web avec ses
                caractéristiques atypiques (front-end, back-end, fullstack).
                <br />Je commence à me former en autodidacte et finis par me
                lancer dans une formation OpenClassrooms réunissant
                principalementleslangagesettechnologiesd'une page web, d'un
                serveur sous Node.js ou bien encore d'une base de données
                relationnelle SQL.
              </p>
            </div>
            <div class="col-lg-12 title_leisure">
              <h2 class="titles_left_side"><strong>LOISIR</strong></h2>
            </div>
            <div class="col-lg-12 pics_leisure fa_left_side">
              <i class="fa fa-music fa-4x" title="Musique"></i>
              <i class="fa fa-laptop fa-4x" title="Informatique"></i>
              <i
                class="fa fa-photo-video fa-4x"
                title="Montage Vidéo et Drône"
              ></i>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cv"
};
</script>

<style scoped lang="scss">
/* Main */

body [class*="col-"] {
  text-align: center;
  font-family: "Open Sans", sans-serif, Arial, Helvetica;
}
.container {
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
}
.row {
  height: auto;
  width: auto;
}
container [class*="col-"] {
  border: 1px solid black;
  border-radius: 3px;
}

/* Left Side */

.left_side {
  background-color: #219fff;
}
.principal_pic {
  border: 5px solid rgba(100, 100, 100, 0.3);

  margin-bottom: 50px;
  margin-top: 65px;
}
.titles_left_side {
  color: white;

  margin-top: 10px;
  margin-bottom: 10px;
}
.title_contact {
  background-color: #464646;

  margin-bottom: 10px;
}
.title_about {
  background-color: #464646;
}
.title_leisure {
  background-color: #464646;
}
.texts_left_side {
  color: white;
  margin-top: 22px;
  margin-left: 20px;
  text-align: left;
}
.text_contact {
  margin-bottom: 30px;
}
.link_decoration {
  color: white;
}
.pics_leisure {
  margin-top: 15px;
  margin-bottom: 15px;
}
.fa_left_side {
  color: white;
  fill: white;
  min-width: 50px;

  padding-top: 15px;
  padding-bottom: 10px;
}
.fa {
  margin: 0 20px;
}

/* Right Side */

.principal_title_name {
  color: #575c5c;

  margin-left: -15px;
}
.principal_title_name_2 {
  color: #329fba;
}
.principal_title_job {
  color: #575c5c;
  font-size: 1.7em;

  margin-left: -15px;
}
.principal_title_job_line {
  border-bottom: 3px solid #329fba;
}
.titles_right_side {
  margin-top: 35px;
}
.title_formation {
  border-bottom: 2px solid #219fff;

  padding-bottom: 15px;
}
.title_experience {
  border-bottom: 2px solid #219fff;

  margin-top: 20px;
  padding-bottom: 15px;
}
.title_recommandation {
  border-bottom: 2px solid #219fff;

  margin-top: 20px;
  padding-bottom: 15px;
}
.fa_right_side {
  color: #22b5da;
  align-self: center;

  margin-top: 28px;
}
.fa-graduation-cap {
  margin-right: 28px;
}
.fa-user-tie {
  margin-left: 10px;
  margin-right: 37px;
}
.fa-pen-fancy {
  margin-left: 12px;
  margin-right: 30px;
}
.current_icon {
  color: #219fff;

  margin-top: 47px;
  margin-left: 8px;
}
.icon {
  margin-top: 31px;
}
.current_date {
  color: black;

  padding-top: 44px;
  margin-left: 15px;
  margin-bottom: -1px;
}
.date {
  color: black;

  margin-top: 40px;
  margin-left: 9px;
  margin-bottom: -1px;
}
.current_location {
  color: black;

  margin-left: 39px;
}
.location {
  color: black;

  margin-left: 36px;
}
.titles_FRMT_EXPPRO_RCMD {
  color: black;

  text-align: left;
}
.subtitles_texts_FRMT_EXPPRO_RCMD {
  color: black;

  text-align: left;
}
.name_recommandation {
  padding-top: 30px;
  padding-bottom: 6px;
}
.text_recommandation {
  margin-top: -16px;
}

/* Footer - end*/

.footer_info {
  font-size: 1.1em;

  margin-top: 25px;
}

/* Responsive */

.principal_pic_responsive {
  border: 5px solid rgba(100, 100, 100, 0.3);

  margin-top: 55px;
  margin-left: 220px;
}
.left_side_responsive {
  background-color: #19b4c6;
  margin-top: 40px;
}

@media (min-width: 359px) {
  .principal_pic_responsive {
    border-radius: 200px;
    height: 250px;
    width: 250px;
  }
  .principal_title_job {
    text-align: center;
  }
  .principal_title_name {
    text-align: center;

    font-size: 3.77em;
  }
  .titles_FRMT_EXPPRO_RCMD {
    margin-top: 45px;
  }
  .principal_title {
    margin-top: 35px;
  }
  .title_formation {
    margin-top: 55px;
  }
  .title_leisure {
    margin-top: 2.5em;
  }
  .left_side {
    display: none;
  }
  .principal_pic {
    display: initial;
  }
  .text_about {
    font-size: 1.25em;
  }
  .text_contact {
    font-size: 1.35em;
  }
  .footer_info {
    padding-left: 0em;
  }
}

@media (min-width: 992px) {
  .principal_pic_responsive {
    display: none;
  }
  .left_side_responsive {
    display: none;
  }
  .principal_title_name {
    text-align: start;

    font-size: 3.21em;
  }
  .principal_title_job {
    text-align: start;
  }
  .titles_FRMT_EXPPRO_RCMD {
    font-size: 1.3em;
    margin-top: 47px;
  }
  .titles_right_side {
    font-size: 1.6em;
  }
  .principal_title {
    margin-top: 100px;
  }
  .title_leisure {
    margin-top: 35em;
  }
  .title_formation {
    margin-top: 100px;
  }
  .left_side {
    display: initial;
  }
  .principal_pic {
    border-radius: 100px;
    height: 180px;
    width: 180px;
  }
  .text_about {
    font-size: 1em;
  }
  .text_contact {
    font-size: 1.1em;
  }
  .footer_info {
    padding-left: 3.5em;
  }
}

@media (min-width: 1200px) {
  .titles_FRMT_EXPPRO_RCMD {
    font-size: 1.5em;
  }
  .titles_right_side {
    font-size: 1.9em;
  }
  .principal_title_name {
    font-size: 3.77em;
  }
  .title_leisure {
    margin-top: 36em;
  }
  .principal_pic {
    border-radius: 150px;
    height: 230px;
    width: 230px;
  }
  .footer_info {
    padding-left: 8em;
  }
}
</style>
