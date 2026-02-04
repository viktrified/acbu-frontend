# ACBU App - Quick Reference Card

## 🧭 Navigation at a Glance

```
┌──────┬──────┬──────┬──────┬──────┐
│ 🏠   │ ✈️   │ ⚡   │ 💼   │ 👤   │
├──────┼──────┼──────┼──────┼──────┤
│ Home │ Send │ Mint │ Biz  │  Me  │
│  /   │/send │/mint │/biz  │ /me  │
└──────┴──────┴──────┴──────┴──────┘
```

---

## 📍 Where to Find Everything

| Feature | Route | Details |
|---------|-------|---------|
| **Dashboard** | `/` | Balance, quick actions, activity |
| **Send Money** | `/send` | P2P transfers, frequent recipients |
| **International** | `/send/international` | Cross-border transfers |
| **History** | `/send/history` | Transaction history |
| **Mint/Burn** | `/mint` | Create/redeem AFK |
| **Rates** | `/mint` | Exchange rate info (tab) |
| **SME** | `/business/sme` | Business accounts |
| **Payroll** | `/business/salary` | Salary disbursement |
| **Enterprise** | `/business/enterprise` | Bulk operations |
| **Gateway** | `/business/gateway` | Payment processing |
| **Profile** | `/me/profile` | User information |
| **Settings** | `/me/settings` | Account settings |
| **KYC** | `/me/kyc` | Verification |
| **Recovery** | `/me/recovery` | Account recovery |
| **Savings** | `/savings` | Savings products |
| **Lending** | `/lending` | Loans |
| **Bills** | `/bills` | Bill payments |
| **Sign In** | `/auth/signin` | Authentication |
| **2FA** | `/auth/2fa` | Two-factor auth |

---

## 💰 Currency Display

```
✅ Correct Format:  "AFK 1,234.50"
✅ Short Form:      "AFK 100"
✅ Large Numbers:   "AFK 1,000,000"
✅ Small Numbers:   "AFK 0.50"

❌ Wrong: "$1,234.50"
❌ Wrong: "1,234.50 AFK"
❌ Wrong: "USD 100"
❌ Wrong: "100"
```

---

## 🎨 Color Reference

| Use | Color | Code |
|-----|-------|------|
| Primary (Buttons) | Purple/Indigo | `oklch(0.35 0.12 280)` |
| Accent (Links) | Teal/Cyan | `oklch(0.55 0.15 160)` |
| Success | Green | `bg-green-600` |
| Error | Red | `bg-red-600` |
| Warning | Yellow | `bg-yellow-600` |
| Neutral | Gray | `bg-gray-200` |

---

## 📄 Page Layouts

### Standard Page Structure
```
┌─ Sticky Header ─────────────────┐
│ Back | Title | (Info)           │
├─────────────────────────────────┤
│ Quick Nav Tabs / Filters        │
├─────────────────────────────────┤
│                                 │
│  SCROLLABLE CONTENT             │
│                                 │
│                                 │
├─────────────────────────────────┤
│  [Empty space for nav]          │
│  pb-24 padding                  │
└─────────────────────────────────┘
```

### Dialog Pattern
```
┌─ Dialog Header ─────────────────┐
│ Title                           │
│ Subtitle / Description          │
├─────────────────────────────────┤
│                                 │
│  Dialog Content                 │
│  (Forms, Cards, Text)           │
│                                 │
├─────────────────────────────────┤
│ [Cancel]  [Continue/Action]     │
└─────────────────────────────────┘
```

---

## ⚡ Common Tasks

### Add a New Page
1. Create `/app/[feature]/page.tsx`
2. Import `AppLayout` component
3. Wrap content in `<AppLayout>`
4. Add bottom padding: `pb-24`
5. Link from existing nav or parent page

### Add Nav Item
1. Edit `/components/mobile-nav.tsx`
2. Add to `navItems` array
3. Update icon imports
4. Add corresponding route

### Update Currency Display
```tsx
// Change from:
${amount}

// To:
AFK {amount}
```

### Add a Tab
```tsx
<Tabs defaultValue="tab1" onValueChange={setActiveTab}>
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">{/* content */}</TabsContent>
  <TabsContent value="tab2">{/* content */}</TabsContent>
</Tabs>
```

---

## 🔌 API Integration Points

### Core Endpoints Needed
```
POST   /send              Create transfer
GET    /send/history      Get transfers
POST   /mint              Mint operation
POST   /burn              Burn operation
GET    /account           User account
GET    /account/balance   Current balance
POST   /kyc/start         Start KYC
GET    /kyc/status        KYC status
GET    /bills/catalog     Bill providers
POST   /bills/pay         Pay bill
```

### Example API Call
```tsx
const response = await fetch('/api/send', {
  method: 'POST',
  body: JSON.stringify({
    recipient: '0x...',
    amount: 100,
    currency: 'AFK',  // Always AFK
    note: 'Payment'
  })
});

const data = await response.json();
```

---

## 📐 Component Usage

### Card
```tsx
<Card className="border-border p-4">
  Content here
</Card>
```

### Button
```tsx
<Button>Click Me</Button>
<Button variant="outline">Secondary</Button>
<Button disabled>Disabled</Button>
```

### Badge
```tsx
<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
```

### Dialog
```tsx
<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
    </DialogHeader>
    Content
  </DialogContent>
</Dialog>
```

### Tabs
```tsx
<Tabs value={active} onValueChange={setActive}>
  <TabsList>
    <TabsTrigger value="a">Tab A</TabsTrigger>
    <TabsTrigger value="b">Tab B</TabsTrigger>
  </TabsList>
  <TabsContent value="a">Content A</TabsContent>
  <TabsContent value="b">Content B</TabsContent>
</Tabs>
```

---

## 🔐 Common Patterns

### Loading State
```tsx
const [loading, setLoading] = useState(false);

const handleAction = async () => {
  setLoading(true);
  try {
    // API call
  } finally {
    setLoading(false);
  }
};

<Button disabled={loading}>
  {loading ? 'Processing...' : 'Submit'}
</Button>
```

### Form Validation
```tsx
const [error, setError] = useState('');
const isValid = amount > 0 && amount <= balance;

<Button disabled={!isValid}>Submit</Button>
{error && <p className="text-destructive">{error}</p>}
```

### Confirmation Dialog
```tsx
<AlertDialog open={showConfirm} onOpenChange={setShowConfirm}>
  <AlertDialogContent>
    <AlertDialogTitle>Confirm?</AlertDialogTitle>
    <AlertDialogAction onClick={handleConfirm}>
      Yes, Confirm
    </AlertDialogAction>
  </AlertDialogContent>
</AlertDialog>
```

---

## 📝 File Naming Conventions

```
Pages:           page.tsx
Components:      PascalCase.tsx
Utilities:       kebab-case.ts
Hooks:           useHookName.ts
Types:           types.ts or [name].types.ts
Styles:          globals.css (app-wide)
```

---

## 🚀 Deployment Checklist

- [ ] All USD references removed
- [ ] AFK currency throughout
- [ ] Mobile nav working
- [ ] All routes accessible
- [ ] API endpoints configured
- [ ] Error handling in place
- [ ] Loading states working
- [ ] Responsive on mobile
- [ ] Accessibility verified
- [ ] Documentation updated

---

## 📚 Key Files to Know

| File | Purpose | When to Edit |
|------|---------|--------------|
| `/app/globals.css` | Design tokens | Update colors/fonts |
| `/components/mobile-nav.tsx` | Navigation | Add/remove nav items |
| `/components/app-layout.tsx` | Layout wrapper | Change global layout |
| `/docs/ROUTES.md` | Route reference | Update routes |
| `/docs/ARCHITECTURE.md` | System design | Architecture changes |
| Page files | Features | Add/update features |

---

## 💡 Tips & Tricks

1. **Mobile Testing**: Always test on actual mobile device
2. **Padding**: Remember `pb-24` for nav clearance
3. **Links**: Use `useRouter` from 'next/navigation'
4. **Icons**: Import from 'lucide-react'
5. **Colors**: Use design tokens in globals.css
6. **Buttons**: Always have primary action highlighted
7. **Forms**: Always show validation errors
8. **Loading**: Always show loading state
9. **Success**: Always show success feedback
10. **Accessibility**: Always use semantic HTML

---

## 🆘 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Nav hidden behind content | Add `pb-24` to main |
| Currency showing $ | Change to `AFK ` format |
| Route not found | Check `/docs/ROUTES.md` |
| Component not styled | Check global colors |
| Mobile layout broken | Check responsive classes |
| Dialog behind nav | Ensure `z-50` on dialog |
| Links not working | Use `useRouter` from next/navigation |

---

## 📞 Quick Support

- **Navigation Help**: See `/docs/ROUTES.md`
- **Architecture Help**: See `/docs/ARCHITECTURE.md`
- **Visual Help**: See `/docs/DIAGRAMS.md`
- **Migration Help**: See `/docs/MIGRATION.md`
- **General Help**: See `/docs/README.md`

---

**Last Updated:** 2026-02-03  
**Version:** 1.0.0 (Restructured Architecture)
