<template>
  <span>
    <v-card
      rounded="xl"
      :disabled="$attrs.disabled"
    >
      <v-img
        :src="imgSrc"
        class="white--text align-end"
        :gradient="gradientOverlay"
        aspect-ratio="1.94"
      />
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
    <div
      class="mx-3"
    >
      <v-row
        align="center"
        justify="space-between"
        class="pa-3 pt-1"
      >
        <v-col class="py-0">
          <h2>{{ title }}</h2>
        </v-col>
        <v-col
          cols="auto"
          class="pa-0"
        >
          <chevron-up-icon v-if="active" />
          <chevron-down-icon v-else />
        </v-col>
      </v-row>
    </div>
  </span>
</template>

<script>
import {
  ChevronDownIcon,
  ChevronUpIcon,
} from 'vue-feather-icons';
import CheckCircle from './CheckCircle.vue';

export default {
  components: {
    CheckCircle,
    ChevronDownIcon,
    ChevronUpIcon,
  },

  props: {
    title: {
      type: String,
      default: null,
      required: true,
    },
    imgSrc: {
      type: String,
      default: null,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
      required: true,
    },
  },

  data() {
    return {
      checked: false,
      gradientOverlay: 'to top, rgba(0,0,0,.01), rgba(0,0,0,.035)',
    };
  },

  watch: {
    checked(value) {
      this.$emit('status-changed', value);
    },
  },
};
</script>

<style scoped>
.row-width {
  width: calc(100% + 16px);
}
</style>
