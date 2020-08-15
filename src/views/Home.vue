<template>
  <main-wrapper>
    <div
      class="mx-3"
    >
      <v-text-field
        v-model="search"
        class="mt-5"
        rounded
        label="Buscar"
        solo
        @keydown.enter="handleSearch"
      >
        <template v-slot:label>
          <span class="grey--text text--lighten-1">
            Que série cê tá procurando?
          </span>
          <tv-icon size="1x" class="grey--text text--lighten-1 ml-1 mb-n-1px" />
        </template>
        <template v-slot:append>
          <search-icon class="grey--text text--lighten-1 cursor-pointer" @click="handleSearch"/>
        </template>
      </v-text-field>
      <div>
        <genres-carousel :genres="CAROUSEL_GENRES"/>
      </div>
      <div
        class="pt-3"
      >
        <p
          class="mx-3 mb-3 caption pr-3 text-end text-uppercase"
        >
          Discovery
        </p>
        <v-divider class="mb-3"></v-divider>
        <v-tabs right v-model="tab">
          <v-tab>Em alta</v-tab>
          <v-tab>Popular</v-tab>
          <v-tab>Novos</v-tab>
        </v-tabs>
        <v-tabs-items touchless v-model="tab">
          <v-tab-item>
            <checkable-card-carousel
              :cards="trending"
            />
          </v-tab-item>
          <v-tab-item>
            <checkable-card-carousel
              :cards="mostPopular"
            />
          </v-tab-item>
          <v-tab-item>
            <checkable-card-carousel
              :cards="mostNewly"
            />
          </v-tab-item>
        </v-tabs-items>
      </div>
    </div>
  </main-wrapper>
</template>

<script>
/* eslint-disable no-console */
import moment from 'moment';
import 'moment/locale/pt-br';
import {
  SearchIcon,
  TvIcon,
} from 'vue-feather-icons';
import {
  getSeriesDiscovery,
  getMostPopular,
  getWeeklyTrending,
} from '@/services';
import CheckableCardCarousel from '../components/CheckableCardCarousel.vue';
import GenresCarousel from '../components/GenresCarousel.vue';
import { CAROUSEL_GENRES } from '../constants/genres';
import { SEARCH } from '../constants/routes';

export default {
  name: 'Home',

  components: {
    CheckableCardCarousel,
    GenresCarousel,
    SearchIcon,
    TvIcon,
  },

  data() {
    return {
      CAROUSEL_GENRES,
      search: '',
      tab: null,
      mostPopular: null,
      mostNewly: null,
      trending: null,
      loading: false,
    };
  },

  mounted() {
    this.fillTrending();
    this.fillMostPopular();
    this.fillMostNewly();
  },

  methods: {
    fillMostPopular() {
      getMostPopular().then(({ results }) => {
        this.mostPopular = results.map((result) => ({
          ...result,
          title: result.name,
          src: `https://image.tmdb.org/t/p/w342${result.poster_path}`,
          loading: false,
        })).slice(0, 9);
      });
    },

    fillMostNewly() {
      const params = {
        'first_air_date.gte': moment().subtract(1, 'month').format('YYYY-MM-DD'),
        'first_air_date.lte': moment().format('YYYY-MM-DD'),
      };
      getSeriesDiscovery(params).then(({ results }) => {
        this.mostNewly = results.map((result) => ({
          ...result,
          title: result.name,
          src: `https://image.tmdb.org/t/p/w342${result.poster_path}`,
          loading: false,
        })).slice(0, 9);
      });
    },

    fillTrending() {
      getWeeklyTrending().then(({ results }) => {
        this.trending = results.map((result) => ({
          ...result,
          title: result.name,
          src: `https://image.tmdb.org/t/p/w342${result.poster_path}`,
          loading: false,
        })).slice(0, 9);
      });
    },

    handleSearch() {
      if (!this.search) return;
      this.$router.push({ name: SEARCH.NAME, query: { q: this.search } });
    },
  },
};
</script>
