// src/components/dashboard/DashboardFooter.tsx
export default function DashboardFooter() {
  return (
    <footer className="border-t border-neutral-200/70 py-6">
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
  );
}