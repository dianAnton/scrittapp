// src/app/(auth)/sign-up/[[...rest]]/page.tsx
import { SignUp } from '@clerk/nextjs'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-neutral-900">Create your account</h1>
          <p className="mt-2 text-neutral-600">Join Scrittapp today</p>
        </div>
        <SignUp 
          redirectUrl="/dashboard"
          afterSignUpUrl="/dashboard"
          forceRedirectUrl="/dashboard"
          fallbackRedirectUrl="/dashboard"
        />
        <div className="text-center text-sm text-neutral-600">
          Already have an account?{' '}
          <Link href="/sign-in" className="font-medium text-primary-600 hover:text-primary-500">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}