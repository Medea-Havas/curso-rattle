<template>
  <div class="form-field">
    <label :for="id" v-html="label"></label>
    <input
      :id="id"
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    }
  }
};
</script>

<style scoped>
.form-field {
  margin: 0 1rem 0.5rem;
}
.form-field input {
  border: 1px solid var(--blue);
  color: var(--blue);
  font-size: var(--xsmall);
  padding: 0.5rem 1rem;
  width: 100%;
}
.form-field input::placeholder {
  color: #aaa;
  opacity: 1;
}
.form-field input:focus-visible,
.form-field input:focus {
  outline: 1px solid var(--skybluelowlight);
}
.form-field label {
  color: var(--skybluelowlight);
  display: block;
  font-size: var(--xxsmall);
  margin-bottom: 0.125rem;
  text-transform: uppercase;
}
</style>
