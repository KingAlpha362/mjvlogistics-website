import { PageContainer } from '../layout/PageContainer';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-courier-ink py-14 text-center text-white">
      <PageContainer>
        <div className="inline-flex rounded-xl border border-white/20 bg-white px-8 py-3 shadow-lg">
          <img
            src="/images-mjv/mjv_logistics-logo.png"
            alt="MJV Courier"
            className="h-12 w-auto"
            width={180}
            height={60}
          />
        </div>
        <p className="mx-auto mt-6 max-w-md text-sm text-white/60">
          South African courier and express logistics — professional, on-time, nationwide.
        </p>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/45 sm:flex-row">
          <span>&copy; {new Date().getFullYear()} MJV Logistics. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white/80">
              Privacy
            </a>
            <a href="#" className="transition hover:text-white/80">
              Terms
            </a>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}
