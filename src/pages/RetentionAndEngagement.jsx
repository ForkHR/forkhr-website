import { Button } from '@/components/ui/button'
import { ArrowLeftRightIcon, ArrowRight, CalendarClock, CheckIcon, CoffeeIcon, SendIcon, TimerIcon } from 'lucide-react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


const Section2 = () => {
    return (
        // Animation fade-in page
        <div className="border-t border-slate-200 bg-white fade-in-up border-dashed">
            <section className="max-w-[800px] mx-auto w-100 px-6 min-h-screen py-20 border-r border-l border-slate-200 border-dashed">
                <div className="flex justify-between pb-10 flex-col gap-8 max-w-[75%]">
                    <div className="flex-1">
                        <h1 className="text-5xl font-semibold underline decoration-primary decoration-4 underline-offset-4">
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
                            <SendIcon className="w-6 h-6 text-primary"/>
                            <h5 className="text-base font-bold flex-1">
                                Make schedule sharing quick
                            </h5>
                            <div className="text-base md:text-base">
                                Forget sending schedules via email. With Fork, your team can access their schedule via the website or the mobile app whenever they need.
                            </div>
                        </div>
                        <div className="flex gap-3 flex-col py-6">
                            <CalendarClock className="w-6 h-6 text-primary"/>
                            <h5 className="text-base font-bold flex-1">
                                A single up-to-date schedule
                            </h5>
                            <div className="text-base text-gray-600">
                                When you make changes to your Fork schedule, these changes are instantly visible to everyone concerned; no need to manually resend the schedule.
                            </div>
                        </div>
                        <div className="flex gap-3 flex-col py-6">
                            <TimerIcon className="w-6 h-6 text-primary"/>
                            <h5 className="text-base font-bold flex-1">
                                Weekly availability
                            </h5>
                            <div className="text-base text-gray-600">
                                Employees can set their weekly availability in Fork, so you can easily see when they’re available to work and when they’re not.
                            </div>
                        </div>
                        <div className="flex gap-3 flex-col py-6">
                            <CheckIcon className="w-6 h-6 text-primary"/>
                            <h5 className="text-base font-bold flex-1">
                                Assign and track everyday tasks
                            </h5>
                            <div className="text-base text-gray-600">
                                Attach a daily list of tasks and instructions to each work shift to guide your employees’ work and view when they’re done.
                            </div>
                        </div>
                        <div className="flex gap-3 flex-col py-6">
                            <ArrowLeftRightIcon className="w-6 h-6 text-primary"/>
                            <h5 className="text-base font-bold flex-1">
                                Open shifts and shift swaps
                            </h5>
                            <div className="text-base text-gray-600">
                                Employees can easily request shift swaps or fill open shifts, and you can approve or deny these requests with a single click.
                            </div>
                        </div>
                        <div className="flex gap-3 flex-col py-6">
                            <CoffeeIcon className="w-6 h-6 text-primary"/>
                            <h5 className="text-base font-bold flex-1">
                                Time off requests
                            </h5>
                            <div className="text-base text-gray-600">
                                Employees can request time off in Fork, and you can approve or deny these requests with a single click. You can also set up rules for time off requests, such as requiring a certain amount of notice.
                            </div>
                        </div>
                    </div>
                    <div className="flex-1"/>
                </div>
            </section>
        </div>
    )
}


const Section3 = () => {
    return (
        <section className="border-t border-slate-200 bg-white fade-in-up border-dashed">
            <div className="max-w-[800px] mx-auto w-100 py-20 border-l border-r border-slate-200 border-dashed">
                <div className="flex justify-between flex-col gap-20">
                    <div className="text-5xl font-semibold flex-1 px-6">
                        <div className="max-w-[75%] font-semibold underline decoration-primary decoration-4 underline-offset-4">
                            Cut schedule management time<span className="text-primary">.</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col flex-1">
                            <div className="flex flex-col pb-8 gap-4">
                                <div className="text-6xl px-6 border-l border-primary pl-4 border-dashed">
                                    $5,120
                                </div>
                                <div className="text-xl px-6">
                                    saved yearly per schedule manager on average.
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col flex-1">
                            <div className="flex flex-col pb-8 gap-4">
                                <div className="text-6xl px-6 border-l border-primary pl-4 border-dashed">
                                    60%
                                </div>
                                <div className="text-xl px-6">
                                    of managers report having an easier time filling work shifts.
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col flex-1">
                            <div className="flex flex-col pb-8 gap-4">
                                <div className="text-6xl px-6 border-l border-primary pl-4 border-dashed">
                                    75%
                                </div>
                                <div className="text-xl px-6">
                                    of managers report improved employee autonomy.
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col flex-1">
                            <div className="flex flex-col pb-8 gap-4">
                                <div className="text-6xl px-6 border-l border-primary pl-4 border-dashed">
                                    33%
                                </div>
                                <div className="text-xl px-6">
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

const RetentionAndEngagement = () => {

    useEffect(() => {
        window.scrollTo(0,0)
        document.title = "Scheduler"
    }, [])

    return (
        <>
            <div className="max-w-[800px] fade-in-up mx-auto flex gap-5 min-h-[60vh] flex-col md:flex-row">
                <div className="mx-auto w-full flex max-w-[980px] flex-col px-6 gap-3 md:gap-6 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20 flex-1 justify-center border-l border-r border-slate-200 border-dashed">
                    <h1 className="max-w-[350px] md:max-w-[650px] text-5xl font-bold leading-tight tracking-tighter lg:text-6xl xl:text-7xl lg:leading-[1.1]">
                        Schedule<br/>your team<br/>with ease<span className="text-primary">.</span>
                    </h1>
                    <div className="flex flex-col gap-1">
                        <li className="flex items-center text-base gap-2"><CheckIcon className="w-5 h-5" color="#533afd"/>Staff availability</li>
                        <li className="flex items-center text-base gap-2"><CheckIcon className="w-5 h-5" color="#533afd"/>Open shifts & swaps</li>
                        <li className="flex items-center text-base gap-2"><CheckIcon className="w-5 h-5" color="#533afd"/>Time of requests</li>
                        <li className="flex items-center text-base gap-2"><CheckIcon className="w-5 h-5" color="#533afd"/>Shift breaks, tasks and notes</li>
                    </div>
                    <div className="md:pb-10">
                        <div className="flex w-full space-x-4 rounded">
                            <Link to="https://app.forkhr.com/register" target="_blank">
                                <Button className="px-6">
                                    Start free trial <ArrowRight className="w-4 h-4 ms-2"/>
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
            <Section2/>
            <Section3/>
        </>
    )
}

export default RetentionAndEngagement