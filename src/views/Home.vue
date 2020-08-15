<template>
  <main-wrapper>
    <v-text-field
      v-model="search"
      class="ma-3"
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
    <genres-carousel :genres="CAROUSEL_GENRES"/>
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
    </v-row>
    <v-row
      class="mx-3"
    >
      <checkable-card
        class="mr-1"
        :img-src="card.src"
        :loading="loading"
        :disabled="loading"
        @status-changed="handleCheck"
        @click="redirect"
      />
      <checkable-card
        :img-src="card.src"
        :title="card.title"
      />
    </v-row> -->
  </main-wrapper>
</template>

<script>
/* eslint-disable no-console */
import {
  SearchIcon,
  TvIcon,
} from 'vue-feather-icons';
import {
  getSeriesDiscovery,
} from '@/services';
// import CheckableCard from '../components/CheckableCard.vue';
// import ProgressCard from '../components/ProgressCard.vue';
import GenresCarousel from '../components/GenresCarousel.vue';
import { CAROUSEL_GENRES } from '../constants/genres';
import { SEARCH } from '../constants/routes';

export default {
  name: 'Home',

  components: {
    // CheckableCard,
    // ProgressCard,
    GenresCarousel,
    SearchIcon,
    TvIcon,
  },

  data() {
    return {
      CAROUSEL_GENRES,
      search: '',
      card: {
        title: 'Castle',
        src: 'https://images.justwatch.com/poster/185616855/s592',
      },
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
  },

  methods: {
    fillGenresList() {
      const mystery = 9648;
      const sciFiFantasy = 10765;
      getSeriesDiscovery({ with_genres: mystery, without_genres: sciFiFantasy }).then((data) => {
        console.log(data);
      });
    },

    handleCheck() {
      this.loading = true;
      setTimeout(() => { this.loading = false; }, 5000);
    },

    handleSearch() {
      if (!this.search) return;
      this.$router.push({ name: SEARCH.NAME, query: { q: this.search } });
    },

    redirect() {
      console.log('Redirect to TV Show\'s Page');
    },
  },
};
</script>
