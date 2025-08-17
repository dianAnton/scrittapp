// src/app/dashboard/layout.tsx
import SyncUserWithConvex from '@/components/SyncUserWithConvex'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <SyncUserWithConvex />
      {children}
    </div>
  )
}