import Exa from 'exa-js'

const exa = new Exa(process.env.EXA_API_KEY || '')

export interface TweetResult {
  title: string
  url: string
  text: string
  author?: string
  publishedDate?: string
  likeCount?: number
}

export interface SearchTweetsResult {
  query: string
  results: TweetResult[]
  count: number
}

export async function searchTweets(
  query: string,
  type: 'auto' | 'keyword' = 'auto'
): Promise<SearchTweetsResult> {
  if (!process.env.EXA_API_KEY) {
    throw new Error('EXA_API_KEY environment variable is not set')
  }

  try {
    const result = await exa.searchAndContents(query, {
      category: 'tweet',
      text: true,
      type: type,
      numResults: 10,
    })

    const tweets: TweetResult[] = result.results.map((item: any) => ({
      title: item.title || 'Tweet',
      url: item.url,
      text: item.text || '',
      author: item.author || 'Unknown',
      publishedDate: item.publishedDate,
    }))

    return {
      query,
      results: tweets,
      count: tweets.length,
    }
  } catch (error: any) {
    console.error('Exa API error:', error)
    throw new Error(`Failed to search tweets: ${error.message}`)
  }
}
