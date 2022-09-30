<template>
  <div class="committeeWrapper">
    <div class="committee">
      <p class="subtitle">Comité científico</p>
      <div class="committee-grid">
        <div class="committee-member">
          <img
            src="@/assets/img/committee/fernando-farinas.png"
            alt="Dr. Fernando Fariñas"
          />
          <p class="name">Dr. Fernando Fariñas</p>
          <p class="desc">
            Director del Instituto de Inmunología Clínica y Enfermedades
            Infecciosas, Málaga
          </p>
        </div>
        <div class="committee-member">
          <img src="@/assets/img/committee/manuel-sanchez.png" alt="" />
          <p class="name">Dr. Manuel Sánchez-Luna</p>
          <p class="desc">
            Jefe del Servicio de Neonatología del Hospital General Universitario
            Gregorio Marañón, Madrid
          </p>
        </div>
        <div class="committee-member">
          <img
            src="@/assets/img/committee/rosa-rodriguez.png"
            alt="Dra. Rosa Rodríguez"
          />
          <p class="name">Dra. Rosa Rodríguez</p>
          <p class="desc">
            Jefa Sección de Pediatría. Hospital General Universitario Gregorio
            Marañón, Madrid
          </p>
        </div>
        <div class="committee-member">
          <img
            src="@/assets/img/committee/antonio-moreno.png"
            alt="Dr. Antonio Moreno"
          />
          <p class="name">Dr. Antonio Moreno</p>
          <p class="desc">
            Jefe de la Unidades de Alergia, Neumología Pediátrica y Fibrosis
            Quística del Hospital Universitario Vall d’Hebron, Barcelona
          </p>
        </div>
        <div class="committee-member">
          <img
            src="@/assets/img/committee/mara-garces.png"
            alt="Dra. Mara Garcés-Sanchez"
          />
          <p class="name">Dra. Mara Garcés-Sanchez</p>
          <p class="desc">
            Pediatra del Centrode Salud Nazaret de Valencia. Especialista en
            epidemiología y salud pública del Área de Vacunas, Valencia
          </p>
        </div>
        <div class="committee-member">
          <img
            src="@/assets/img/committee/federico-martinon.png"
            alt="Dr. Federico Martinón-Torres"
          />
          <p class="name">Dr. Federico Martinón-Torres</p>
          <p class="desc">
            Jefe y coordinador del Servicio de Pediatría del Hospital Clínico
            Universitario de Santiago de Compostela
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="logos">
    <div>
      <p>Una iniciativa de:</p>
      <img src="@/assets/img/logo-sanofi.svg" alt="Sanofi" />
    </div>
  </div>
  <div class="footer-wrap">
    <footer>
      <a href="https://www.sanofi.es/es/aviso-legal" target="_blank"
        >Aviso legal</a
      >
      <a href="https://www.sanofi.es/es/politica-de-privacidad" target="_blank"
        >Política de privacidad</a
      >
    </footer>
  </div>
</template>

<style>
footer {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
footer a {
  color: var(--white);
  font-size: var(--small);
  padding: 0.5rem 1rem;
  transition: 0.2s all ease-out;
}
footer a:first-child {
  margin-right: 2rem;
}
footer a:hover {
  color: var(--pinklowlight);
  transition: 0.2s all ease-in;
}
.committee-grid {
  column-gap: 1rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(1, 1fr);
  padding: 1rem 0;
}
.committee-member {
  color: var(--steelbluelowlight);
  display: flex;
  flex-direction: column;
  text-align: center;
}
.committee-member img {
  display: inline-block;
  margin: 0 auto 1rem;
  width: 6rem;
}
.committee-member .name,
.committee-member .desc {
  font-size: var(--small);
}
.committee-member .name {
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.footer-wrap {
  background: var(--steelbluelowlight);
}
.logos {
  align-items: center;
  display: flex;
  font-size: var(--small);
  justify-content: center;
  margin: 2rem 0;
}
.logos img {
  width: 8.5rem;
}
</style>
