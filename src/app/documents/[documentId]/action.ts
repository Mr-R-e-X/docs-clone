'use server ';

import { auth, clerkClient } from '@clerk/nextjs/server';

export async function getUsers() {
  const { sessionClaims } = await auth();
  const session = await auth();
  console.log({ session });
  //   const { o } = sessionClaims;
  const clerk = await clerkClient();
  console.log(sessionClaims?.org_id);
  const response = await clerk.users.getUserList({
    organizationId: [sessionClaims?.org_id as string],
  });
  const users = response.data.map((user) => {
    return {
      id: user.id,
      name: user.fullName ?? user.primaryEmailAddress?.emailAddress ?? 'Anonymous',
      avatar: user.imageUrl,
    };
  });
  return users;
}
