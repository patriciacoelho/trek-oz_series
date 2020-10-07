<template>
  <div>
    <div
      class="powered-by-wrapper"
    >
      <powered-by/>
    </div>
    <v-bottom-navigation
      v-model="nav"
      class="justify-space-between align-center px-4"
      app
      height="4.5rem"
      color="primary"
    >
      <v-btn
        id="home"
        :to="HOME.PATH"
        :value="HOME.PATH"
      >
        <home-icon />
      </v-btn>

      <v-btn
        id="discovery"
        :to="SEARCH.PATH"
        :value="SEARCH.PATH"
      >
        <search-icon />
      </v-btn>

      <v-btn
        id="dashboard"
        :to="PROFILE.PATH"
        :value="PROFILE.PATH"
      >
        <grid-icon />
      </v-btn>

      <v-btn
        id="calendar"
        :to="UPCOMING.PATH"
        :value="UPCOMING.PATH"
      >
        <calendar-icon />
      </v-btn>

      <v-btn id="watched">
        <archive-icon />
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
import {
  HomeIcon,
  SearchIcon,
  GridIcon,
  CalendarIcon,
  ArchiveIcon,
} from 'vue-feather-icons';
import PoweredBy from './PoweredBy.vue';
import {
  HOME,
  SEARCH,
  UPCOMING,
  PROFILE,
} from '../constants/routes';

export default {
  components: {
    HomeIcon,
    SearchIcon,
    GridIcon,
    CalendarIcon,
    ArchiveIcon,
    PoweredBy,
  },

  name: 'NavBar',

  data() {
    return {
      nav: this.$router.currentRoute.path,
      HOME,
      SEARCH,
      UPCOMING,
      PROFILE,
    };
  },
};
</script>

<style lang="sass" scoped>
$a: 255
.powered-by-wrapper
  position: fixed
  bottom: 65px
  right: 0
  left: -10px
  width: 100%
  background: white
  background: linear-gradient(0deg,rgba($a,$a,$a,1) 0%,rgba($a,$a,$a,1) 85%,rgba($a,$a,$a,0) 100%)
</style>
