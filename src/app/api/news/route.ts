import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

const parser = new Parser();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) return NextResponse.json({ error: 'URL is required' }, { status: 400 });

  try {
    const feed = await parser.parseURL(url);
    return NextResponse.json(feed.items.slice(0, 5)); // Ambil 5 berita terbaru
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch feed' }, { status: 500 });
  }
}

