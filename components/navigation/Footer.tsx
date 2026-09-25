import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'
import Logo from './Logo'
import { APP_STORE_URL, CTA_PRIMARY, GOOGLE_PLAY_URL, JOBS_URL, LOGIN_URL, REGISTER_URL, SITE_DESCRIPTION } from '@/lib/site'
import { ALL_SOLUTION_LINKS } from '@/lib/solutions'

type FooterLink = { label: string; href: string; external?: boolean }

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Team',
    links: [
      { label: 'Schedule', href: '/products#schedule' },
      { label: 'Timecards & time off', href: '/products#timecards' },
      { label: 'Chat', href: '/products#chat' },
      { label: 'People & HR', href: '/products#people' },
      { label: 'Hiring', href: '/hiring' },
      { label: 'Job board ↗', href: JOBS_URL, external: true },
    ],
  },
  {
    title: 'Operations',
    links: [
      { label: 'SOPs & checklists', href: '/sops' },
      { label: 'Feed', href: '/products#feed' },
      { label: 'Learn', href: '/products#learn' },
      { label: 'AI assistant', href: '/ai-assistant' },
      { label: 'Reports', href: '/products#reports' },
    ],
  },
  {
    title: 'Supply & sales',
    links: [
      { label: 'Order from vendors', href: '/supply' },
      { label: 'Vendor chat', href: '/supply#chat' },
      { label: 'Sell through Fork', href: '/sales' },
      { label: 'Invoices & payments', href: '/sales#payments' },
      { label: 'Delivery routes', href: '/sales#routes' },
    ],
  },
  {
    title: 'Solutions',
    links: [{ label: 'All solutions', href: '/solutions' }, ...ALL_SOLUTION_LINKS.map((l) => ({ label: l.label, href: l.href }))],
  },
  {
    title: 'Company',
    links: [
      { label: 'Pricing', href: '/pricing' },
      { label: 'Pricing for AI agents', href: '/pricing.md' },
      { label: 'About', href: '/about' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Privacy policy', href: '/privacy-policy' },
      { label: 'Terms of service', href: '/terms-of-service' },
    ],
  },
]

const Footer = () => {
  return (
    <footer className="border-t border-warm-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-7 md:gap-6">
          <div className="col-span-2 flex flex-col gap-5">
            <Link href="/" className="text-warm-950" aria-label="Fork home">
              <Logo height={28} />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-warm-500">{SITE_DESCRIPTION}</p>
            <div className="mt-1 flex items-center gap-3">
              <Link href={REGISTER_URL} target="_blank">
                <Button size="sm">
                  {CTA_PRIMARY}
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Button>
              </Link>
              <Link href={LOGIN_URL} target="_blank">
                <Button variant="ghost" size="sm" className="text-warm-600">
                  Sign in
                </Button>
              </Link>
            </div>
            <div className="mt-2">
              <iframe src="https://status.forkhr.com/badge?theme=light" width="250" height="30" scrolling="no" title="Fork status" />
            </div>
            <div className="mt-2 flex items-center gap-2">
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-lg border border-warm-200 px-3 py-1.5 text-[13px] font-medium text-warm-600 transition-colors hover:border-warm-300 hover:text-warm-950">
                App Store
              </a>
              <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-lg border border-warm-200 px-3 py-1.5 text-[13px] font-medium text-warm-600 transition-colors hover:border-warm-300 hover:text-warm-950">
                Google Play
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-[13px] font-semibold text-warm-950">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    {link.external ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-warm-500 transition-colors hover:text-warm-950">
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-sm text-warm-500 transition-colors hover:text-warm-950">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-warm-200 pt-6 sm:flex-row">
          <p className="text-xs text-warm-400">&copy; {new Date().getFullYear()} Fork Workforce Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-xs text-warm-400 transition-colors hover:text-warm-600">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="text-xs text-warm-400 transition-colors hover:text-warm-600">
              Terms
            </Link>
            <a href="/llms.txt" className="text-xs text-warm-400 transition-colors hover:text-warm-600">
              llms.txt
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
