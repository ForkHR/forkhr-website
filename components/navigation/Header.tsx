'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '../ui/button'
import { ArrowRight, ChevronDown, Calendar, Clock, Umbrella, FileText, ClipboardCheck, UserPlus, FolderOpen, Briefcase, AlertTriangle, UserX, Megaphone, Star, BarChart3, BookOpen, Library, ClipboardList, Wrench, Trash2, Scale, Store, MapPin, Heart, Zap, HelpCircle, BotMessageSquare, Gavel, ShieldAlert } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { cn } from '@/lib/utils'

/* ─── Products data (mirrors the app navbar) ─── */
const productGroups = [
  {
    label: 'Time & Scheduling',
    items: [
      { name: 'Schedule', desc: 'Build and share weekly schedules', icon: Calendar, href: '/products#scheduling' },
      { name: 'Timecards', desc: 'Clock-in from any device, real-time timesheets', icon: Clock, href: '/products#time-tracking' },
      { name: 'Time Off', desc: 'Manage PTO requests and approvals', icon: Umbrella, href: '/products#time-tracking' },
    ],
  },
  {
    label: 'HR & People',
    items: [
      { name: 'Onboarding', desc: 'Paperless onboarding for new hires', icon: UserPlus, href: '/products#hr-onboarding' },
      { name: 'Employment Forms', desc: 'Digital W-4, I-9 and custom forms', icon: FileText, href: '/products#hr-onboarding' },
      { name: 'Documents', desc: 'Organize and request employee documents', icon: FolderOpen, href: '/products#hr-onboarding' },
      { name: 'Hiring', desc: 'Post jobs and track applicants', icon: Briefcase, href: '/hiring' },
      { name: 'Incidents', desc: 'Document and track workplace incidents', icon: AlertTriangle, href: '/products#incidents' },
      { name: 'Violations', desc: 'Record policy violations and disciplinary actions', icon: Gavel, href: '/products#violations-terminations' },
      { name: 'Termination', desc: 'Offboarding records linked to violations', icon: UserX, href: '/products#violations-terminations' },
    ],
  },
  {
    label: 'Engagement',
    items: [
      { name: 'Updates', desc: 'Company news and announcements', icon: Megaphone, href: '/products#team-engagement' },
      { name: 'Recognitions', desc: 'Peer-to-peer kudos and rewards', icon: Star, href: '/products#team-engagement' },
      { name: 'Surveys', desc: 'Collect team feedback and measure satisfaction', icon: BarChart3, href: '/products#team-engagement' },
      { name: 'Courses', desc: 'Assign training and track completion', icon: BookOpen, href: '/products#team-engagement' },
      { name: 'Library', desc: 'Shared policies, handbooks, and guides', icon: Library, href: '/products#team-engagement' },
      { name: 'Company FAQs', desc: 'Create and publish FAQs for your team', icon: HelpCircle, href: '/products#company-faqs' },
    ],
  },
  {
    label: 'Operations',
    items: [
      { name: 'AI Assistant', desc: 'Company-trained AI for instant answers', icon: BotMessageSquare, href: '/ai-assistant' },
      { name: 'Forms', desc: 'Build custom forms with drag-and-drop', icon: ClipboardList, href: '/products#hr-onboarding' },
      { name: 'Checklists', desc: 'Daily task lists for every shift', icon: ClipboardCheck, href: '/products#hr-onboarding' },
      { name: 'Maintenance Logs', desc: 'Track equipment issues and repairs', icon: Wrench, href: '/products#maintenance-logs' },
      { name: 'Waste Control', desc: 'Log waste, track costs, reduce losses', icon: Trash2, href: '/products#waste-control' },
    ],
  },
]

/* ─── Solutions data ─── */
const solutions = [
  {
    name: 'Compliance & Legal',
    desc: 'Stay audit-ready with digital records, e-signatures, incident reports, and automated document tracking',
    icon: Scale,
    href: '/solutions/compliance',
  },
  {
    name: 'Operational Efficiency',
    desc: 'Cut waste, reduce costs, and streamline daily ops with checklists, maintenance logs, and real-time reporting',
    icon: Zap,
    href: '/solutions/operational-efficiency',
  },
  {
    name: 'Multi-Location Management',
    desc: 'Manage schedules, compare performance, and maintain consistency across every site from one dashboard',
    icon: MapPin,
    href: '/solutions/multi-location',
  },
  {
    name: 'Employee Retention',
    desc: 'Lower turnover with engagement surveys, peer recognition, career training, and better scheduling',
    icon: Heart,
    href: '/solutions/employee-retention',
  },
  {
    name: 'Franchise & Brand',
    desc: 'Standardize onboarding, training, and processes across franchise locations at scale',
    icon: Store,
    href: '/solutions/franchise',
  },
]

const Header = () => {
  const headerRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleDropdownEnter = (name: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    setActiveDropdown(name)
  }

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150)
  }

  return (
    <header
      ref={headerRef}
      className={cn(
        'fixed top-0 z-50 w-full',
        'bg-transparent',
      )}
    >
      <div className="max-w-5xl mx-auto px-4 md:px-6 pb-3 pt-3">
        <div
          className={cn(
            'liquid-glass liquid-glass-header',
            'mx-auto flex h-14 items-center',
            'px-3 md:px-5',
            'overflow-visible',
            'transition-all duration-300',
            'rounded-xl',
            isScrolled
              ? 'shadow-[0_18px_60px_rgba(2,6,23,0.12)] border-white/50'
              : 'shadow-[0_10px_40px_rgba(2,6,23,0.08)] border-white/40',
          )}
        >
          <div className="flex items-center w-full">
            {/* Logo */}
            <Link href="/" className="mr-6 items-center gap-1 rounded-xl px-2 py-1 glass-shine">
              <svg height="28px" viewBox="0 0 345 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M150.228 8.67929C152.774 8.67929 155.001 8.96213 156.91 9.52781C158.89 10.0935 160.375 10.7652 161.365 11.543L159.562 21.0888C158.784 20.5938 157.9 20.2049 156.91 19.9221C155.92 19.6392 154.754 19.4978 153.41 19.4978C150.865 19.4978 148.779 20.1342 147.152 21.407C145.597 22.609 144.819 24.7303 144.819 27.7708V35.0892L145.561 37.953V86H130.925V26.8162C130.925 22.7151 131.773 19.3211 133.47 16.6341C135.167 13.9471 137.465 11.9673 140.364 10.6945C143.334 9.35103 146.622 8.67929 150.228 8.67929ZM160.941 32.968V43.7865H122.121V32.968H160.941ZM191.785 31.9073C197.018 31.9073 201.649 33.0033 205.68 35.1953C209.71 37.3873 212.857 40.5339 215.12 44.635C217.453 48.7362 218.62 53.6858 218.62 59.484C218.62 65.2822 217.453 70.2318 215.12 74.333C212.857 78.4341 209.71 81.5807 205.68 83.7727C201.649 85.9646 197.018 87.0606 191.785 87.0606C186.553 87.0606 181.922 85.9646 177.891 83.7727C173.861 81.5807 170.714 78.4341 168.451 74.333C166.189 70.2318 165.057 65.2822 165.057 59.484C165.057 53.6858 166.189 48.7362 168.451 44.635C170.714 40.5339 173.861 37.3873 177.891 35.1953C181.922 33.0033 186.553 31.9073 191.785 31.9073ZM191.785 42.7259C189.311 42.7259 187.154 43.3622 185.316 44.635C183.548 45.8371 182.169 47.6755 181.179 50.1503C180.26 52.6252 179.8 55.7364 179.8 59.484C179.8 63.2316 180.26 66.3428 181.179 68.8176C182.169 71.2924 183.548 73.1662 185.316 74.439C187.154 75.6411 189.311 76.2421 191.785 76.2421C194.331 76.2421 196.488 75.6411 198.255 74.439C200.023 73.1662 201.402 71.2924 202.392 68.8176C203.382 66.2721 203.877 63.1609 203.877 59.484C203.877 55.7364 203.382 52.6252 202.392 50.1503C201.402 47.6755 200.023 45.8371 198.255 44.635C196.488 43.3622 194.331 42.7259 191.785 42.7259ZM230.591 86V32.968H243.425L244.167 43.6804C245.44 39.9328 247.384 37.0338 250.001 34.9832C252.688 32.9326 255.976 31.9073 259.865 31.9073C261.067 31.9073 262.127 32.0134 263.046 32.2255C264.036 32.4376 264.85 32.7205 265.486 33.074L263.789 45.3775C263.223 45.0946 262.41 44.8825 261.349 44.7411C260.359 44.5289 259.087 44.4229 257.531 44.4229C255.41 44.4229 253.395 44.9532 251.485 46.0138C249.647 47.0745 248.127 48.6654 246.925 50.7867C245.793 52.8373 245.228 55.4182 245.228 58.5294V86H230.591ZM327.441 32.968L303.365 58.7415L300.501 59.9082L285.122 76.8785L285.016 61.3931L310.789 32.968H327.441ZM288.834 9.846V86H274.197V9.846H288.834ZM305.38 49.8322L328.608 86H312.168L295.41 58.4233L305.38 49.8322Z" fill="black"/>
                <path d="M16.6804 24.7935C25.1158 33.3781 26.7618 35.1141 27.4968 36.2671C28.5781 37.9754 29.501 40.1521 29.9812 42.0952C30.3943 43.8518 30.308 48.8409 29.8259 52.479C29.2741 56.5249 29.622 59.5304 31.0417 63.0698C32.5569 66.8241 31.518 65.6662 50.8064 84.9546L63.8953 98.0425C59.4837 99.3162 54.8215 100 49.9998 100C22.3858 100 1.9778e-05 77.6144 -0.000244141 50.0005C-0.000244141 38.2337 4.06616 27.4171 10.8679 18.8765L16.6804 24.7935ZM51.3572 42.811C54.4939 41.6186 57.2677 41.4657 60.199 42.3667C63.2595 43.3075 62.1995 42.3672 79.7322 59.6909L93.9792 73.8042C92.2747 76.9468 90.2424 79.8851 87.9294 82.5757L74.7937 69.3716C58.8251 53.3288 59.2553 53.735 57.5759 53.4888C56.5977 53.3507 55.4501 53.6606 54.6111 54.3042C53.1833 55.397 52.9642 58.045 54.1453 59.7944C54.5646 60.4114 58.9782 64.874 69.2849 75.1313L82.3445 88.1245C79.6744 90.3921 76.7647 92.3854 73.656 94.0581L59.157 79.4214C44.4096 64.5247 43.3545 63.41 42.8748 62.4526C41.5765 59.7213 41.2659 56.4247 42.0281 53.1265C42.9747 48.9678 47.0474 44.4723 51.3572 42.811ZM49.9998 -0.000488281C77.614 -0.000488281 99.9998 22.3863 99.9998 50.0005C99.9997 54.9766 99.2722 59.7827 97.9187 64.3188C95.4518 61.8014 91.541 57.8615 85.3015 51.5864C74.2575 40.4827 68.1545 34.4687 67.1902 33.7134C64.3697 31.49 60.8565 30.1563 57.0671 29.8599C56.0259 29.774 53.4995 29.9055 51.4343 30.1392C46.9829 30.6737 44.1271 30.6549 41.6492 30.1177C39.6322 29.6831 37.1841 28.6081 35.5935 27.4653C34.9246 27.0054 30.9483 23.1483 25.1443 17.3442C22.7473 14.9472 20.4915 12.7135 18.7322 10.9839C27.2951 4.11265 38.1666 -0.000431741 49.9998 -0.000488281Z" fill="black"/>
              </svg>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex flex-1 items-center justify-between">
              <nav className="flex items-center gap-1">
                {/* Products dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter('products')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    href="/products"
                    className="glass-nav-link text-[15px] font-semibold px-3 py-2 rounded-lg transition-colors inline-flex items-center gap-1"
                  >
                    Products
                    <ChevronDown className={cn('w-3.5 h-3.5 transition-transform duration-200', activeDropdown === 'products' && 'rotate-180')} />
                  </Link>

                  <div className={cn(
                    'absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200',
                    activeDropdown === 'products' ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                  )}>
                    <div className="w-[720px] rounded-2xl bg-white border border-slate-200/80 shadow-[0_20px_60px_rgba(2,6,23,0.12)] p-4">
                      <div className="grid grid-cols-4 gap-4">
                        {productGroups.map((group) => (
                          <div key={group.label}>
                            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-1.5 mb-2">
                              {group.label}
                            </div>
                            {group.items.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setActiveDropdown(null)}
                                className="flex items-center gap-2 rounded-lg px-1.5 py-1.5 hover:bg-slate-50 transition-colors group"
                              >
                                <item.icon className="w-4 h-4 text-primary shrink-0" />
                                <span className="text-[13px] font-medium text-slate-700 group-hover:text-slate-900">{item.name}</span>
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                      <div className="border-t border-slate-100 pt-3 mt-3">
                        <Link
                          href="/products"
                          onClick={() => setActiveDropdown(null)}
                          className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary hover:underline px-1.5"
                        >
                          View all products
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Solutions dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter('solutions')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    className="glass-nav-link text-[15px] font-semibold px-3 py-2 rounded-lg transition-colors inline-flex items-center gap-1"
                  >
                    Solutions
                    <ChevronDown className={cn('w-3.5 h-3.5 transition-transform duration-200', activeDropdown === 'solutions' && 'rotate-180')} />
                  </button>

                  <div className={cn(
                    'absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200',
                    activeDropdown === 'solutions' ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                  )}>
                    <div className="w-[400px] rounded-2xl bg-white backdrop-blur-xl border border-slate-200/80 shadow-[0_20px_60px_rgba(2,6,23,0.12)] p-4">
                      {solutions.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-start gap-3 rounded-lg px-2.5 py-2.5 hover:bg-slate-50 transition-colors group"
                        >
                          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/8 shrink-0 mt-0.5 group-hover:bg-primary/12 transition-colors">
                            <item.icon className="w-4.5 h-4.5 text-primary" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[13px] font-semibold text-slate-800">{item.name}</div>
                            <div className="text-[12px] text-slate-500 leading-snug">{item.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  href="/pricing"
                  className="glass-nav-link text-[15px] font-semibold px-3 py-2 rounded-lg transition-colors"
                >
                  Pricing
                </Link>
                <Link
                  href="/about"
                  className="glass-nav-link text-[15px] font-semibold px-3 py-2 rounded-lg transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/faq"
                  className="glass-nav-link text-[15px] font-semibold px-3 py-2 rounded-lg transition-colors"
                >
                  FAQ
                </Link>
              </nav>

              <div className="flex items-center gap-2">
                <Link href="https://app.forkhr.com/login" target="_blank">
                  <Button variant="ghost" className="text-[15px] text-primary hover:opacity-80">
                    Sign in
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
                <Link href="https://app.forkhr.com/register" target="_blank">
                  <Button className="text-[15px] glass-shine">Get started</Button>
                </Link>
              </div>
            </div>

            {/* Mobile nav */}
            <div className="flex flex-1 items-center justify-end md:hidden gap-2 min-w-0">
              <Link href="https://app.forkhr.com/login" target="_blank" className="min-w-0">
                <Button
                  variant="ghost"
                  className="text-[15px] text-primary hover:opacity-80 max-w-[55vw]"
                >
                  <span className="min-w-0 flex-1 truncate">Sign in</span>
                  <ArrowRight className="w-4 h-4 ml-1 shrink-0" />
                </Button>
              </Link>
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button variant="secondary" className="text-[15px]" size="icon">
                    <HamburgerMenuIcon className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="flex flex-col p-0 w-full bg-white backdrop-blur-xl overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                    <div className="p-4 flex items-center border-b border-slate-100">
                      <svg height="28px" viewBox="0 0 345 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M150.228 8.67929C152.774 8.67929 155.001 8.96213 156.91 9.52781C158.89 10.0935 160.375 10.7652 161.365 11.543L159.562 21.0888C158.784 20.5938 157.9 20.2049 156.91 19.9221C155.92 19.6392 154.754 19.4978 153.41 19.4978C150.865 19.4978 148.779 20.1342 147.152 21.407C145.597 22.609 144.819 24.7303 144.819 27.7708V35.0892L145.561 37.953V86H130.925V26.8162C130.925 22.7151 131.773 19.3211 133.47 16.6341C135.167 13.9471 137.465 11.9673 140.364 10.6945C143.334 9.35103 146.622 8.67929 150.228 8.67929ZM160.941 32.968V43.7865H122.121V32.968H160.941ZM191.785 31.9073C197.018 31.9073 201.649 33.0033 205.68 35.1953C209.71 37.3873 212.857 40.5339 215.12 44.635C217.453 48.7362 218.62 53.6858 218.62 59.484C218.62 65.2822 217.453 70.2318 215.12 74.333C212.857 78.4341 209.71 81.5807 205.68 83.7727C201.649 85.9646 197.018 87.0606 191.785 87.0606C186.553 87.0606 181.922 85.9646 177.891 83.7727C173.861 81.5807 170.714 78.4341 168.451 74.333C166.189 70.2318 165.057 65.2822 165.057 59.484C165.057 53.6858 166.189 48.7362 168.451 44.635C170.714 40.5339 173.861 37.3873 177.891 35.1953C181.922 33.0033 186.553 31.9073 191.785 31.9073ZM191.785 42.7259C189.311 42.7259 187.154 43.3622 185.316 44.635C183.548 45.8371 182.169 47.6755 181.179 50.1503C180.26 52.6252 179.8 55.7364 179.8 59.484C179.8 63.2316 180.26 66.3428 181.179 68.8176C182.169 71.2924 183.548 73.1662 185.316 74.439C187.154 75.6411 189.311 76.2421 191.785 76.2421C194.331 76.2421 196.488 75.6411 198.255 74.439C200.023 73.1662 201.402 71.2924 202.392 68.8176C203.382 66.2721 203.877 63.1609 203.877 59.484C203.877 55.7364 203.382 52.6252 202.392 50.1503C201.402 47.6755 200.023 45.8371 198.255 44.635C196.488 43.3622 194.331 42.7259 191.785 42.7259ZM230.591 86V32.968H243.425L244.167 43.6804C245.44 39.9328 247.384 37.0338 250.001 34.9832C252.688 32.9326 255.976 31.9073 259.865 31.9073C261.067 31.9073 262.127 32.0134 263.046 32.2255C264.036 32.4376 264.85 32.7205 265.486 33.074L263.789 45.3775C263.223 45.0946 262.41 44.8825 261.349 44.7411C260.359 44.5289 259.087 44.4229 257.531 44.4229C255.41 44.4229 253.395 44.9532 251.485 46.0138C249.647 47.0745 248.127 48.6654 246.925 50.7867C245.793 52.8373 245.228 55.4182 245.228 58.5294V86H230.591ZM327.441 32.968L303.365 58.7415L300.501 59.9082L285.122 76.8785L285.016 61.3931L310.789 32.968H327.441ZM288.834 9.846V86H274.197V9.846H288.834ZM305.38 49.8322L328.608 86H312.168L295.41 58.4233L305.38 49.8322Z" fill="black"/>
                        <path d="M16.6804 24.7935C25.1158 33.3781 26.7618 35.1141 27.4968 36.2671C28.5781 37.9754 29.501 40.1521 29.9812 42.0952C30.3943 43.8518 30.308 48.8409 29.8259 52.479C29.2741 56.5249 29.622 59.5304 31.0417 63.0698C32.5569 66.8241 31.518 65.6662 50.8064 84.9546L63.8953 98.0425C59.4837 99.3162 54.8215 100 49.9998 100C22.3858 100 1.9778e-05 77.6144 -0.000244141 50.0005C-0.000244141 38.2337 4.06616 27.4171 10.8679 18.8765L16.6804 24.7935ZM51.3572 42.811C54.4939 41.6186 57.2677 41.4657 60.199 42.3667C63.2595 43.3075 62.1995 42.3672 79.7322 59.6909L93.9792 73.8042C92.2747 76.9468 90.2424 79.8851 87.9294 82.5757L74.7937 69.3716C58.8251 53.3288 59.2553 53.735 57.5759 53.4888C56.5977 53.3507 55.4501 53.6606 54.6111 54.3042C53.1833 55.397 52.9642 58.045 54.1453 59.7944C54.5646 60.4114 58.9782 64.874 69.2849 75.1313L82.3445 88.1245C79.6744 90.3921 76.7647 92.3854 73.656 94.0581L59.157 79.4214C44.4096 64.5247 43.3545 63.41 42.8748 62.4526C41.5765 59.7213 41.2659 56.4247 42.0281 53.1265C42.9747 48.9678 47.0474 44.4723 51.3572 42.811ZM49.9998 -0.000488281C77.614 -0.000488281 99.9998 22.3863 99.9998 50.0005C99.9997 54.9766 99.2722 59.7827 97.9187 64.3188C95.4518 61.8014 91.541 57.8615 85.3015 51.5864C74.2575 40.4827 68.1545 34.4687 67.1902 33.7134C64.3697 31.49 60.8565 30.1563 57.0671 29.8599C56.0259 29.774 53.4995 29.9055 51.4343 30.1392C46.9829 30.6737 44.1271 30.6549 41.6492 30.1177C39.6322 29.6831 37.1841 28.6081 35.5935 27.4653C34.9246 27.0054 30.9483 23.1483 25.1443 17.3442C22.7473 14.9472 20.4915 12.7135 18.7322 10.9839C27.2951 4.11265 38.1666 -0.000431741 49.9998 -0.000488281Z" fill="black"/>
              </svg>
                    </div>
                  </SheetHeader>
                  <div className="flex-1 overflow-y-auto">
                    {/* Products (collapsible) */}
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === 'products' ? null : 'products')}
                      className="w-full py-4 border-b border-slate-100 text-slate-800 font-semibold text-lg flex items-center justify-between px-4 hover:text-primary transition-colors"
                    >
                      Products
                      <ChevronDown className={cn('w-4 h-4 transition-transform', mobileExpanded === 'products' && 'rotate-180')} />
                    </button>
                    {mobileExpanded === 'products' && (
                      <div className="bg-slate-50/50 border-b border-slate-100">
                        {productGroups.map((group) => (
                          <div key={group.label} className="px-4 pt-3 pb-1">
                            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">{group.label}</div>
                            {group.items.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-3 py-2.5 px-1 text-slate-700 hover:text-primary transition-colors"
                              >
                                <item.icon className="w-4 h-4 text-primary shrink-0" />
                                <div>
                                  <div className="text-sm font-medium">{item.name}</div>
                                  <div className="text-xs text-slate-500">{item.desc}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Solutions (collapsible) */}
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === 'solutions' ? null : 'solutions')}
                      className="w-full py-4 border-b border-slate-100 text-slate-800 font-semibold text-lg flex items-center justify-between px-4 hover:text-primary transition-colors"
                    >
                      Solutions
                      <ChevronDown className={cn('w-4 h-4 transition-transform', mobileExpanded === 'solutions' && 'rotate-180')} />
                    </button>
                    {mobileExpanded === 'solutions' && (
                      <div className="bg-slate-50/50 border-b border-slate-100 px-4 py-2">
                        {solutions.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-3 py-2.5 px-1 text-slate-700 hover:text-primary transition-colors"
                          >
                            <item.icon className="w-4 h-4 text-primary shrink-0" />
                            <div>
                              <div className="text-sm font-medium">{item.name}</div>
                              <div className="text-xs text-slate-500">{item.desc}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* Simple links */}
                    <Link
                      href="/pricing"
                      onClick={() => setOpen(false)}
                      className="py-4 border-b border-slate-100 text-slate-800 font-semibold text-lg flex items-center px-4 gap-2 hover:text-primary transition-colors"
                    >
                      Pricing
                    </Link>
                    <Link
                      href="/about"
                      onClick={() => setOpen(false)}
                      className="py-4 border-b border-slate-100 text-slate-800 font-semibold text-lg flex items-center px-4 gap-2 hover:text-primary transition-colors"
                    >
                      About
                    </Link>
                    <Link
                      href="/faq"
                      onClick={() => setOpen(false)}
                      className="py-4 border-b border-slate-100 text-slate-800 font-semibold text-lg flex items-center px-4 gap-2 hover:text-primary transition-colors"
                    >
                      FAQ
                    </Link>
                  </div>
                  <SheetFooter className="p-3">
                    <div className="flex flex-1 gap-3">
                      <Link href="https://app.forkhr.com/login" target="_blank" className="flex-1">
                        <Button variant="secondary" className="text-[15px] text-primary w-full glass-shine">
                          <span className="truncate">Sign in</span>
                        </Button>
                      </Link>
                      <Link href="https://app.forkhr.com/register" target="_blank" className="flex-1">
                        <Button className="flex-1 w-full">
                          <span className="truncate">Start free trial</span>
                        </Button>
                      </Link>
                    </div>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
