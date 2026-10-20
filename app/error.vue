<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{ error: NuxtError }>()

const handleError = () => clearError({ redirect: '/' })
</script>
<template>
  <div>
    <h2 v-if="error.status === 404">PAGE NOT FOUND</h2>
    <h2 v-else>エラーが発生しました</h2>
    <button type="button" @click="handleError">トップへ戻る</button>
  </div>
</template>
