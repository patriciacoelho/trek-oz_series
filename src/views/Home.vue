<template>
  <v-app>
    <v-content>
      <HelloWorld/>
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
    </v-content>
    <nav-bar />
  </v-app>
</template>

<script>
/* eslint-disable no-console */
import HelloWorld from '../components/HelloWorld.vue';
import CheckableCard from '../components/CheckableCard.vue';

export default {
  name: 'Home',

  components: {
    HelloWorld,
    CheckableCard,
  },

  data() {
    return {
      card: {
        title: 'Castle',
        src: 'https://images.justwatch.com/poster/185616855/s592',
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
