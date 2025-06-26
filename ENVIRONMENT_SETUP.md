# Environment Setup for ISR

## Required Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# Base URL for your application
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Secret key for manual revalidation (optional)
REVALIDATION_SECRET=your-secret-key-here

# Environment
NODE_ENV=development
```

## Production Environment Variables

For production deployment, set these environment variables:

```bash
# Production base URL
NEXT_PUBLIC_BASE_URL=https://your-domain.com

# Secret key for manual revalidation
REVALIDATION_SECRET=your-production-secret-key

# Environment
NODE_ENV=production
```

## Vercel Deployment

If deploying to Vercel, add these environment variables in your Vercel dashboard:

1. Go to your project settings
2. Navigate to Environment Variables
3. Add the variables listed above

## Testing Manual Revalidation

To test manual revalidation:

1. Set the `REVALIDATION_SECRET` environment variable
2. Run the revalidation script:

```bash
# Revalidate home page
npm run revalidate /

# Revalidate specific path
npm run revalidate /jobs

# With custom secret
npm run revalidate / your-custom-secret
```

## Security Notes

- Keep your `REVALIDATION_SECRET` secure and private
- Use different secrets for development and production
- Consider using a strong, randomly generated secret
- Never commit the actual secret to version control 