<script setup>
import IconSearch from "@/components/icons/IconSearch.vue";

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: true
  }
})

const model = defineModel()
</script>

<template>
<div class="relative">
  <div class="flex items-center gap-x-5">
    <input
      class="input-search"
      type="text"
      :name="name"
      v-model="model"
      :placeholder="placeholder"
    >
    <button v-if="modelValue !== ''" class="input-button">Cancel</button>
  </div>

  <i class="absolute top-1/2 -translate-y-1/2 left-4">
    <IconSearch />
  </i>
</div>
</template>

<style scoped>
.input-search {
  @apply pl-10 outline-none h-9 w-full bg-white rounded-full text-body-s-regular;
}

.input-button {
  @apply text-green text-body-m-medium outline-none bg-transparent;
}
</style>