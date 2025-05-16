import { ConvexHttpClient } from 'convex/browser';
import { api } from '../../../../convex/_generated/api';
import { Id } from '../../../../convex/_generated/dataModel';
import { NextResponse } from 'next/server';

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

async function getDocuments(ids: Id<'documents'>[]) {
  return await convex.query(api.documents.getByIds, { ids });
}

export async function POST(req: Request) {
  const { ids } = await req.json();
  const documents = await getDocuments(ids);
  const updatedArray = documents.map((document) => ({ id: document.id, name: document.name }));
  return NextResponse.json(updatedArray);
}
