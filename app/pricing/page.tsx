"use client"

import { Button } from '@/components/ui/button'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowRight } from 'lucide-react'
import { useEffect } from 'react'
import Link from 'next/link'


const Faq = () => {
    return (
        <section className="flex border-t md:px-8 px-4 border-dashed border-slate-200 flex-col py-10 w-full">
            <h1 className='max-w-[350px] md:max-w-[650px] text-5xl font-bold leading-[1] tracking-tighter lg:text-6xl xl:text-7xl lg:leading-[1.1] pb-6'>
                FAQs<span className="text-primary">.</span>
            </h1>
                <Accordion type="single" collapsible className="w-full pb-12 px-2">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-start">
                            Can I change my plan after I choose one?
                        </AccordionTrigger>
                        <AccordionContent>
                            We proving a single plan that includes all features. For more information, please contact support@forkhr.com
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
                            Currently, we only offer a monthly plan. However, we are working on introducing yearly plans in the future.
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

const Section4 = () => {
    return (
        <div className="flex md:gap-8 md:flex-row flex-col border border-dashed border-slate-200 rounded-lg p-1 mb-4">
            <div className="flex-1 p-6">
                <h3 className="md:xl text-3xl font-semibold">
                    Basic
                </h3>
                <div className="text-base text-gray-600 pt-2">
                    For small teams getting started. Access full set of features to manage your team efficiently.
                </div>
                <div className="pt-6">
                    <Link href="mailto:support@forkhr.com">
                        <Button
                            variant="outline"
                        >
                            Contact us
                            <ArrowRight className="w-4 h-4 ms-2" />
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="flex-1 p-6 bg-slate-100 rounded-lg flex flex-col items-center justify-center text-center font-medium">
                <div className="text-5xl text:primary">
                    Free
                </div>
                <div className="text-sm text-muted-foreground font-normal">
                    up to 5 users
                </div>
            </div>
        </div>
    )
}

const Section5 = () => {
    return (
        <div className="fade-in-up">
            <div className='max-w-[800px] mx-auto flex gap-5 items-center justify-center flex-col md:flex-row border-b border-dashed border-slate-200 w-full mb-3'>
                <div className="flex md:gap-8 md:flex-row flex-col p-3 w-full">
                    <div className="flex-1 px-6 flex flex-col font-medium bg-primary rounded-lg w-full">
                        <div className="text-white font-semibold py-4 md:text-3xl text-xl">
                            Early adopters lock in lifetime pricing!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Section3 = () => {
    return (
        <div className="flex md:gap-8 md:flex-row flex-col">
            <div className="flex-1 px-6 pb-6 pt-4">
                <h3 className="md:xl text-3xl font-semibold">
                    Essential
                </h3>
                <div className="text-base text-gray-600 pt-2">
                    Access a complete set of features with simple and transparent pricing. No setup fees or hidden charges.
                </div>
                <div className="text-xs text-gray-400 pt-4">7-day free trial. Cancel anytime.</div>
                <div className="pt-6">
                    <Link href="https://app.forkhr.com/register">
                        <Button>
                            Lock in Lifetime Pricing
                            <ArrowRight className="w-4 h-4 ms-2" />
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="flex-1 p-6 bg-slate-100 rounded-lg flex flex-col items-center justify-center text-center font-medium">
                <div className="flex items-baseline gap-2">
                    <div className="text-5xl">
                        $3.99
                    </div>
                    <div className="text-2xl text-muted-foreground line-through font-semibold">
                        $4.99
                    </div>
                </div>
                <div className="text-sm text-muted-foreground font-normal">
                    per user / month
                </div>
                <div className="text-sm text-muted-foreground font-normal">
                    limited time offer
                </div>
            </div>
        </div>
    )
}

const Pricing = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = 'Pricing - Fork'
    }, [])

    return (
        <main className="w-full max-w-[800px] mx-auto border-l border-r border-dashed border-slate-200 flex flex-col fade-in-up">
            <div className="py-10 md:px-8 px-4">
                <h1 className="max-w-[350px] md:max-w-[650px] text-5xl font-bold leading-[1] tracking-tighter lg:text-6xl xl:text-7xl lg:leading-[1.1] pb-10">
                    Simple pricing<span className="text-primary">.</span>
                </h1>
                <div className="border border-dashed border-slate-200 rounded-lg p-1">
                    <Section5/>
                    <Section3/>
                </div>
            </div>
            <Faq/>
        </main>
    )
}

export default Pricing