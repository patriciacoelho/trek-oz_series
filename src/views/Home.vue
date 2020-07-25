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
          target="/"
        />
        <checkable-card
          class="mr-1"
          :img-src="card.src"
          target="/"
        />
        <checkable-card
          :img-src="card.src"
          target="/"
        />
      </v-row>
      <br>
    </v-content>
    <nav-bar />
  </v-app>
</template>

<script>
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
    };
  },
};
</script>
