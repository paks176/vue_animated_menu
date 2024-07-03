<template>
  <div class="list">
    <div class="list__wrapper" :style='{transform: `translate(${this.translateX}px, ${this.translateY}px)`}'>
      <div v-if="getItemsList">
        <div class="list-item" v-for="item in this.getItemsList" :key="item.id" :id="item.id">
          <p class="list-item__place hide  d-none opacity-0 h-0">СТАДИОН</p>
          <p class="list-item__date">{{ item.date }}</p>
          <p class="list-item__time hide  d-none opacity-0 h-0">{{ item.time }}</p>
          <button class=" hide d-none opacity-0 h-0">Купить билет</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'CompetitorsList',
  data() {
    return {
      itemsQuantity: 0,
      listWrapper: null,
      pointer: 0,
      translateY: 0,
      translateX: 0,
      DOMElements: [],
    }
  },
  computed: {
    ...mapGetters(['getItemsList']),
  },

  methods: {
    findDOMElements() {
      if (this.getItemsList.length) {
        this.getItemsList.forEach((item) => {
          const element = document.getElementById(item.id);
          this.DOMElements.push(element);
        })
      }
    },

    defaultPosition() {
      this.translateX = 5;
      this.translateY = this.getItemsList.length * 75;
    },

    changeOnScroll(event) {
      if (event.deltaY < 0) {
        if (this.pointer > 0) {
          this.pointer -= 1;
          this.unselect('next');
          this.translateY += 199;
          setTimeout(() => {
            this.highlightSelected();
          }, 300);

        }
      }

      if (event.deltaY > 0) {
        if (this.pointer >= 0 && this.pointer < this.itemsQuantity) {
          this.pointer += 1;
          this.unselect('prev');
          this.translateY -= 199;
          setTimeout(() => {
            this.highlightSelected();
          }, 300);
        }
      }
    },

    highlightSelected() {
      const selectedItem = this.DOMElements[this.pointer];
      if (selectedItem) {
        selectedItem.classList.add('current');
        const hiddens = selectedItem.querySelectorAll('.hide');
        hiddens.forEach((h) => {
          h.classList.remove('d-none');
        })
        setTimeout(() => {
          hiddens.forEach((h) => {
            h.classList.remove('h-0');
          })
        }, 500)
        setTimeout(() => {
          hiddens.forEach((h) => {
            h.classList.remove('opacity-0');
          })
        }, 500)
        this.$emit('change', this.getItemsList[this.pointer].competitors);
      }
    },

    unselect(what) {
      let selectedItem;
      switch (what) {
        case 'next':
          selectedItem = this.DOMElements[this.pointer + 1];
          if (selectedItem) {
            selectedItem.classList.remove('current');
            
            const hiddens = selectedItem.querySelectorAll('.hide');

            hiddens.forEach((h) => {
              h.classList.add('opacity-0');
            })

            setTimeout(() => {
              hiddens.forEach((h) => {
                h.classList.add('h-0');
              })
            }, 500)

            setTimeout(() => {
              hiddens.forEach((h) => {
                h.classList.add('d-none');
              })
            }, 500)

          }
          break;
        case 'prev':
          selectedItem = this.DOMElements[this.pointer - 1];
          if (selectedItem) {
            selectedItem.classList.remove('current');
            
            const hiddens = selectedItem.querySelectorAll('.hide');
            
            hiddens.forEach((h) => {
              h.classList.add('opacity-0');
            })

            setTimeout(() => {
              hiddens.forEach((h) => {
                h.classList.add('h-0');
              })
            }, 500)

            setTimeout(() => {
              hiddens.forEach((h) => {
                h.classList.add('d-none');
              })
            }, 500)
          }
          break;
      }
    },
    
    scrollToClicked(event) {
      let listItem = event.target;
      if (!event.target.classList.contains('list-item')) {
         listItem = event.target.parentNode;
      }
      const index = this.DOMElements.indexOf(listItem);
      let distance = index - this.pointer;
      if (distance < 0) {
        while (distance !== 0) {
          this.changeOnScroll({deltaY: -1});
          distance += 1;
        }
        return;
      }
      if (distance > 0) {
        while (distance !== 0) {
          this.changeOnScroll({deltaY: 1});
          distance -= 1;
        }
      }
    }
  },

  mounted() {
    this.itemsQuantity = this.getItemsList.length - 1;
    this.listWrapper = this.$el.querySelector('.list__wrapper')
    if (this.itemsQuantity > 0 && this.listWrapper) {
      document.body.addEventListener('wheel', this.changeOnScroll);
      this.defaultPosition();
      this.findDOMElements();
      this.highlightSelected();
      
      this.DOMElements.forEach((element) => {
        element.addEventListener('click', this.scrollToClicked);
      })

      window.addEventListener('keyup', (event) => {
        if (event.keyCode === 38) {
          this.changeOnScroll({deltaY: -1});
        }
        if (event.keyCode === 40) {
          this.changeOnScroll({deltaY: 1});
        }
      });
    }
  }

}
</script>

<style lang="scss" scoped>

.h-0 {
  height: 0;
}

.d-none {
  display: none;
}

.opacity-0 {
  opacity: 0;
}

.list {
  position: absolute;
  left: 50%;
  right: 50%;
  display: flex;
  justify-content: center;
  transform: rotate(57deg);

  &__wrapper {
    transition: all 0.5s ease-in;
  }

  &-item {
    cursor: pointer;
    transition: all 0.3s ease-in;
    transform: rotate(-57deg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #FFF;
    width: 200px;
    height: 200px;
    -webkit-clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
    clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
    -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

    &__place {
      margin: 0;
      font-size: 24px;
      transition: all 0.3s ease;
    }

    &__date {
      text-transform: uppercase;
      transition: all 0.3s ease;
      font-weight: 500;
    }
    
    &__time {
      font-size: 32px;
      margin-top: 0;
      margin-bottom: 20px;
    }

    & button {
      transition: all 0.3s ease;
      display: block;
      border: 1px solid black;
      background-color: #FFFFFF;
      padding: 0;
      cursor: pointer;
      font-size: 16px;
      &:hover {
        background-color: black;
        color: white;
      }
    }

    &.current {
      width: 300px;
      height: 300px;
      transform: translate(-42px, 0px) rotate(-57deg);

      & .list-item__date {
        font-size: 48px;
        font-weight: 700;
        margin-top: 10px;
        margin-bottom: 10px;
        height: 50px;
      }
      
      & button {
        padding: 10px;
      }
    }
  }
}
</style>
