"use client"
import { Button } from '@/components/ui/button'
import { ArrowRight, BellIcon, Book, Folder, PieChartIcon, StarIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'


const Section2 = () => {
    return (
        // Animation fade-in page
        <div className="border-t border-slate-200 bg-white fade-in-up border-dashed">
            <section className="max-w-[800px] mx-auto w-100 md:py-20 py-10 border-r border-l border-slate-200 border-dashed w-full">
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
                                Company updates
                            </h5>
                            <div className="text-base text-gray-600 md:px-8 px-4">
                                Send important updates to your employees, such as company news, policy changes, or upcoming events. Keep everyone informed and engaged with Fork.
                            </div>
                        </div>
                        <div className="flex gap-3 flex-col py-6">
                            <StarIcon className="w-6 h-6 text-primary md:mx-8 mx-4"/>
                            <h5 className="text-base font-bold flex-1 md:px-8 px-4 border-l border-primary border-dashed">
                                Kudos
                            </h5>
                            <div className="text-base text-gray-600 md:px-8 px-4">
                                Recognize and reward your employees for their hard work and achievements. Boost morale and motivation by celebrating successes with Fork Kudos feature.
                            </div>
                        </div>
                        <div className="flex gap-3 flex-col py-6">
                            <Book className="w-6 h-6 text-primary md:mx-8 mx-4"/>
                            <h5 className="text-base font-bold flex-1 md:px-8 px-4 border-l border-primary border-dashed">
                                Training courses
                            </h5>
                            <div className="text-base text-gray-600 md:px-8 px-4">
                                Assign and track employee training courses. Ensure your team is up-to-date with the latest skills and knowledge to improve performance and productivity.
                            </div>
                        </div>
                        <div className="flex gap-3 flex-col py-6">
                            <Folder className="w-6 h-6 text-primary md:mx-8 mx-4"/>
                            <h5 className="text-base font-bold flex-1 md:px-8 px-4 border-l border-primary border-dashed">
                                Shared resources
                            </h5>
                            <div className="text-base text-gray-600 md:px-8 px-4">
                                Share important resources and policies with your team. Ensure everyone has access to the information they need to perform their job effectively.
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
        document.title = "Retention and Engagement - Fork"
    }, [])

    return (
        <>
            <div className="max-w-[800px] fade-in-up mx-auto flex gap-5 min-h-[60vh] flex-col md:flex-row">
                <div className="mx-auto w-full flex max-w-[980px] flex-col md:px-8 px-4 gap-3 md:gap-6 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20 flex-1 justify-center border-l border-r border-slate-200 border-dashed">
                    <div className="flex">
                        <div className="flex-1">
                            <h1 className="max-w-[350px] md:max-w-[650px] text-5xl font-bold leading-[1] tracking-tighter lg:text-6xl xl:text-7xl lg:leading-[1.1]">
                                Team<br/>retention<span className="text-primary">.</span>
                            </h1>
                            <div className="text-base text-gray-600 md:max-w-[75%] pt-4 md:pt-10">
                                Fork helps you keep your employees happy and engaged, so they stay with your company longer. 
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
                                src="/assets/introduction-surveys.png"
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
        </>
    )
}

export default StaffHr