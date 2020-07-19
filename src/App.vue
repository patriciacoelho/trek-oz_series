<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      refreshing: false,
    };
  },

  created() {
    if (navigator.serviceWorker) {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (this.refreshing) return;

        this.refreshing = true;

        window.location.reload();
      });
    }
  },
};
</script>
