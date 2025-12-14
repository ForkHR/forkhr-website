import { Button } from '@/components/ui/button'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { CheckIcon } from '@radix-ui/react-icons'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Pricing - Fork',
    description: 'Simple pricing for scheduling, time tracking, HR, and engagement tools.',
    openGraph: {
        title: 'Pricing - Fork',
        description: 'Simple pricing for scheduling, time tracking, HR, and engagement tools.',
        images: ['/og-image.png'],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Pricing - Fork',
        description: 'Simple pricing for scheduling, time tracking, HR, and engagement tools.',
        images: ['/og-image.png'],
    },
}


const tiersEnum = [
    {
        name: "Essential",
        value: "essential",
        price: 39,
        description: "For small teams starting out",
        addons: ['Scheduling', 'Open shifts & trades', 'Shift tasks', 'Employee availability', 'Time off requests', 'Time tracking', 'Company updates', 'Hiring', 'Unlimited employees & locations', 'Job roles & permissions'],
        addonsValue: ["schedule", "time-off-requests", "timecards", "updates", "hiring"],
    },
    {
        name: "Pro",
        value: "pro",
        price: 79,
        description: "For growing teams",
        addons: ['All from Essential', 'Onboarding forms', 'Employee documents', 'Custom forms', 'Surveys', 'Recognitions', 'Shared library'],
        addonsValue: ["schedule", "time-off-requests", "timecards", "onboarding", "documents", "updates", "forms", "recognitions", "surveys", "library", "hiring"],
    },
    {
        name: "Premium",
        value: "premium",
        price: 129,
        description: "Maximize your HR capabilities",
        addons: ['All from Pro', 'AI assistant', 'Training courses', 'Incident reports', 'Termination records', 'Advanced analytics & reports', 'Priority support'],
        addonsValue: ["schedule", "time-off-requests", "timecards", "onboarding", "documents", "updates", "forms", "recognitions", "surveys", "library", "course", "hiring", "incidents", 'termination-records', 'ai'],
    },
]


const Faq = () => {
    return (
        <section className="flex border-t md:px-8 px-4 border-dashed border-slate-200 flex-col py-10 w-full">
            <h1 className='max-w-[350px] md:max-w-[650px] text-5xl font-bold leading-none tracking-tighter lg:text-6xl xl:text-7xl lg:leading-[1.1] pb-6'>
                FAQs<span className="text-primary">.</span>
            </h1>
                <Accordion type="single" collapsible className="w-full pb-12 px-2">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-start">
                            Can I change my plan after I choose one?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes — you can upgrade or downgrade your plan anytime. If you need help choosing a plan, contact support@forkhr.com.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-start">
                            When will I be charged?
                        </AccordionTrigger>
                        <AccordionContent>
                            You will be charged at the end of your free trial period. You can cancel anytime before that.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-start">
                            Do you offer a free trial?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes. You can start with a 7-days free trial. No credit card is required.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-start">
                            Is there a discount for yearly plans?
                        </AccordionTrigger>
                        <AccordionContent>
                            Currently, we only offer monthly billing. If you need annual billing, contact support@forkhr.com.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger className="text-start">
                            What payment methods do you accept?
                        </AccordionTrigger>
                        <AccordionContent>
                            We accept all major credit cards, including Visa, MasterCard, American Express, and Discover. You can also pay via PayPal.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
        </section>
    )
}

const PricingGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tiersEnum.map((tier) => (
                <div
                    key={tier.value}
                    className={`border border-dashed rounded-3xl p-5 flex flex-col ${tier.value === 'pro' ? 'border-primary' : 'border-slate-200'}`}
                >
                    <div className="flex items-center justify-between">
                        <div className="text-xl font-semibold text-slate-900">
                            {tier.name}
                        </div>
                        {tier.value === 'pro' ? (
                            <div className="bg-primary text-primary-foreground px-2 py-1 text-xs font-semibold rounded">
                                Popular
                            </div>
                        ) : null}
                    </div>

                    <div className="flex items-end mt-4 mb-2">
                        <div className="text-sm text-muted-foreground mb-2 mr-1">$</div>
                        <div className="text-5xl font-semibold leading-none text-slate-900">
                            {tier.price}
                        </div>
                        <div className="flex flex-col justify-end ml-2">
                            <div className="text-xs text-muted-foreground leading-tight">month/</div>
                            <div className="text-xs text-muted-foreground leading-tight">location</div>
                        </div>
                    </div>

                    <div className="text-sm text-muted-foreground">
                        {tier.description}
                    </div>

                    <div className="mt-4">
                        <Link href="https://app.forkhr.com/register" target="_blank">
                            <Button className="w-full" variant={tier.value === 'pro' ? 'default' : 'outline'}>
                                Get {tier.name}
                                <ArrowRight className="w-4 h-4 ms-2" />
                            </Button>
                        </Link>
                    </div>

                    <div className="text-sm font-semibold mt-5 mb-3">What’s included</div>
                    <div className="flex flex-col gap-2 flex-1">
                        {tier.addons.map((addon) => (
                            <div key={addon} className="flex items-start gap-2">
                                <CheckIcon className="w-4 h-4 mt-0.5 text-primary" />
                                <div className="text-sm text-slate-700">{addon}</div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

const Pricing = () => {
    return (
        <main className="w-full max-w-[800px] mx-auto border-l border-r border-dashed border-slate-200 flex flex-col fade-in-up">
            <div className="py-10 md:px-8 px-4">
                <h1 className="max-w-[350px] md:max-w-[650px] text-5xl font-bold leading-none tracking-tighter lg:text-6xl xl:text-7xl lg:leading-[1.1] pb-10">
                    Simple pricing<span className="text-primary">.</span>
                </h1>
                <PricingGrid />
            </div>
            <Faq/>
        </main>
    )
}

export default Pricing