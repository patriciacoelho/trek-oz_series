<template>
  <v-app>
    <v-main
      class="pb-main"
    >
      <v-text-field
        class="ma-3"
        rounded
        label="Buscar"
        solo
      >
        <template v-slot:label>
          <span class="grey--text text--lighten-1">
            Que série cê tá procurando?
          </span>
          <tv-icon size="1x" class="grey--text text--lighten-1 ml-1 mb-n-1px" />
        </template>
        <template v-slot:append>
          <search-icon class="grey--text text--lighten-1"/>
        </template>
      </v-text-field>
      <v-row
        class="mx-3"
      >
        <checkable-card
          v-for="(card, index) in cards"
          :key="index"
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
      cards: [
        {
          title: 'Castle',
          src: 'https://images.justwatch.com/poster/185616855/s592',
          loading: false,
        },
        {
          title: 'Chuck',
          src: 'https://br.web.img2.acsta.net/c_216_288/medias/nmedia/18/77/00/94/19961049.jpg',
          loading: false,
        },
        {
          title: 'Psych',
          src: 'https://www.hollywoodchicago.com/sites/default/files/psych.jpg',
          loading: false,
        },
        {
          title: 'Being Erica',
          src: 'https://themodernguilt.files.wordpress.com/2013/02/being-erica-126.jpg',
          loading: false,
        },
        {
          title: 'Once Upon a Time',
          src: 'https://i.pinimg.com/originals/fb/e5/a0/fbe5a07030e2faa110a17876c1f993b6.jpg',
          loading: false,
        },
      ],
    };
  },

  methods: {
    handleCheck(index) {
      this.cards[index].loading = true;
      setTimeout(() => { this.cards[index].loading = false; }, 5000);
    },

    redirect(index) {
      console.log(`Redirect to ${this.cards[index].title} TV Show's Page`);
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
</style>
