<script setup lang="ts">
import type { Post } from '#shared/types/post'
defineProps<{ post: Post }>()
</script>
<template>
  <NuxtLink :to="`/posts/${post.id}`" class="card">
    <img :src="post.image" :alt="post.title" />
    <div class="card-text">
      <p>{{ post.category }}</p>
      <h2>{{ post.title }}</h2>
      <p>{{ post.summary }}</p>
      <div class="card-footer">
        <p>{{ post.createdAt }}</p>
        <p>{{ post.likes }}likes</p>
      </div>
    </div>
  </NuxtLink>
</template>
<style scoped>
.card img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 16px 16px 0 0;
}
.card {
  border-radius: 16px;
  box-sizing: border-box;
  flex: 0 0 calc((100% - 48px) / 3);
  /* 上記の意味 */
  /* flex-grow: 0; 余ったスペースがあれば、カードを伸ばさない */
  /* flex-shrink: 0; スペースが足りなければ、カードを縮めない */
  height: 480px;

  display: flex;
  flex-direction: column;
}
.card-text {
  background-color: var(--color-bg-card);
  padding: 0.6rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.card-footer {
  display: flex;
  justify-content: space-between;
  margin-top: auto;
}
.card-text h2 {
  margin-top: 0px;
  margin-bottom: 0.3rem;
  font-weight: 500;
  font-size: 1.4rem;
}
.card-text p {
  margin: 0;
}
</style>
