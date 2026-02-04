'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function P2PPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/send');
  }, [router]);
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-muted-foreground">Redirecting to Send...</p>
    </div>
  );
}
