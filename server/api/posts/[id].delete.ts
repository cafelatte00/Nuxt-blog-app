export default defineEventHandler((event) => {
  const id = Number(getRouterParam(event, 'id'))

  if (!deletePost(id)) {
    throw createError({ status: 404, statusText: 'Not Found' })
  }

  return { ok: true }
})
