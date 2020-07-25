<template>
  <v-app>
    <v-main>
      <v-row
        class="ma-3"
      >
        <progress-card
          class="mr-3"
          :img-src="otherCard.src"
          :completed="19"
          :total="23"
        />
        <progress-card
          :title="otherCard.title"
          :img-src="otherCard.src"
          :completed="otherCard.watched"
          :total="otherCard.total"
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
      <br>
    </v-main>
    <nav-bar />
  </v-app>
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
