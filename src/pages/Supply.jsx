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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Autoplay from "embla-carousel-autoplay"
import { Cross1Icon } from '@radix-ui/react-icons'


const Section1 = () => {
    return (
        <div className="md:container px-2 flex md:flex-row flex-col gap-5 min-h-[80vh]">
            <div className="flex max-w-[980px] flex-col gap-3 md:gap-6 flex-1 md:justify-center">
                <h1 className="max-w-[350px] md:max-w-[650px] text-5xl font-bold leading-tight tracking-tighter lg:text-7xl xl:text-8xl lg:leading-[1.1] md:pt-12 pt-8">
                    Supply your business.
                </h1>
                <span className="max-w-[500px] text-lg text-muted-foreground sm:text-xl">
                    Diverse and reliable supply management for your business.
                </span>
                <div className="flex w-full space-x-4 md:pb-10">
                    <Link to="https://app.forkhr.com" target="_blank">
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
                    src="/assets/supply-page-top.png"
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
                    Reliable vendors for your business
                </div>
                <div className="text-xl max-w-[550px]">
                    We offer a marketplace where you can find reliable vendors for your business. No more hassle in finding the right vendor. No more contracts. Just reliable vendors at your fingertips.
                </div>
            </div>
            <div className="flex gap-4 justify-around py-6">
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
                        One-time orders
                    </h1>
                    <p className="max-w-[600px] mx-auto text-lg">
                        Place one-time orders with your suppliers. Easily track and manage your orders. No more hassle in managing orders with suppliers.
                    </p>
                </div>
            </div>
            <div className="flex-1 flex justify-center items-end md:bg-gray-50 rounded-3xl md:order-2 order-1 pt-20">
                <img
                    src="/assets/onetime-mob.png"
                    alt="one-time-orders"
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
                    src="/assets/standing-mob.png"
                    alt="standing-orders"
                    className="object-cover object-bottom flex-1 max-w-[50%]"
                />
            </div>
            <div className="flex justify-between bg-black rounded-3xl shadow-md flex-1 w-full">
                <div className="w-full text-white flex flex-col gap-10 md:gap-20 p-8">
                    <h1 className="text-4xl md:text-8xl font-bold">
                        Standing orders
                    </h1>
                    <p className="max-w-[600px] mx-auto text-lg">
                        Set up standing orders with your suppliers to automate your procurement process. No more manual ordering.
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
                        Calendar orders
                    </h1>
                    <p className="max-w-[600px] mx-auto text-lg">
                        Schedule your orders for multiple dates in the future. Save time and never miss a deadline.
                    </p>
                </div>
            </div>
            <div className="flex-1 flex justify-center items-end md:bg-gray-50 rounded-3xl md:order-2 order-1 pt-20">
                <img
                    src="/assets/calendar-mob.png"
                    alt="calendar-orders"
                    className="object-cover object-bottom flex-1 max-w-[50%]"
                />
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
                <CarouselItem className="md:basis-5/6 basis-1/2">
                    <Card className="h-full">
                        <CardHeader className="md:flex hidden">
                            <CardTitle>
                                One time orders
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-2">
                            <div className="w-full relative md:h-full flex justify-center">
                                <img src="/assets/Orders-place-order-3.png" alt="one-time-orders"
                                    className="h-full object-contain object-center rounded-lg"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </CarouselItem>
                <CarouselItem className="md:basis-5/6 basis-1/2">
                    <Card className="h-full">
                        <CardHeader className="md:flex hidden">
                            <CardTitle>
                                Standing orders
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-2">
                            <div className="w-full relative md:h-full flex justify-center">
                                <img src="/assets/Orders-place-order-1.png" alt="standing-orders"
                                    className="h-full object-contain object-center rounded-lg"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </CarouselItem>
                <CarouselItem className="md:basis-5/6 basis-1/2">
                    <Card className="h-full">
                        <CardHeader className="md:flex hidden">
                            <CardTitle>
                                Calendar orders
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-2">
                            <div className="w-full relative md:h-full flex justify-center">
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
            <div className="flex gap-12 md:gap-12 items-center justify-center flex-1 md:flex-row flex-col">
                <div className="flex-1 flex justify-center items-center order-2 md:order-1">
                    <div className="max-w-[350px]">
                        <Carousel1/>
                    </div>
                </div>
                <div className="flex-1 order-1 md:order-2">
                    <div className=" max-w-[450px]">
                        <div className="flex flex-col gap-10 md:gap-20">
                            <div>
                                <div className="text-xl rounded-full bg-black text-white flex w-fit px-3 py-2 mb-2 font-bold">
                                    Supply
                                </div>
                                <h2 className="text-5xl pt-2">
                                    Diverse supply & procurement options
                                </h2>
                            </div>
                            <div className="flex flex-col gap-8 bg-white">
                                <div className="flex flex-col gap-3">
                                    <h4 className="text-lg font-semibold">
                                        Before ForkHR
                                    </h4>
                                    <ul className="text-muted-foreground list-disc">
                                        <li className="flex items-center gap-2"><Cross1Icon className="w-6 h-6" color="#E54D2E"/>Manually emailing orders to suppliers</li>
                                        <li className="flex items-center gap-2"><Cross1Icon className="w-6 h-6" color="#E54D2E"/>Tracking orders in spreadsheets</li>
                                        <li className="flex items-center gap-2"><Cross1Icon className="w-6 h-6" color="#E54D2E"/>Missing deadlines</li>
                                        <li className="flex items-center gap-2"><Cross1Icon className="w-6 h-6" color="#E54D2E"/>Paying for product that was never delivered</li>
                                        <li className="flex items-center gap-2"><Cross1Icon className="w-6 h-6" color="#E54D2E"/>Delayed reporting and analysis on orders</li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h4 className="text-lg font-semibold">
                                        After ForkHR
                                    </h4>
                                    <ul className="text-muted-foreground list-disc">
                                        <li className="flex items-center gap-2"><CheckIcon className="w-6 h-6" color="#3DD68C"/>Automated order placement</li>
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
            <div className="text-3xl text-center font-semibold">
                General
            </div>
            <Accordion type="single" collapsible className="w-full pb-12 pt-6 md:container px-2">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-start">
                        How to add a new vendor?
                    </AccordionTrigger>
                    <AccordionContent>
                        Go to <Link className="underline" target="_blank" to="https://app.forkhr.com/supply/marketplace">Marketplace</Link> and click on the "Add vendor" button.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-start">
                        How to remove a vendor?
                    </AccordionTrigger>
                    <AccordionContent>
                        Go to <Link className="underline" target="_blank" to="https://app.forkhr.com/supply/marketplace">Marketplace</Link> and click on the "Remove vendor" button.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-start">
                        How to sort products in my catalog?
                    </AccordionTrigger>
                    <AccordionContent>
                        Simply go to the orders page, select catalog you wish to sort, Click on "Sort" button. Then you can drag and drop products to sort them.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger className="text-start">
                        How to add a new product to my catalog?
                    </AccordionTrigger>
                    <AccordionContent>
                        Go to the orders page, click on the "Add product" button and add the product to your catalog.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger className="text-start">
                        Who can place place orders?
                    </AccordionTrigger>
                    <AccordionContent>
                        Only users with Owner and Manager roles can place orders.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger className="text-start">
                        Who can receive orders?
                    </AccordionTrigger>
                    <AccordionContent>
                        Every user in the organization can receive orders.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                    <AccordionTrigger className="text-start">
                        Who do I report issue with items received?
                    </AccordionTrigger>
                    <AccordionContent>
                        Go to the orders page, click on the order you wish to report issue with, click on "Report issue" button under the product you wish to report issue with and follow the steps.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <div className="text-3xl text-center font-semibold">
                One-time orders
            </div>
            <Accordion type="single" collapsible className="w-full pb-12 pt-6 md:container px-2">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-start">
                        How to place a one-time order?
                    </AccordionTrigger>
                    <AccordionContent>
                        To place a one-time order, your vendor must have the "One-time order" option enabled. Go to the orders page, select the vendor you wish to order from, add products to your cart and click on "Place order".
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-start">
                        Is there a minimum order value for one-time orders?
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes, the minimum order value for one-time orders is set by the vendor.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-start">
                        Is there a cut-off time for one-time orders?
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes, the cut-off time for one-time orders is set by the vendor.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger className="text-start">
                        Can I select a delivery date for one-time orders?
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes, you can select a delivery date in order preview before placing the order.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger className="text-start">
                        Can I cancel a one-time order?
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes, you can cancel a one-time order before it is dispatched by the vendor.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <div className="text-3xl text-center font-semibold">
                Standing orders
            </div>
            <Accordion type="single" collapsible className="w-full pb-12 pt-6 md:container px-2">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-start">
                        How to place a standing order?
                    </AccordionTrigger>
                    <AccordionContent>
                        To place a standing order, your vendor must have the "standing order" option enabled. Go to the orders page, select the vendor you wish to order from, add products to your cart and click on "Place order".
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-start">
                        Is there a cycle for standing orders?
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes, the cycle for standing orders is set by the vendor. You can see the cycle under the vendor's name on the standing order page.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-start">
                        How do orders get placed in standing orders?
                    </AccordionTrigger>
                    <AccordionContent>
                        Orders get placed automatically based on the cycle set by the vendor.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger className="text-start">
                        If I place an order for specific dates, will standing orders be placed?
                    </AccordionTrigger>
                    <AccordionContent>
                        No, if you have active order for specific dates, standing orders will not be placed for those dates.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger className="text-start">
                        How to cancel a standing order?
                    </AccordionTrigger>
                    <AccordionContent>
                        Go to the standing order page, zero out the quantities for the products you wish to cancel and click on "Place order".
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger className="text-start">
                        Can I see upcoming standing orders?
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes, you can see upcoming standing orders on the calendar order page. It will show as a shadowed placeholder on the calendar.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <div className="text-3xl text-center font-semibold">
                Calendar orders
            </div>
            <Accordion type="single" collapsible className="w-full pb-12 pt-6 md:container px-2">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-start">
                        How to place a calendar order?
                    </AccordionTrigger>
                    <AccordionContent>
                        Go to the calendar order page, select the vendor you wish to order from, select the dates you wish to order for, add products to your cart and click on "Place order".
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-start">
                        Can I edit a calendar order?
                    </AccordionTrigger>
                    <AccordionContent>
                        Once a calendar order is placed, it cannot be edited. You can cancel the order by going to the order history page and placing a new order.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-start">
                        Can I cancel a calendar order?
                    </AccordionTrigger>
                    <AccordionContent>
                        No, once a calendar order is placed, it cannot be canceled. You can cancel the order by going to the order history page and placing a new order.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger className="text-start">
                        I can't place a calendar order for a specific date. Why?
                    </AccordionTrigger>
                    <AccordionContent>
                        Once an order is placed for a specific date, you cannot place another order for the same date.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger className="text-start">
                        I can't add a quantity to a product in a calendar order. Why?
                    </AccordionTrigger>
                    <AccordionContent>
                        Vendor's cut-off time for orders has passed. You can try placing the order for the next available date.
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
                        See all your real-time data in one place: Reports orders. Get quick insights, advanced spending and order issue reports. AI insights on your orders spending.
                    </div>
                </div>
                <div className="flex gap-4 justify-around py-6">
                    <img
                        alt="reporting"
                        src="/assets/reporting-orders.png"
                    />
                </div>
            </div>
        </section>
    )
}

const Supply = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = 'Supply'
    }, [])

    return (
        <main className="fade-in-up">
            <Section1/>
            <Section2/>
            <Section4/>
            <Section3/>
            <Section5/>
            <Section6/>
            <Reporting/>
            <Faq/>
        </main>
    )
}

export default Supply