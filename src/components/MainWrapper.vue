<template>
  <v-app>
    <v-main
      :class="padding"
    >
      <slot/>
    </v-main>
    <nav-bar v-if="!noMenu"/>
  </v-app>
</template>

<script>
import NavBar from './NavBar.vue';

export default {
  components: {
    NavBar,
  },

  props: {
    noMenu: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    padding() {
      return !this.noMenu ? 'pb-main' : 'pb-0';
    },
  },
};
</script>

<style>
.pb-main {
  padding-bottom: 7.5rem !important;
}
</style>
