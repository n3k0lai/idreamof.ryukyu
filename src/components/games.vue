<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="games">
    <a href="https://duolingo.com" target="_self">duolingo</a>
    <a href="https://mahjongsoul.game.yo-star.com" target="_self">mahjongsoul</a>
    <a href="https://zed.run" target="_self">zed</a>
    <a href="https://monkeytype.com" target="_self">monkeytype</a>
  </div>
</template>

<style scoped>
.games {
  color: #888;
}
</style>
