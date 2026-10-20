<script setup lang="ts">
import type { Post } from '#shared/types/post'

const route = useRoute()

// 表示データ取得
const { data: post } = await useFetch<Post>(`/api/posts/${route.params.id}`)
// フォーム用のpostのコピー（元のpostを直接変更しない）
const form = reactive({
  title: post.value?.title ?? '',
  summary: post.value?.summary ?? '',
  body: post.value?.body ?? '',
  category: post.value?.category ?? '',
  image: post.value?.image ?? ''
})

// 更新
const handleSubmit = async () => {
  try {
    await $fetch(`/api/posts/${route.params.id}`, {
      method: 'PUT',
      body: form
    })
    await navigateTo(`/posts/${route.params.id}`)
  } catch (error) {
    alert('更新に失敗しました。')
  }
}
</script>
<template>
  <form v-if="post" @submit.prevent="handleSubmit">
    <div>
      <label for="title">タイトル</label>
      <input id="title" name="title" v-model="form.title" required />
    </div>
    <div>
      <label for="summary">説明</label>
      <input id="summary" name="summary" v-model="form.summary" required />
    </div>
    <div>
      <label for="body">本文</label>
      <input id="body" name="body" v-model="form.body" required />
    </div>
    <div>
      <label for="category">カテゴリー</label>
      <input id="category" name="category" v-model="form.category" required />
    </div>
    <div>
      <label for="image">画像</label>
      <input id="image" name="image" v-model="form.image" required />
    </div>
    <button type="submit">保存</button>
    <NuxtLink :to="`/posts/${route.params.id}`">キャンセル</NuxtLink>
  </form>
</template>
