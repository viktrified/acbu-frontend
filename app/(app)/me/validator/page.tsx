'use client';

import React from 'react';
import Link from 'next/link';
import { PageContainer } from '@/components/layout/page-container';
import { Card } from '@/components/ui/card';
import { ArrowLeft, ClipboardCheck, UserPlus } from 'lucide-react';

export default function ValidatorPage() {
  return (
    <>
      <div className="sticky top-0 z-10 border-b border-border bg-card/95 backdrop-blur-sm">
        <div className="px-4 py-3 flex items-center gap-3">
          <Link href="/me" className="flex items-center justify-center min-w-[44px] min-h-[44px] -m-2"><ArrowLeft className="w-5 h-5 text-primary" /></Link>
          <h1 className="text-lg font-bold text-foreground">Validator</h1>
        </div>
      </div>
      <PageContainer>
        <div className="space-y-2">
          <Link href="/me/validator/register">
            <Card className="border-border p-4 flex items-center gap-3">
              <UserPlus className="w-5 h-5 text-primary flex-shrink-0" />
              <p className="font-medium text-foreground">Register</p>
            </Card>
          </Link>
          <Link href="/me/validator/tasks">
            <Card className="border-border p-4 flex items-center gap-3">
              <ClipboardCheck className="w-5 h-5 text-primary flex-shrink-0" />
              <p className="font-medium text-foreground">Tasks</p>
            </Card>
          </Link>
        </div>
      </PageContainer>
    </>
  );
}
