<template>
  <div class="contentWrapper" v-if="isTokenPresent">
    <h1>Curso de formación<br />en virus respiratorio sincitial (VRS)</h1>
    <p class="course-subtitle">
      Manejo multidisciplinar y estrategias de prevención de la infección por
      VRS
    </p>
  </div>
  <div class="separator" v-if="isTokenPresent">
    <div class="resume">
      <ul>
        <li>
          <p class="num">
            {{ completedCourseChaptersNum }}/{{ courseChaptersNum }}
          </p>
          <p class="desc">capítulos</p>
        </li>
        <li>
          <p class="num">{{ totalElapsed }}/{{ totalDuration }} min.</p>
          <p class="desc">duración</p>
        </li>
      </ul>
    </div>
  </div>
  <div class="contentWrapper grid" v-if="isTokenPresent">
    <div id="content" class="content" v-if="isLoaded">
      <h2>Descripción</h2>
      <p>
        El virus respiratorio sincitial (VRS) es un patógeno altamente
        contagioso que causa gran variedad de afecciones respiratorias, pudiendo
        afectar a personas de todas las edades, aunque la infección grave tiene
        lugar en lactantes, principalmente en menores de un año, o en adultos de
        edad avanzada a partir de los 60 años. Este virus es el principal
        causante de infecciones de vías respiratorias inferiores en población
        infantil, como son la bronquiolitis y neumonía, generando una elevada
        morbilidad y mortalidad en recién nacidos y lactantes a nivel global.
      </p>
      <p>
        Ante esta realidad, este curso nace para ofrecerte conocimientos tanto
        generales como de los últimos avances en el manejo y prevención de la
        enfermedad por VRS. También pretende fomentar la difusión del
        conocimiento científico, desarrollar la cooperación profesional entre
        las diferentes áreas implicadas en el manejo del VRS y sentar las bases
        de las futuras estrategias de prevención, con el objetivo de mejorar la
        calidad asistencial.
      </p>
      <h2>Objetivo</h2>
      <p>
        Concienciar sobre el problema de salud que supone la enfermedad por VRS,
        poniendo en relieve los principales aspectos del virus, el impacto a
        corto y largo plazo de esta enfermedad respiratoria, así como su manejo
        multidisciplinar y los diferentes enfoques preventivos.
      </p>
      <h2>Metodología</h2>
      <p>
        Acreditado por la Comisión de Formación Continuada de las Profesiones
        Sanitarias de la Comunidad de Madrid. Este curso consta de 8/6 temas en
        forma de píldoras de vídeo realizados por diferentes expertos en cada
        área, así como de material didáctico de apoyo elaborado por el personal
        docente y un material adicional de recomendada lectura y estudio, que
        resume los principales contenidos para profundizar en los conocimientos
        sobre el VRS.
      </p>
      <p>
        Recuerda que para avanzar en el curso deberás visualizar los vídeos y
        descargar el material de apoyo adicional. Los módulos se publicarán
        gradualmente y estarán disponibles en su totalidad a partir de
        noviembre.
      </p>
      <h2>Evaluación</h2>
      <p>
        Para obtener el certificado final debes realizar un examen de evaluación
        con el que se comprobará tu grado de aprendizaje y que tendrás que
        superar en, al menos, un 75 %.
      </p>
    </div>
    <aside class="menu">
      <ul v-if="selectedCourse == 1">
        <li v-for="(chapter, i) in chaptersCourse1">
          <a
            href="#"
            @click.prevent="displayChapter(i, $event)"
            v-bind:class="{
              active: chapter.active_course1 == 1,
              completed: this.userData.completedChapters.includes(i + 1)
            }"
          >
            <p class="title" v-html="chapter.title"></p>
            <p class="author">{{ chapter.author }}</p>
            <img
              class="lock"
              src="@/assets/img/padlock.png"
              alt="Curso bloqueado"
              v-if="chapter.active_course1 == 0"
            />
          </a>
          <div class="overlay" v-if="chapter.active_course1 == 0">
            <div class="tooltip">Este capítulo todavía no está disponible.</div>
          </div>
        </li>
        <li class="special">
          <a href="#" @click.prevent="displayTest($event)"
            ><p class="title">Examen de evaluación</p>
          </a>
          <div class="overlay" v-if="!test"></div>
        </li>
        <li class="special">
          <a href="#" @click.prevent="displayCertificate($event)"
            ><p class="title">Certificado</p>
          </a>
          <div class="overlay" v-if="!certificate"></div>
        </li>
      </ul>
      <ul v-if="selectedCourse == 2">
        <li v-for="(chapter, i) in chaptersCourse2" :key="chapter.name">
          <a
            href="#"
            @click.prevent="displayChapter($event)"
            v-bind:class="{ active: chapter.active_course2 == 1 }"
            ><p class="title" v-html="chapter.title"></p>
            <p class="author">{{ i }} - {{ chapter.author }}</p></a
          >
          <div class="overlay" v-if="chapter.active_course2 == 0"></div>
        </li>
        <li class="special">
          <a href="#" @click.prevent="displayTest($event)"
            ><p class="title">Examen de evaluación</p>
          </a>
          <div class="overlay" v-if="chapter.active_course2 == 0"></div>
        </li>
        <li class="special">
          <a href="#" @click.prevent="displayCertificate($event)"
            ><p class="title">Certificado</p>
          </a>
        </li>
      </ul>
    </aside>
  </div>
  <div class="contentWrapper" v-else>
    <p>Para continuar con el curso inicia sesión</p>
    <button @click="$router.push('/')">Iniciar sesión</button>
  </div>
</template>

<script setup>
import axios from 'axios';
</script>

<script>
export default {
  data() {
    return {
      certificate: false,
      chaptersCourse1: [],
      chaptersCourse2: [],
      completedCourseChaptersNum: 1,
      isLoaded: false,
      selectedCourse: 1,
      courseChaptersNum: 8,
      userData: {
        completedChapters: [],
        userInfo: {
          name: '',
          email: '',
          specialty: ''
        }
      },
      test: false,
      totalDuration: 77,
      totalElapsed: 13,
      isTokenPresent: window.localStorage.getItem('token')
    };
  },
  mounted() {
    this.getContent();
  },
  methods: {
    displayChapter(i, event) {
      document.querySelectorAll('.menu li a').forEach(el => {
        el.classList.remove('selected');
      });
      event.target.parentElement.classList.add('selected');
      var chapterContent = this.chaptersCourse1[i];
      document.getElementById('content').innerHTML = `
        <video src="${
          chapterContent.video
        }" controls style="width:100%;"></video>
        <p style="color: var(--green);font-size: var(--regular);letter-spacing: 0.3rem;text-transform: uppercase;margin:3rem 0 2rem;">Descripción</p>
        <div class="contentDescription">${chapterContent.description}</div>
        <p style="color: var(--green);font-size: var(--regular);letter-spacing: 0.3rem;text-transform: uppercase;margin:3rem 0 2rem;">Materiales de apoyo</p>
        <a href="${
          chapterContent.materials
        }" target="_blank">${chapterContent.materials.substring(
        chapterContent.materials.lastIndexOf('/') + 1
      )}</a>
      `;
    },
    displayTest(event) {
      console.log(event.target.text);
    },
    displayCertificate(event) {
      console.log(event.target.text);
    },
    getContent() {
      // Completed chapters
      axios
        .post(this.rattleUrl + '/student-chapters/read.php', {
          token: window.localStorage.getItem('token')
        })
        .then(response => {
          console.log(response);
          this.userData.completedChapters = response.data.studentChapters;
          this.completedCourseChaptersNum = response.data.studentChaptersCount;
        })
        .catch(error => {
          console.log(error);
        });
      // Student info
      axios
        .post(this.rattleUrl + '/students/single-read.php', {
          token: window.localStorage.getItem('token')
        })
        .then(response => {
          console.log(response);
          this.userData.userInfo = response;
          this.selectedCourse = this.userData.userInfo.specialty.includes(
            'Enfermería'
          )
            ? 2
            : 1;
        })
        .catch(error => {
          console.log(error);
        });
      // Chapters info
      axios
        .get(this.rattleUrl + '/chapters/read.php')
        .then(response => {
          this.isLoaded = true;
          this.chaptersCourse1 = response.data.chapters;
          for (var i = 0; i < 6; i++) {
            this.chaptersCourse2.push(response.data.chapters[i]);
          }
          this.courseChaptersNum = response.data.chaptersCount;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
h1 {
  font-weight: bold;
}
h2 {
  color: var(--green);
  font-size: var(--regular);
  letter-spacing: 0.3rem;
  margin: var(--large) 0 var(--small);
  text-transform: uppercase;
}
.content {
  grid-column-start: 1;
  grid-column-end: 13;
  grid-row-start: 2;
}
.content p {
  font-size: var(--regular);
  line-height: var(--hmedium);
  margin-bottom: 1rem;
}
.contentWrapper {
  padding-bottom: 5rem;
  position: relative;
}
.grid {
  display: grid;
  column-gap: 0;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, 1fr);
}
.lock {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1rem;
}
.menu {
  grid-column-start: 1;
  grid-column-end: 13;
  grid-row-start: 1;
  margin-bottom: 4rem;
}
.menu ul {
  list-style-type: none;
  padding: 0;
}
.menu ul li {
  border: 1px solid var(--green);
  margin-bottom: 1rem;
  position: relative;
}
.menu ul li .overlay {
  background: rgba(0, 0, 0, 0.1);
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
.menu ul li .overlay:hover {
  cursor: not-allowed;
}
.menu ul li a {
  color: var(--steelbluelowlight);
  display: block;
  line-height: var(--hregular);
  padding: 0.75rem 4rem 0.75rem 1rem;
  transition: 0.25s all ease-out;
  text-decoration: none;
}
.menu ul li a.active {
  background: var(--white);
  cursor: pointer;
  position: relative;
}
.menu ul li a.selected,
.menu ul li a.completed {
  background-color: var(--green);
  color: var(--white);
}
.menu ul li a.selected p {
  font-weight: 700;
  position: relative;
}
.menu ul li.special a:hover {
  background-color: var(--bluehighlight);
  color: var(--white);
  vertical-align: middle;
}
.menu ul li.special a:hover .title {
  color: var(--white);
}
.menu ul li.special a {
  padding: 2rem 1rem;
}
.menu ul li a:hover {
  background: var(--green);
  color: var(--white);
  transition: 0.25s all ease-in;
}
.menu ul li.blocked a {
  background: #efefef;
  color: var(--steelbluelowlight);
}
.menu .title {
  font-weight: 500;
}
.menu .author {
  font-size: var(--small);
  font-weight: 500;
  margin-top: 0.25rem;
}
.separator {
  align-items: center;
  background: url(@/assets/img/dots.svg) bottom no-repeat,
    url(@/assets/img/sepBG.jpg);
  display: flex;
  height: 6rem;
  justify-content: center;
  margin-bottom: 4rem;
  width: 100%;
}
.separator .resume {
  background: white;
  border: 1px solid lightgray;
  border-radius: 20px;
  position: relative;
  top: 3rem;
}
.separator .resume ul {
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  padding: 2rem;
  width: 15rem;
}
.separator .resume ul li {
  align-items: center;
  display: flex;
  flex-direction: column;
}
.separator .resume .num {
  color: var(--bluehighlight);
  font-size: var(--regular);
  margin-bottom: 0.15rem;
}
.separator .resume .desc {
  color: var(--bluehighlight);
  font-size: var(--xxsmall);
  text-transform: uppercase;
}
.course-subtitle {
  font-size: var(--regular);
  margin: var(--large) 0;
}
.tooltip {
  align-items: center;
  background: var(--white);
  display: none;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 9;
}
.overlay:hover .tooltip {
  display: flex;
}
@media (min-width: 1255px) {
  .content {
    grid-column-start: 1;
    grid-column-end: 9;
    grid-row-start: 1;
  }
  .grid {
    display: grid;
    column-gap: 5rem;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
  .menu {
    grid-column-start: 9;
    grid-column-end: 13;
    grid-row-start: 1;
  }
}
</style>
