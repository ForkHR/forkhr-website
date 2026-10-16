import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'
import Logo from './Logo'
import { productGroups } from './nav-data'
import StoreBadges from '@/components/marketing/StoreBadges'
import { CTA_PRIMARY, JOBS_URL, LOGIN_URL, REGISTER_URL, SITE_TAGLINE } from '@/lib/site'
import { ALL_SOLUTION_LINKS, SOLUTION_MENU } from '@/lib/solutions'

type FooterLink = { label: string; href: string; external?: boolean; badge?: string }

// Product columns come from the header's menu (nav-data), so a product added there shows up here.
const productColumns: { title: string; links: FooterLink[] }[] = productGroups.map((g) => ({
  title: g.label,
  links: [
    ...g.items.map((i) => ({ label: i.name, href: i.href, badge: i.badge })),
    ...(g.label === 'Team' ? [{ label: 'Job board ↗', href: JOBS_URL, external: true }] : []),
  ],
}))

const companyLinks: FooterLink[] = [
  { label: 'Pricing', href: '/pricing' },
  { label: 'Pricing for AI agents', href: '/pricing.md' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Privacy policy', href: '/privacy-policy' },
  { label: 'Terms of service', href: '/terms-of-service' },
]

const businessLinks: FooterLink[] = [...SOLUTION_MENU.business.map((l) => ({ label: l.label, href: l.href })), { label: 'All solutions →', href: '/solutions' }]

// Job-to-be-done pages run along one line under the columns instead of a column of their own.
const needLinks = ALL_SOLUTION_LINKS.filter((l) => !SOLUTION_MENU.business.some((b) => b.href === l.href))

const FooterAnchor = ({ link }: { link: FooterLink }) => {
  const cls = 'text-sm text-warm-500 transition-colors hover:text-warm-950'
  if (link.external)
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={cls}>
        {link.label}
      </a>
    )
  return (
    <Link href={link.href} className={`${cls} inline-flex items-center gap-1.5`}>
      {link.label}
      {link.badge && <span className="rounded-full bg-forest-50 px-1.5 py-px text-[9.5px] font-bold uppercase tracking-wider text-forest-600">{link.badge}</span>}
    </Link>
  )
}

const Column = ({ title, links }: { title: string; links: FooterLink[] }) => (
  <div>
    <h4 className="mb-4 text-[13px] font-semibold text-warm-950">{title}</h4>
    <ul className="space-y-2.5">
      {links.map((link) => (
        <li key={link.href + link.label}>
          <FooterAnchor link={link} />
        </li>
      ))}
    </ul>
  </div>
)

const Footer = () => {
  return (
    <footer className="border-t border-warm-200 bg-warm-50">
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-16 md:px-6">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 lg:grid-cols-[1.6fr_repeat(5,1fr)]">
          <div className="col-span-2 flex flex-col gap-5 md:col-span-4 lg:col-span-1 lg:pr-6">
            <Link href="/" className="text-warm-950" aria-label="Fork home">
              <Logo height={28} />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-warm-500">{SITE_TAGLINE}</p>
            <div className="flex items-center gap-3">
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
            <StoreBadges size="sm" />
            <iframe src="https://status.forkhr.com/badge?theme=light" width="250" height="30" scrolling="no" title="Fork status" className="-ml-1" />
          </div>

          {productColumns.map((col) => (
            <Column key={col.title} title={col.title} links={col.links} />
          ))}
          <Column title="Solutions" links={businessLinks} />
          <Column title="Company" links={companyLinks} />
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-warm-200 pt-6 md:flex-row md:items-baseline md:gap-6">
          <span className="shrink-0 text-[13px] font-semibold text-warm-950">By need</span>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {needLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-warm-500 transition-colors hover:text-warm-950">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-warm-200 pt-6 sm:flex-row">
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
