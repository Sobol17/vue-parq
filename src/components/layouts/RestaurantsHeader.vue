<script setup>
import IconArrowStroke from "@/components/icons/IconArrowStroke.vue";
import IconArrowDown from "@/components/icons/IconArrowDown.vue";
import AppButton from "@/components/UI/AppButton.vue";
import IconMenu from "@/components/icons/IconMenu.vue";
import {useRestaurantsStore} from "@/stores/restaurants.js";
import IconSettings from "@/components/icons/IconSettings.vue";
import HeaderCategoryItem from "@/components/restaurants/HeaderCategoryItem.vue";
import Modal from "@/components/modals/Modal.vue";
import {onMounted, ref, watch} from "vue";
import IconTable from "@/components/icons/IconTable.vue";
import RestarauntCard from "@/components/restaurants/RestarauntCard.vue";
import {useRoute, useRouter} from "vue-router";

defineProps({
  fixed: Boolean
})

const restaurantsStore = useRestaurantsStore()

const modal = ref(null);

const openModal = () => {
  modal.value.openModal();
};

const closeModal = () => {
  modal.value.closeModal();
}

const router = useRouter()
const route = useRoute()
const scrollToSection = (categoryItem) => {
  router.push({hash: `#${categoryItem.text.toLowerCase()}`})
}

const applyActiveRestaurant = async () => {
  await restaurantsStore.fetchCategories()
  closeModal()
}
</script>

<template>
<header class="header" :class="{'header--fixed': fixed}">
  <div class="header__inner">
    <IconArrowStroke class="rotate-180" />
    <div class="flex items-center gap-x-2" @click="openModal">
      <div class="font-lora text-headline cursor-pointer">{{ restaurantsStore.activeRestaurant.title || 'Restaurant' }}</div>
      <IconArrowDown md />
    </div>
    <AppButton icon text="" @click="router.push('/orders')">
      <IconMenu />
    </AppButton>
  </div>

  <div v-show="fixed" class="flex items-center gap-x-6 py-4">
    <AppButton class="settings-btn horizontal-scroll-container" icon text="">
      <IconSettings class="text-white" />
    </AppButton>
    <div class="header__categories">
      <div class="flex space-x-4 pl-1 pr-4">
        <HeaderCategoryItem
          v-for="item in restaurantsStore.categories"
          :text="item.title"
          :icon="item.image"
          :is-active="route.hash === `#${item.title.toLowerCase()}`"
          @click="scrollToSection"
        />
      </div>
    </div>
  </div>

  <!-- Restaurants list modal -->
  <Teleport to="body">
    <Modal ref="modal" full-screen>

      <div class="flex items-baseline justify-between px-5 mt-4">
        <div class="font-lora text-headline">Choose a restaurant</div>
        <div @click="closeModal" class="text-body-m-medium text-green cursor-pointer">Close</div>
      </div>

      <div class="flex items-end justify-center gap-x-1 mt-6">
        <IconTable />
        <div class="text-body-xs-medium text-green">Table reservation</div>
      </div>

      <div class="flex flex-col gap-y-6 px-5 my-6">
        <RestarauntCard
          v-for="restaurant in restaurantsStore.restaurants"
          :restaurant="restaurant"
        />
      </div>

      <div class="sticky bottom-0 bg-white rounded-t-[15px] border border-solid border-neutral-300 py-4 px-5">
        <div class="flex gap-x-3">
          <AppButton
            @click="closeModal"
            class="flex-grow"
            text="Reset"
            secondary
          />
          <AppButton
            @click="applyActiveRestaurant"
            class="flex-grow"
            text="Apply"
          />
        </div>
      </div>
    </Modal>
  </Teleport>
</header>
</template>

<style scoped>
.header {
  @apply pt-2 top-[-13%] transition-all max-w-[800px] mx-auto;
}

.header__inner {
  @apply flex justify-between items-center
}

.header__categories {
  @apply flex items-center overflow-x-auto mx-[-20px] w-[calc(100%_+_40px)] relative;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.header--fixed {
  @apply fixed top-0 left-0 right-0 w-full bg-white-bg z-[10] px-5 sm:px-10
}

.settings-btn {
  @apply w-[46px] h-[30px] shrink-0 relative
}
</style>