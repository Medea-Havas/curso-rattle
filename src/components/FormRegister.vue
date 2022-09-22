<template>
  <div class="register">
    <p class="loader" v-if="loading"><img src="@/assets/img/loader.gif" /></p>
    <p class="warning" v-if="sentForm">
      ¡Bienvenido {{ user.name }}!<br /><br />
      Tu registro se ha realizado correctamente. En los próximos días te
      enviaremos un correo electrónico para poder acceder a la plataforma y
      comenzar con tu formación. Gracias por tu confianza.
    </p>
    <form @submit.prevent="handleSubmit" v-else>
      <div class="grid">
        <TextInput
          id="name"
          label="Nombre"
          type="text"
          placeholder="Nombre"
          v-model="user.name"
          @input="handleInput"
          @blur="handleFocusOut('', $event)"
        />
        <TextInput
          id="lastName"
          label="Apellidos"
          type="text"
          placeholder="Apellidos"
          v-model="user.lastName"
          @input="handleInput"
          @blur="handleFocusOut('', $event)"
        />
        <TextInput
          id="email"
          label="Email"
          type="email"
          placeholder="Email"
          v-model="user.email"
          @input="handleInput"
          @blur="handleFocusOut('', $event)"
        />
        <TextInput
          id="dni"
          label="DNI/NIE"
          type="text"
          placeholder="DNI/NIE"
          v-model="user.dni"
          @input="handleInput"
          @blur="handleFocusOut('', $event)"
        />
        <TextInput
          id="work_at"
          label="Centro de trabajo"
          type="text"
          placeholder="Centro de trabajo"
          v-model="user.work_at"
          @input="handleInput"
          @blur="handleFocusOut('', $event)"
        />
        <SelectInput
          id="specialty"
          label="Especialidad"
          :options="[
            'Cardiología',
            'Cirugía Pediátrica',
            'Enfermería Obstétrico-Ginecológica (Matrona)',
            'Enfermería Geriátrica',
            'Enfermería de Cuidados Médico-Quirúrgicos',
            'Enfermería Familiar y Comunitaria',
            'Enfermería Pediátrica',
            'Enfermería (otro)',
            'Farmacología Clínica',
            'Geriatría',
            'Infectología',
            'Inmunología',
            'Medicina Familiar y Comunitaria',
            'Medicina Preventiva y Salud Pública',
            'Neonatología',
            'Neumología',
            'Obstetricia y Ginecología',
            'Pediatría',
            'Urgencias y Medicina Crítica',
            'Medicina (otra especialidad)'
          ]"
          :default="'Especialidad'"
          :placeholder="userSpecialty"
          :error="selectError"
          class="select"
          @input="displayToKey($event)"
          @focusout="handleFocusOutSelect($event)"
        />
        <TextInput
          id="password"
          label="Contraseña"
          type="password"
          placeholder="Contraseña"
          v-model="user.password"
          @input="handleInput"
          @blur="handleFocusOut('', $event)"
        />
        <TextInput
          id="confirm"
          label="Confirmar contraseña"
          type="password"
          placeholder="Confirmar contraseña"
          v-model="user.confirmPassword"
          @input="handleInput"
          @blur="handleFocusOut(user.password, $event)"
        />
      </div>
      <div class="legal">
        <div class="checkContainer">
          <div
            id="checkLegal"
            class="fakeCheckbox"
            v-bind:class="{ active: user.legal }"
            @click.prevent="checkLegal"
          ></div>
          <input id="legal" type="checkbox" v-model="user.legal" />
          <label for="legal"
            >He leído y acepto el
            <a href="https://www.sanofi.es/es/aviso-legal" target="_blank"
              >aviso legal</a
            >
            y la
            <a
              href="https://www.sanofi.es/es/politica-de-privacidad"
              target="_blank"
              >política de privacidad</a
            ></label
          >
        </div>
        <div class="checkContainer">
          <div
            id="checkMarketing"
            class="fakeCheckbox"
            v-bind:class="{ active: user.marketing }"
            @click.prevent="checkMarketing"
          ></div>
          <input id="marketing" type="checkbox" v-model="user.marketing" />
          <label for="marketing"
            >Acepto el envío de comunicaciones comerciales y/o científicas
            personalizadas, en base a mis áreas de interés clínico, y el envío
            de noticias corporativas de Sanofi-aventis SA.
            <a id="detail" href="#" @click.prevent="showDetail"
              >Ver en detalle</a
            ></label
          >
        </div>
      </div>
      <div class="grid2">
        <button>Registrarse</button>
      </div>
    </form>
    <Transition>
      <div class="errors" v-if="errors.length">
        <p>Por favor, corrija los siguientes errores:</p>
        <ul>
          <li v-for="(error, key) in errors" :key="key">{{ error }}</li>
        </ul>
      </div>
    </Transition>
  </div>
  <div class="detail" v-if="details">
    <p>
      Los datos personales que Ud. nos facilite serán tratados por
      Sanofi-Aventis S.A (en adelante, “Sanofi”) en base a las siguientes
      finalidades y de acuerdo con su consentimiento o interés legítimo:
    </p>
    <ul>
      <li>
        Gestionar las relaciones promocionales con Sanofi, invitarle a eventos,
        reuniones científicas, y/o iniciativas llevadas a cabo por Sanofi-
        Aventis, a través de distintos medios online como offline, en caso de
        que así usted nos haya autorizado.
      </li>
      <li>
        Llevar a cabo procedimientos de elaboración de perfiles o segmentación
        profesional para comprender mejor sus intereses, preferencias y su
        opinión como profesional.
      </li>
      <li>
        Adicionalmente, podremos utilizar sus datos para fines estadísticos,
        históricos o científicos, previamente anonimizados.
      </li>
    </ul>
    <div class="close" @click="hideDetail"><span>X</span></div>
  </div>
</template>

<script setup>
import TextInput from './TextInput.vue';
import SelectInput from './SelectInput.vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
</script>

<script>
export default {
  data() {
    return {
      errors: [],
      selectError: false,
      user: {
        email: '',
        name: '',
        lastName: '',
        dni: '',
        work_at: '',
        specialty: '',
        password: '',
        confirmPassword: '',
        legal: '',
        optional: '',
        marketing: ''
      },
      sentForm: false,
      loading: false,
      token: useRoute().query.token,
      details: false,
      visibleSelect: false
    };
  },
  components: {
    SelectInput
  },
  computed: {
    userSpecialty() {
      return this.user.specialty === 'Especialidad';
    },
    userSpecialtySelected() {
      return this.user.specialty;
    }
  },
  methods: {
    checkLegal() {
      this.user.legal = !this.user.legal;
    },
    checkMarketing() {
      this.user.marketing = !this.user.marketing;
    },
    displayToKey(event) {
      console.log(event);
      this.user.specialty = event;
    },
    formErrors() {
      if (this.user.name == '') {
        this.errors.push('Nombre requerido');
      }
      if (this.user.lastName == '') {
        this.errors.push('Apellidos requeridos');
      }
      if (this.user.email == '') {
        this.errors.push('Email requerido');
      } else if (!this.validateEmail(this.user.email)) {
        this.errors.push('Formato de email inválido');
      }
      if (this.user.dni == '') {
        this.errors.push('DNI/NIE requerido');
      } else if (!this.validateDNI(this.user.dni)) {
        this.errors.push('Formato de DNI/NIE inválido');
      }
      if (this.user.work_at == '') {
        this.errors.push('Centro de trabajo requerido');
      }
      if (this.user.specialty == '' || this.user.specialty == 'Especialidad') {
        this.errors.push('Especialidad requerida');
      }
      if (this.user.password == '') {
        this.errors.push('Contraseña requerida');
      } else if (this.user.password.length < 8) {
        this.errors.push('La contraseña debe tener al menos 8 caracteres');
      }
      if (this.user.confirmPassword == '') {
        this.errors.push('Confirmar contraseña requerida');
      } else if (this.user.confirmPassword !== this.user.password) {
        this.errors.push('Las contraseñas no coinciden');
      }
      if (this.user.legal == '') {
        this.errors.push(
          'Aceptar el aviso legal y la política de privacidad es requerido'
        );
      }
      return this.errors.length;
    },
    handleFocusOut(value, event) {
      if (event.target.value === '') {
        event.target.classList = 'error';
      } else {
        if (event.target.id == 'email') {
          if (this.validateEmail(event.target.value)) {
            event.target.classList = '';
          } else {
            event.target.classList = 'error';
          }
        } else if (event.target.id == 'dni') {
          if (this.validateDNI(event.target.value)) {
            event.target.classList = '';
          } else {
            event.target.classList = 'error';
          }
        } else if (event.target.id == 'confirm') {
          if (event.target.value == value) {
            event.target.classList = '';
          } else {
            event.target.classList = 'error';
          }
        }
      }
    },
    handleFocusOutSelect(event) {
      let empty = event.target.children[1].childNodes[0].data == 'Especialidad';
      if (empty) {
        event.target.children[1].classList += ' error';
      } else {
        this.user.specialty = value;
        event.target.children[1].classList -= ' error';
      }
    },
    handleInput(event) {
      event.target.classList = '';
      this.errors = [];
    },
    handleSubmit: function () {
      this.errors = [];
      if (!this.formErrors()) {
        this.loading = true;
        let postUser = {
          name: this.user.name,
          last_name: this.user.lastName,
          email: this.user.email,
          dni: this.user.dni,
          work_at: this.user.work_at,
          specialty: this.user.specialty,
          password: this.user.password
        };
        axios
          .post(this.rattleUrl + '/students/create.php', postUser)
          .then(function (response) {
            this.sentForm = true;
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        this.loading = false;
      }
    },
    toggleSelect() {
      this.visibleSelect = true;
    },
    hideDetail() {
      this.details = false;
    },
    showDetail() {
      this.details = true;
    },
    validateEmail(mail) {
      return mail.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    },
    validateDNI(dni) {
      var numero, letr, letra;
      var expresion_regular_dni = /^[XYZ]?\d{5,8}[A-Z]$/;

      dni = dni.toUpperCase();

      if (expresion_regular_dni.test(dni) === true) {
        numero = dni.substr(0, dni.length - 1);
        numero = numero.replace('X', 0);
        numero = numero.replace('Y', 1);
        numero = numero.replace('Z', 2);
        letr = dni.substr(dni.length - 1, 1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero + 1);
        if (letra != letr) {
          //alert('Dni erroneo, la letra del NIF no se corresponde');
          return false;
        } else {
          //alert('Dni correcto');
          return true;
        }
      } else {
        //alert('Dni erroneo, formato no válido');
        return false;
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
  background: var(--pinkhighlight);
  border: 1px solid var(--pinkhighlight);
  color: var(--white);
  font-weight: 500;
  grid-column-start: 2;
  letter-spacing: 0.3rem;
  margin: 0.5rem 1rem 1rem;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  transition: 0.25s all linear;
}
button:hover {
  background: white;
  color: var(--pinkhighlight);
  cursor: pointer;
  transition: 0.25s all linear;
}
input[type='checkbox'] {
  display: none;
}
.errors,
.warning {
  font-size: var(--regular);
  margin: 1rem;
  padding: 1rem;
}
.checkContainer {
  vertical-align: middle;
}
.detail {
  background: var(--white);
  border: 4px solid var(--skybluelowlight);
  left: 50%;
  font-size: var(--small);
  max-width: 34rem;
  padding: 1.5rem 1rem;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}
.detail ul {
  list-style-type: square;
  margin-top: 1rem;
  padding: 0 1rem;
}
.detail li {
  margin-bottom: 0.25rem;
}
.detail .close {
  align-items: center;
  background: var(--skybluelowlight);
  border: 1px solid var(--skybluelowlight);
  border-radius: 50%;
  color: var(--white);
  display: flex;
  height: 1.5rem;
  justify-content: center;
  position: absolute;
  top: -0.75rem;
  transition: 0.25s all ease-out;
  right: -0.75rem;
  width: 1.5rem;
}
.detail .close:hover {
  background: var(--steelbluelowlight);
  border: 1px solid var(--steelbluelowlight);
  cursor: pointer;
  transition: 0.25s all ease-in;
}
.detail .close span {
  font-weight: 900;
}
.errors {
  background-color: #fcf0f0;
  border: 2px solid red;
}
.errors p {
  font-size: var(--regular);
  margin-bottom: 0.5rem;
}
.errors ul {
  padding: 0;
}
.errors li {
  font-size: var(--small);
  list-style: none;
}
.errors li:before {
  content: '→ ';
}
.fakeCheckbox {
  border: 1px solid var(--skybluelowlight);
  border-radius: 2px;
  display: inline-block;
  height: var(--small);
  margin-right: 0.05rem;
  position: relative;
  top: 0.15rem;
  width: var(--small);
}
.fakeCheckbox.active::after {
  content: '✔';
  color: var(--skybluelowlight);
  font-size: var(--xsmall);
  left: 0.1rem;
  position: absolute;
  top: -0.05rem;
}
.loader {
  text-align: center;
}
.legal {
  margin: 1rem;
}
.legal label {
  color: var(--skybluelowlight);
  font-size: var(--small);
  margin-left: 0.5rem;
}
.loader img {
  width: 6rem;
}
.right {
  position: relative;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.warning {
  background: #c9f7fb;
  border: 1px solid #0596a3;
  color: var(--steelbluelowlight);
  margin-bottom: 10rem;
  text-align: center;
}
@media (min-width: 800px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
  .grid2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
}
</style>
