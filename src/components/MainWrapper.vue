<template>
  <div>
    <v-app>
      <v-main
        class="pb-main"
      >
        <slot/>
      </v-main>
    </v-app>
    <nav-bar v-if="!noMenu"/>
  </div>
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
};
</script>

<style>
.pb-main {
  padding-bottom: 7.5rem !important;
}
</style>
