import React from 'react';
import { AuthGuard } from '@/components/layout/auth-guard';
import { AppLayout } from '@/components/app-layout';

export default function AppRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <AppLayout>{children}</AppLayout>
    </AuthGuard>
  );
}
