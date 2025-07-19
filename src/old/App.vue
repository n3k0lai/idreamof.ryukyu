<script setup lang="ts">
import common from './components/common.vue'
import games from './components/games.vue'
import gallery from './components/gallery.vue'
import quotes from './components/quotes.vue'
</script>

<template>
  <div class="modal border">
    <div class="row">
      <common />
      <games />
    </div>
    <div class="row">
      <gallery />
      <quotes />
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
