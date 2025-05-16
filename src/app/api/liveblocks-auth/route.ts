import { Liveblocks } from '@liveblocks/node';
import { ConvexHttpClient } from 'convex/browser';
import { auth, currentUser } from '@clerk/nextjs/server';
import { api } from '../../../../convex/_generated/api';

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
const liveblocks = new Liveblocks({ secret: process.env.LIVEBLOCKS_SECRET_KEY! });

function hashString(str: string): number {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 33) ^ str.charCodeAt(i);
  }
  return Math.abs(hash);
}

export async function POST(req: Request) {
  const { userId, orgId } = await auth();
  if (!userId) {
    return new Response('Unauthorized', { status: 401 });
  }

  const user = await currentUser();
  if (!user) {
    return new Response('Unauthorized', { status: 401 });
  }
  const { room } = await req.json();
  const document = await convex.query(api.documents.getById, { id: room });
  if (!document) {
    return new Response('Not Found', { status: 404 });
  }
  const isOwner = document.ownerId === user.id;
  const isOrganizationMember = !!(document.organizationId && document.organizationId === orgId);
  if (!isOwner && !isOrganizationMember) {
    return new Response('Unauthorized', { status: 401 });
  }
  const name = user.fullName ?? user.primaryEmailAddress?.emailAddress ?? 'Anonymous';
  const hue = hashString(name) % 360;
  const color = `hsl(${hue}, 80%, 60%)`;

  const session = liveblocks.prepareSession(user.id, {
    userInfo: {
      name: name,
      avatar: user.imageUrl,
      color,
    },
  });
  session.allow(room, session.FULL_ACCESS);
  const { body, status } = await session.authorize();
  return new Response(body, { status });
}
