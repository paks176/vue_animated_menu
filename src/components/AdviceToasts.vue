<template>
<div class="toast-container position-absolute top-0 end-0 p-3">
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <strong class="me-auto">Особенности</strong>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      <p>Крутите колесо мыши чтобы перемещаться по списку</p>
      <img class="text-center" src="@/assets/wheel.gif" alt="wheel">
    </div>
  </div>

  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <strong class="me-auto">Особенности</strong>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      <p>Кнопки Вверх и Вниз также управляют прокруткой</p>
    </div>
  </div>

  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <strong class="me-auto">Особенности</strong>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body d-flex align-items-center">
      <p class="mb-0 me-3">Кликайте по любому элементу списка чтобы перейти к нему</p>
      <img src="@/assets/click.png" alt="click" width="30px" height="30px"/>
    </div>
  </div>
</div>
</template>

<script>
import { Toast } from 'bootstrap';
export default {
  name: 'AdviceToasts',

  mounted() {
    const toastElList = [].slice.call(document.querySelectorAll('.toast'))
    const toastList = toastElList.map(function (toastEl) {
      return new Toast(toastEl, {
        animation: true,
        autohide: true,
      })
    });
    let index = 1;
    toastList.forEach(toast => {
      setTimeout(() => {
        toast.show()
      }, index * 1000)
      index += 1;
      })
  }
}

</script>

<style scoped lang="scss">
  .toast-body {
    & img {
      max-width: 150px;
      max-height: 150px;
    }
  }
</style>