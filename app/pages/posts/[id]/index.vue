<script setup lang="ts">
import type { Post } from '#shared/types/post'
const route = useRoute()
// getデータ取得
const { data: post, error } = await useFetch<Post>(
  `/api/posts/${route.params.id}`
)

// delete
const handleDelete = async () => {
  if (!confirm('この記事を削除しますか？')) return

  try {
    await $fetch(`/api/posts/${route.params.id}`, { method: 'DELETE' })
    await navigateTo('/')
  } catch {
    alert('削除に失敗しました')
  }
}
</script>
<template>
  <img :src="post?.image" :alt="post?.title" />
  {{ route }}
  {{ post?.category }}
  {{ post?.id }}
  {{ post?.title }}
  {{ post?.body }}
  {{ post?.image }}
  {{ post?.likes }}
  {{ post?.createdAt }}
  <NuxtLink :to="`/posts/${route.params.id}/edit`">編集</NuxtLink>
  <button type="button" @click="handleDelete">削除</button>
</template>
<style></style>
