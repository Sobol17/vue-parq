<script setup>
import {computed, useSlots} from 'vue';
import formatPrice from "../../utils/formatPrice.js";
const emits = defineEmits(['click']);
const props = defineProps({
  text: {
    type: String,
    required: true,
    default: 'Кнопка',
  },
  type: {
    type: String,
    default: 'button',
  },
  disabled: Boolean,
  sm: Boolean,
  icon: Boolean,
  big: Boolean,
  gold: Boolean,
  transparent: Boolean,
  no_border: Boolean,
  price: Number,
  secondary: Boolean
});
const classObject = computed(() => {
  return {
    sm: props.sm,
    big: props.big,
    transparent: props.transparent,
    gold: props.gold,
    icon: props.icon,
    no_border: props.no_border,
    secondary: props.secondary
  };
});
const slots = useSlots()
const hasSlots = computed(()=>!!slots.default)
</script>

<template>
  <button :type="type" :disabled="disabled" class="button" :class="classObject" @click="emits('click')">
    <div class="h-6 max-w-6 flex items-center" v-if="hasSlots">
      <slot></slot>
    </div>
    <span :class="{'flex items-center justify-center relative w-full': price > 0}">
      <span>{{ text }}</span>
      <span
        v-if="price > 0"
        :class="{'flex items-center absolute opacity-70 right-0': price > 0}"
      >
        {{formatPrice(price)}}
      </span>
    </span>
  </button>
</template>

<style scoped>
.button {
  @apply text-button text-white bg-green px-5 h-[52px] rounded-[15px] flex flex-row items-center justify-center gap-x-1 hover:bg-green-dark transition-colors active:bg-green-dark disabled:bg-neutral-300 disabled:text-neutral-500;
}

.button:disabled {
  @apply cursor-not-allowed;
}

.transparent {
  background-color: #EEF0F0;
  color: #494949;
}

.transparent:hover {
  background-color: #ededed;
}

.transparent:active {
  background-color: #e3e3e3;
}

.transparent:disabled {
  color: #adadad;
}

.gold {
  background-color: #BBAB70 !important;
}

.md {
  @apply h-[45px] text-[13px] rounded-[10px];
}

.sm {
  @apply h-[35px] text-[13px] rounded-[8px];
}

.icon {
  @apply size-10 px-0 rounded-[8px];
}

.no_border {
  border: none !important;
}

.secondary {
  @apply text-green bg-white border border-solid border-green hover:bg-neutral-200
}
</style>