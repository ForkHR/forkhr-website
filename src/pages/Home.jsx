import { Button } from '@/components/ui/button'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ArchiveIcon, BarChartIcon, CheckIcon, Cross1Icon } from '@radix-ui/react-icons'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useEffect, useRef } from 'react'
import { ArrowRight, UserIcon } from 'lucide-react'
import { Link } from 'react-router-dom'


const Section1 = () => {
    return (
        <div className="max-w-[800px] mx-auto px-4 flex gap-5 min-h-[60vh] flex-col md:flex-row">
            <div className="mx-auto w-full flex max-w-[980px] flex-col gap-3 md:gap-6 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20 flex-1 justify-center">
                <h1 className="max-w-[350px] md:max-w-[650px] text-5xl font-bold leading-tight tracking-tighter lg:text-6xl xl:text-7xl lg:leading-[1.1]">
                    Workforce<br/>management<br/>made easy<span className="text-primary">.</span>
                </h1>
                <div className="flex flex-col gap-1">
                    <li className="flex items-center text-sm gap-2"><CheckIcon className="w-5 h-5" color="#533afd"/>Manage employee schedules</li>
                    <li className="flex items-center text-sm gap-2"><CheckIcon className="w-5 h-5" color="#533afd"/>Track clock-in/clock-out hours</li>
                    <li className="flex items-center text-sm gap-2"><CheckIcon className="w-5 h-5" color="#533afd"/>Manage HR</li>
                    <li className="flex items-center text-sm gap-2"><CheckIcon className="w-5 h-5" color="#533afd"/>Gather feedback</li>
                    <li className="flex items-center text-sm gap-2"><CheckIcon className="w-5 h-5" color="#533afd"/>Improve staff retention</li>
                </div>
                <div className="md:pb-10">
                    <div className="flex w-full space-x-4 rounded">
                        <Link to="https://app.forkhr.com/register" target="_blank">
                            <Button className="px-6">
                                Free trial
                            </Button>
                        </Link>
                    </div>
                    <div className="text-xs text-gray-400 pt-4">
                        30-day free trial. Cancel anytime.
                    </div>
                </div>
            </div>
            {/* <div className="overflow-hidden max-w-[680px] flex items-center justify-center flex-1 bg-no-repeat bg-contain bg-right bg-[url(/assets/pebble-3.png)]">
                <img
                    alt="img-1"
                    src="/assets/asset-1.png"
                    draggable="false"
                />
            </div> */}
        </div>
    )
}


const Section2 = () => {
    return (
        // Animation fade-in page
        <div className=" bg-slate-100">
        <section className="max-w-[800px] mx-auto w-100 px-2 min-h-screen py-20">
            <div className="max-w-[800px] mx-auto">
                <div className="flex justify-between pb-10 flex-col gap-8">
                    <div className="flex-1">
                        <h1 className="text-5xl font-semibold">
                            Optimize your operations<span className="text-primary">.</span>
                        </h1>
                    </div>
                    <p className="flex-1 text-base md:text-xl">
                        Your business is unique, and so are your operations. Fork HR is designed to cater to your unique needs. Whether you have multiple locations, or you have a large team, our platform was designed to help you run your business efficiently.
                    </p>
                </div>
                <div>
                    <div className="flex justify-between border-b py-6">
                        <h5 className="text-base md:text-base flex-1 font-semibold">
                            YOUR BUSINESS GOAL
                        </h5>
                        <div className="text-base md:text-base flex-1 font-semibold">
                            HOW WE SOLVE IT
                        </div>
                    </div>
                    <div className="flex justify-between border-b py-6">
                        <h5 className="text-xl md:text-2xl flex-1">
                            1. Schedule & Time Tracking
                        </h5>
                        <div className="text-base md:text-base flex-1 flex flex-col gap-8">
                            <p>
                                Drag-and-drop scheduling.
                            </p>
                            <p>
                                Tasks, breaks, and shift notes.
                            </p>
                            <p>
                                Weekly availability management.
                            </p>
                            <p>
                                Open shifts and shift swaps.
                            </p>
                            <p>
                                Time off requests.
                            </p>
                            <p>
                                Clock-in/clock-out tracking. Terminal, geo location, and manual clock-in.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-between border-b py-6">
                        <h5 className="text-xl md:text-2xl flex-1">
                            2. Staff HR & Compliance
                        </h5>
                        <div className="text-base md:text-base flex-1 flex flex-col gap-8">
                            <p>
                                Paperless onboarding with built-in legal forms like W-4, I-9, and more.
                            </p>
                            <p>
                                Document management for employee files.
                            </p>
                            <p>
                                E-signatures and expiration reminders.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-between py-6">
                        <h5 className="text-xl md:text-2xl flex-1">
                            3. Boost Retention & Engagement
                        </h5>
                        <div className="text-base md:text-base flex-1 flex flex-col gap-8">
                            <p>
                                Gather feedback through employee surveys.
                            </p>
                            <p>
                                Announcements to keep your team informed.
                            </p>
                            <p>
                                Peer reviews to foster a culture of recognition and appreciation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

const Section3 = () => {
    return (
        <section className="min-h-[75vh] md:py-20 py-10">
            <div className="max-w-[800px] mx-auto px-4 gap-8">
                <div className="flex justify-between flex-col gap-8">
                    <div className="text-5xl font-semibold flex-1">
                        <div className="max-w-[75%] font-semibold">
                            What we save you<span className="text-primary">.</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col flex-1">
                            <div className="flex flex-col border-b pb-8 gap-4">
                                <div className="text-6xl">
                                    37%
                                </div>
                                <div className="text-2xl font-semibold">
                                    Faster scheduling
                                </div>
                                <div className="text-xl">
                                    Create schedules in minutes with our easy-to-use scheduling tool. Drag and drop shifts, assign employees, and manage time off requests.
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col flex-1">
                            <div className="flex flex-col border-b pb-8 gap-4">
                                <div className="text-6xl">
                                    52%
                                </div>
                                <div className="text-2xl font-semibold">
                                    Less time theft
                                </div>
                                <div className="text-xl">
                                    Employee clock-in/clock-out tracking is made easy with our terminal, geo location, and manual clock-in options. Ensure accurate time tracking and reduce time theft.
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col flex-1">
                            <div className="flex flex-col border-b pb-8 gap-4">
                                <div className="text-6xl">
                                    99%
                                </div>
                                <div className="text-2xl font-semibold">
                                    Onboarding doc completion
                                </div>
                                <div className="text-xl">
                                    Streamline your onboarding process with paperless onboarding. Employees can complete legal forms like W-4, I-9, and more online, ensuring compliance and reducing paperwork.
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col flex-1">
                            <div className="flex flex-col border-b pb-8 gap-4">
                                <div className="text-6xl">
                                    2x
                                </div>
                                <div className="text-2xl font-semibold">
                                    More staff announcement reads & engagement
                                </div>
                                <div className="text-xl">
                                    Keep your team informed with announcements. Share important updates, news, and events to ensure everyone is on the same page.
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col flex-1">
                            <div className="flex flex-col pb-8 gap-4">
                                <div className="text-6xl">
                                    3x
                                </div>
                                <div className="text-2xl font-semibold">
                                    More performance feedback
                                </div>
                                <div className="text-xl">
                                    Foster a culture of recognition and appreciation with peer reviews. Encourage employees to give feedback to each other, boosting morale and engagement.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "Fork HR - Workforce management made easy"
    }, [])

    return (
        <main className="fade-in-up">
            <Section1/>
            <Section2/>
            <Section3/>
        </main>
    )
}

export default Home