export interface ExaSearchResult {
  title: string
  url: string
  text?: string
  author?: string
  publishedDate?: string
}

export interface ExaSearchResponse {
  results: ExaSearchResult[]
  count: number
}
