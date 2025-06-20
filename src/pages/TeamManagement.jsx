import { Button } from '@/components/ui/button'
import { ArchiveIcon, ArrowRight, CheckIcon } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Autoplay from "embla-carousel-autoplay"
import { Cross1Icon, LinkNone2Icon } from '@radix-ui/react-icons'


const Section1 = () => {
    return (
        <div className="md:container px-2 flex md:flex-row flex-col gap-5 min-h-[80vh]">
            <div className="flex max-w-[980px] flex-col gap-3 md:gap-6 flex-1 md:justify-center">
                <h1 className="max-w-[350px] md:max-w-[650px] text-5xl font-bold leading-tight tracking-tighter lg:text-7xl xl:text-8xl lg:leading-[1.1] md:pt-12 pt-8">
                    Manage your business.
                </h1>
                <span className="max-w-[500px] text-lg text-muted-foreground sm:text-xl">
                    All team management tools in one place. No more hassle in managing your team.
                </span>
                <div className="flex w-full space-x-4 md:pb-10">
                    <Link to="https://app.emplorex.com" target="_blank">
                        <Button>
                            Get started
                        </Button>
                    </Link>
                    <Link to="/demo">
                        <Button
                            variant="outline"
                        >
                            Request a demo
                            <ArrowRight className="w-4 h-4 ms-2"/>
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="flex justify-center md:justify-end flex-1 items-center">
                <img
                    alt="img-1"
                    src="/assets/team-management-page.png"
                    className="w-fit md:h-full max-h-[300px] md:max-h-[400px] object-contain"
                />
            </div>
        </div>
    )
}

const Section2 = () => {
    return (
        <section className="py-20 bg-black">
        <div className="md:container px-2 text-white">
            <div className="flex flex-col gap-8 text-center justify-center items-center">
                <div className="text-4xl md:text-6xl max-w-[550px]">
                    All essential team management tools in one place
                </div>
                <div className="text-xl max-w-[550px]">
                    Emplorex offers a wide range of team management tools to help you manage your team efficiently.
                </div>
            </div>
        </div>
        </section>
    )
}

const Section3 = () => {
    return (
        <section className="md:container px-2 py-10 md:py-20 flex md:gap-10 min-h-[50vh] flex-col md:flex-row">
            <div className="flex justify-between bg-black rounded-3xl shadow-md flex-1 w-full md:order-1 order-2">
                <div className="w-full text-white flex flex-col gap-10 md:gap-20 p-4 md:p-8 justify-center md:text-end">
                    <h1 className="text-4xl md:text-8xl font-bold">
                        Schedule
                    </h1>
                    <p className="max-w-[600px] mx-auto text-lg">
                        Schedule your team's shifts, duplicate in one click, manage their availability, and allow your team to swap shifts with each other.
                    </p>
                </div>
            </div>
            <div className="flex-1 flex justify-center items-end md:bg-gray-50 rounded-3xl md:order-2 order-1 pt-20">
                <img
                    src="/assets/schedule-mob.png"
                    alt="schedule"
                    className="object-cover object-bottom flex-1 max-w-[50%]"
                />
            </div>
        </section>
    )
}

const Section5 = () => {
    return (
        <section className="md:container px-2 py-10 md:py-20 flex md:gap-10 min-h-[50vh] flex-col md:flex-row">
            <div className="flex-1 flex justify-center items-end md:bg-gray-50 rounded-3xl pt-20">
                <img
                    src="/assets/onboarding-mob.png"
                    alt="onboarding"
                    className="object-cover object-bottom flex-1 max-w-[50%]"
                />
            </div>
            <div className="flex justify-between bg-black rounded-3xl shadow-md flex-1 w-full">
                <div className="w-full text-white flex flex-col gap-10 md:gap-20 p-8">
                    <h1 className="text-4xl md:text-8xl font-bold">
                        Onboarding
                    </h1>
                    <p className="max-w-[600px] mx-auto text-lg">
                        Onboard your team members in a few clicks. Request forms, documents, and more.
                    </p>
                </div>
            </div>
        </section>
    )
}

const Section6 = () => {
    return (
        <section className="md:container px-2 py-10 md:py-20 flex md:gap-10 min-h-[50vh] flex-col md:flex-row">
            <div className="flex justify-between bg-black rounded-3xl shadow-md flex-1 w-full md:order-1 order-2">
                <div className="w-full text-white flex flex-col gap-10 md:gap-20 p-4 md:p-8 justify-center md:text-end">
                    <h1 className="text-4xl md:text-8xl font-bold">
                        Documents
                    </h1>
                    <p className="max-w-[600px] mx-auto text-lg">
                        Store all your team's documents in one place. Request documents from your team members.
                    </p>
                </div>
            </div>
            <div className="flex-1 flex justify-center items-end md:bg-gray-50 rounded-3xl md:order-2 order-1 pt-20">
                <img
                    src="/assets/documents-mob.png"
                    alt="documents"
                    className="object-cover object-bottom flex-1 max-w-[50%]"
                />
            </div>
        </section>
    )
}

const Section7 = () => {
    return (
        <section className="md:container px-2 py-10 md:py-20 flex md:gap-10 min-h-[50vh] flex-col md:flex-row">
            <div className="flex-1 flex justify-center items-end md:bg-gray-50 rounded-3xl pt-20">
                <img
                    src="/assets/resources-mob.png"
                    alt="resources"
                    className="object-cover object-bottom flex-1 max-w-[50%]"
                />
            </div>
            <div className="flex justify-between bg-black rounded-3xl shadow-md flex-1 w-full">
                <div className="w-full text-white flex flex-col gap-10 md:gap-20 p-8">
                    <h1 className="text-4xl md:text-8xl font-bold">
                        Resources
                    </h1>
                    <p className="max-w-[600px] mx-auto text-lg">
                        Store all your team's resources in one place. Share resources, set permissions, and more.
                    </p>
                </div>
            </div>
        </section>
    )
}



const Carousel1 = () => {
    const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))

    return (
        <Carousel 
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent className="md:ml-4">
                <CarouselItem>
                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle>
                                One time orders
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-2">
                            <div className="w-full relative">
                                <img src="/assets/Orders-place-order-3.png" alt="one-time-orders"
                                    className="h-full object-contain object-center rounded-lg"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </CarouselItem>
                <CarouselItem>
                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle>
                                Standing orders
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-2">
                            <div className="w-full relative">
                                <img src="/assets/Orders-place-order-1.png" alt="standing-orders"
                                    className="h-full object-contain object-center rounded-lg"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </CarouselItem>
                <CarouselItem>
                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle>
                                Calendar orders
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-2">
                            <div className="w-full relative">
                                <img src="/assets/Orders-place-order-2.png" alt="calendar-orders"
                                    className="h-full object-contain object-center rounded-lg"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    )
}

const Section4 = () => {
    return (
        <section className="md:container px-2 py-20 flex justify-center items-center min-h-[75vh]">
            <div className="flex gap-12 md:gap-12 items-center justify-center flex-1">
                <div className="flex-1 flex justify-center items-center">
                <div className="max-w-[350px]">
                    <Carousel1/>
                </div>
                </div>
                <div className="flex-1">
                    <div className=" max-w-[450px]">
                        <div className="flex flex-col gap-20">
                            <div>
                                <h2 className="text-5xl pt-2">
                                    Diverse supply & procurement options
                                </h2>
                            </div>
                            <div className="flex flex-col gap-8 bg-white">
                                <div className="flex flex-col gap-3">
                                    <h4 className="text-lg font-semibold">
                                        Before Emplorex
                                    </h4>
                                    <ul className="text-muted-foreground list-disc pl-5">
                                        <li className="flex items-center gap-2"><Cross1Icon className="w-6 h-6" color="#E54D2E"/>Manually emailing orders to suppliers</li>
                                        <li className="flex items-center gap-2"><Cross1Icon className="w-6 h-6" color="#E54D2E"/>Tracking orders in spreadsheets</li>
                                        <li className="flex items-center gap-2"><Cross1Icon className="w-6 h-6" color="#E54D2E"/>Missing deadlines</li>
                                        <li className="flex items-center gap-2"><Cross1Icon className="w-6 h-6" color="#E54D2E"/>Paying for product that was never delivered</li>
                                        <li className="flex items-center gap-2"><Cross1Icon className="w-6 h-6" color="#E54D2E"/>Delayed reporting and analysis on orders</li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h4 className="text-lg font-semibold">
                                        After Emplorex
                                    </h4>
                                    <ul className="text-muted-foreground list-disc pl-5">
                                        <li className="flex items-center gap-2"><CheckIcon className="w-6 h-6" color="#3DD68C"/>Automated standing order placement</li>
                                        <li className="flex items-center gap-2"><CheckIcon className="w-6 h-6" color="#3DD68C"/>Real-time order tracking</li>
                                        <li className="flex items-center gap-2"><CheckIcon className="w-6 h-6" color="#3DD68C"/>Never miss a deadline</li>
                                        <li className="flex items-center gap-2"><CheckIcon className="w-6 h-6" color="#3DD68C"/>Pay for only what you receive</li>
                                        <li className="flex items-center gap-2"><CheckIcon className="w-6 h-6" color="#3DD68C"/>Instant reporting and analysis</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


const Faq = () => {
    return (
        <section className="mx-auto flex max-w-[800px] flex-col items-center gap-3 md:gap-6 py-20 justify-center">
            <h1 className='max-w-[350px] text-6xl text-center font-semibold pb-20'>
                FAQ
            </h1>
            <div className="text-3xl text-center font-semibold flex items-center">
                Schedule
            </div>
            <Accordion type="single" collapsible className="w-full pb-12 pt-6 md:container px-2">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-start">
                        How do I schedule shifts?
                    </AccordionTrigger>
                    <AccordionContent>
                        To schedule shifts, go to the schedule page, on mobile click the "+" button, and on desktop click the "Add Shift" button. Select the team member, date, and time, and click save (or press ENTER).
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-start">
                        How do I duplicate shifts?
                    </AccordionTrigger>
                    <AccordionContent>
                        To duplicate shifts, go to the schedule page, click the "More" icon, click "duplicate schedule" select the date range, and click save.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-start">
                        How do I manage availability?
                    </AccordionTrigger>
                    <AccordionContent>
                        To manage availability, go to the schedule page on desktop, click on the team member's name, and select the availability. On mobile, you can manage only your availability.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger className="text-start">
                        How do I drop a shift in the pool?
                    </AccordionTrigger>
                    <AccordionContent>
                        To drop a shift in the pool, go to the schedule page, click on the shift, and click "Drop In Pool".
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger className="text-start">
                        How do I request swaps?
                    </AccordionTrigger>
                    <AccordionContent>
                        To request swaps, go to the schedule page, click on the shift, click "Request Swap" select the team member you want to swap with, select the shift you want to swap with, and click save.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger className="text-start">
                        How do I request to pick up a shift?
                    </AccordionTrigger>
                    <AccordionContent>
                        To request to pick up a shift, go to the schedule page, open shift pool, click "Interested" next to the shift you want to pick up.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                    <AccordionTrigger className="text-start">
                        How do I cancel my request to pick up a shift or swaps?
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes, you can cancel your request to pick up a shift or swaps. Go to the schedule page, open shift pool, and click "Cancel" next to the request.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                    <AccordionTrigger className="text-start">
                        How do I request time-off?
                    </AccordionTrigger>
                    <AccordionContent>
                        Go to the my shifts page, click on "Availability" click Time-Off tab, select the date range, and click request.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-9">
                    <AccordionTrigger className="text-start">
                        How do I set my availability?
                    </AccordionTrigger>
                    <AccordionContent>
                        Go to the my shifts page, click on "Availability" click Availability tab, select from time and to time, and click save.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-10">
                    <AccordionTrigger className="text-start">
                        How do I approve swaps?
                    </AccordionTrigger>
                    <AccordionContent>
                        To approve swaps, go to the schedule page, open shift pool and click on the swap request, click "Approve".
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-11">
                    <AccordionTrigger className="text-start">
                        Can I see all past shifts of a team member?
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes, you can see all past shifts of a team member. On desktop, click on the team member's name and click on the "Shifts" tab.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <div className="text-3xl text-center font-semibold flex items-center">
                Onboarding
            </div>
            <Accordion type="single" collapsible className="w-full pb-12 pt-6 md:container px-2">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-start">
                        How secure is the data?
                    </AccordionTrigger>
                    <AccordionContent>
                        Emplorex uses the latest security measures to protect your data. All data is encrypted and stored securely. They can be accessed only by you and the management.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-start">
                        How do I fill out forms?
                    </AccordionTrigger>
                    <AccordionContent>
                        Click on your company's logo on the top right corner, click "Employment" click "Onboarding" tab, and fill out the forms.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-start">
                        Can I save the form and fill it later?
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes, simply click "Save" and you can fill the form later.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger className="text-start">
                        How do I know if I have forms to fill?
                    </AccordionTrigger>
                    <AccordionContent>
                        You will receive an notification if you have forms to fill.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger className="text-start">
                        How do I know if I have forms to approve?
                    </AccordionTrigger>
                    <AccordionContent>
                        You will receive an notification if you have forms to approve. You can also go to the team page, click on the team member's name, click "Onboarding" page, forms pending to approve will be with status "Pending".
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger className="text-start">
                        How do I generate a PDF of the form?
                    </AccordionTrigger>
                    <AccordionContent>
                        If the form is approved, you can generate a PDF simply click "Generate PDF". All generated PDFs will be stored in the "Documents" page.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                    <AccordionTrigger className="text-start">
                        How do I onboard a new team member?
                    </AccordionTrigger>
                    <AccordionContent>
                        If onboarding is enabled, when you create a new team member, they will receive an email to complete their profile. If onboarding is disabled, you can manually onboard a team member by going to the team page, click on the team member's name, click "Onboarding" page, click "Add forms" and select forms you want the team member to fill.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                    <AccordionTrigger className="text-start">
                        How do I request changes to the form?
                    </AccordionTrigger>
                    <AccordionContent>
                        Select the form you want to request changes, click "Request Changes" and enter the changes you want.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <div className="text-3xl text-center font-semibold flex items-center">
                Documents
            </div>
            <Accordion type="single" collapsible className="w-full pb-12 pt-6 md:container px-2">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-start">
                        How secure are the documents?
                    </AccordionTrigger>
                    <AccordionContent>
                        Emplorex uses the latest security measures to protect your data. All documents stored securely and can be accessed only by you and the management.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-start">
                        How do I upload a document?
                    </AccordionTrigger>
                    <AccordionContent>
                        Go to the documents page, click "Upload Document" select the document, and click save.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-start">
                        How do I request a document?
                    </AccordionTrigger>
                    <AccordionContent>
                        Go to the documents page, click "Request", enter the document name, and click request.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger className="text-start">
                        How do I delete a document?
                    </AccordionTrigger>
                    <AccordionContent>
                        Go to the documents page, click on the document, and click "Delete".
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <div className="text-3xl text-center font-semibold flex items-center">
                Resources
            </div>
            <Accordion type="single" collapsible className="w-full pb-12 pt-6 md:container px-2">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-start">
                        How do I upload a resource?
                    </AccordionTrigger>
                    <AccordionContent>
                        Go to the resources page, click "Upload Resource" select the resource, and click save.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-start">
                        How do I delete a resource?
                    </AccordionTrigger>
                    <AccordionContent>
                        Go to the resources page, click on the resource, and click "Delete".
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    )
}

const Reporting = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="md:container px-2">
                <div className="flex flex-col gap-8 text-center justify-center items-center">
                    <div className="text-5xl md:text-6xl max-w-[650px] font-semibold">
                        Sophisticated reporting made simple
                    </div>
                    <div className="text-xl max-w-[550px]">
                        See all your real-time data in one place: Reports shifts. Get quick insights, and make data-driven decisions.
                    </div>
                </div>
                <div className="flex gap-4 justify-around py-6">
                    <img
                        alt="reporting"
                        src="/assets/reporting-schedule.png"
                    />
                </div>
            </div>
        </section>
    )
}

const TeamManagement = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = 'Team Management'
    }, [])

    return (
        <main className="fade-in-up">
            <Section1/>
            <Section2/>
            <Section3/>
            <Section5/>
            <Section6/>
            <Section7/>
            <Reporting/>
            <Faq/>
        </main>
    )
}

export default TeamManagement