import type { Metadata } from 'next'
import { EyeOff, Link2, ShieldCheck, Star } from 'lucide-react'
import Hero from '@/components/marketing/Hero'
import SectionHeading from '@/components/marketing/SectionHeading'
import FeatureRow from '@/components/marketing/FeatureRow'
import IllustrationFrame from '@/components/marketing/IllustrationFrame'
import CtaSection from '@/components/marketing/CtaSection'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { LinksPreview, Window } from '@/components/previews'
import { LOCATIONS } from '@/lib/illustrations'

const description =
  'A link page for every location with review, directions, call, Wi-Fi and hiring buttons; links and QR codes with scans and button presses counted; a link straight to your Google review form; customer surveys by link with low-rating alerts; and New York City health inspection results. The link page is free.'

export const metadata: Metadata = {
  title: 'Locations — Fork | Link page, QR codes, Google reviews, customer surveys and NYC health inspections',
  description,
  alternates: { canonical: '/locations' },
  openGraph: { title: 'Locations on Fork: a link page and QR codes for every shop', description, url: 'https://forkhr.com/locations', images: ['/og-image.png'], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Locations on Fork: a link page and QR codes for every shop', description, images: ['/og-image.png'] },
}

const [counter, review, survey, codes, inspection] = LOCATIONS

// Locations in the app is a sidebar row over Links and Health inspections; customer surveys are a
// kind of survey (Feed → Surveys, "Anyone with the link") that the page's "Tell us how we did"
// button opens. Every claim below is what the app does today (backend/utils/linkRules.js,
// linkPageHtml.js, publicSurveys.js, healthInspections.js). Not claimed: reading or answering
// Google reviews (Fork only opens the form), NFC tags, printed pieces, any city but New York.
const steps = [
  { n: '1', title: 'Check each shop’s page', desc: 'Review, directions, call and hiring are already filled in from the location. Add the Wi-Fi, your profiles and buttons of your own.' },
  { n: '2', title: 'Paste your review links', desc: 'One Google review link per shop, and the Review us on Google button and review codes open the right form.' },
  { n: '3', title: 'Print the codes', desc: 'Make a link for each spot, download its QR code, and put it on the counter, the window or the receipt.' },
]

const promises = [
  { icon: <Star className="h-4 w-4" />, title: 'Every customer sees the same buttons', desc: 'Fork never sends only happy customers to review you, and never asks for a rating before the review link.' },
  { icon: <EyeOff className="h-4 w-4" />, title: 'Nothing kept about who', desc: 'A count a day for each link and button. The page runs no scripts and keeps no names.' },
  { icon: <Link2 className="h-4 w-4" />, title: 'Links go where they say', desc: 'A review link opens only Google’s own review pages, and a paused code says so instead of going somewhere else.' },
]

const faqs = [
  { q: 'What does it cost?', a: 'The link page, links and QR codes are free on every plan. Customer surveys come with Surveys on Pro, and health inspections are on Essential.' },
  { q: 'Can I read and answer my Google reviews in Fork?', a: 'No. Fork opens your review form for each shop; you read and answer reviews in your Google Business Profile.' },
  { q: 'Do customers need an account or an app?', a: 'No. The page and the survey open in any phone’s browser, with nothing to install or sign up for.' },
  { q: 'Can each shop have different buttons?', a: 'Yes. Every location has a page of its own, with its own buttons in its own order. A link for all locations first asks which shop the visitor is at.' },
  { q: 'Does a printed QR code ever stop working?', a: 'Only while you pause it or switch Links off. A code never changes, so a paused one opens again the moment you resume it.' },
  { q: 'Who hears about a low rating?', a: 'The person who made the survey and the manager of the shop it was about, at most ten times an hour each. You set the line, 4 out of 10 to start.' },
  { q: 'Which cities do health inspections cover?', a: 'New York City only for now, from the city’s published restaurant inspection results. You link each shop to its record once.' },
  { q: 'What do you keep about people who scan?', a: 'How many times each link was opened, by QR code or by the link, and which buttons were pressed, as a count a day. Nothing about who.' },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function LocationsPage() {
  return (
    <main className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Hero
        crumb={{ label: 'Products', href: '/products', current: 'Locations' }}
        plan="free"
        title="Every shop, one scan away"
        lede="A page for each location with its review, directions, call, Wi-Fi and hiring buttons. QR codes for the counter and the receipt, a link straight to your Google review form, surveys for your customers, and every New York City health inspection."
        secondaryHref="#link-page"
        secondaryLabel="See the link page"
        note="The link page, links and QR codes are free on every plan."
        aside={
          <Window title="Fork · Links">
            <LinksPreview />
          </Window>
        }
      />

      <FeatureRow
        id="link-page"
        badge="New"
        plan="free"
        title="One page for each shop, already filled in"
        lede="Review, directions, call and hiring come from the location, so every shop's page is right the day you open it. Add the Wi-Fi, your profiles and buttons of your own."
        bullets={['Your logo and colour, light or dark as the phone is set', "Today's hours, from the location", 'Each shop with its own buttons, in its own order']}
        preview={<IllustrationFrame illustration={counter} />}
        previewTitle={counter.title}
        frame="none"
      />

      <FeatureRow
        id="reviews"
        className="bg-warm-50"
        flip
        plan="free"
        title="A link straight to your review form"
        lede="Paste each shop's Google review link once. A QR code on the receipt or a table card then opens the form for that shop, and so does the page's Review us on Google button."
        bullets={['One review link per location', 'Print the code, or share the link anywhere', 'The same link for everyone, happy or not']}
        preview={<IllustrationFrame illustration={review} />}
        previewTitle={review.title}
        frame="none"
      />

      <FeatureRow
        id="feedback"
        plan="pro"
        title="Hear from customers, shop by shop"
        lede="Make a survey for anyone with the link and put it on the page as Tell us how we did. One question at a time, in your colours, with no account to make."
        bullets={['Asks which shop they visited', 'An optional way to reach them for a reply', "A low rating tells the shop's manager"]}
        preview={<IllustrationFrame illustration={survey} />}
        previewTitle={survey.title}
        frame="none"
      />

      <FeatureRow
        id="links"
        className="bg-warm-50"
        flip
        plan="free"
        title="A code for every spot, each one counted"
        lede="Make a link for the counter, the window, the receipt or your bio. Each has its own short address and QR code, so you can see which ones get used."
        bullets={['Scans and clicks counted apart', 'Which buttons people press on the page', 'Pause a code and bring it back: a printed code never changes']}
        preview={<IllustrationFrame illustration={codes} />}
        previewTitle={codes.title}
        frame="none"
      />

      <FeatureRow
        id="inspections"
        plan="essential"
        title="Every inspection, as the city posts it"
        lede="Link each New York City shop to its record once; Fork suggests the match from the address. Every result is kept: the grade, the points and each violation as the city wrote it."
        bullets={['A notification when a new result is published', 'Critical and general violations, inspection by inspection', 'A re-inspection that is due, said up front']}
        preview={<IllustrationFrame illustration={inspection} />}
        previewTitle={inspection.title}
        frame="none"
      >
        <p className="mt-5 text-sm text-warm-500">New York City only for now.</p>
      </FeatureRow>

      <section id="fair" className="scroll-mt-24 border-b border-warm-100 bg-warm-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid items-start gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <SectionHeading title="Fair to your customers, and to Google" lede="The rules Fork follows on every page and every code, so a review is a review and a scan stays a count." />
            <div className="grid gap-4">
              {promises.map((p) => (
                <div key={p.title} className="surface flex items-start gap-4 p-5">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-forest-50 text-forest-600">{p.icon}</span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-warm-950">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-warm-500">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="setup" className="scroll-mt-24 border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading title="On the counter by this afternoon" lede="Links is on for every company. Each shop's page starts from what Settings already knows about the location." />
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n} className="surface p-6">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-warm-950 text-[14px] font-semibold text-white">{s.n}</span>
                <h3 className="mt-4 text-[17px] font-semibold tracking-tight text-warm-950">{s.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-warm-600">{s.desc}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 flex items-center gap-2 text-sm text-warm-500">
            <ShieldCheck className="h-4 w-4 shrink-0 text-forest-600" /> Owners, and the jobs you allow to manage locations, set it up and see the counts.
          </p>
        </div>
      </section>

      <section className="border-b border-warm-100 bg-warm-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-[1fr_1.6fr] md:gap-16">
            <SectionHeading title="About locations" lede="Anything else: support@forkhr.com" />
            <Accordion type="single" collapsible className="w-full border-t border-warm-100">
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`faq-${i}`} className="border-warm-100 last:border-b">
                  <AccordionTrigger className="py-5 text-left text-base font-medium text-warm-950 hover:text-warm-600 hover:no-underline">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-[15px] leading-relaxed text-warm-600">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <CtaSection title="Put a code on the counter this week" lede="Every shop's page is filled in from its location. The link page and QR codes are free on every plan." secondaryHref="/pricing" secondaryLabel="Compare plans" />
    </main>
  )
}
