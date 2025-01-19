<script setup>
import AppCheckbox from "@/components/UI/AppCheckbox.vue";
import formatPrice from "../../utils/formatPrice.js";

const props = defineProps({
  checked: Boolean,
  title: String,
  price: Number
})

const {checked, ...rest} = props;

const itemToEmit = {...rest};

const emits = defineEmits(['addParam'])

</script>

<template>
<div class="flex items-start gap-x-4">
  <AppCheckbox
    :checked="checked"
    @update:modelValue="$event ? emits('addParam', itemToEmit) : null"
    circle
  />
  <div @click="emits('addParam', itemToEmit)" class="flex flex-grow items-center border-b border-solid border-neutral-300 pb-5">
    <div class="text-body-m-medium text-black-300">{{title}}</div>
    <div class="text-body-m-medium text-green ml-auto">+ {{formatPrice(price)}}</div>
  </div>
</div>
</template>

<style scoped>

</style>