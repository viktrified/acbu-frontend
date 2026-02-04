'use client';

import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Mobile-first content wrapper: px-4 py-4 pb-24 so content is never hidden under the bottom nav (h-20).
 */
export function PageContainer({ children, className = '' }: PageContainerProps) {
  return (
    <div className={`px-4 py-4 pb-24 ${className}`.trim()}>
      {children}
    </div>
  );
}
