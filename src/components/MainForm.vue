<template>
  <div class="grid">
    <div class="left"></div>
    <div class="right">
      <FormRegister @toggle-form="toggleForm" v-if="register" />
      <FormLogin @toggle-form="toggleForm" v-else />
    </div>
  </div>
</template>

<script setup>
import FormRegister from '../components/FormRegister.vue';
import FormLogin from '../components/FormLogin.vue';
</script>
<script>
export default {
  data() {
    return {
      register: false
    };
  },
  methods: {
    toggleForm(type) {
      if (type == 'login') {
        this.register = false;
      }
      if (type == 'register') {
        this.register = true;
      }
    }
  }
};
</script>

<style scoped>
.grid {
  display: block;
  margin-top: 2rem;
}
.left {
  grid-column-start: 1;
  grid-column-end: 5;
}
.right {
  grid-column-start: 5;
  grid-column-end: 12;
}
@media (min-width: 1207px) {
  .grid {
    column-gap: 1rem;
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    margin-top: 0;
  }
}
</style>
