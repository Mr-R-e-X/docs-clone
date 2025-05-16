'use client';

import { ReactNode, useEffect } from 'react';
import { useMyPresence } from '@liveblocks/react';

export function RoomPresenceWrapper({ children }: { children: ReactNode }) {
  const [, updateMyPresence] = useMyPresence();

  useEffect(() => {
    updateMyPresence({ cursor: null }); // This triggers room creation
  }, [updateMyPresence]);

  return <>{children}</>;
}
