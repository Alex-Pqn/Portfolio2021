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

  <!-- fixed header -->
  <div class="col-lg-12 col-sm-12 col-12 header">
    <div class="row">
      <div class="col-lg-6 col-sm-6 col-6 header__left text-left">
        <a href="/">
          <i class="fas fa-long-arrow-alt-left"></i>
        </a>
      </div>
      <div class="col-lg-6 col-sm-6 col-6 header__right text-right">
        <a
          id="pdf-icon"
          target="_blank"
          rel="noreferrer"
          href="https://www.dropbox.com/s/nm2s33yfix2788b/CV%20-%20Alexandre%20Paquien.pdf?dl=0"
        >
          <i class="fas fa-file-pdf fa-2x"></i>
        </a>
        <a
          id="download-icon"
          target="_blank"
          rel="noreferrer"
          href="https://www.dropbox.com/s/nm2s33yfix2788b/CV%20-%20Alexandre%20Paquien.pdf?dl=1"
        >
          <i class="fas fa-file-download fa-2x"></i>
        </a>
      </div>
    </div>
  </div>

  <!-- container -->
  <div class="container">
    <div class="col-lg-12">
      <div class="row">
        <!-- Responsive pic Left Side <992px -->
        <aside class="col-lg-12 container_pic_responsive">
          <div class="row">
            <img
              class="principal_pic_responsive"
              src="@/assets/Home/CV/pic.jpg"
              alt="Principal pic"
            />
          </div>
        </aside>
        <!-- Left Side -->
        <section class="col-lg-4 left_side">
          <div class="row">
            <div class="col-lg-12">
              <!-- <img
                class="principal_pic"
                src="@/assets/Home/CV/pic.jpg"
                alt="Principal pic"
              /> -->
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
                principalement les langages et technologies d'une page web, d'un
                serveur sous Node.js ou bien encore d'une base de données
                relationnelle SQL.
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
                          width="14"
                          height="14"
                          class="arrow_icon"
                          x="0px"
                          y="0px"
                          viewBox="0 0 448.011 448.011"
                        >
                          <g>
                            <g>
                              <path
                                d="M438.731,209.463l-416-192c-6.624-3.008-14.528-1.216-19.136,4.48c-4.64,5.696-4.8,13.792-0.384,19.648l136.8,182.4
                                l-136.8,182.4c-4.416,5.856-4.256,13.984,0.352,19.648c3.104,3.872,7.744,5.952,12.448,5.952c2.272,0,4.544-0.48,6.688-1.472
                                l416-192c5.696-2.624,9.312-8.288,9.312-14.528S444.395,212.087,438.731,209.463z"
                              />
                            </g>
                          </g>
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
                          Formation diplômante pour devenir développeur web,
                          utilisant notamment les langages HTML5/CSS3,
                          Javascript mais également VueJS, Bootstrap et Sass
                          pour l'intégration. <br />Développer et utiliser une
                          API REST, en passant par Mongoose et Express en
                          Node.js ainsi que MySQL pour la base de données
                          relationnelle ou bien encore MongoDB. <br />Ce
                          parcours m'a fait valider un total de 7 modules
                          (projets) avec un suivi hebdomadaire et détaillé par
                          le mentor Kevin Monteiro.
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
                          width="14"
                          height="14"
                          class="round_icon"
                          x="0px"
                          y="0px"
                          viewBox="0 0 300 300"
                        >
                          <path
                            d="M150,0C67.29,0,0,67.29,0,150s67.29,150,150,150s150-67.29,150-150S232.71,0,150,0z M150,270c-66.169,0-120-53.832-120-120
                          S83.831,30,150,30s120,53.832,120,120S216.168,270,150,270z"
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
                          width="14"
                          height="14"
                          class="arrow_icon"
                          x="0px"
                          y="0px"
                          viewBox="0 0 448.011 448.011"
                        >
                          <g>
                            <g>
                              <path
                                d="M438.731,209.463l-416-192c-6.624-3.008-14.528-1.216-19.136,4.48c-4.64,5.696-4.8,13.792-0.384,19.648l136.8,182.4
                                l-136.8,182.4c-4.416,5.856-4.256,13.984,0.352,19.648c3.104,3.872,7.744,5.952,12.448,5.952c2.272,0,4.544-0.48,6.688-1.472
                                l416-192c5.696-2.624,9.312-8.288,9.312-14.528S444.395,212.087,438.731,209.463z"
                              />
                            </g>
                          </g>
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
                          <strong>BAC PRO MELEC</strong>
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
                          width="14"
                          height="14"
                          class="round_icon"
                          x="0px"
                          y="0px"
                          viewBox="0 0 300 300"
                        >
                          <path
                            d="M150,0C67.29,0,0,67.29,0,150s67.29,150,150,150s150-67.29,150-150S232.71,0,150,0z M150,270c-66.169,0-120-53.832-120-120
                          S83.831,30,150,30s120,53.832,120,120S216.168,270,150,270z"
                          />
                        </svg>
                        <p class="date"><strong>2019</strong></p>
                      </div>
                      <div class="row">
                        <p class="location"><strong>Présentiel</strong></p>
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
                          au collège Béatrice de Savoie à Les Echelles.
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
                          width="14"
                          height="14"
                          class="round_icon"
                          x="0px"
                          y="0px"
                          viewBox="0 0 300 300"
                        >
                          <path
                            d="M150,0C67.29,0,0,67.29,0,150s67.29,150,150,150s150-67.29,150-150S232.71,0,150,0z M150,270c-66.169,0-120-53.832-120-120
                          S83.831,30,150,30s120,53.832,120,120S216.168,270,150,270z"
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
                          <strong>STAGE EN INFORMATIQUE</strong>
                        </h4>
                      </div>
                      <div class="row">
                        <p class="subtitles_texts_FRMT_EXPPRO_RCMD">
                          Stage d'observation de 4ème dans l'informatique
                        </p>
                      </div>
                      <div class="row">
                        <p class="subtitles_texts_FRMT_EXPPRO_RCMD">
                          Stage d'observation à l'enseigne GC Informatique, à
                          les Echelles. <br />Réparation et remise en marche de
                          matériel informatique défectueux, allant du simple
                          démontage de l'appareil à la réinstallation complète
                          d'outils et du système d'exploitation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
              <aside>
                <div class="col-lg-12 title_language">
                  <div class="row">
                    <i class="fa fa-pen-fancy fa-3x fa_right_side"></i>
                    <h2 class="titles_right_side"><strong>LANGUES</strong></h2>
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12">
                  <div class="row">
                    <div class="col-lg-6 col-sm-6 content_language">
                      <div class="row img_language">
                        <svg
                          width="85"
                          height="85"
                          x="0px"
                          y="0px"
                          viewBox="0 0 512 512"
                        >
                          <rect y="85.333" style="fill:#F0F0F0;" />
                          <polygon
                            style="fill:#D80027;"
                            points="288,85.33 224,85.33 224,223.996 0,223.996 0,287.996 224,287.996 224,426.662 288,426.662 
                            288,287.996 512,287.996 512,223.996 288,223.996 "
                          />
                          <g>
                            <polygon
                              style="fill:#0052B4;"
                              points="393.785,315.358 512,381.034 512,315.358 	"
                            />
                            <polygon
                              style="fill:#0052B4;"
                              points="311.652,315.358 512,426.662 512,395.188 368.307,315.358 	"
                            />
                            <polygon
                              style="fill:#0052B4;"
                              points="458.634,426.662 311.652,344.998 311.652,426.662 	"
                            />
                          </g>
                          <polygon
                            style="fill:#F0F0F0;"
                            points="311.652,315.358 512,426.662 512,395.188 368.307,315.358 "
                          />
                          <polygon
                            style="fill:#D80027;"
                            points="311.652,315.358 512,426.662 512,395.188 368.307,315.358 "
                          />
                          <g>
                            <polygon
                              style="fill:#0052B4;"
                              points="90.341,315.356 0,365.546 0,315.356 	"
                            />
                            <polygon
                              style="fill:#0052B4;"
                              points="200.348,329.51 200.348,426.661 25.491,426.661 	"
                            />
                          </g>
                          <polygon
                            style="fill:#D80027;"
                            points="143.693,315.358 0,395.188 0,426.662 0,426.662 200.348,315.358 "
                          />
                          <g>
                            <polygon
                              style="fill:#0052B4;"
                              points="118.215,196.634 0,130.958 0,196.634 	"
                            />
                            <polygon
                              style="fill:#0052B4;"
                              points="200.348,196.634 0,85.33 0,116.804 143.693,196.634 	"
                            />
                            <polygon
                              style="fill:#0052B4;"
                              points="53.366,85.33 200.348,166.994 200.348,85.33 	"
                            />
                          </g>
                          <polygon
                            style="fill:#F0F0F0;"
                            points="200.348,196.634 0,85.33 0,116.804 143.693,196.634 "
                          />
                          <polygon
                            style="fill:#D80027;"
                            points="200.348,196.634 0,85.33 0,116.804 143.693,196.634 "
                          />
                          <g>
                            <polygon
                              style="fill:#0052B4;"
                              points="421.659,196.636 512,146.446 512,196.636 	"
                            />
                            <polygon
                              style="fill:#0052B4;"
                              points="311.652,182.482 311.652,85.331 486.509,85.331 	"
                            />
                          </g>
                          <polygon
                            style="fill:#D80027;"
                            points="368.307,196.634 512,116.804 512,85.33 512,85.33 311.652,196.634 "
                          />
                        </svg>
                      </div>
                      <div class="row text_language">
                        <p><strong>Anglais</strong></p>
                      </div>
                      <div class="row text_language">
                        <p>Niveau 4 (B1) : Intermédiaire</p>
                      </div>
                    </div>
                    <div class="col-lg-6 col-sm-6 content_language">
                      <div class="row img_language">
                        <svg
                          width="85"
                          height="85"
                          x="0px"
                          y="0px"
                          viewBox="0 0 512 512"
                        >
                          <polygon
                            style="fill:#F0F0F0;"
                            points="341.334,85.33 170.666,85.33 0,85.33 0,426.662 170.666,426.662 341.334,426.662 
                            512,426.662 512,85.33 "
                          />
                          <rect
                            y="85.333"
                            style="fill:#6DA544;"
                            width="170.663"
                            height="341.337"
                          />
                          <rect
                            x="341.337"
                            y="85.333"
                            style="fill:#D80027;"
                            width="170.663"
                            height="341.337"
                          />
                        </svg>
                      </div>
                      <div class="row text_language">
                        <p><strong>Italien</strong></p>
                      </div>
                      <div class="row text_language">
                        <p>Niveau 2 (A1) : Élémentaire</p>
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
                <br /><br />Je commence à me former en autodidacte et finis par
                me lancer dans une formation OpenClassrooms réunissant
                principalement les langages et technologies d'une page web, d'un
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

/* Header */

.header {
  z-index: 999;
  position: fixed;
  &__left {
    padding-top: 7px;
    a i {
      color: rgb(152, 0, 223);
      font-size: 2em;
      &:hover {
        transition: all 100ms ease-in-out;
        margin-left: -2px;
        opacity: 0.6;
      }
    }
  }
  &__right {
    padding: 15px 19px;
    a i {
      &:hover {
        opacity: 0.7;
      }
    }
    #download-icon {
      color: rgb(165, 165, 165);
    }
    #pdf-icon {
      margin-right: 10px;
      color: rgb(216, 0, 0);
    }
  }
  a {
    color: black;
  }
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
  transform: scale(0.9);
  &:hover {
    transition: all ease-in-out 150ms;
    transform: scale(0.98);
  }
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
.title_language {
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
.arrow_icon {
  color: #219fff;

  margin-top: 49px;
  margin-left: 10px;
}
.round_icon {
  margin-top: 45px;
  margin-left: 11px;
  margin-right: 2px;
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
.content_language {
  line-height: 10px;
  margin-top: 15px;
}
.img_language {
}
.text_language {
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
}
.container_pic_responsive {
  display: flex;
  justify-content: center;
}
.left_side_responsive {
  background-color: #19b4c6;
  margin-top: 40px;
}

@media (min-width: 320px) {
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
