import { getUsers } from '@/app/documents/[documentId]/action';
import { NextResponse } from 'next/server';

export async function GET() {
  const list = await getUsers();
  return NextResponse.json(list);
}
