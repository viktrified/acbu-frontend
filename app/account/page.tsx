'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppLayout } from '@/components/app-layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  User,
  Settings,
  Shield,
  Wallet,
  Users,
  FileText,
  Lock,
  LogOut,
  ChevronRight,
  Copy,
  QrCode,
} from 'lucide-react';

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  description?: string;
  href?: string;
  action?: () => void;
  badge?: string;
}

export default function AccountPage() {
  const [showAddress, setShowAddress] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const mockAddress = 'GBU6NZZB4ZCMZVL7DVRD4J7XXKXR6QC4MNQJNQJ6ABOQNPZXSHJ4VZH';
  const mockUser = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+234 (0) 123 456 7890',
    kycStatus: 'verified',
    createdDate: 'Jan 15, 2024',
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(mockAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const sections: {
    title: string;
    items: MenuItem[];
  }[] = [
    {
      title: 'Profile',
      items: [
        {
          icon: <User className="w-5 h-5" />,
          label: 'Profile Information',
          description: 'View and edit your profile',
          href: '/account/profile',
        },
        {
          icon: <Wallet className="w-5 h-5" />,
          label: 'Receive Money',
          description: 'Wallet address & QR code',
          href: '/account/receive',
        },
      ],
    },
    {
      title: 'Security & Verification',
      items: [
        {
          icon: <Shield className="w-5 h-5" />,
          label: 'Two-Factor Authentication',
          description: 'Secure your account',
          href: '/account/2fa-settings',
        },
        {
          icon: <Lock className="w-5 h-5" />,
          label: 'Change Password',
          description: 'Update your password',
          href: '/account/change-password',
        },
        {
          icon: <FileText className="w-5 h-5" />,
          label: 'KYC Verification',
          description: 'View KYC status',
          badge: 'Verified',
          href: '/account/kyc',
        },
      ],
    },
    {
      title: 'Management',
      items: [
        {
          icon: <Users className="w-5 h-5" />,
          label: 'Contacts',
          description: 'Manage saved contacts',
          href: '/account/contacts',
        },
        {
          icon: <Users className="w-5 h-5" />,
          label: 'Guardians',
          description: 'Account recovery contacts',
          href: '/account/guardians',
        },
        {
          icon: <Settings className="w-5 h-5" />,
          label: 'Settings',
          description: 'App preferences',
          href: '/account/settings',
        },
      ],
    },
    {
      title: 'Danger Zone',
      items: [
        {
          icon: <LogOut className="w-5 h-5" />,
          label: 'Sign Out',
          description: 'Log out from this device',
          action: () => {
            console.log('[v0] Sign out');
            window.location.href = '/auth/signin';
          },
        },
      ],
    },
  ];

  return (
    <AppLayout>
      <div className="pb-20">
        {/* Header */}
        <div className="px-4 pt-6 pb-6 border-b border-border">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-1">
                {mockUser.name}
              </h1>
              <p className="text-sm text-muted-foreground">{mockUser.email}</p>
            </div>
            <Badge
              variant="outline"
              className="capitalize bg-green-50 text-green-700 border-green-200"
            >
              {mockUser.kycStatus}
            </Badge>
          </div>

          {/* Quick Wallet Info */}
          <Card className="border-border bg-muted p-4">
            <p className="text-xs text-muted-foreground mb-2">Stellar Address</p>
            <div className="flex items-start gap-2">
              <div className="flex-1 min-w-0">
                <p className="text-xs font-mono break-all text-foreground">
                  {showAddress ? mockAddress : '••••••••••••••••••••••••••••••••••••••••••'}
                </p>
              </div>
              <button
                onClick={() => setShowAddress(!showAddress)}
                className="text-primary hover:text-primary/80 text-xs font-medium flex-shrink-0"
              >
                {showAddress ? 'Hide' : 'Show'}
              </button>
            </div>
            <div className="flex gap-2 mt-3">
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyAddress}
                className="flex-1 bg-transparent"
                disabled={!showAddress}
              >
                <Copy className="w-3 h-3 mr-1" />
                {copiedAddress ? 'Copied' : 'Copy'}
              </Button>
              <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                <QrCode className="w-3 h-3 mr-1" />
                QR Code
              </Button>
            </div>
          </Card>
        </div>

        {/* Menu Sections */}
        <div className="divide-y divide-border">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="px-4 pt-4 pb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {section.title}
              </h2>
              <div className="space-y-1 pb-4">
                {section.items.map((item, idx) => (
                  <div key={idx}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-muted transition-colors"
                      >
                        <div className="text-primary flex-shrink-0">{item.icon}</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground">
                            {item.label}
                          </p>
                          {item.description && (
                            <p className="text-xs text-muted-foreground">
                              {item.description}
                            </p>
                          )}
                        </div>
                        {item.badge && (
                          <Badge
                            variant="outline"
                            className="text-xs flex-shrink-0"
                          >
                            {item.badge}
                          </Badge>
                        )}
                        <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      </Link>
                    ) : (
                      <button
                        onClick={item.action}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-muted transition-colors text-left"
                      >
                        <div className="text-primary flex-shrink-0">{item.icon}</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground">
                            {item.label}
                          </p>
                          {item.description && (
                            <p className="text-xs text-muted-foreground">
                              {item.description}
                            </p>
                          )}
                        </div>
                        {item.badge && (
                          <Badge
                            variant="outline"
                            className="text-xs flex-shrink-0"
                          >
                            {item.badge}
                          </Badge>
                        )}
                        <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* App Info */}
        <div className="px-4 py-6 text-center text-xs text-muted-foreground border-t border-border">
          <p>Member since {mockUser.createdDate}</p>
          <p className="mt-2">ACBU • Version 1.0.0</p>
        </div>
      </div>
    </AppLayout>
  );
}
