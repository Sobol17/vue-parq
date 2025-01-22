<script setup>
import { onMounted, ref } from "vue";
import IconRadio from "@/components/icons/IconRadio.vue";
import randomAlphaNumeric from "@/utils/randomAlphaNumeric.js";

const id = ref();

const emits = defineEmits(['update:modelValue']);

const props = defineProps({
  name: String,
  value: [String, Boolean, Number, Object],
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: null,
  },
  disabled: Boolean,
  sm: Boolean,
  label: Boolean,
});

function handleCheckboxChange(event) {
  emits('update:modelValue', props.value);
}

onMounted(() => {
  id.value = randomAlphaNumeric(15);
});
</script>

<template>
  <label :for="id" class="radio__label">
    <input
      type="radio"
      :id="id"
      :value="props.value"
      :disabled="props.disabled"
      class="radio__input"
      :name="props.name"
      :checked="props.modelValue === props.value"
      @change="handleCheckboxChange"
    >
    <span class="radio__input-view">
      <icon-radio class="radio__input-icon"/>
    </span>
    <div class="radio__text__wrapper" :class="{'radio__text__wrapper--disabled': disabled}">
      <slot></slot>
    </div>
  </label>
</template>
<style scoped>
.radio__input {
  position: absolute;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.radio__label {
  @apply cursor-pointer flex items-start pt-4;
}

.radio__input-view {
  @apply flex items-center mr-2.5 rounded-[20px] justify-center bg-transparent transition-all duration-300 w-[24px] h-[24px];
}

.radio__text__wrapper--disabled {
  @apply text-neutral-500
}

.radio__input-icon {
  @apply opacity-0 transition-all duration-300
}

.radio__input:checked + .radio__input-view .radio__input-icon {
  @apply opacity-100 border-none
}

.radio__input:checked + .radio__input-view {
  @apply bg-green rounded-full border-none
}

.radio__text__wrapper {
  @apply flex justify-between items-center flex-grow border-b border-solid border-neutral-300 pb-4
}
</style>