import { Button } from '@/components/ui/button'
import { ArrowLeftRightIcon, ArrowRight, CalendarClock, CheckIcon, CoffeeIcon, MapIcon, MonitorSmartphoneIcon, SendIcon, TimerIcon, UserIcon } from 'lucide-react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


const Section2 = () => {
    return (
        // Animation fade-in page
        <div className="border-t border-slate-200 bg-white fade-in-up border-dashed">
            <section className="max-w-[800px] mx-auto w-100 py-20 border-r border-l border-slate-200 border-dashed">
                <div className="flex justify-between md:px-8 px-4 pb-10 flex-col gap-8 md:max-w-[75%]">
                    <div className="flex-1">
                        <h1 className="md:text-5xl text-3xl font-semibold underline decoration-primary decoration-4 underline-offset-4 decoration-dashed">
                            How many work hours, when, and where
                            <span className="text-primary">.</span>
                        </h1>
                    </div>
                    <p className="flex-1 text-base text-gray-600">
                        Fork’s scheduler is a powerful tool that helps you manage your employees’ work hours, shifts, and tasks. It’s designed to make scheduling easy and efficient, so you can focus on running your business.
                    </p>
                </div>
                <div className="flex">
                    <div className="flex-1">
                        <div className="flex gap-3 flex-col py-6">
                            <MonitorSmartphoneIcon className="w-6 h-6 text-primary md:mx-8 mx-4"/>
                            <h5 className="text-base md:px-8 px-4 font-bold flex-1 border-l border-primary border-dashed">
                                Clock-in terminals from your devices
                            </h5>
                            <div className="text-base md:px-8 px-4 md:text-base">
                                Turn an existing iPad, Android tablet, or computer into a clocking-in terminal. No costly equipment needed; just use Fork, assign PINs, and go.
                            </div>
                        </div>
                        <div className="flex gap-3 flex-col py-6">
                            <TimerIcon className="w-6 h-6 text-primary md:mx-8 mx-4"/>
                            <h5 className="text-base md:px-8 px-4 font-bold flex-1 border-l border-primary border-dashed">
                                Track clock-in/clock-out accurately
                            </h5>
                            <div className="text-base md:px-8 px-4 text-gray-600">
                                Any clock-in/out data is stored instantly in Fork, ready to be reviewed or edited by approved managers.
                            </div>
                        </div>
                        <div className="flex gap-3 flex-col py-6">
                            <MapIcon className="w-6 h-6 text-primary md:mx-8 mx-4"/>
                            <h5 className="text-base md:px-8 px-4 font-bold flex-1 border-l border-primary border-dashed">
                                GEO clock-in
                            </h5>
                            <div className="text-base md:px-8 px-4 text-gray-600">
                                Create location with geo-fencing, so they can only clock-in/out when they are at the right place. 
                            </div>
                        </div>
                        <div className="flex gap-3 flex-col py-6">
                            <UserIcon className="w-6 h-6 text-primary md:mx-8 mx-4"/>
                            <h5 className="text-base md:px-8 px-4 font-bold flex-1 border-l border-primary border-dashed">
                                Current status
                            </h5>
                            <div className="text-base md:px-8 px-4 text-gray-600">
                                Always keep a close eye on your employees’ current status. Are they clocked in, on break, or clocked out? Fork has you covered.
                            </div>
                        </div>
                    </div>
                    <div className="flex-1"/>
                </div>
            </section>
        </div>
    )
}

const TimeTracking = () => {

    useEffect(() => {
        window.scrollTo(0,0)
        document.title = "Time Tracking - Fork"
    }, [])

    return (
        <>
            <div className="max-w-[800px] fade-in-up mx-auto flex gap-5 min-h-[60vh] flex-col md:flex-row">
                <div className="mx-auto w-full flex max-w-[980px] flex-col md:px-8 px-4 gap-3 md:gap-6 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20 flex-1 justify-center border-l border-r border-slate-200 border-dashed">
                    <div className="flex">
                        <div className="flex-1">
                            <h1 className="max-w-[350px] md:max-w-[650px] text-5xl font-bold leading-[1] tracking-tighter lg:text-6xl xl:text-7xl lg:leading-[1.1]">
                                Time<br/>tracking<span className="text-primary">.</span>
                            </h1>
                            <div className="text-base text-gray-600 md:max-w-[75%] pt-4 md:pt-10">
                                Turn any smartphone, or computer into a clock terminal. Whenever your employees clock in and out, their timesheets are filled out accurately, in real time. Approving and exporting to payroll is then easier than ever.
                            </div>
                            {/* <div className="flex flex-col gap-1">
                                <li className="flex items-center text-base gap-2"><CheckIcon className="w-5 h-5" color="#533afd"/>Terminal clock in</li>
                                <li className="flex items-center text-base gap-2"><CheckIcon className="w-5 h-5" color="#533afd"/>Geo location clock in</li>
                                <li className="flex items-center text-base gap-2"><CheckIcon className="w-5 h-5" color="#533afd"/>Manual clock in</li>
                            </div> */}
                            <div className="md:pb-10 pt-4 md:pt-10">
                                <div className="flex w-full space-x-4 rounded">
                                    <Link to="https://app.forkhr.com/register" target="_blank">
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
                            <img
                                alt="img-1"
                                src="/assets/introduction-timetracking.png"
                                draggable="false"
                                className="w-full h-auto max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px]"
                            />
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
        </>
    )
}

export default TimeTracking