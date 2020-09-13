<template>
  <main-wrapper>
    <div
      v-if="isAuthenticated"
    >
      <v-btn
        color="error"
        outlined
        block
        x-large
        depressed
        class="text-none text-center font-weight-bold"
        @click="onLogoutClick"
      >
        <power-icon class="pr-1" /> Sair da conta
      </v-btn>
    </div>

    <div v-else>
      <v-btn
        color="primary"
        block
        x-large
        depressed
        outlined
        class="mt-4 text-none text-center font-weight-bold"
        @click="redirectToLogin"
      >
        Entrar na conta
      </v-btn>
    </div>
  </main-wrapper>
</template>

<script>
import { PowerIcon } from 'vue-feather-icons';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Profile',

  components: {
    PowerIcon,
  },

  data() {
    return {
      loggingOut: false,
      confirmingLogout: false,
    };
  },

  computed: {
    ...mapGetters('auth', {
      isAuthenticated: 'isAuthenticated',
    }),
  },

  methods: {
    ...mapActions('auth', {
      logout: 'logout',
      startAuthentication: 'startAuthentication',
    }),

    redirectToLogin() {
      this.startAuthentication({ path: this.$route.path })
        .then((url) => {
          window.location = url;
        });
    },

    onLogoutClick() {
      this.loggingOut = true;

      this.logout().then(() => {
        this.$router.go(-1);
      });
    },
  },
};
</script>
