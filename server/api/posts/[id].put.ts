export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, 'id'))
  const input = await readBody<Partial<Post>>(event)

  if (!input?.title || !input?.body) {
    throw createError({ status: 400, statusText: 'タイトルと本文は必須です。' })
  }

  const post = updatePost(id, {
    title: input.title,
    summary: input.summary ?? '',
    body: input.body,
    category: input.category ?? '',
    image: input.image ?? ''
  })

  if (!post) {
    throw createError({ status: 404, statusText: 'Not Found' })
  }
  return post
})
