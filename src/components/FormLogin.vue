<template>
  <!-- <p class="warning">
    Regístrese a través del enlace que recibió en el email de invitación
  </p> -->
  <div class="register">
    <form @submit.prevent="handleSubmit($event)">
      <TextInput
        label="Email"
        type="email"
        placeholder="Email"
        v-model="user.email"
      />
      <TextInput
        label="Contraseña"
        type="password"
        placeholder="Contraseña"
        v-model="user.password"
      />
      <button id="create" @click.prevent="$emit('toggleForm', 'register')">
        Crear cuenta
      </button>
      <button class="disabled" @click.prevent>Entrar</button>
    </form>
  </div>
  <!-- <div class="debug">
    <code>Register: {{ register }}</code>
  </div> -->
</template>

<script setup>
import axios from 'axios';
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
  },
  emits: ['toggleForm'],
  methods: {
    handleSubmit(event) {
      if (window.localStorage.getItem('token')) {
        this.$router.push('/curso-vrs');
      } else {
        axios
          .post(this.rattleUrl + '/students/login.php', {
            email: event.target[0].value,
            password: event.target[1].value
          })
          .then(response => {
            window.localStorage.setItem('token', response.data.token);
            this.$router.push('/curso-vrs');
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
};
</script>

<style scoped>
form {
  display: block;
}
button {
  background: white;
  border: 1px solid var(--pinkhighlight);
  color: var(--pinkhighlight);
  font-size: var(--xxsmall);
  font-weight: 500;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 2;
  letter-spacing: 0.3rem;
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
button#create {
  border: 1px solid var(--bluehighlight);
  color: var(--bluehighlight);
  grid-column-start: 1;
  grid-row-start: 2;
}
button#create:hover {
  background: var(--bluehighlight);
  color: var(--white);
  cursor: pointer;
  transition: 0.25s all linear;
}
.disabled:hover:after {
  background: rgba(0, 0, 0, 0.2);
  content: '.';
  font-size: 0;
  left: 0;
  height: 100%;
  position: absolute;
  width: 100%;
  top: 0;
}
.disabled:hover {
  cursor: not-allowed;
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
