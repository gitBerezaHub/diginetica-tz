<script>
export default {
  name: 'MainHeader'
}
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__left">
        <div class="header__logo"><img src="../assets/DGlogo.svg?height=24&width=24" alt="Logo" class="header__logo-img"/>Логотип
        </div>
        <button class="header__catalog-btn">Каталог</button>
      </div>
      <div class="header__search">
        <img src="@/assets/search.svg" alt="">
        <input type="text" placeholder="Поиск по 100 000 товаров"/>
      </div>
      <nav class="header__nav">
        <a href="#">Информация о компании</a>
        <a href="#">Контакты</a>
        <a href="#">Полезные ссылки</a>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import "@/assets/styles/colors";

.header {
  background: white;
  border-bottom: 1px solid $gray-medium;
  padding: 1rem 0;

  &__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 2rem;
    align-items: center;
    gap: 2rem;
  }

  &__left {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  &__logo-img {
    width: 24px;
    height: 24px;
  }

  &__logo {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 180px;
    padding: 0 24px;
    font-size: 16px;
    font-weight: 400;
  }

  &__catalog-btn {
    padding: 0.5rem 1rem;
    border: 1px solid $primary-color;
    border-radius: 4px;
    background: white;
    cursor: pointer;
  }

  &__search {
    flex: 1;
    width: 100%;
    border: 1px solid $primary-color;
    border-radius: 10px;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: end;
    input {
      border: none;
      height: 100%;
      width: calc(100% - 24px);
      padding: 0.75rem 1rem 0.75rem 0.5rem;
      border-radius: 10px;

      &:focus {
        outline: none;
      }
    }
  }

  &__nav {
    display: flex;
    gap: 1.5rem;

    a {
      color: $text-color;
      text-decoration: none;

      &:hover {
        color: $primary-color;
      }
    }
  }
}
@import "@/assets/styles/responsive";
</style>
