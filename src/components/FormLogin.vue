<template>
  <p class="warning">
    Regístrese a través del enlace que recibió en el email de invitación
  </p>
  <!-- <div class="register">
    <form @submit.prevent="handleSubmit">
      <TextInput
        label="Email"
        type="email"
        placeholder="Email"
        v-model="user.email"
      />
      <TextInput
        label="Contraseña"
        type="text"
        placeholder="Contraseña"
        v-model="user.password"
      />
      <button>Enviar</button>
    </form>
  </div> -->
  <!-- <div class="debug">
    <code>Email: {{ user.email }}<br />Contraseña: {{ user.password }}</code>
  </div> -->
</template>

<script setup>
import TextInput from './TextInput.vue';
</script>

<script>
export default {
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    };
  }
};
</script>

<style scoped>
form {
  display: block;
}
button {
  background: white;
  border: 2px solid var(--pinkhighlight);
  color: var(--pinkhighlight);
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 5;
  grid-row-end: 5;
  font-weight: 500;
  margin: 0.5rem 1rem 1rem;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
}
button:hover {
  background: var(--pinkhighlight);
  color: var(--white);
  cursor: pointer;
  transition: 0.25s all linear;
}
.debug {
  background: lightgoldenrodyellow;
  margin-top: 5rem;
  padding: 1rem;
}
.warning {
  background-color: #fcf0f0;
  border: 2px solid red;
  color: var(--steelbluelowlight);
  font-size: var(--medium);
  font-size: var(--regular);
  margin: 1rem 1rem 10rem;
  padding: 1rem;
  text-align: center;
}
@media (min-width: 800px) {
  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
}
</style>
