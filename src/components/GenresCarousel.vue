<template>
  <span
    v-if="genres"
  >
    <slick
      v-bind="slickOptions"
      class="mb-8"
    >
      <v-col
        v-for="(genre, index) in genres"
        :key="index"
        class="d-flex justify-center px-0 pb-5"
      >
        <v-card
          width="100px"
          height="100px"
          class="d-flex justify-center align-center"
          rounded="lg"
          @click="redirect(index)"
        >
          <v-img
            :src="genre.src"
            max-width="80"
            max-height="80"
            class="mb-2"
          />
        </v-card>
      </v-col>
    </slick>
  </span>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import { LIST } from '../constants/routes';
import { GENRES_TRANSLATION } from '../constants/genres';

export default {
  components: {
    Slick: VueSlickCarousel,
  },

  props: {
    genres: {
      default: null,
      required: true,
    },
  },

  data() {
    return {
      slickOptions: {
        dots: true,
        arrows: false,
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

  methods: {
    redirect(index) {
      const name = GENRES_TRANSLATION[this.genres[index].name];
      this.$router.push({
        name: LIST.NAME,
        params: {
          query: this.genres[index].query,
          type: 'genre',
          name,
        },
      });
    },
  },
};
</script>

<style scoped>

.subtitle-2, .body-2 {
  line-height: 1.075;
}

.slick-slide div:focus {
  outline: none;
}
</style>
