<script setup>
import Card from "@/components/restaurants/Card.vue";

const props = defineProps({
  id: Number,
  title: String,
  dishes: Array,
})
</script>

<template>
  <section :id="title" class="mb-20">
    <h3 class="text-body-l-medium text-center mt-6">{{ title }}</h3>
    <div class="grid-wrapper">
      <Card
        v-for="item in dishes"
        :id="item.id"
        :price="item.price_number"
        :name="item.title"
        :image="item.image"
        :measure="item.weight || item.price"
        :count="item.count"
        :description="item.ingredients"
        :adds="item.modifiers"
        :selected-adds="item.selectedAdds"
        grid
      />
    </div>
  </section>
</template>

<style scoped>

</style>