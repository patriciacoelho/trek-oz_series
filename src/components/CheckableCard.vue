<template>
  <span>
    <v-card
      v-on="$listeners"
      rounded="xl"
      width="150px"
      :disabled="$attrs.disabled"
    >
      <v-img
        :src="imgSrc"
        class="white--text align-end"
        :gradient="gradientOverlay"
        width="150px"
        height="215px"
      >
        <v-card-title
          v-if="title"
          class="d-inline-block text-truncate card-width"
          v-text="title"
        />
      </v-img>
    </v-card>
    <div
      class="d-flex row-width"
    >
      <check-circle
        v-model="checked"
        :disabled="$attrs.disabled"
        :loading="$attrs.loading"
        class="ml-auto mt-n7"
      />
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
  },

  data() {
    return {
      checked: false,
    };
  },

  watch: {
    checked(value) {
      this.$emit('status-changed', value);
    },
  },

  computed: {
    gradientOverlay() {
      return this.title
        ? 'to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)'
        : 'to top, rgba(0,0,0,.01), rgba(0,0,0,.035)';
    },
  },
};
</script>

<style scoped>
.row-width {
  width: calc(150px + 12px);
}

.card-width {
  width: 150px;
}
</style>
