export default defineEventHandler(async (event) => {
  // readBodyはJSONを取り出す、awaitが必須
  const body = await readBody(event)

  if (!body?.title || !body?.body) {
    throw createError({ status: 400, statusText: 'タイトルと本文は必須です' })
  }

  return createPost({
    title: body.title,
    summary: body.summary ?? '',
    body: body.body,
    category: body.category ?? '未設定',
    image: body.image ?? '/images/1.jpg'
  })
})
