<script setup>
import RestaurantsHeader from "@/components/layouts/RestaurantsHeader.vue";
import AppSearch from "@/components/UI/AppSearch.vue";
import {ref} from "vue";
import CategoryItem from "@/components/restaurants/CategoryItem.vue";
import {useRestaurantsStore} from "@/stores/restaurants.js";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';

import 'swiper/css';

import 'swiper/css/pagination';
import IconFullArrow from "@/components/icons/IconFullArrow.vue";
import Card from "@/components/restaurants/Card.vue";
import AppButton from "@/components/UI/AppButton.vue";

const modules = [ Pagination ];

const search = ref('')

const restaurantsStore = useRestaurantsStore()
</script>

<template>
<div class="container">
  <RestaurantsHeader />

  <AppSearch
    class="mt-6"
    name="search"
    placeholder="Search"
    v-model="search"
  />

  <section>
    <div class="flex justify-between items-center mt-6">
      <h3 class="text-body-l-medium">Categories</h3>
      <button class="text-green text-body-m-medium outline-none bg-transparent">View all</button>
    </div>

    <swiper
      :slides-per-view="1"
      :pagination="{
      el: '.categories-pagination',
      clickable: true,
      type: 'bullets',
      bulletClass: 'category-bullet',
      bulletActiveClass: 'category-bullet-active'
    }"
      :modules="modules"
    >
      <swiper-slide v-for="item in 4">
        <div class="grid grid-cols-4 gap-[10px] mt-[18px]">
          <CategoryItem
            v-for="category in restaurantsStore.categories"
            :key="category.text"
            :icon="category.icon"
            :text="category.text"
          />
        </div>
      </swiper-slide>
    </swiper>
    <div class="categories-pagination"></div>
  </section>

  <section>
    <div class="flex justify-between items-center mt-6">
      <h3 class="text-body-l-medium">Recently ordered</h3>
      <IconFullArrow class="text-green" />
    </div>

    <swiper
      class="cards-slider"
      slides-per-view="auto"
      :space-between="10"
    >
      <swiper-slide class="card-swiper-slide" v-for="item in 10">
        <Card
          name="Kurure ramen asian"
          measure="312g"
        />
      </swiper-slide>
    </swiper>
  </section>

  <section>
    <div class="flex justify-between items-center mt-6">
      <h3 class="text-body-l-medium">Popular dishes</h3>
      <IconFullArrow class="text-green" />
    </div>

    <swiper
      class="cards-slider"
      slides-per-view="auto"
      :space-between="10"
    >
      <swiper-slide class="card-swiper-slide" v-for="item in 10">
        <Card
          name="Kurure ramen asian"
          measure="312g"
        />
      </swiper-slide>
    </swiper>
  </section>

  <section class="mb-20">
    <h3 class="text-body-l-medium text-center mt-6">Cofee</h3>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-[10px] gap-y-[18px] mt-3">
      <Card
        grid
        v-for="item in 8"
        name="Kurure ramen asian"
        measure="312g"
      />
    </div>
  </section>

  <AppButton
    class="fixed bottom-5 right-5 left-5"
    text="Order"
    gold
  />
</div>
</template>

<style>
.categories-pagination {
  @apply flex justify-center gap-[6px] mt-[10px];
}

.category-bullet {
  @apply block size-1 rounded-full bg-neutral-300;
}

.category-bullet-active {
  @apply bg-black-300;
}

.cards-slider {
  @apply mt-[18px] mx-[-20px] px-5 w-[calc(100%_+_40px)];
}

.card-swiper-slide {
  width: 125px !important;
}
</style>