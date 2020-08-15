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
      <!-- <v-row
        class="ma-3"
      >
        <progress-card
          class="mr-3"
          :title="otherCard.title"
          :img-src="otherCard.src"
          :completed="19"
          :total="23"
          :next-episode="otherCard.nextEpisode"
          :loading="loading"
          :disabled="loading"
          @status-changed="handleCheck"
          @click="redirect"
        />
        <progress-card
          :img-src="otherCard.src"
          :completed="otherCard.watched"
          :total="otherCard.total"
          :next-episode="otherCard.nextEpisode"
        />
      </v-row> -->
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
// import ProgressCard from '../components/ProgressCard.vue';
import GenresCarousel from '../components/GenresCarousel.vue';
import { CAROUSEL_GENRES } from '../constants/genres';
import { SEARCH } from '../constants/routes';

export default {
  name: 'Home',

  components: {
    CheckableCardCarousel,
    // ProgressCard,
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
      otherCard: {
        title: 'Psych',
        watched: 90,
        total: 121,
        nextEpisode: {
          ref: '2x09',
          title: 'Flesh and Blood',
        },
        src: 'https://i1.wp.com/elrincon.tv/wp-content/uploads/2014/02/psych.jpg',
      },
      loading: false,
    };
  },

  mounted() {
    // this.fillGenresList();
    this.fillTrending();
    this.fillMostPopular();
    this.fillMostNewly();
  },

  methods: {
    fillGenresList() {
      const mystery = 9648;
      const sciFiFantasy = 10765;
      getSeriesDiscovery({ with_genres: mystery, without_genres: sciFiFantasy }).then((data) => {
        console.log(data);
      });
    },

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
