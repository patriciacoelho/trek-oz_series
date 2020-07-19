<template>
  <v-app>
    <v-content>
      <HelloWorld/>
    </v-content>
    <nav-bar />
  </v-app>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';

export default {
  name: 'Home',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
