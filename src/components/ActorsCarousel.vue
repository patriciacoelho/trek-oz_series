<template>
  <span
    v-if="actors"
  >
    <slick
      v-bind="slickOptions"
      class="mb-8"
    >
      <v-col
        v-for="(actor, index) in actors"
        :key="index"
        class="d-flex justify-center px-0 pb-5"
      >
        <div>
          <!-- <p
            class="text--disabled mb-0 mr-1 text-end">
            {{ REGULARITY_TEXT[actor.regularity] }}
          </p> -->
          <v-img
            :src="actor.src"
            width="100"
            height="130"
            class="mb-2"
          />
          <span
            class="subtitle-2 black--text d-inline-block text-truncate max-w-105"
          >
            {{ actor.name }}
          </span><br>
          <span
            class="body-2 d-inline-block text-truncate max-w-105"
          >
            {{ actor.character }}
          </span><br>
        </div>
      </v-col>
    </slick>
  </span>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
// import { REGULARITY_TEXT } from '../constants/regularity';

export default {
  components: {
    Slick: VueSlickCarousel,
  },

  props: {
    actors: {
      default: null,
      required: true,
    },
  },

  data() {
    return {
      // REGULARITY_TEXT,
      slickOptions: {
        dots: true,
        focusOnSelect: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 6,
        touchThreshold: 5,
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 5,
            },
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 4,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 380,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 270,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.max-w-105 {
  max-width: 105px;
}

.subtitle-2, .body-2 {
  line-height: 1.075;
}

.slick-slide div:focus {
  outline: none;
}
</style>
