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
        <div className="flex md:gap-8 md:flex-row flex-col border border-dashed border-slate-200 rounded-lg p-1">
            <div className="flex-1 p-6">
                <h3 className="md:xl text-3xl font-semibold">
                    Essential
                </h3>
                <div className="text-base text-gray-600 pt-2">
                    Access a complete set of features with simple and transparent pricing. No setup fees, monthly fees, or hidden fees.
                </div>
                <div class="text-xs text-gray-400 pt-4">30-day free trial. Cancel anytime.</div>
                <div className="pt-6">
                    <Link to="https://app.forkhr.com/register">
                        <Button>
                            Start now
                            <ArrowRight className="w-4 h-4 ms-2" />
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="flex-1 p-6 bg-slate-100 rounded-lg flex flex-col items-center justify-center text-center font-medium">
                <div className="text-4xl">
                    $2.99
                </div>
                <div className="text-sm text-muted-foreground font-normal">
                    Per user, billed monthly
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
                    Single plan<span className="text-primary">.</span>
                </h1>
                <Section3/>
            </div>
            <Faq/>
        </main>
    )
}

export default Pricing