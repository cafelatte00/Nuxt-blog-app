export const posts: Post[] = [
  {
    id: 1,
    title: '美味しいクッキー',
    summary: 'チョコチップクッキーで一息つく',
    body: 'コーヒーとチョコチップクッキーで休憩します。おいクッキーとコーヒーの香りで幸せです。',
    category: 'food',
    image: '/images/1.jpg',
    likes: 7,
    createdAt: '2026-10-18'
  },
  {
    id: 2,
    title: 'クリスマスクッキー',
    summary: 'クリスマスクッキーを作りました',
    body: 'いろんな種類のクリスマスクッキーを焼きました。クリスマス前に練習です。',
    category: 'food',
    image: '/images/2.jpg',
    likes: 3,
    createdAt: '2026-10-18'
  },
  {
    id: 3,
    title: '美味しいパン屋さん',
    summary: 'お気に入りのパン屋さんを見つけました。',
    body: '近所に新しいパン屋さんができました。早速買ってきたのでコーヒーと一緒にいただきます。',
    category: 'food',
    image: '/images/3.jpg',
    likes: 3,
    createdAt: '2026-10-18'
  },
  {
    id: 4,
    title: '美味しいパン屋さん',
    summary: 'お気に入りのパン屋さんを見つけました。',
    body: '近所に新しいパン屋さんができました。早速買ってきたのでコーヒーと一緒にいただきます。',
    category: 'food',
    image: '/images/3.jpg',
    likes: 3,
    createdAt: '2026-10-18'
  },
  {
    id: 5,
    title: '美味しいパン屋さん',
    summary: 'お気に入りのパン屋さんを見つけました。',
    body: '近所に新しいパン屋さんができました。早速買ってきたのでコーヒーと一緒にいただきます。',
    category: 'food',
    image: '/images/3.jpg',
    likes: 3,
    createdAt: '2026-10-18'
  }
]

// delete
export const deletePost = (id: number): boolean => {
  const index = posts.findIndex((p) => p.id === id)
  if (index === -1) return false
  posts.splice(index, 1)
  return true
}

// update
export const updatePost = (
  id: number,
  input: Pick<Post, 'title' | 'summary' | 'body' | 'category' | 'image'>
): Post | undefined => {
  const post = posts.find((p) => p.id === id)
  if (!post) return undefined
  Object.assign(post, input)
  return post
}

//create
export const createPost = (
  input: Pick<Post, 'title' | 'summary' | 'body' | 'category' | 'image'>
): Post => {
  const newPost: Post = {
    ...input,
    id: Math.max(0, ...posts.map((p) => p.id)) + 1,
    likes: 0,
    createdAt: new Date().toISOString().slice(0, 10)
  }
  posts.push(newPost)
  return newPost
}
