<template>
  <span>
    <v-card
      v-if="showDetails"
      rounded="xl"
      width="320px"
      height="180px"
      :disabled="$attrs.disabled"
    >
      <div
        v-if="title"
        class="pt-3"
      >
        <p
          class="mx-3 mb-3 caption pr-3 text-end text-uppercase"
        >
          {{ title }}
        </p>
        <v-divider></v-divider>
      </div>
      <v-card-text>
        <v-row>
          <v-col
            class="flex-grow-1 py-0"
          >
            <p class="mb-1 caption">PRÓXIMO EPISÓDIO</p>
            <h2
              v-on="$listeners"
              class="primary--text cursor-pointer"
            >
              {{ nextEpisode.title }}
            </h2>
            <p class="caption">{{ nextEpisode.ref }}</p>
          </v-col>
          <v-col
            class="flex-grow-0"
          >
            <check-circle
              v-model="checked"
              outlined
              :disabled="$attrs.disabled"
              :loading="$attrs.loading"
              class="ml-auto mt-n7"
            />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card
      v-else
      rounded="xl"
      width="320px"
      height="180px"
      :disabled="$attrs.disabled"
      @click="handleShowDetails"
    >
      <v-img
        :src="imgSrc"
        class="white--text align-end"
        :gradient="gradientOverlay"
        width="320px"
        height="180px"
      />
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
    nextEpisode: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },

  data() {
    return {
      showDetails: false,
      checked: false,
      gradientOverlay: 'to top, rgba(0,0,0,.01), rgba(0,0,0,.035)',
    };
  },

  watch: {
    checked(value) {
      this.$emit('status-changed', value);
    },
  },

  computed: {
    progress() {
      return (this.completed * 100) / this.total;
    },
  },

  methods: {
    handleShowDetails() {
      this.showDetails = true;
      setTimeout(() => { this.showDetails = false; }, 10000);
    },
  },
};
</script>

<style scoped>
.row-width {
  width: 300px;
}

.cursor-pointer {
  cursor: pointer;
}
</style>
