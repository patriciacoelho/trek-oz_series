<template>
  <span>
    <v-card
      v-on="$listeners"
      rounded="xl"
      width="180px"
      :disabled="$attrs.disabled"
    >
      <v-img
        :src="imgSrc"
        class="white--text align-end"
        :gradient="gradientOverlay"
        width="180px"
        height="260px"
      >
        <v-card-title
          v-if="title"
          v-text="title"
        />
      </v-img>
    </v-card>
    <div
      class="d-flex flex-column row-width"
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
        ? 'to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)'
        : 'to top, rgba(0,0,0,.01), rgba(0,0,0,.035)';
    },
  },
};
</script>

<style scoped>
.row-width {
  width: 192px;
}
</style>
