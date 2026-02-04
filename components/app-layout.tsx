import React from 'react';
import { MobileNav } from './mobile-nav';

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 pb-24">{children}</main>
      <MobileNav />
    </div>
  );
}
