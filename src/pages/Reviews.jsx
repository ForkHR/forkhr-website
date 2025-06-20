import { Button } from '@/components/ui/button'
import { ArrowRight, CalendarClock, CheckIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Reviews = () => {
    return (
            <div className="max-w-[800px] fade-in-up mx-auto px-6 flex gap-5 min-h-[60vh] flex-col md:flex-row">
                <div className="mx-auto w-full flex max-w-[980px] flex-col gap-3 md:gap-6 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20 flex-1 justify-center">
                    <h1 className="max-w-[350px] md:max-w-[650px] text-5xl font-bold leading-tight tracking-tighter lg:text-6xl xl:text-7xl lg:leading-[1.1]">
                        Peer<br/>reviews<span className="text-primary">.</span>
                    </h1>
                    <div className="flex flex-col gap-1 text-base text-gray-700 max-w-[550px]">
                        Foster a culture of recognition and appreciation with peer reviews. Encourage employees to give feedback to each other, boosting morale and engagement.
                    </div>
                    <div className="md:pb-10">
                        <div className="flex w-full space-x-4 rounded">
                            <Link to="https://app.forkhr.com/register" target="_blank">
                                <Button className="px-6">
                                    Try Peer Reviews <ArrowRight className="w-4 h-4 ms-2"/>
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

export default Reviews