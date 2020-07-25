<template>
  <span>
    <v-card
      v-on="$listeners"
      rounded="xl"
      width="320px"
      :disabled="$attrs.disabled"
    >
      <v-img
        :src="imgSrc"
        class="white--text align-end"
        :gradient="gradientOverlay"
        width="320px"
        height="180px"
      >
        <v-card-title
          v-if="title"
          v-text="title"
        />
      </v-img>
    </v-card>
    <div
      class="ma-3 row-width"
    >
      <v-progress-linear
        v-model="progress"
        rounded
        height="8"
      />
      <p class="primary--text pt-1">{{ completed }} de {{ total }} episódios</p>
    </div>
  </span>
</template>

<script>
export default {
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
    completed: {
      type: Number,
      default: null,
      required: true,
    },
    total: {
      type: Number,
      default: null,
      required: true,
    },
  },

  data() {
    return {
      //
    };
  },

  computed: {
    gradientOverlay() {
      return this.title
        ? 'to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)'
        : 'to top, rgba(0,0,0,.01), rgba(0,0,0,.035)';
    },

    progress() {
      return (this.completed * 100) / this.total;
    },
  },
};
</script>

<style scoped>
.row-width {
  width: 300px;
}
</style>
