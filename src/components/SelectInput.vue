<template>
  <div
    class="custom-select"
    :tabindex="tabindex"
    @blur="open = false"
    @keyup.space="open = true"
  >
    <label :for="id">{{ label }}</label>
    <div
      class="selected"
      :class="{ open: open, placeholder: placeholder, error: error }"
      @click="open = !open"
    >
      {{ selected }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click.prevent="
          selected = option;
          open = false;
          $emit('input', option);
        "
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    default: {
      type: String,
      required: false,
      default: null
    },
    error: {
      type: Boolean,
      default: 0
    },
    label: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      required: true
    },
    placeholder: {
      type: Boolean,
      default: 0
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0]
        : null,
      open: false
    };
  },
  mounted() {
    this.$emit('input', this.selected);
  }
};
</script>

<style scoped>
.custom-select {
  /* position: relative; */
  width: 100%;
  outline: none;
  /* height: 34px;
  line-height: 34px; */
  margin: 0 1rem 0.5rem;
  width: 93.5%;
}

.custom-select label {
  color: var(--skybluelowlight);
  display: block;
  font-size: var(--xxsmall);
  margin-bottom: 0.125rem;
  text-transform: uppercase;
}

.custom-select .selected {
  background-color: var(--white);
  border: 1px solid var(--blue);
  color: var(--blue);
  cursor: default;
  font-size: var(--small);
  padding: 0.5rem 1rem;
  user-select: none;
}
.custom-select .selected:after {
  position: absolute;
  content: '';
  top: 40%;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: var(--blue) transparent transparent transparent;
}

.custom-select .selected.open {
  border: 1px solid var(--blue);
}

.custom-select .selected.placeholder {
  color: #aaa;
}

.custom-select .items {
  background-color: var(--bluehighlight);
  color: var(--blue);
  border-right: 1px solid var(--blue);
  border-left: 1px solid var(--blue);
  border-bottom: 1px solid var(--blue);
  font-size: var(--small);
  left: 0;
  max-height: 20rem;
  overflow-y: scroll;
  position: absolute;
  right: 0;
  width: 100%;
  z-index: 1;
}
.custom-select .items div {
  cursor: pointer;
  color: #fff;
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  user-select: none;
  transition: none;
}

.custom-select .items div:hover {
  background-color: var(--blue);
}
.custom-select:focus-visible .selected,
.custom-select:focus .selected {
  outline: 1px solid var(--skybluelowlight);
}

.selectHide {
  display: none;
}
</style>
