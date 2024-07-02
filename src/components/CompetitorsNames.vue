<template>
  <div>
    <div class="competitors">
      <div class="competitors__item">
        <p id="competitor_1" class="">{{ competitor_1 }}</p>
      </div>
      <div class="competitors__item">
        <p id="competitor_2" class="">{{ competitor_2 }}</p>
      </div>
    </div>
    <CompetitorsList @change="changeCompetitors"/>
  </div>

</template>


<script>
import CompetitorsList from '@/components/CompetitorsList.vue';

export default {
  name: 'CompetitorsNames',
  components: {CompetitorsList},
  data() {
    return {
      competitor_1: '',
      competitor_2: '',
      competitor_1_p: null,
      competitor_2_p: null,
    }
  },
  methods: {
    changeCompetitors(array) {
      if (array.length) {
        if (this.competitor_1_p !== null && this.competitor_2_p !== null) {
          this.competitor_1_p.classList.add('opacity-0');
          this.competitor_2_p.classList.add('opacity-0');
        }
        setTimeout(() => {
          this.competitor_1 = array[0];
          this.competitor_2 = array[1];
        }, 300)

        if (this.competitor_1_p !== null && this.competitor_2_p !== null) {
          setTimeout(() => {
            this.competitor_1_p.classList.remove('opacity-0');
            this.competitor_2_p.classList.remove('opacity-0');
          }, 300)
        }
      }
    }

  },
  mounted() {
    this.competitor_1_p = this.$el.querySelector('#competitor_1');
    this.competitor_2_p = this.$el.querySelector('#competitor_2');

  }
}
</script>


<style scoped lang="scss">
.opacity-0 {
  opacity: 0;
}

.competitors {
  width: 105vw;
  height: 275px;
  position: absolute;
  top: 37%;
  left: -48px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__item {
    border-radius: 5px;
    background-color: #FFF;
    padding: 30px;
    width: calc(50vw - 150px);
    align-self: flex-end;
    transform: skew(-29deg, 0);
    -webkit-box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
    box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);

    & p {
      transition: opacity 0.2s ease-in;
      margin: 0;
      transform: skew(29deg, 0);
      text-transform: uppercase;
      font-size: 24px;
    }

    &:first-child {
      display: flex;
      justify-content: flex-end;
      align-self: flex-start;
      transform: skew(-29deg, 0);
    }
  }
}
</style>