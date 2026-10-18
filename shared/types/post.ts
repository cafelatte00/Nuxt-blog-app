export interface Post {
  id: number
  title: string
  summary: string //一覧に出す短い説明
  body: string // 詳細ページに出す本文
  category: string // バッチ
  image: string
  likes: number
  createdAt: string
}
