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
      <check-circle
        v-model="checked"
        class="ml-auto mt-n7"
      />
    </v-row>
  </v-col>
</template>

<script>
/* eslint-disable no-console */
import CheckCircle from './CheckCircle.vue';

export default {
  components: {
    CheckCircle,
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
    gradientOverlay() {
      return this.title
        ? 'to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)'
        : 'to top, rgba(0,0,0,.01), rgba(0,0,0,.035)';
    },
  },

  methods: {
    redirect() {
      console.log('Redirect to TV Show\'s Page: ', this.target);
    },
  },
};
</script>
