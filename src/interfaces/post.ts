export type Category = {
  icon?: string
  name: string
  path: string[]
  posts: Array<Array<string>>
}

export type CategoryTree = Category & {
  children: CategoryTree[]
}

export type PostType = {
  path: string[]
  title: string
  description: string
  date: string
  coverImage: null | string
  ogImage: null | {
    url: string
  }
  content: string
}
