<template>
  <main-wrapper>
    <div
      v-if="hasError"
    >
      <v-alert
        dense
        text
        type="error"
      >
        Ops, tivemos um problema de conexão. Se o problema persistir contate o suporte.
      </v-alert>
      <v-btn
        color="primary"
        block
        x-large
        depressed
        outlined
        class="mt-4 text-none text-center font-weight-bold"
        @click="goBack"
      >
        Tentar novamente
      </v-btn>
    </div>
    <v-row
      v-else
      justify="center"
    >
      <v-progress-circular
        indeterminate
        color="primary"
      />
    </v-row>
  </main-wrapper>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

export default {
  props: {
    error: {
      type: String,
      default: null,
    },

    code: {
      type: String,
      default: null,
    },

    state: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      badTokenRequest: false,
      beforeRedirectRoute: sessionStorage.getItem('routeToRemember'),
    };
  },

  computed: {
    hasError() {
      return !!this.error || this.badTokenRequest;
    },
  },

  mounted() {
    if (this.error) {
      return;
    }

    this.getToken({
      code: this.code,
      state: this.state,
    })
      .then(() => {
        this.setloggedInTrakt(true);
        this.$router.replace(this.beforeRedirectRoute);
      })
      .catch((error) => {
        this.badTokenRequest = true;
        throw error;
      });
  },

  methods: {
    ...mapActions('auth', {
      getToken: 'getAccessToken',
      startAuthentication: 'startAuthentication',
    }),

    ...mapMutations('auth', {
      setloggedInTrakt: 'setloggedInTrakt',
    }),

    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
