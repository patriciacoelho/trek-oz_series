<template>
  <div>
    <v-app>
      <v-main
        :class="padding"
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

  data() {
    return {
      padding: !this.noMenu ?? 'pb-main',
    };
  },
};
</script>

<style>
.pb-main {
  padding-bottom: 7.5rem !important;
}
</style>
