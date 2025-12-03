# X Search MVP

An AI-powered X/Twitter search application built with Next.js, AI SDK, and Exa API.

## Features

✅ **AI-Powered Chat Interface**
- Natural language understanding for search queries
- Real-time streaming AI responses
- Context-aware tweet discovery

✅ **X/Twitter Search**
- Search tweets using Exa API
- Get relevant results for any query
- Fast and accurate search results

✅ **Modern UI**
- Dark/Light theme support
- Beautiful Radix UI components
- Responsive design
- Markdown support for formatted content

✅ **No Authentication Required**
- Simple setup with just API keys
- No database or user management
- Easy to deploy and test

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **AI**: AI SDK with OpenRouter provider
- **Search**: Exa API for X/Twitter search
- **UI**: Radix UI components, Tailwind CSS, Lucide icons
- **State**: Zustand for state management

## Getting Started

### Prerequisites

- Node.js 18+ (recommended 20+)
- pnpm (or npm/yarn)
- API Keys:
  - OpenRouter API key: https://openrouter.ai/keys
  - Exa API key: https://www.exa.ai/

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/x-search-mvp.git
   cd x-search-mvp
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```

4. **Update .env.local with your API keys**
   ```env
   OPENROUTER_API_KEY=your_openrouter_api_key_here
   AI_MODEL=google/gemini-2.5-pro
   EXA_API_KEY=your_exa_api_key_here
   ```

5. **Start the development server**
   ```bash
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Usage

### Searching Tweets

Ask the AI to search for tweets on any topic:

- "Find tweets about AI and machine learning"
- "What are people saying about Next.js?"
- "Show me trending discussions about web development"
- "Find recent tweets about cryptocurrency"
- "Search for interesting tech news on X"

The AI will use the Exa API to search X/Twitter and present results in a natural, conversational way.

## Project Structure

```
src/
├── ai/
│   ├── tools/
│   │   ├── index.ts              # Tool composition
│   │   └── search-tweets.ts      # X/Twitter search implementation
│   └── openrouter.ts             # OpenRouter configuration
├── app/
│   ├── api/
│   │   └── chat/
│   │       ├── route.ts          # Chat API endpoint
│   │       └── prompt.md         # System prompt
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/
│   ├── chat/
│   │   ├── chat.tsx              # Main chat component
│   │   ├── chat-input.tsx        # Input component
│   │   └── message.tsx           # Message display
│   ├── ai-elements/
│   │   └── conversation.tsx      # Conversation layout
│   └── ui/
│       ├── button.tsx            # Button component
│       ├── input.tsx             # Input component
│       └── card.tsx              # Card component
├── lib/
│   ├── chat-context.tsx          # Chat state management
│   └── utils.ts                  # Utility functions
└── types/
    └── exa.ts                    # Exa API types
```

## Configuration

### AI Model

You can change the AI model in `.env.local`:

```env
AI_MODEL=google/gemini-2.5-pro  # Default
# Other options:
# AI_MODEL=openai/gpt-4-turbo
# AI_MODEL=openai/gpt-4o
# AI_MODEL=anthropic/claude-3-opus
```

### Exa Search Parameters

Modify search behavior in `src/ai/tools/search-tweets.ts`:

- `numResults`: Number of tweets to return (default: 10)
- `type`: Search type - 'auto' or 'keyword'
- `text`: Include text content in results

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard:
   - `OPENROUTER_API_KEY`
   - `AI_MODEL`
   - `EXA_API_KEY`
4. Deploy!

### Deploy to Other Platforms

This is a standard Next.js application and can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- Render
- Heroku
- Any VPS with Node.js

## Troubleshooting

### "EXA_API_KEY not set" error
- Make sure you've set `EXA_API_KEY` in your `.env.local` file
- The file should be in the root directory of the project

### "OPENROUTER_API_KEY not set" error
- Ensure `OPENROUTER_API_KEY` is set in `.env.local`
- Get a free API key from https://openrouter.ai/

### No tweets returned
- Try a different search query
- Check that your Exa API key is valid
- Ensure you have API credits remaining

### Slow responses
- This is normal for the first request (model loading)
- Subsequent requests should be faster
- Check your internet connection

## Future Enhancements

- [ ] Advanced search filters
- [ ] Tweet analytics and insights
- [ ] User profile search
- [ ] Hashtag trending analysis
- [ ] Search history
- [ ] Saved tweets/favorites
- [ ] Multiple language support

## Contributing

Feel free to fork this project and submit pull requests for any improvements!

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

If you encounter any issues:

1. Check the troubleshooting section above
2. Review the `.env.local` configuration
3. Check that API keys are valid
4. Open an issue on GitHub

## Credits

- Built with [Next.js](https://nextjs.org/)
- AI powered by [OpenRouter](https://openrouter.ai/) and [Google Gemini](https://gemini.google.com/)
- Search powered by [Exa](https://www.exa.ai/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Icons from [Lucide](https://lucide.dev/)
