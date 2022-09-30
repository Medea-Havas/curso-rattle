<template>
  <div class="course-description">
    <p class="subtitle">Bienvenido</p>
    <h1>Curso de formación <br />en virus respiratorio sincitial (VRS)</h1>
    <div class="grid">
      <div class="left">
        <img class="rattle-cover" src="@/assets/img/vrs-cover.jpg" />
      </div>
      <div class="right">
        <p>
          El virus respiratorio sincitial (VRS) es un patógeno altamente
          contagioso que causa gran variedad de afecciones respiratorias,
          pudiendo afectar a personas de todas las edades, aunque la infección
          grave tiene lugar en lactantes, principalmente en menores de un año, o
          en adultos de edad avanzada a partir de los 60 años.
        </p>
        <p>
          Este virus es el principal causante de infecciones de vías
          respiratorias inferiores en población infantil, como son la
          bronquiolitis y neumonía, generando una elevada morbilidad y
          mortalidad en recién nacidos y lactantes a nivel global.
        </p>
        <p>
          Ante esta realidad, este curso nace para ofrecerte conocimientos tanto
          generales como de los últimos avances en el manejo y prevención de la
          enfermedad por VRS. También pretende fomentar la difusión del
          conocimiento científico, desarrollar la cooperación profesional entre
          las diferentes áreas implicadas en el manejo del VRS y sentar las
          bases de las futuras estrategias de prevención, con el objetivo de
          mejorar la calidad asistencial.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.rattle-cover {
  max-width: 45rem;
  width: 100%;
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
  .right p {
    font-size: var(--regular);
  }
}
</style>
