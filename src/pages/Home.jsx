import { Button } from '@/components/ui/button'
import { CheckIcon } from '@radix-ui/react-icons'
import { useEffect } from 'react'
import { ArrowRight, BellIcon, CalendarClock, ClockIcon, FolderIcon, PieChartIcon, StarIcon, UserIcon } from 'lucide-react'
import { Link } from 'react-router-dom'


const Section1 = () => {
    return (
        <div className="max-w-[800px] mx-auto px-6 flex gap-5 min-h-[60vh] flex-col md:flex-row border-l border-r border-slate-200 border-dashed">
            <div className="mx-auto w-full flex max-w-[980px] flex-col gap-3 md:gap-6 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20 flex-1 justify-center">
                <h1 className="max-w-[350px] md:max-w-[650px] text-5xl font-bold leading-tight tracking-tighter lg:text-6xl xl:text-7xl lg:leading-[1.1]">
                    Workforce<br/>management<br/>made easy<span className="text-primary">.</span>
                </h1>
                <div className="flex flex-col gap-1">
                    <li className="flex items-center text-sm gap-2"><CheckIcon className="w-5 h-5" color="#533afd"/>Schedule & Time Tracking</li>
                    <li className="flex items-center text-sm gap-2"><CheckIcon className="w-5 h-5" color="#533afd"/>Staff HR & Compliance</li>
                    <li className="flex items-center text-sm gap-2"><CheckIcon className="w-5 h-5" color="#533afd"/>Boost Retention & Engagement</li>
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
        <div className=" border-t border-slate-200 bg-white fade-in-up border-dashed">
        <section className="max-w-[800px] mx-auto w-100 py-20 border-l border-r border-dashed border-slate-200">
            <div className="flex justify-between px-6 pb-10 flex-col gap-8 max-w-[75%]">
                <div className="flex-1">
                    <h1 className="text-5xl font-semibold underline decoration-primary decoration-4 underline-offset-4 text-pri">
                        Optimize your operations<span className="text-primary">.</span>
                    </h1>
                </div>
                <p className="flex-1 text-base md:text-xl">
                    Your business is unique, and so are your operations. Fork HR is designed to cater to your unique needs. Whether you have multiple locations, or you have a large team, our platform was designed to help you run your business efficiently.
                </p>
            </div>
            <div>
                <div className="flex justify-between px-6 border-b py-6">
                    <h5 className="text-base md:text-base flex-1 font-semibold">
                        YOUR BUSINESS GOAL
                    </h5>
                    <div className="text-base md:text-base flex-1 font-semibold">
                        HOW WE SOLVE IT
                    </div>
                </div>
                <div className="flex gap-4 px-6 border-slate-200 border-dashed justify-between border-b py-8">
                    <h5 className="text-xl text-semibold flex-1">
                        1. Schedule & Time Tracking
                    </h5>
                    <div className="text-base md:text-base flex-1 flex flex-col gap-2 md:gap-6">
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
                <div className="flex gap-4 px-6 border-slate-200 border-dashed justify-between border-b py-8">
                    <h5 className="text-xl text-semibold flex-1">
                        2. Staff HR & Compliance
                    </h5>
                    <div className="text-base md:text-base flex-1 flex flex-col gap-2 md:gap-6">
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
                <div className="flex gap-4 px-6 border-slate-200 border-dashed justify-between py-8">
                    <h5 className="text-xl text-semibold flex-1">
                        3. Boost Retention & Engagement
                    </h5>
                    <div className="text-base md:text-base flex-1 flex flex-col gap-2 md:gap-6">
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
                            What we save you<span className="text-primary">.</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col flex-1">
                            <div className="flex flex-col pb-8 gap-4">
                                <div className="text-6xl px-6 border-l border-primary pl-4 border-dashed">
                                    37%
                                </div>
                                <div className="text-2xl font-semibold px-6">
                                    Faster scheduling
                                </div>
                                <div className="text-xl px-6">
                                    Create schedules in minutes with our easy-to-use scheduling tool. Drag and drop shifts, assign employees, and manage time off requests.
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col flex-1">
                            <div className="flex flex-col pb-8 gap-4">
                                <div className="text-6xl px-6 border-l border-primary pl-4 border-dashed">
                                52%
                            </div>
                            <div className="text-2xl font-semibold px-6">
                                Less time theft
                            </div>
                            <div className="text-xl px-6">
                                Employee clock-in/clock-out tracking is made easy with our terminal, geo location, and manual clock-in options. Ensure accurate time tracking and reduce time theft.
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col flex-1">
                            <div className="flex flex-col pb-8 gap-4">
                                <div className="text-6xl px-6 border-l border-primary pl-4 border-dashed">
                                    99%
                                </div>
                                <div className="text-2xl font-semibold px-6">
                                    Onboarding doc completion
                                </div>
                                <div className="text-xl px-6">
                                    Streamline your onboarding process with paperless onboarding. Employees can complete legal forms like W-4, I-9, and more online, ensuring compliance and reducing paperwork.
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col flex-1">
                            <div className="flex flex-col pb-8 gap-4">
                                <div className="text-6xl px-6 border-l border-primary pl-4 border-dashed">
                                    2x
                                </div>
                                <div className="text-2xl font-semibold px-6">
                                    More staff announcement reads & engagement
                                </div>
                                <div className="text-xl px-6">
                                    Keep your team informed with announcements. Share important updates, news, and events to ensure everyone is on the same page.
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col flex-1">
                            <div className="flex flex-col pb-8 gap-4">
                                <div className="text-6xl px-6 border-l border-primary pl-4 border-dashed">
                                    3x
                                </div>
                                <div className="text-2xl font-semibold px-6">
                                    More performance feedback
                                </div>
                                <div className="text-xl px-6">
                                    Foster a culture of recognition and appreciation with peer reviews. Encourage employees to give feedback to each other, boosting morale and engagement.
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const apps = [
    {
        name: "Schedule",
        title: "Simple scheduling",
        to: '/scheduler',
        description: "Create schedule in minutes with our easy-to-use scheduling tool. Drag and drop shifts, assign employees, and manage time off requests. Shift pool with open shifts and shift swaps.", 
        icon: <div className="h-8 w-8 flex justify-center items-center rounded-full bg-[#3647dd]"><CalendarClock className="w-4 h-4" color="#fff"/></div>,
        image: "/assets/pebble-1.png"
    },
    {
        name: "Time Tracking",
        title: "Accurate time tracking",
        to: '/time-tracking',
        description: "Employee clock-in/clock-out tracking is made easy with our terminal, geo location, and manual clock-in options. Ensure accurate time tracking and reduce time theft.",
        icon: <div className="h-8 w-8 flex justify-center items-center rounded-full bg-[#3647dd]"><ClockIcon className="w-4 h-4" color="#fff"/></div>,
    },
    {
        name: "Onboarding",
        title: "Paperless onboarding",
        to: '/onboarding',
        description: "Streamline your onboarding process with paperless onboarding. Employees can complete legal forms like W-4, I-9, and more online, ensuring compliance and reducing paperwork.",
        icon: <div className="h-8 w-8 flex justify-center items-center rounded-full bg-[#3647dd]"><UserIcon className="w-4 h-4" color="#fff"/></div>,
    },
    {
        name: "Documents",
        title: "Employee documents",
        to: "/documents",
        description: "Manage employee documents with ease. Upload, request and create documents for your employees. Set expiration reminders and e-signatures to ensure compliance and keep your team organized.",
        icon: <div className="h-8 w-8 flex justify-center items-center rounded-full bg-[#3647dd]"><FolderIcon className="w-4 h-4" color="#fff"/></div>,
    },
    {
        name: "Surveys",
        title: "Gather feedback",
        to: "/surveys",
        description: "Gather feedback from your team with employee surveys. Create custom or from our templates survey to get insights into employee satisfaction, engagement, and performance.",
        icon: <div className="h-8 w-8 flex justify-center items-center rounded-full bg-[#3647dd]"><PieChartIcon className="w-4 h-4" color="#fff"/></div>,
    },
    {
        name: "Announcements",
        title: "Keep your team informed",
        to: "/announcements",
        description: "Keep your team informed with announcements. Share important updates, news, and events to ensure everyone is on the same page.",
        icon: <div className="h-8 w-8 flex justify-center items-center rounded-full bg-[#3647dd]"><BellIcon className="w-4 h-4" color="#fff"/></div>,
    },
    {
        name: "Peer Reviews",
        title: "Foster a culture of recognition",
        to: "/reviews",
        description: "Foster a culture of recognition and appreciation with peer reviews. Encourage employees to give feedback to each other, boosting morale and engagement.",
        icon: <div className="h-8 w-8 flex justify-center items-center rounded-full bg-[#3647dd]"><StarIcon className="w-4 h-4" color="#fff"/></div>,
    },
]

const Section4 = () => {
    return (
        <div className="border-t border-slate-200 fade-in-up border-dashed">
            {apps.map((app, index) => (
            <div className={`max-w-[800px] mx-auto px-6 flex gap-5 min-h-[75vh] flex-col md:flex-row border-l border-r border-dashed border-slate-200${index === 0 ? "" : " border-t"}`}
                key={index}
            >
                <div className="mx-auto w-full flex max-w-[980px] flex-col gap-3 md:gap-6 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20 flex-1 justify-center">
                    <div className="text-base font-bold">
                        <div className="max-w-[75%] text-slate-800 flex gap-3 items-center">
                            {app.icon} {app.name}
                        </div>
                    </div>
                    <div className="text-5xl font-semibold">
                        <div className="max-w-[75%] font-semibold">
                            {app.title}
                        </div>
                    </div>
                    <p className="text-base md:text-xl">
                        {app.description}
                    </p>
                    <div className="md:pb-10">
                        <div className="flex w-full space-x-4 rounded">
                            <Link to={app.to}>
                                <Button className="px-6">
                                    {app.name}
                                    <ArrowRight className="w-4 h-4 ms-2"/>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex-1">

                </div>
                {/* <div className="overflow-hidden max-w-[680px] flex items-center justify-center flex-1 bg-no-repeat bg-contain bg-right bg-[url(/assets/pebble-3.png)]">
                    <img
                        alt="img-1"
                        src="/assets/asset-1.png"
                        draggable="false"
                    />
                </div> */}
            </div>
            ))}
        </div>
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
            <Section4/>
        </main>
    )
}

export default Home