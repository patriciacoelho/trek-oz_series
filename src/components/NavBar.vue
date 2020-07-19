<template>
  <v-bottom-navigation
    v-model="nav"
    app
    color="primary"
  >
    <v-btn value="home">
      <home-icon />
    </v-btn>

    <v-btn value="discovery">
      <search-icon />
    </v-btn>

    <v-btn value="dashboard">
      <grid-icon />
    </v-btn>

    <v-btn value="calendar">
      <calendar-icon />
    </v-btn>

    <v-btn value="watched">
      <archive-icon />
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import {
  HomeIcon,
  SearchIcon,
  GridIcon,
  CalendarIcon,
  ArchiveIcon,
} from 'vue-feather-icons';

export default {
  components: {
    HomeIcon,
    SearchIcon,
    GridIcon,
    CalendarIcon,
    ArchiveIcon,
  },

  name: 'NavBar',

  data() {
    return {
      nav: 'home',
    };
  },
};
</script>
