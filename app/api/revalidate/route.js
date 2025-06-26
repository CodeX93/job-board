import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { path, secret } = await request.json();

    // Check for secret to confirm this is a valid request
    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
    }

    if (!path) {
      return NextResponse.json({ message: 'Path is required' }, { status: 400 });
    }

    // Revalidate the path
    revalidatePath(path);

    return NextResponse.json({ 
      message: `Path ${path} revalidated successfully`,
      revalidated: true,
      now: Date.now()
    });
  } catch (error) {
    console.error('Revalidation error:', error);
    return NextResponse.json({ 
      message: 'Error revalidating path',
      error: error.message 
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'Revalidation API endpoint. Use POST with path and secret.',
    endpoints: {
      home: '/api/revalidate',
      jobs: '/api/revalidate',
      companies: '/api/revalidate'
    }
  });
} 