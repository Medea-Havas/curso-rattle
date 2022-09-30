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
  margin-bottom: 0.25rem;
  position: absolute;
  top: 2rem;
}
.lines .first,
.lines .second,
.lines .third {
  height: 0.5rem;
  margin-bottom: 0.5rem;
  width: 2rem;
}
.lines-wrapper {
  height: 5rem;
  position: relative;
}
@media (min-width: 600px) {
  .lines {
    top: 4rem;
  }
  .lines .first,
  .lines .second,
  .lines .third {
    height: 0.5rem;
    margin-bottom: 0.5rem;
    width: 2.5rem;
  }
  .lines-wrapper {
    height: 8rem;
    position: relative;
  }
}
@media (min-width: 1207px) {
  .lines {
    top: 3rem;
  }
  .lines .first,
  .lines .second,
  .lines .third {
    height: 0.75rem;
    margin-bottom: 0.75rem;
    width: 3rem;
  }
}
</style>
