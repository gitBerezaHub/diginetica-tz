<template>
  <div class="app">
    <MainHeader/>
    <main class="main">
      <FilterSidebar/>
      <div class="products">
        <ProductCard v-for="i in 12" :key="`product-${i}`" />
      </div>
    </main>
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/colors";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  color: $text-color;
  background-color: $gray-light;
}

.main {
  max-width: 1920px;
  margin: 2rem auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2rem;
}

.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

@import "src/assets/styles/responsive";
</style>

<script setup lang="ts">
import MainHeader from '@/components/MainHeader.vue'
import FilterSidebar from '@/components/FilterSidebar.vue'
import ProductCard from '@/components/ProductCard.vue'
</script>
