<script setup>
import AppCheckbox from "@/components/UI/AppCheckbox.vue";
import formatPrice from "../../utils/formatPrice.js";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },

  isChecked: {
    type: Boolean,
    required: true,
  },
  withoutPrice: {
    type: Boolean,
    default: true
  },
  additionalText: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false
  },
  transparent: {
    type: Boolean,
    default: false
  }
});

const emits = defineEmits(["update:checked"]);

const handleCheckboxChange = (value) => {
  emits("update:checked", value);
};
</script>

<template>
  <div class="flex items-center gap-x-4">
    <AppCheckbox
      :checked="isChecked"
      @update:modelValue="handleCheckboxChange"
      :transparent="transparent"
      circle
    />
    <div class="line-label">
      <div class="line-title" :class="{'line-title--disabled': disabled}">{{ title }}</div>
      <div v-if="withoutPrice" class="text-body-m-medium text-green ml-auto">{{ price }}</div>
      <div v-if="additionalText" class="text-body-m-regular text-neutral-500 ml-auto">{{ additionalText }}</div>
    </div>
  </div>
</template>

<style scoped>
.line-label {
  @apply flex flex-grow items-center border-b border-solid border-neutral-300 py-4;
}

.line-title {
  @apply text-body-m-medium text-black-300;
}

.line-title--disabled {
  @apply text-neutral-500
}
</style>