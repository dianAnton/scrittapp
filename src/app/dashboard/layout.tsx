// src/app/dashboard/layout.tsx
import { ReactNode } from 'react'
import Sidebar from '@/components/dashboard/Sidebar'
import Header from '@/components/dashboard/Header'
import DashboardFooter from '@/components/dashboard/DashboardFooter'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-8 py-6 w-full">
          <Header />
        </div>
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-7xl px-6 md:px-8 py-6 w-full space-y-6">
            {children}
            <DashboardFooter />
          </div>
        </main>
      </div>
    </div>
  )
}