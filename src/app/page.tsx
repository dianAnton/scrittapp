// src/app/page.tsx
import Link from 'next/link'
import { Chrome, Github } from 'lucide-react'
import AuthRedirect from '@/components/AuthRedirect'

export default function Home() {
  return (
    <>
    <AuthRedirect />
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-800 antialiased selection:bg-slate-900/10 selection:text-slate-900 font-sans">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Header */}
        <header className="flex items-center justify-between py-6">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold tracking-tight text-neutral-900">Scrittapp</span>
          </div>
          <nav aria-label="Primary" className="hidden sm:flex">
            <Link href="/sign-in" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">Sign in</Link>
          </nav>
        </header>
        
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl bg-white/50 p-6 sm:p-10 md:p-14 ring-1 ring-black/5 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.02),0_30px_60px_-15px_rgba(2,6,23,0.12)] text-center">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -left-16 h-56 w-56 rounded-full bg-orange-300/20 blur-3xl"></div>
            <div className="absolute -bottom-28 -right-10 h-72 w-72 rounded-full bg-orange-200/20 blur-3xl"></div>
          </div>
          <div className="relative space-y-6">
            <h1 className="text-5xl md:text-6xl tracking-tight text-neutral-900 font-semibold">
              Remember More, Learn Deeper
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-neutral-600 mx-auto max-w-xl">
              Scrittapp combines structured notes, instant flashcard creation, and spaced repetition to help you retain knowledge effortlessly.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/sign-up" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 px-5 py-3 text-sm font-medium text-white shadow-sm ring-1 ring-black/5 transition-transform duration-200 ease-out hover:scale-[1.05] hover:shadow-[0_10px_30px_-10px_rgba(200,80,0,0.45)] active:scale-[0.98] sm:w-auto">
                <Chrome className="h-4 w-4" />
                Sign up with Google
              </Link>
              <Link href="/sign-up" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white/70 px-5 py-3 text-sm font-medium text-neutral-900 shadow-sm ring-1 ring-black/5 backdrop-blur transition-transform duration-200 ease-out hover:scale-[1.05] hover:shadow-[0_10px_30px_-10px_rgba(200,80,0,0.25)] active:scale-[0.98] sm:w-auto">
                <Github className="h-4 w-4" />
                Sign up with GitHub
              </Link>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section id="features" className="mx-auto mt-16 sm:mt-20 md:mt-24 max-w-6xl">
          <div className="mb-8 sm:mb-10 text-center">
            <h2 className="text-3xl md:text-4xl tracking-tight text-neutral-900 font-semibold">Everything you need to study smarter</h2>
            <p className="mt-2 text-sm md:text-base text-neutral-600 mx-auto max-w-lg">Capture knowledge, turn it into memory, and keep it organized without friction.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <article className="group relative rounded-2xl bg-white/60 p-5 ring-1 ring-black/5 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.02),0_20px_40px_-20px_rgba(2,6,23,0.12)] transition hover:shadow-[0_10px_30px_-10px_rgba(200,80,0,0.2)]">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 text-white ring-1 ring-black/5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-notebook-pen h-5 w-5"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"></path><path d="M2 6h4"></path><path d="M2 10h4"></path><path d="M2 14h4"></path><path d="M2 18h4"></path><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path></svg>
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-neutral-900">Take structured notes</h3>
              <p className="mt-2 text-sm text-neutral-600">Capture concepts with clean hierarchy, checklists, and formatting that stays out of your way.</p>
            </article>
            
            {/* Card 2 */}
            <article className="group relative rounded-2xl bg-white/60 p-5 ring-1 ring-black/5 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.02),0_20px_40px_-20px_rgba(2,6,23,0.12)] transition hover:shadow-[0_10px_30px_-10px_rgba(200,80,0,0.2)]">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 text-white ring-1 ring-black/5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-mouse-pointer h-5 w-5"><path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"></path><path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"></path></svg>
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-neutral-900">Convert notes into flashcards</h3>
              <p className="mt-2 text-sm text-neutral-600">Highlight key facts and instantly generate Q&A cards with smart suggestions.</p>
            </article>
            
            {/* Card 3 */}
            <article className="group relative rounded-2xl bg-white/60 p-5 ring-1 ring-black/5 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.02),0_20px_40px_-20px_rgba(2,6,23,0.12)] transition hover:shadow-[0_10px_30px_-10px_rgba(200,80,0,0.2)]">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 text-white ring-1 ring-black/5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-clock h-5 w-5"><path d="M16 14v2.2l1.6 1"></path><path d="M16 2v4"></path><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M3 10h5"></path><path d="M8 2v4"></path><circle cx="16" cy="16" r="6"></circle></svg>
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-neutral-900">Get spaced repetition reminders</h3>
              <p className="mt-2 text-sm text-neutral-600">Stay on track with timely reviews based on proven memory science.</p>
            </article>
            
            {/* Card 4 */}
            <article className="group relative rounded-2xl bg-white/60 p-5 ring-1 ring-black/5 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.02),0_20px_40px_-20px_rgba(2,6,23,0.12)] transition hover:shadow-[0_10px_30px_-10px_rgba(200,80,0,0.2)]">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 text-white ring-1 ring-black/5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers h-5 w-5"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-neutral-900">Organize decks like a pro</h3>
              <p className="mt-2 text-sm text-neutral-600">Group topics, tag cards, and filter by difficulty to focus where it matters.</p>
            </article>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="mx-auto mt-16 sm:mt-20 md:mt-24 max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl bg-white/60 p-8 sm:p-10 ring-1 ring-black/5 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.02),0_30px_60px_-15px_rgba(2,6,23,0.12)] text-center sm:text-left">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="absolute -right-16 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-orange-300/20 blur-3xl"></div>
              <div className="absolute -left-16 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-orange-200/20 blur-3xl"></div>
            </div>
            <div className="relative flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl tracking-tight text-neutral-900 font-semibold">
                  Start building a smarter memory today
                </h3>
                <p className="mt-2 text-sm text-neutral-600">Join free. Your notes, your pace, your progress.</p>
              </div>
              <Link href="/sign-up" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-600 px-5 py-3 text-sm font-medium text-white shadow-sm ring-1 ring-black/5 transition-transform duration-200 ease-out hover:scale-[1.05] hover:shadow-[0_10px_30px_-10px_rgba(200,80,0,0.45)] active:scale-[0.98]">
                Create your account
              </Link>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="mt-20 border-t border-neutral-200/70 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-neutral-900">Scrittapp</span>
              <span className="text-sm text-neutral-600">© {new Date().getFullYear()}</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-neutral-600">
              <a href="#" className="hover:text-neutral-900 transition-colors">Privacy</a>
              <a href="#" className="hover:text-neutral-900 transition-colors">Terms</a>
              <a href="#" className="hover:text-neutral-900 transition-colors">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
    </>
  )
}
