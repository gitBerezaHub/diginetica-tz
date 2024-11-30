<script>
export default {
  name: 'FilterSidebar'
}
</script>

<template>
  <aside class="sidebar">
    <div class="categories">
      <div v-for="i in 4" :key="`cat-${i}`" class="category">
        <span>Название категории</span>
        <span class="count">3</span>
      </div>
    </div>

    <div class="filter-section">
      <h3 class="filter-section-title">Цена</h3>
      <div class="price-range">
        <input type="text" placeholder="от 5 500 ₽"/>
        <input type="text" placeholder="до 5 500 ₽"/>
      </div>
    </div>

    <div class="filter-section">
      <div class="filter-section-brand">
        <h3>Бренд</h3>
        <p>Очистить</p>
      </div>
      <input type="text" placeholder="Поиск" class="brand-search"/>
      <div class="attributes">
        <div v-for="i in 6" :key="`attr-${i}`" class="attribute">
          <div class="checkbox-wrapper">
            <input id="checkbox" class="checkbox" type="checkbox"/>
            <label for="checkbox">Атрибут</label>
          </div>
          <span class="count">3</span>
        </div>
      </div>
    </div>

    <div class="filter-section">
      <h3 class="filter-section-title">Размер</h3>
      <div class="attributes">
        <div v-for="i in 6" :key="`size-${i}`" class="attribute">
          <div class="checkbox-wrapper">
            <input type="checkbox"/>
            <span>Атрибут</span>
          </div>
          <span class="count">3</span>
        </div>
      </div>
    </div>
  </aside>
</template>

<style scoped lang="scss">
@import "@/assets/styles/colors";

.sidebar {
  .categories {
    margin-bottom: 2rem;
  }

  .category {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
      background-color: #E2EFFF;
    }
  }

  .filter-section {
    margin-bottom: 2rem;

    .filter-section-title {
      margin-bottom: 1rem;
      text-align: center;
    }

    .filter-section-brand {
      margin-bottom: 1rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      p {
        font-size: 14px;
        font-weight: 400;
        color: #AAAAAA;
        text-decoration: underline;
      }
    }
  }

  .price-range {
    display: flex;
    gap: 1rem;

    input {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid $gray-medium;
      border-radius: 4px;
    }
  }

  .brand-search {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid $gray-medium;
    border-radius: 4px;
    margin-bottom: 1rem;
  }

  .attributes {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .checkbox-wrapper {
    width: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .attribute {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    cursor: pointer;
  }

  .count {
    color: #999;
    padding-right: 5px;
  }
}

@import "@/assets/styles/responsive";
</style>
