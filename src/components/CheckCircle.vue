<template>
  <span>
    <v-btn
      :class="checkedClass"
      fab
      small
      @click="toggleCheck"
    >
      <check-circle-icon size="3x" class="check-icon"/>
    </v-btn>
  </span>
</template>

<script>
import { CheckCircleIcon } from 'vue-feather-icons';

export default {
  components: {
    CheckCircleIcon,
  },

  props: {
    value: {
      type: Boolean,
      default: null,
      required: true,
    },
  },

  data() {
    return {
      internalValue: this.value,
    };
  },

  computed: {
    checkedClass() {
      return this.internalValue ? 'checked' : 'not-checked';
    },
  },

  methods: {
    toggleCheck() {
      this.internalValue = !this.internalValue;
      this.$emit('input', this.internalValue);
    },
  },
};
</script>

<style scoped>
.not-checked {
  background-color: #FFFFFF !important;
  border-color: #FFFFFF !important;
}

.not-checked:before {
  background-color: #FFFFFF !important;
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
