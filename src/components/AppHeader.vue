<template>
  <v-img
    :src="backdropImage"
    :height="height"
    :gradient="gradientOverlay"
    scroll-target="#scroll-target"
  >
    <v-row align="center" class="app-bar-height white--text py-0 px-6">
      <div>
        <v-btn
          icon
          @click="handleBackButton"
        >
          <arrow-left-icon class="headline white--text font-weight-bold" />
        </v-btn>
      </div>
    </v-row>
    <v-row align="end" :class="headerHeight" class="white--text pt-2 pb-0 px-6">
      <div class="px-3">
        <div class="headline font-weight-bold">{{ title }}</div>
        <div v-if="showSubtitle && !!subtitle" class="subheading">{{ subtitle }}</div>
      </div>
    </v-row>
  </v-img>
</template>

<script>
import {
  ArrowLeftIcon,
} from 'vue-feather-icons';

export default {
  components: {
    ArrowLeftIcon,
  },

  props: {
    height: {
      type: String,
      default: '180px',
    },
    title: {
      type: String,
      default: null,
      required: true,
    },
    subtitle: {
      type: String,
      default: null,
    },
    backdropImage: {
      type: String,
      default: '',
      required: true,
    },
  },

  data() {
    return {
      gradientOverlay: 'to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)',
    };
  },

  methods: {
    handleBackButton() {
      this.$emit('back', true);
    },
  },

  computed: {
    headerHeight() {
      if (this.height === '130px') {
        return 'h-48-px';
      }
      return 'h-100-px';
    },

    showSubtitle() {
      return !(this.height === '130px');
    },

    expandedHeight() {
      return this.height === '130px' ? 'expanded-body' : '';
    },
  },
};
</script>

<style scoped>
.app-bar-height {
  height: 56px;
}

.h-100-px {
  height: 100px;
}

.h-48-px {
  height: 48px;
}
</style>
