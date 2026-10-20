export default defineEventHandler((event) => {
  const id = Number(getRouterParam(event, 'id'))
  const post = posts.find((p) => p.id === id)
  if (!post) {
    throw createError({ status: 404, statusText: 'Not Found' })
  }
  return post
})
