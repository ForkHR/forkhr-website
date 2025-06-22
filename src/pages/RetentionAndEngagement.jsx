import { Button } from '@/components/ui/button'
import { ArrowRight, BellIcon, FormInputIcon, PieChartIcon, StarIcon } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


const Section2 = () => {
    return (
        // Animation fade-in page
        <div className="border-t border-slate-200 bg-white fade-in-up border-dashed">
            <section className="max-w-[800px] mx-auto w-100 md:py-20 py-10 border-r border-l border-slate-200 border-dashed">
                <div className="flex justify-between md:px-8 px-4 pb-10 flex-col gap-8 md:max-w-[75%]">
                    <div className="flex-1">
                        <h1 className="md:text-5xl text-3xl font-semibold underline decoration-primary decoration-4 underline-offset-4 decoration-dashed">
                            Keep your employees longer
                            <span className="text-primary">.</span>
                        </h1>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex-1">
                        <div className="flex gap-3 flex-col py-6">
                            <PieChartIcon className="w-6 h-6 text-primary md:mx-8 mx-4"/>
                            <h5 className="text-base font-bold flex-1 md:px-8 px-4 border-l border-primary border-dashed">
                                Surveys
                            </h5>
                            <div className="text-base md:text-base md:px-8 px-4">
                                Create and send surveys to your employees to gather feedback on their experience, engagement, and satisfaction. Use the insights to improve your workplace culture.
                            </div>
                        </div>
                        <div className="flex gap-3 flex-col py-6">
                            <BellIcon className="w-6 h-6 text-primary md:mx-8 mx-4"/>
                            <h5 className="text-base font-bold flex-1 md:px-8 px-4 border-l border-primary border-dashed">
                                Announcements
                            </h5>
                            <div className="text-base text-gray-600 md:px-8 px-4">
                                Send important announcements to your employees, such as company news, policy changes, or upcoming events. Keep everyone informed and engaged with Fork.
                            </div>
                        </div>
                        <div className="flex gap-3 flex-col py-6">
                            <StarIcon className="w-6 h-6 text-primary md:mx-8 mx-4"/>
                            <h5 className="text-base font-bold flex-1 md:px-8 px-4 border-l border-primary border-dashed">
                                Reviews
                            </h5>
                            <div className="text-base text-gray-600 md:px-8 px-4">
                                Conduct performance reviews and evaluations to assess your employees’ skills, strengths, and areas for improvement. Use the feedback to help them grow and develop in their roles.
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 md:flex hidden"/>
                </div>
            </section>
        </div>
    )
}


const StaffHr = () => {

    useEffect(() => {
        window.scrollTo(0,0)
        document.title = "Retention and Engagement - Fork HR"
    }, [])

    return (
        <>
            <div className="max-w-[800px] fade-in-up mx-auto flex gap-5 min-h-[60vh] flex-col md:flex-row">
                <div className="mx-auto w-full flex max-w-[980px] flex-col md:px-8 px-4 gap-3 md:gap-6 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20 flex-1 justify-center border-l border-r border-slate-200 border-dashed">
                    <h1 className="max-w-[350px] md:max-w-[650px] text-5xl font-bold leading-[1] tracking-tighter lg:text-6xl xl:text-7xl lg:leading-[1.1]">
                        Retention<br/>and<br/>engagement<span className="text-primary">.</span>
                    </h1>
                    <div className="text-base text-gray-600 md:max-w-[75%]">
                        Fork helps you keep your employees happy and engaged, so they stay with your company longer. 
                    </div>
                    <div className="md:pb-10">
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

export default StaffHr