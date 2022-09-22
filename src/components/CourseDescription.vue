<template>
  <div class="course-description">
    <p class="subtitle">Bienvenido</p>
    <h1>Curso de formación <br />en virus respiratorio sincitial (VRS)</h1>
    <div class="grid">
      <div class="left">
        <img class="rattle-cover" src="@/assets/img/rattle-cover.jpg" />
      </div>
      <div class="right">
        <p>
          Hoy en día, las complicaciones por infección por el VRS suponen la
          causa más común de bronquiolitis y neumonia y provocan millones de
          hospitalizaciones a nivel mundial.
        </p>
        <p>
          Ante esta realidad, este curso nace para ofrecerte conocimientos,
          tanto generales como de los últimos avances en el manejo y estrategias
          de prevención de la infección por VRS; sin olvidarse de fomentar la
          difusión del conocimiento científico, desarrollar la cooperación
          profesional entre las diferentes áreas implicadas en el manejo del VRS
          y promover estrategias de prevención con el objetivo de mejorar la
          calidad asistencial.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: var(--xlarge);
  line-height: var(--hregular);
  margin-bottom: 1.875rem;
  max-width: var(--wlarge);
}
.rattle-cover {
  max-width: 45rem;
  width: 100%;
}
.subtitle {
  color: var(--pinkhighlight);
  font-size: var(--small);
  letter-spacing: 0.5rem;
  font-weight: 500;
  margin-bottom: 1.875rem;
  text-transform: uppercase;
}
.grid {
  display: block;
}
.left {
  grid-column-start: 1;
  grid-column-end: 12;
  margin-bottom: 2rem;
}
.right {
  grid-column-start: 1;
  grid-column-end: 12;
  margin-left: 0;
}
.right p {
  font-size: var(--regular);
  margin-bottom: var(--regular);
}
@media (min-width: 1207px) {
  h1 {
    font-size: var(--xxlarge);
  }
  .grid {
    display: grid;
    column-gap: 1rem;
    grid-template-columns: repeat(11, 1fr);
  }
  .left {
    grid-column-start: 1;
    grid-column-end: 5;
    margin-bottom: 0;
  }
  .right {
    grid-column-start: 5;
    grid-column-end: 12;
    margin-left: 1rem;
  }
}
@media (min-width: 1420px) {
  h1 {
    font-size: var(--xxxlarge);
  }
  .right p {
    font-size: var(--medium);
  }
}
</style>
