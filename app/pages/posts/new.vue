<script setup lang="ts">
const form = reactive({
  title: '',
  summary: '',
  body: '',
  category: 'food',
  image: '/images/1.jpg'
})

const errorMessage = ref('')

const submit = async () => {
  try {
    const created = await $fetch('/api/posts', {
      method: 'POST',
      body: form
    })
    await navigateTo(`/posts/${created.id}`)
  } catch {
    errorMessage.value = '投稿に失敗しました'
  }
}
</script>

<template>
  <div class="container">
    <h2>新規投稿</h2>
    <form @submit.prevent="submit">
      <div>
        <label for="title">title</label>
        <input id="title" type="text" v-model="form.title" />
      </div>
      <div>
        <label for="summary">summary</label>
        <input id="summary" type="text" v-model="form.summary" />
      </div>
      <div>
        <label for="body">body</label>
        <textarea id="body" type="text" v-model="form.body" />
      </div>
      <div>
        <label for="category">category</label>
        <input id="category" type="text" v-model="form.category" />
      </div>
      <div>
        <label for="image"></label>
        <input id="image" type="text" v-model="form.image" />
      </div>
      <button type="submit">投稿する</button>
      <p v-if="errorMessage">{{ errorMessage }}</p>
    </form>
  </div>
</template>
