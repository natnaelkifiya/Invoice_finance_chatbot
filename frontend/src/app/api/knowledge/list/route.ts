import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + '/knowledge/list');
  const data = await res.json();
  return NextResponse.json(data);
} 