<script setup>
import { onMounted, ref, watch } from 'vue'
import IconRadio from "@/components/icons/IconRadio.vue";
import randomAlphaNumeric from "@/utils/randomAlphaNumeric.js";

const isChecked = ref(false)
const id = ref()

const emits = defineEmits(['update:modelValue'])

const props = defineProps({
  name: String,
  value: [String, Boolean],
  checked: [Boolean, Number, String],
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: false,
  },
  disabled: Boolean,
  sm: Boolean,
  circle: Boolean,
  transparent: Boolean
})

watch(
  () => props.modelValue,
  newValue => {
    isChecked.value = newValue
  }
)

function handleCheckboxChange(event) {
  isChecked.value = event.target.checked
  emits('update:modelValue', event.target.checked)
}

onMounted(() => {
  id.value = randomAlphaNumeric(15)
  isChecked.value = props.modelValue
})
</script>

<template>
  <label :for="id" class="response__form-label">
    <input
      type="checkbox"
      :id="id"
      :checked="props.checked"
      :value="props.value"
      :disabled="props.disabled"
      class="response__form-checkbox"
      :name="props.name"
      @change="handleCheckboxChange"
    />
    <span
      class="response__form-checkbox-view response__form-checkbox-personalData"
      :class="{'response__form-checkbox-circle': props.circle, 'response__form-checkbox-transparent': props.transparent}"
    >
			<IconRadio class="response__form-checkbox-icon" />
		</span>
  </label>
</template>

<style scoped>
.response__form-checkbox {
  position: absolute;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.response__form-label {
  @apply cursor-pointer flex items-center;
}

.response__form-checkbox-view {
  @apply flex items-center justify-center mr-2.5 border border-solid border-neutral-300 rounded-md bg-white transition-all duration-300;
  box-sizing: border-box;
  width: 1.25rem;
  height: 1.25rem;
}

.response__form-text {
  @apply text-body-s-regular;
}

.response__form-checkbox-icon {
  @apply opacity-0 transition-all duration-300;
}

.response__form-checkbox:checked + .response__form-checkbox-view {
  @apply bg-green border-transparent;
}

.response__form-checkbox:checked
+ .response__form-checkbox-view
.response__form-checkbox-icon {
  @apply opacity-100;
}

.response__form-checkbox-circle {
  @apply rounded-full size-6;
}

.response__form-checkbox-transparent {
  @apply invisible;
}
</style>
