<template>
  <span
    v-if="cards"
  >
    <slick
      v-bind="slickOptions"
      class="mb-8"
    >
      <v-col
        v-for="(card, index) in cards"
        :key="index"
        class="d-flex justify-center px-0 pb-5"
      >
        <checkable-card
          class="mr-1"
          :img-src="card.src"
          :loading="card.loading"
          :disabled="card.loading"
          @status-changed="handleCheck(index)"
          @click="redirect(index)"
        />
      </v-col>
      <template #nextArrow>
        <div style="display: none !important;"> >> </div>
      </template>
    </slick>
  </span>
</template>

<script>
import { getSerieIdsbyTmdbId } from '@/services';
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import CheckableCard from './CheckableCard.vue';
import { TV_SHOW } from '../constants/routes';

export default {
  components: {
    Slick: VueSlickCarousel,
    CheckableCard,
  },

  props: {
    cards: {
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
        touchThreshold: 6,
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
            },
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 380,
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
    handleCheck(index) {
      this.cards[index].loading = true;
      setTimeout(() => { this.cards[index].loading = false; }, 5000);
    },

    redirect(index) {
      const tmdbId = this.cards[index].id;
      getSerieIdsbyTmdbId(tmdbId).then((data) => {
        let params = {
          ids: {
            tmdb: tmdbId,
          },
        };
        if (data.length && data.show) {
          params = {
            slug: data[0].show.ids.slug,
            ids: data[0].show.ids,
          };
        }
        this.$router.push({
          name: TV_SHOW.NAME,
          params,
        });
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
