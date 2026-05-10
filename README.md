# Vibe

A modern, full-featured web application built with Next.js, TypeScript, and Prisma. Vibe provides user authentication, project management, real-time code exploration, and a scalable backend API.

## Features

- **User Authentication** - Secure sign-up and sign-in with session management
- **Project Management** - Create, manage, and organize projects
- **File Explorer** - Browse and explore project files with an interactive tree view
- **Code Viewer** - Syntax-highlighted code viewing with theme support
- **tRPC API** - Type-safe backend API with automatic type inference
- **Async Background Jobs** - Powered by Inngest for scheduled and event-driven tasks
- **Database** - PostgreSQL with Prisma ORM for robust data management
- **Responsive UI** - Modern component library built with shadcn/ui
- **Usage Tracking** - Monitor and track application usage metrics
- **Pricing Plans** - Flexible pricing page for subscription tiers

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org) 14+ with App Router, TypeScript, React
- **API**: [tRPC](https://trpc.io) for type-safe API calls
- **Database**: [Prisma ORM](https://prisma.io) with PostgreSQL
- **Background Jobs**: [Inngest](https://inngest.com)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com)
- **Styling**: Tailwind CSS with custom theme support
- **Code Highlighting**: Syntax highlighting for code viewing
- **Middleware**: Next.js middleware for authentication and routing

## Prerequisites

- Node.js 18+
- npm or yarn package manager
- PostgreSQL database
- Git

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vibe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your configuration:
   ```
   DATABASE_URL=postgresql://user:password@localhost:5432/vibe
   NEXTAUTH_SECRET=<generate-a-random-secret>
   ```

4. **Set up the database**
   ```bash
   npm run db:push
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Start the Inngest dev server** (in a new terminal)
   ```bash
   npx inngest-cli@latest dev
   ```
   
   ⚠️ **Important**: Both servers must be running for background jobs and API calls to work properly.

7. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Development

### Quick Start

To run the full development environment, you'll need **two terminal windows**:

**Terminal 1 - Next.js Dev Server:**
```bash
npm run dev
```

**Terminal 2 - Inngest Dev Server:**
```bash
npx inngest-cli@latest dev
```

Both servers must be running for:
- ✅ API calls to work
- ✅ Background jobs to execute
- ✅ Event-driven functions to trigger
- ✅ Full development experience

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run TypeScript type checking
npm run type-check

# Lint code
npm run lint

# Database migrations
npm run db:push          # Sync schema with database
npm run db:migrate       # Create a new migration
npm run db:studio        # Open Prisma Studio

# Generate Prisma client
npm run db:generate
```

### Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── (home)/         # Home page routes
│   ├── projects/       # Project management pages
│   ├── api/            # API routes
│   │   ├── trpc/       # tRPC API endpoints
│   │   └── inngest/    # Inngest webhook handlers
│   └── layout.tsx      # Root layout
├── components/         # Reusable React components
│   ├── ui/            # UI component library (shadcn/ui)
│   ├── file-explorer.tsx
│   ├── tree-view.tsx
│   └── code-view/     # Code highlighting
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and helpers
│   ├── db.ts         # Database utilities
│   └── utils.ts      # General utilities
├── modules/           # Feature modules
│   ├── home/
│   ├── projects/
│   ├── messages/
│   └── usage/
├── trpc/             # tRPC configuration
│   ├── client.tsx
│   ├── server.tsx
│   └── routers/
├── inngest/          # Background job functions
├── types.ts          # Global TypeScript types
└── middleware.ts     # Next.js middleware

prisma/
├── schema.prisma     # Database schema
└── migrations/       # Migration history

public/               # Static assets
```

## Database Management

### Running Migrations

```bash
# Create a new migration after schema changes
npm run db:migrate -- --name migration_name

# Apply pending migrations
npm run db:push

# Reset database (warning: destructive)
npm run db:reset
```

### Prisma Studio

View and edit your database in a visual interface:

```bash
npm run db:studio
```

## API Usage

The project uses tRPC for type-safe API communication. Access the API through the tRPC client:

```typescript
import { trpc } from '@/trpc/client'

// Example: Fetch projects
const { data: projects } = trpc.projects.list.useQuery()

// Example: Create a project
const createProject = trpc.projects.create.useMutation()
```

All API routes are automatically type-checked and have full TypeScript support.

## Background Jobs

Background jobs are managed through Inngest. Define functions in `src/inngest/functions.ts`:

```typescript
// Example job definition
export const myJob = inngest.createFunction(
  { id: 'my-job' },
  { event: 'my.event' },
  async ({ event, step }) => {
    // Your job logic
  }
)
```

## Deployment

### Deploy on Vercel (Recommended)

1. Push your code to a Git repository
2. Import the project into [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

```bash
npm run build
```

### Environment Variables for Production

- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_SECRET` - Secret for authentication
- `INNGEST_EVENT_KEY` - Inngest webhook key
- `INNGEST_SIGNING_KEY` - Inngest signing key

### Build Output

The production build is optimized for performance:

```bash
npm run build
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Testing

```bash
# Run tests (when configured)
npm run test
```

## Troubleshooting

### Database Connection Issues
- Verify `DATABASE_URL` is correctly configured
- Ensure PostgreSQL server is running
- Check database credentials

### Port Already in Use
```bash
npm run dev -- -p 3001  # Use a different port
```

### Prisma Type Errors
```bash
npm run db:generate     # Regenerate Prisma client
```

## Performance Tips

- Use Prisma select to fetch only needed fields
- Implement proper pagination for large datasets
- Cache tRPC queries with React Query
- Use code splitting for large components
- Monitor usage with the built-in usage tracker

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues, questions, or suggestions, please open a GitHub issue or contact the development team.

---

**Built with ❤️ using Next.js, Prisma, and tRPC**
