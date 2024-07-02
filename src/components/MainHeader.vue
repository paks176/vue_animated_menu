<template>
  <nav>
    <div class="header-wrapper">
      <a class="header-wrapper__main-links" href="#">БИЛЕТЫ И АБОНЕМЕНТЫ</a>
      <div class="header-wrapper__center-links">
        <a href="#">Как купить?</a>
        <a href="#">Правила</a>
        <a href="#">Возврат билетов</a>
      </div>
      <a class="header-wrapper__main-links" href="#">Войти</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MainHeader',
}
</script>

<style scoped lang="scss">
nav {
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 100;
}

.header-wrapper {
  padding: 30px;
  display: flex;
  justify-content: space-between;

  & a {
    font-size: 20px;
    color: white;
    text-decoration: none;
    text-shadow: 1px 1px 1px #000;
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.8;
    }
  }

  &__center-links {
    flex-grow: 1;
    display: flex;
    justify-content: space-around;
  }

  &__main-links {
    display: block;
  }
}
</style>