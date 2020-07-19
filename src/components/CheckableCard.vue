<template>
  <v-col
    cols="6"
  >
    <v-card
      rounded="xl"
      @click="redirect"
    >
      <v-img
        :src="imgSrc"
        class="white--text align-end"
        :gradient="gradientOverlay"
        height="260px"
      >
        <v-card-title
          v-if="title"
          v-text="title"
        />
      </v-img>
    </v-card>
    <v-row>
      <v-btn
        class="white ml-auto mt-n7"
        :class="checkedClass"
        fab
        small
        retain-focus-on-click
        @click="toggleCheck"
      >
        <check-circle-icon size="3x" class="check-icon"/>
      </v-btn>
    </v-row>
  </v-col>
</template>

<script>
/* eslint-disable no-console */
import { CheckCircleIcon } from 'vue-feather-icons';

export default {
  components: {
    CheckCircleIcon,
  },

  props: {
    title: {
      type: String,
      default: null,
    },
    imgSrc: {
      type: String,
      default: null,
      required: true,
    },
    target: {
      type: String,
      default: null,
      required: true,
    },
  },

  data() {
    return {
      checked: false,
    };
  },

  computed: {
    checkedClass() {
      return this.checked ? 'checked' : 'not-checked';
    },

    gradientOverlay() {
      return this.title
        ? 'to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)'
        : 'to top, rgba(0,0,0,.01), rgba(0,0,0,.035)';
    },
  },

  methods: {
    toggleCheck() {
      this.checked = !this.checked;
    },

    redirect() {
      console.log('Redirect to TV Show\'s Page: ', this.target);
    },
  },
};
</script>

<style scoped>
.checked:before, .not-checked:before {
    background-color: none !important;
}

.not-checked {
  background-color: #FFFFFF !important;
  border-color: #FFFFFF !important;
}

.not-checked .check-icon {
  color: rgba(0,0,0,.12) !important;
}

.checked {
  background-color: #0B7346 !important;
  border-color: #0B7346 !important;
}

.checked .check-icon {
  color: white !important;
}
</style>
