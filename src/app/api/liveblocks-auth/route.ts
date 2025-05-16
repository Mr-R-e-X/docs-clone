import { Liveblocks } from '@liveblocks/node';
import { ConvexHttpClient } from 'convex/browser';
import { auth, currentUser } from '@clerk/nextjs/server';
import { api } from '../../../../convex/_generated/api';

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
const liveblocks = new Liveblocks({ secret: process.env.LIVEBLOCKS_SECRET_KEY! });

export async function POST(req: Request) {
  const { sessionClaims, orgId } = await auth();

  if (!sessionClaims) {
    return new Response('Unauthorized', { status: 401 });
  }

  const user = await currentUser();
  if (!user) {
    return new Response('Unauthorized', { status: 401 });
  }

  const { room } = await req.json();
  console.log({ room });
  const document = await convex.query(api.documents.getById, { id: room });
  if (!document) {
    return new Response('Not Found', { status: 404 });
  }
  const isOwner = document.ownerId === user.id;
  const isOrganizationMember = !!(document.organizationId && document.organizationId === orgId);
  console.log({ isOwner, isOrganizationMember });
  if (!isOwner && !isOrganizationMember) {
    console.log('returning from line 29');
    return new Response('Unauthorized', { status: 401 });
  }
  const session = liveblocks.prepareSession(user.id, {
    userInfo: {
      name: user.fullName ?? user.primaryEmailAddress?.emailAddress ?? 'Anonymous',
      avatar: user.imageUrl,
    },
  });
  console.log({ session });
  session.allow(room, session.FULL_ACCESS);
  const { body, status } = await session.authorize();
  console.log({ body, status });
  return new Response(body, { status });
}
