<script>
export default {
  name: 'PoductCard'
}
</script>

<template>
  <div class="product-card">
    <div class="product-card__badges">
      <span class="badge badge--hot">Хит продаж <img src="@/assets/fire.svg" alt=""></span>
      <span class="badge badge--discount">25%</span>
    </div>
    <div class="product-card__image">
      <img src="@/assets/productSkeleton.svg" alt="Product" width="60"/>
    </div>
    <div class="product-card__content">
      <span class="product-card__brand">Бренд</span>
      <h3 class="product-card__title">
        Полное название товара в несколько строк для вида с обрывом в конце...
      </h3>
      <div class="product-card__price">
        <span class="current">5 990 ₽</span>
        <span class="old">5 990 ₽</span>
      </div>
      <button class="product-card__buy">Купить</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/colors";

.product-card {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  position: relative;

  &__badges {
    height: 200px;
    position: absolute;
    top: 1rem;
    left: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .badge {
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.875rem;

    &--hot {
      width: 112px;
      display: flex;
      align-content: center;
      justify-content: space-between;
      background: white;
    }

    &--discount {
      position: absolute;
      left: 0;
      bottom: 0;
      background: $primary-color;
      color: white;
    }
  }

  &__image {
    display: flex;
    align-content: center;
    justify-content: center;
    margin-bottom: 1rem;
    width: 100%;
    height: 200px;
    background-color: #F8F8FA;
  }

  &__brand {
    color: #999;
    font-size: 0.875rem;
  }

  &__title {
    margin: 0.5rem 0;
    font-size: 1rem;
    line-height: 1.4;
  }

  &__price {
    margin: 1rem 0;

    .current {
      font-weight: bold;
      font-size: 1.25rem;
      margin-right: 0.5rem;
    }

    .old {
      color: #999;
      text-decoration: line-through;
    }
  }

  &__buy {
    width: fit-content;
    padding: 0.75rem;
    color: $primary-color;
    border: 1px solid $primary-color;
    background: white;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      color: #fff;
      background-color: $primary-color;
    }
  }
}
@import "@/assets/styles/responsive";
</style>
