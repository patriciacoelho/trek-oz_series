<template>
  <v-app>
    <v-main
      class="pb-main"
    >
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
      <v-row
        v-if="loading"
        justify="center"
      >
        <v-progress-circular
          indeterminate
          color="primary"
        />
      </v-row>
      <v-alert
        v-else-if="error"
        dense
        text
        type="error"
      >
        Ops, tivemos um problema de conexão. Se o problema persistir contate o suporte.
      </v-alert>
      <v-row
        v-else
        class="mx-3"
      >
        <checkable-card
          v-for="(card, index) in cards"
          :key="index"
          :title="!card.src ? card.title : null"
          :img-src="card.src"
          :loading="card.loading"
          :disabled="card.loading"
          @status-changed="handleCheck(index)"
          @click="redirect(index)"
        />
      </v-row>
    </v-main>
    <nav-bar />
  </v-app>
</template>

<script>
/* eslint-disable no-console */
import {
  getSeriesBySearch,
  getSeriePosters,
} from '@/services';
import {
  SearchIcon,
  TvIcon,
} from 'vue-feather-icons';
import CheckableCard from '../components/CheckableCard.vue';

export default {
  components: {
    SearchIcon,
    TvIcon,
    CheckableCard,
  },

  data() {
    return {
      search: '',
      cards: [],
      loading: false,
      error: false,
    };
  },

  methods: {
    handleCheck(index) {
      this.cards[index].loading = true;
      setTimeout(() => { this.cards[index].loading = false; }, 5000);
    },

    handleSearch() {
      this.loading = true;
      this.error = false;
      getSeriesBySearch(this.search)
        .then((results) => {
          this.cards = results.map((result) => ({
            ...result.show,
            src: '',
            loading: true,
          }));
          this.loading = false;
          this.loadImages();
        })
        .catch(() => {
          this.loading = false;
          this.error = true;
        });
    },

    loadImages() {
      this.cards.forEach((card) => {
        getSeriePosters(card.ids.tmdb)
          .then((posters) => {
            const filePath = posters[0].file_path || null;
            let imageUrl = '';
            if (filePath) {
              imageUrl = `https://image.tmdb.org/t/p/w342${filePath}`;
            }
            card.src = imageUrl;
            card.loading = false;
          })
          .catch(({ message }) => {
            console.log(message);
            card.loading = false;
          });
      });
    },

    redirect(index) {
      const traktWebsite = 'https://trakt.tv/';
      console.log(`Redirect to ${this.cards[index].title} TV Show's Page`);
      window.location = `${traktWebsite}/shows/${this.cards[index].ids.slug}`;
    },
  },
};
</script>

<style>
.mb-n-1px {
  margin-bottom: -1px !important;
}

.pb-main {
  padding-bottom: 7.5rem !important;
}

.cursor-pointer {
  cursor: pointer;
}
</style>
