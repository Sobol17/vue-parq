<script setup>
import { ref } from 'vue';

const props = defineProps({
  fullScreen: Boolean
})

const isOpen = ref(false);

const openModal = () => {
  isOpen.value = true;
};

const closeModal = () => {
  isOpen.value = false;
};

defineExpose({ openModal, closeModal });
</script>

<template>
  <Transition name="fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
      @click="closeModal"
    ></div>
  </Transition>

  <Transition name="slide-up">
    <div
      v-if="isOpen"
      class="modal-content"
      :class="{'modal-content--fullscreen': fullScreen}"
    >
      <div
        @click="closeModal"
        class="sticky top-0 bg-white p-[10px] flex justify-center"
      >
        <span class="block content-none w-7 h-[5px] bg-green-light-2 rounded-[3px]"></span>
      </div>

      <slot></slot>
    </div>
  </Transition>
</template>

<style scoped>

.modal-content {
  @apply fixed inset-x-0 bottom-0 z-50 mx-auto flex flex-col overflow-y-auto bg-white shadow-lg rounded-t-[16px]
}

.modal-content--fullscreen {
  @apply top-0 rounded-none
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}
</style>