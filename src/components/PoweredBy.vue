<template>
  <footer class="powered-by">
    <span v-if="showTextSpan">
      Powered by
    </span>
    <a href="https://trakt.tv/" class="d-flex">
      <img
        height="20px"
        :src="require('@/assets/trakt-wide-red-black.svg')"
        alt="Logo Trakt"
      >
    </a>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      sheet: false,
      showTextSpan: window.screen.width > 375,
    };
  },
};
</script>
<style>
  .powered-by span {
    margin-right: 6px;
  }
  .powered-by a {
    display: flex;
  }
  .powered-by {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 12px;
    padding-bottom: 16px;
    color: gray;
  }
</style>
