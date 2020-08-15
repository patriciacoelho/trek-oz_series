<template>
  <main-wrapper no-menu>
    <v-row align="center" class="app-bar-height grey--text py-0 mx-4">
      <div>
        <v-btn
          icon
          @click="handleBackButton"
        >
          <arrow-left-icon class="headline grey--text font-weight-bold" />
        </v-btn>
      </div>
    </v-row>
    <div class="mx-3 pb-3">
      <v-row
        class="mx-3 mt-3 grey--text"
        align="center"
      >
        <list-icon size="1x" class="text--lighten-1 text-h5 mr-3" />
        <h1>
          Lista
        </h1>
        <tv-icon size="1x" class="text--lighten-1 text-h5 ml-auto" />
      </v-row>
      <v-divider class="my-3" />
      <p
        class="grey--text mx-3 mb-3 caption text-uppercase"
      >
        {{ listDescription }}
      </p>
    </div>
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
  </main-wrapper>
</template>

<script>
import {
  getSeriesDiscovery,
} from '@/services';
import {
  ListIcon,
  TvIcon,
  ArrowLeftIcon,
} from 'vue-feather-icons';
import { TV_SHOW } from '../constants/routes';
import CheckableCard from '../components/CheckableCard.vue';

export default {
  components: {
    ListIcon,
    TvIcon,
    CheckableCard,
    ArrowLeftIcon,
  },

  props: {
    query: {
      type: Object,
      default: null,
      required: true,
    },
    type: {
      type: String,
      default: null,
      required: true,
    },
    name: {
      type: String,
      default: null,
      required: true,
    },
  },

  data() {
    return {
      cards: null,
      loading: false,
      error: false,
    };
  },

  beforeMount() {
    if (!this.query) {
      this.error = true;
      return;
    }
    this.fillGenresList();
  },

  methods: {
    handleCheck(index) {
      this.cards[index].loading = true;
      setTimeout(() => { this.cards[index].loading = false; }, 5000);
    },

    fillGenresList() {
      this.loading = true;
      this.error = false;
      getSeriesDiscovery(this.query).then(({ results }) => {
        this.cards = results.map((result) => ({
          ...result,
          title: result.name,
          src: `https://image.tmdb.org/t/p/w342${result.poster_path}`,
          loading: false,
        }));
        this.loading = false;
      }).catch(() => {
        this.loading = false;
        this.error = true;
      });
    },

    handleBackButton() {
      this.$router.go(-1);
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
    listDescription() {
      if (this.type === 'genre' && this.name) {
        return `Gênero: ${this.name}`;
      }
      return '';
    },
  },
};
</script>

<style scoped>
.app-bar-height {
  height: 56px;
}
</style>
