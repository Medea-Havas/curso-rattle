<template>
  <div class="header-wrap">
    <header>
      <RouterLink to="/" class="logo-link">
        <!--<Logo />-->
      </RouterLink>
    </header>
  </div>
</template>

<script setup>
import Logo from './svg/Logo.vue';
</script>

<style scoped>
.logo {
  fill: var(--white);
  width: 8rem;
}
.logo-link:hover .logo path {
  fill: var(--skyblue);
}
.header-wrap {
  width: 100%;
  background: url('../assets/header-bg.png');
  min-height: 6rem;
}
</style>
