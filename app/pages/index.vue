<script setup lang="ts">
import type { Post } from '#shared/types/post'
const { data: posts } = await useFetch<Post[]>('/api/posts')
</script>
<template>
  <h2 class="main-title">Blog & Journal</h2>
  <div class="container">
    <NuxtLink to="/posts/new">新規投稿</NuxtLink>
    <div v-if="posts" class="card-wrap">
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>
<style scoped>
.container {
  max-width: 1000px;
  background-color: var(--color-bg);
  margin: 0 auto;
}

.card-wrap {
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  gap: 24px;
}
</style>
