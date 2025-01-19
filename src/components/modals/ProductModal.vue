<script setup>
import {ref} from "vue";
import IconTable from "@/components/icons/IconTable.vue";
import RestarauntCard from "@/components/restaurants/RestarauntCard.vue";
import AppButton from "@/components/UI/AppButton.vue";

const modal = ref(null);

const openModal = () => {
  modal.value.openModal();
};

const closeModal = () => {
  modal.value.closeModal();
}
</script>

<template>
  <!-- Restaurants list modal -->
  <Teleport to="body">
    <Modal ref="modal">

      <div class="flex items-baseline justify-between px-5 mt-4">
        <div class="font-lora text-headline">Choose a restaurant</div>
        <div @click="closeModal" class="text-body-m-medium text-green">Close</div>
      </div>

      <div class="flex items-end justify-center gap-x-1 mt-6">
        <IconTable />
        <div class="text-body-xs-medium text-green">Table reservation</div>
      </div>

      <div class="flex flex-col gap-y-6 px-5 my-6">
        <RestarauntCard
          v-for="i in 8"
          img="https://placehold.jp/3d4070/ffffff/600x300.png"
          name="Herbology"
          menu="Asian meny"
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
            @click="closeModal"
            class="flex-grow"
            text="Apply"
          />
        </div>
      </div>
    </Modal>
  </Teleport>
</template>

<style scoped>

</style>