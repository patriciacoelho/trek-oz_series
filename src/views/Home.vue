<template>
  <main-wrapper>
    <v-row
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
    </v-row>
  </main-wrapper>
</template>

<script>
/* eslint-disable no-console */
import CheckableCard from '../components/CheckableCard.vue';
import ProgressCard from '../components/ProgressCard.vue';

export default {
  name: 'Home',

  components: {
    CheckableCard,
    ProgressCard,
  },

  data() {
    return {
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

  methods: {
    handleCheck() {
      this.loading = true;
      setTimeout(() => { this.loading = false; }, 5000);
    },

    redirect() {
      console.log('Redirect to TV Show\'s Page');
    },
  },
};
</script>
