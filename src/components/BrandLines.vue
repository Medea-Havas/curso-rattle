<template>
  <div class="lines-wrapper">
    <div class="lines">
      <div class="first" :style="{ backgroundColor: first }"></div>
      <div class="second" :style="{ backgroundColor: second }"></div>
      <div class="third" :style="{ backgroundColor: third }"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['first', 'second', 'third']
};
</script>

<style scoped>
.lines {
  right: 0;
  position: absolute;
  top: 2rem;
}
.lines .first,
.lines .second,
.lines .third {
  height: 0.5rem;
  margin-bottom: 1rem;
  width: 2rem;
}
.lines-wrapper {
  height: 8rem;
  position: relative;
}
@media (min-width: 600px) {
  .lines {
    top: 4rem;
  }
  .lines .first,
  .lines .second,
  .lines .third {
    height: 0.75rem;
    margin-bottom: 1.25rem;
    width: 3rem;
  }
  .lines-wrapper {
    height: 12rem;
    position: relative;
  }
}
@media (min-width: 1207px) {
  .lines {
    top: 6rem;
  }
  .lines .first,
  .lines .second,
  .lines .third {
    height: 0.95rem;
    width: 4rem;
  }
  .lines-wrapper {
    height: 17rem;
    position: relative;
  }
}
</style>
