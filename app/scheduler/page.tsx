"use client"
import { Button } from '@/components/ui/button'
import { ArrowLeftRightIcon, ArrowRight, CalendarClock, CheckIcon, CoffeeIcon, SendIcon, TimerIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect } from 'react'


const Section2 = () => {
    return (
        // Animation fade-in page
        <div className="border-t border-slate-200 bg-white fade-in-up border-dashed">
            <section className="max-w-[800px] mx-auto min-h-screen md:py-20 py-10 border-r border-l border-slate-200 border-dashed w-full">
                <div className="flex justify-between md:px-8 px-4 pb-10 flex-col gap-8 md:max-w-[75%]">
                    <div className="flex-1">
                        <h1 className="md:text-5xl text-3xl font-semibold underline decoration-primary decoration-4 underline-offset-4 decoration-dashed">
                            Easily build work schedules that meet daily staffing needs
                            <span className="text-primary">.</span>
                        </h1>
                    </div>
                    <p className="flex-1 text-base text-gray-600">
                        With Fork, you’ll be sure that your employees know exactly where and when to work.
                    </p>
                </div>
                <div className="flex">
                    <div className="flex-1">
                        <div className="flex gap-3 flex-col py-6">
                            <SendIcon className="w-6 h-6 text-primary md:mx-8 mx-4"/>
                            <h5 className="text-base md:px-8 px-4 font-bold flex-1 border-l border-primary border-dashed">
                                Make schedule sharing quick
                            </h5>
                            <div className="text-base md:text-base md:px-8 px-4">
                                Forget sending schedules via email. With Fork, your team can access their schedule via the website or the mobile app whenever they need.
                            </div>
                        </div>
                        <div className="flex gap-3 flex-col py-6">
                            <CalendarClock className="w-6 h-6 text-primary md:mx-8 mx-4"/>
                            <h5 className="text-base md:px-8 px-4 font-bold flex-1 border-l border-primary border-dashed">
                                A single up-to-date schedule
                            </h5>
                            <div className="text-base text-gray-600 md:px-8 px-4">
                                When you make changes to your Fork schedule, these changes are instantly visible to everyone concerned; no need to manually resend the schedule.
                            </div>
                        </div>
                        <div className="flex gap-3 flex-col py-6">
                            <TimerIcon className="w-6 h-6 text-primary md:mx-8 mx-4"/>
                            <h5 className="text-base md:px-8 px-4 font-bold flex-1 border-l border-primary border-dashed">
                                Weekly availability
                            </h5>
                            <div className="text-base text-gray-600 md:px-8 px-4">
                                Employees can set their weekly availability in Fork, so you can easily see when they’re available to work and when they’re not.
                            </div>
                        </div>
                        <div className="flex gap-3 flex-col py-6">
                            <CheckIcon className="w-6 h-6 text-primary md:mx-8 mx-4"/>
                            <h5 className="text-base md:px-8 px-4 font-bold flex-1 border-l border-primary border-dashed">
                                Assign and track everyday tasks
                            </h5>
                            <div className="text-base text-gray-600 md:px-8 px-4">
                                Attach a daily list of tasks and instructions to each work shift to guide your employees’ work and view when they’re done.
                            </div>
                        </div>
                        <div className="flex gap-3 flex-col py-6">
                            <ArrowLeftRightIcon className="w-6 h-6 text-primary md:mx-8 mx-4"/>
                            <h5 className="text-base md:px-8 px-4 font-bold flex-1 border-l border-primary border-dashed">
                                Open shifts and shift swaps
                            </h5>
                            <div className="text-base text-gray-600 md:px-8 px-4">
                                Employees can easily request shift swaps or fill open shifts, and you can approve or deny these requests with a single click.
                            </div>
                        </div>
                        <div className="flex gap-3 flex-col py-6">
                            <CoffeeIcon className="w-6 h-6 text-primary md:mx-8 mx-4"/>
                            <h5 className="text-base md:px-8 px-4 font-bold flex-1 border-l border-primary border-dashed">
                                Time off requests
                            </h5>
                            <div className="text-base text-gray-600 md:px-8 px-4">
                                Employees can request time off in Fork, and you can approve or deny these requests with a single click. You can also set up rules for time off requests, such as requiring a certain amount of notice.
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 md:flex hidden"/>
                </div>
            </section>
        </div>
    )
}


const Section3 = () => {
    return (
        <section className="border-t border-slate-200 bg-white fade-in-up border-dashed">
            <div className="max-w-[800px] mx-auto w-full py-20 border-l border-r border-slate-200 border-dashed">
                <div className="flex justify-between flex-col gap-20">
                    <div className="md:text-5xl text-3xl font-semibold flex-1 md:px-8 px-4">
                        <div className="md:max-w-[75%] font-semibold underline decoration-primary decoration-4 underline-offset-4 decoration-dashed">
                            Cut schedule management time<span className="text-primary">.</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col flex-1">
                            <div className="flex flex-col pb-8 gap-4">
                                <div className="text-6xl md:px-8 px-4 border-l border-primary pl-4 border-dashed">
                                    $5,120
                                </div>
                                <div className="text-xl md:px-8 px-4">
                                    saved yearly per schedule manager on average.
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col flex-1">
                            <div className="flex flex-col pb-8 gap-4">
                                <div className="text-6xl md:px-8 px-4 border-l border-primary pl-4 border-dashed">
                                    60%
                                </div>
                                <div className="text-xl md:px-8 px-4">
                                    of managers report having an easier time filling work shifts.
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col flex-1">
                            <div className="flex flex-col pb-8 gap-4">
                                <div className="text-6xl md:px-8 px-4 border-l border-primary pl-4 border-dashed">
                                    75%
                                </div>
                                <div className="text-xl md:px-8 px-4">
                                    of managers report improved employee autonomy.
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col flex-1">
                            <div className="flex flex-col pb-8 gap-4">
                                <div className="text-6xl md:px-8 px-4 border-l border-primary pl-4 border-dashed">
                                    33%
                                </div>
                                <div className="text-xl md:px-8 px-4">
                                    of managers report having improved employee retention.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Scheduler = () => {

    useEffect(() => {
        window.scrollTo(0,0)
        document.title = "Scheduler - Fork"
    }, [])

    return (
        <>
            <div className="max-w-[800px] fade-in-up mx-auto flex gap-5 min-h-[60vh] flex-col md:flex-row">
                <div className="mx-auto w-full flex max-w-[980px] flex-col md:px-8 px-4 gap-3 md:gap-6 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20 flex-1 justify-center border-l border-r border-slate-200 border-dashed">
                    <div className="flex">
                        <div className="flex-1">
                            <h1 className="max-w-[350px] md:max-w-[650px] text-5xl font-bold leading-[1] tracking-tighter lg:text-6xl xl:text-7xl lg:leading-[1.1]">
                                Schedule<br/>your team<span className="text-primary">.</span>
                            </h1>
                            <div className="flex flex-col gap-1 pt-4 md:pt-10">
                                <li className="flex items-center text-base gap-2"><CheckIcon className="w-5 h-5" color="#533afd"/>Staff availability</li>
                                <li className="flex items-center text-base gap-2"><CheckIcon className="w-5 h-5" color="#533afd"/>Open shifts & swaps</li>
                                <li className="flex items-center text-base gap-2"><CheckIcon className="w-5 h-5" color="#533afd"/>Time of requests</li>
                                <li className="flex items-center text-base gap-2"><CheckIcon className="w-5 h-5" color="#533afd"/>Shift breaks, tasks and notes</li>
                            </div>
                            <div className="md:pb-10 pt-4 md:pt-10">
                                <div className="flex w-full space-x-4 rounded">
                                    <Link href="https://app.forkhr.com/register" target="_blank">
                                        <Button className="md:px-8 px-4">
                                            Start free trial <ArrowRight className="w-4 h-4 ms-2"/>
                                        </Button>
                                    </Link>
                                </div>
                                <div className="text-xs text-gray-400 pt-4">
                                    30-day free trial. Cancel anytime.
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 hidden md:block">
                            <Image
                                alt="img-1"
                                src="/assets/introduction-scheduler.png"
                                draggable="false"
                                className="w-full h-auto max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px]"
                                width={700}
                                height={400}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Section2/>
            <Section3/>
        </>
    )
}

export default Scheduler