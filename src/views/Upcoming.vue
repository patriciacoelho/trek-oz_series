<template>
  <main-wrapper>
    <div
      class="mx-3"
    >
      <div class="mx-3 pb-3">
        <v-row
          class="mx-3 mt-3 grey--text"
          align="center"
        >
          <calendar-icon size="1x" class="text--lighten-1 text-h4 mr-3" />
          <h1>
            Calendário
          </h1>
          <tv-icon size="1x" class="text--lighten-1 text-h4 ml-auto" />
        </v-row>
        <v-divider class="my-3" />
      </div>
      <div>
        <episode-card-carousel
          :cards="airingToday"
        />
      </div>
      <div
        class="pt-3"
      >
        <p
          class="mx-3 mb-3 caption pr-3 text-end text-uppercase"
        >
          Vem por aí
        </p>
        <v-divider class="mb-3"></v-divider>
        <checkable-card-carousel
          :cards="onTheAir"
        />
      </div>
    </div>
  </main-wrapper>
</template>

<script>
import {
  CalendarIcon,
  TvIcon,
} from 'vue-feather-icons';
import {
  getOnTheAir,
  getAiringToday,
} from '@/services';
import CheckableCardCarousel from '../components/CheckableCardCarousel.vue';
import EpisodeCardCarousel from '../components/EpisodeCardCarousel.vue';

export default {
  components: {
    CalendarIcon,
    TvIcon,
    CheckableCardCarousel,
    EpisodeCardCarousel,
  },

  data() {
    return {
      tab: null,
      onTheAir: null,
      airingToday: null,
      loading: false,
    };
  },

  mounted() {
    this.fillOnTheAir();
    this.fillAiringToday();
  },

  methods: {
    fillOnTheAir() {
      getOnTheAir().then(({ results }) => {
        this.onTheAir = results.map((result) => ({
          ...result,
          title: result.name,
          src: `https://image.tmdb.org/t/p/w342${result.poster_path}`,
          loading: false,
        })).slice(0, 9);
      });
    },

    fillAiringToday() {
      getAiringToday().then(({ results }) => {
        this.airingToday = results.map((result) => ({
          ...result,
          title: result.name,
          src: `https://image.tmdb.org/t/p/w1280${result.backdrop_path}`,
          loading: false,
        })).slice(0, 9);
      });
    },
  },
};
</script>
