<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="common">
    <a href="https://twitch.tv" target="_self">twitch</a>
    <a href="https://youtube.com" target="_self">youtube</a>
    <a href="https://amazon.com" target="_self">amazon</a>
    <a href="https://wiki.archlinux.org" target="_self">archwiki</a>
  </div>
</template>

<style scoped>
.common {
  color: #888;
}
</style>
