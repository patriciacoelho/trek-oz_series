<template>
  <main-wrapper>
    <v-text-field
      v-model="search"
      class="ma-3"
      rounded
      label="Buscar"
      solo
      @input="newSearch = true"
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
    <v-alert
      v-else-if="noResults"
      dense
      text
    >
      Nenhum resultado encontrado para "{{search}}"
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
  </main-wrapper>
</template>

<script>
/* eslint-disable no-console */
import { mapActions, mapGetters, mapState } from 'vuex';
import { getSeriePosters } from '@/services';
import {
  SearchIcon,
  TvIcon,
} from 'vue-feather-icons';
import { TV_SHOW } from '../constants/routes';
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
      cards: null,
      loading: false,
      error: false,
      newSearch: false,
    };
  },

  beforeMount() {
    this.checkStore();
  },

  watch: {
    search(newValue) {
      if (this.hasResults && newValue !== this.lastSearch.query) {
        this.clearLastSearch();
        this.cards = this.lastSearch.results;
      }
    },
  },

  methods: {
    ...mapActions('search', ['fetchSearchResults', 'clearLastSearch']),

    handleCheck(index) {
      this.cards[index].loading = true;
      setTimeout(() => { this.cards[index].loading = false; }, 5000);
    },

    checkStore() {
      const query = this.$route.query.q;
      const verifyQuery = !query || query === this.lastSearch.query;
      if (verifyQuery && this.hasResults) {
        if (!query) {
          this.$router.replace({ query: { q: this.lastSearch.query } });
        }
        this.search = this.lastSearch.query;
        this.cards = this.lastSearch.results;
      } else {
        this.handleQuery();
      }
    },

    handleSearch() {
      if (!this.search) return;
      this.$router.replace({ query: { q: this.search } });
      this.newSearch = false;
      this.handleQuery();
    },

    handleQuery() {
      const query = this.$route.query.q;
      if (!query) return;
      this.search = query;
      this.loading = true;
      this.error = false;
      this.cards = null;
      this.fetchSearchResults(query)
        .then(() => {
          this.cards = this.lastSearch.results;
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
        card.loading = true;
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
          .catch(() => {
            card.loading = false;
          });
      });
    },

    redirect(index) {
      this.$router.push({
        name: TV_SHOW.NAME,
        params: {
          slug: this.cards[index].ids.slug,
          ids: this.cards[index].ids,
        },
      });
    },
  },

  computed: {
    ...mapState('search', ['lastSearch']),

    ...mapGetters('search', {
      hasResults: 'searchFoundAnyResults',
    }),

    noResults() {
      return !!this.search && !this.newSearch && !this.hasResults;
    },
  },
};
</script>

<style>
.mb-n-1px {
  margin-bottom: -1px !important;
}
</style>
