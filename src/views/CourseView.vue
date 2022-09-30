<script setup>
import BrandLines from '../components/BrandLines.vue';
import Course from '../components/Course.vue';
</script>

<template>
  <div id="course">
    <img class="hand" src="@/assets/img/hand.png" alt="" />
    <BrandLines first="#1d3e87" second="#0697a3" third="#79b0dd" />
    <main>
      <Course />
    </main>
  </div>
</template>

<style scoped>
#course {
  position: relative;
}
.hand {
  display: none;
  position: absolute;
  right: 0;
  top: 0;
  width: 25rem;
}

@media (min-width: 1000px) {
  .hand {
    display: block;
  }
}
</style>
