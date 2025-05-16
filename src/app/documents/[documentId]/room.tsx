'use client';

import { FullScreenLoader } from '@/components/fullscreen-loader';
import { ClientSideSuspense, LiveblocksProvider, RoomProvider } from '@liveblocks/react/suspense';
import { useParams } from 'next/navigation';
import { ReactNode, useEffect, useMemo, useState } from 'react';
import { toast } from 'sonner';
import { Id } from '../../../../convex/_generated/dataModel';
import { LEFT_MARGIN_DEFAULT, RIGHT_MARGIN_DEFAULT } from '@/app/constants/margin';

type User = { id: string; name: string; avatar: string; color: string };

export function Room({ children }: { children: ReactNode }) {
  const params = useParams();
  const [users, setUsers] = useState<Array<User>>([]);
  const fetchUsers = useMemo(
    () => async () => {
      try {
        const res = await fetch('/api/users');
        if (!res.ok) return;
        const list = await res.json();
        setUsers(list);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e: unknown) {
        toast.error('Failed to fetch users');
      }
    },
    [],
  );
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  return (
    <LiveblocksProvider
      authEndpoint={async () => {
        const apiEndPoint = '/api/liveblocks-auth';
        const room = params.documentId as string;

        const response = await fetch(apiEndPoint, {
          method: 'POST',
          body: JSON.stringify({ room }),
        });
        return await response.json();
      }}
      throttle={16}
      resolveUsers={({ userIds }) => {
        return userIds.map((userId) => users.find((user) => user.id === userId) ?? undefined);
      }}
      resolveMentionSuggestions={({ text }) => {
        let filteredUsers = users;
        if (text) {
          filteredUsers = users.filter((user) =>
            user.name.toLowerCase().includes(text.toLowerCase()),
          );
        }
        const filterData = filteredUsers.map((user) => user.id);
        return filterData;
      }}
      resolveRoomsInfo={async ({ roomIds }) => {
        const docs = await fetch('/api/get-docs-details', {
          method: 'POST',
          body: JSON.stringify({ ids: roomIds as Id<'documents'>[] }),
        });
        return await docs.json();
      }}
    >
      <RoomProvider
        id={params.documentId as string}
        initialStorage={{ leftMargin: LEFT_MARGIN_DEFAULT, rightMargin: RIGHT_MARGIN_DEFAULT }}
      >
        <ClientSideSuspense fallback={<FullScreenLoader label="Room Loading..." />}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
