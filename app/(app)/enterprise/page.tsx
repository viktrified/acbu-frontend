'use client';

import React from 'react';
import Link from 'next/link';
import { PageContainer } from '@/components/layout/page-container';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Wallet, Send } from 'lucide-react';

const items = [
  { title: 'Treasury', href: '/enterprise/treasury', icon: Wallet },
  { title: 'Bulk transfer', href: '/enterprise/bulk-transfer', icon: Send },
];

export default function EnterprisePage() {
  return (
    <>
      <div className="sticky top-0 z-10 border-b border-border bg-card/95 backdrop-blur-sm">
        <div className="px-4 py-3 flex items-center gap-3">
          <Link href="/business" className="flex items-center justify-center min-w-[44px] min-h-[44px] -m-2"><ArrowLeft className="w-5 h-5 text-primary" /></Link>
          <h1 className="text-lg font-bold text-foreground">Enterprise</h1>
        </div>
      </div>
      <PageContainer>
        <div className="space-y-2">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href}>
                <Card className="border-border p-4 flex items-center gap-3">
                  <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <p className="font-medium text-foreground">{item.title}</p>
                </Card>
              </Link>
            );
          })}
        </div>
      </PageContainer>
    </>
  );
}
