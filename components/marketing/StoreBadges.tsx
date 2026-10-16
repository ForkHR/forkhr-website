import { cn } from '@/lib/utils'
import { APP_STORE_URL, GOOGLE_PLAY_URL } from '@/lib/site'

/*
 * The App Store and Google Play badges, laid out like the official ones (black, logo on the
 * left, two lines of text) and drawn inline so they stay sharp at any size and on any band.
 * To use Apple's and Google's artwork files instead, swap the two <a> contents here.
 * The text uses the system font, so Apple devices show it in SF like the real badge.
 */
const SYSTEM_FONT = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'

const AppleLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={cn('fill-current', className)}>
    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
  </svg>
)

// The Play triangle in its four colours, meeting at one point.
const PlayLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path fill="#4285F4" d="M3 1.5 11.5 12 3 22.5Z" />
    <path fill="#34A853" d="M3 1.5 15.5 8.6 11.5 12Z" />
    <path fill="#FBBC04" d="M15.5 8.6 21.5 12 15.5 15.4 11.5 12Z" />
    <path fill="#EA4335" d="M11.5 12 15.5 15.4 3 22.5Z" />
  </svg>
)

export default function StoreBadges({ size = 'md', className }: { size?: 'sm' | 'md'; className?: string }) {
  const sm = size === 'sm'
  const badge = cn(
    'inline-flex items-center rounded-[10px] bg-black text-white ring-1 ring-inset ring-white/25 transition-opacity hover:opacity-80',
    sm ? 'h-10 gap-2 pl-2.5 pr-3.5' : 'h-12 gap-2.5 pl-3 pr-4',
  )
  return (
    <div className={cn('flex flex-wrap items-center gap-2.5', className)}>
      <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" aria-label="Download Fork on the App Store" className={badge} style={{ fontFamily: SYSTEM_FONT }}>
        <AppleLogo className={sm ? 'h-[22px] w-[22px]' : 'h-7 w-7'} />
        <span className="flex flex-col leading-none">
          <span className={cn('font-medium', sm ? 'text-[9px]' : 'text-[10.5px]')}>Download on the</span>
          <span className={cn('font-semibold tracking-[-0.01em]', sm ? 'mt-[3px] text-[16px]' : 'mt-1 text-[19px]')}>App Store</span>
        </span>
      </a>
      <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" aria-label="Get Fork on Google Play" className={badge} style={{ fontFamily: SYSTEM_FONT }}>
        <PlayLogo className={sm ? 'h-5 w-5' : 'h-6 w-6'} />
        <span className="flex flex-col leading-none">
          <span className={cn('font-medium uppercase tracking-[0.06em]', sm ? 'text-[8.5px]' : 'text-[10px]')}>Get it on</span>
          <span className={cn('font-semibold tracking-[-0.01em]', sm ? 'mt-[3px] text-[16px]' : 'mt-1 text-[19px]')}>Google Play</span>
        </span>
      </a>
    </div>
  )
}
