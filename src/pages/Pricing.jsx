import { Button } from '@/components/ui/button'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { CubeIcon } from '@radix-ui/react-icons'
import { ArchiveIcon, ArrowRight, BarChartIcon, CheckIcon, EyeIcon, UserIcon } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'


const Faq = () => {
    return (
        <section className="mx-auto flex max-w-[600px] flex-col items-center gap-3 md:gap-6 py-20 justify-center w-full">
            <h1 className='max-w-[350px] text-6xl text-center font-semibold pb-20'>
                FAQ
            </h1>
            <Accordion type="single" collapsible className="w-full pb-12 pt-6 md:container px-2">
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
                        Yes. You can start with a 30-day free trial. No credit card is required.
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

const Section3 = () => {
    return (
        <div className="w-full max-w-[400px]">
            <div className="flex flex-col lg:flex-row gap-10 flex-wrap flex-1 w-full">
                <div className="rounded-3xl p-8 shadow-sm flex-1 border-[#000] border-4 flex flex-col">
                    <div className="text-muted-foreground font-semibold">
                        Recommended
                    </div>
                    <h3 className="text-5xl font-semibold">
                        Essential
                    </h3>
                    <div className="text-base py-8 flex-1">
                        <ul className="text-muted-foreground list-disc">
                            <li className="flex items-center gap-2"><CheckIcon className="w-6 h-6" color="#000"/>Scheduler</li>
                            <li className="flex items-center gap-2"><CheckIcon className="w-6 h-6" color="#000"/>Time tracking</li>
                            <li className="flex items-center gap-2"><CheckIcon className="w-6 h-6" color="#000"/>Time off requests</li>
                            <li className="flex items-center gap-2"><CheckIcon className="w-6 h-6" color="#000"/>Documents</li>
                            <li className="flex items-center gap-2"><CheckIcon className="w-6 h-6" color="#000"/>Onboarding</li>
                            <li className="flex items-center gap-2"><CheckIcon className="w-6 h-6" color="#000"/>Surveys</li>
                            <li className="flex items-center gap-2"><CheckIcon className="w-6 h-6" color="#000"/>Announcements</li>
                            <li className="flex items-center gap-2"><CheckIcon className="w-6 h-6" color="#000"/>Reviews</li>
                            <li className="flex items-center gap-2"><CheckIcon className="w-6 h-6" color="#000"/>24/7 support</li>
                        </ul>
                    </div>
                    <div className="text-5xl">
                        $3.99
                    </div>
                    <div className="text-sm pt-1 text-muted-foreground">
                        Per user, billed monthly
                    </div>
                    <div className="pt-10">
                        <Link to="https://app.emplorex.com/register">
                            <Button
                                className="w-full"
                            >
                                Start for free
                                <ArrowRight className="w-4 h-4 ms-2" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Pricing = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = 'Pricing'
    }, [])

    return (
        <main className="md:container px-2 py-10 md:py-20 flex flex-col justify-center items-center gap-10 fade-in-up">
            <div className="flex flex-col align-center items-center flex-1 w-full max-w-[1000px] text-center">
                <h1 className="md:text-6xl text-4xl font-semibold max-w-[700px]">
                    Single plan<span className="text-primary">.</span>
                </h1>
                <p className="font-semibold flex gap-4 pt-8 text-nowrap flex-wrap justify-center">
                    <div className="flex gap-2 text-sm align-center items-center">
                        <div className="w-6 h-6 bg-primary rounded-full flex align-center justify-center items-center">
                            <CheckIcon className="w-4 h-4" color="#fff"/>
                        </div>
                        30 days free trial
                    </div>
                    <div className="flex gap-2 text-sm align-center items-center">
                        <div className="w-6 h-6 bg-primary rounded-full flex align-center justify-center items-center">
                            <CheckIcon className="w-4 h-4" color="#fff"/>
                        </div>
                        No contracts
                    </div>
                    <div className="flex gap-2 text-sm align-center items-center">
                        <div className="w-6 h-6 bg-primary rounded-full flex align-center justify-center items-center">
                            <CheckIcon className="w-4 h-4" color="#fff"/>
                        </div>
                        Cancel anytime
                    </div>
                </p>
                <br/>
            </div>
            <Section3/>
            <Faq/>
        </main>
    )
}

export default Pricing