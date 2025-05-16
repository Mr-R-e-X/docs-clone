import { NextResponse } from 'next/server';
import { getUsers } from './action';

export async function GET() {
  const list = await getUsers();
  return NextResponse.json(list);
}
