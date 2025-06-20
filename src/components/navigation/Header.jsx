import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '../ui/button';
import { ArrowRight, BellIcon, CalendarClock, ClockIcon, FolderIcon, PieChartIcon, StarIcon, UserIcon } from 'lucide-react';
import {
    NavigationMenu,
    NavigationMenuContent, NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu";


const apps = [
    {
        name: "Schedule",
        title: "Simple scheduling",
        description: "Create schedule in minutes with our easy-to-use scheduling tool. Drag and drop shifts, assign employees, and manage time off requests. Shift pool with open shifts and shift swaps.", 
        icon: <div className="h-8 w-8 flex justify-center items-center rounded-full bg-slate-200"><CalendarClock className="w-4 h-4"/></div>,
        image: "/assets/pebble-1.png",
        to: '/scheduler'
    },
    {
        name: "Time Tracking",
        title: "Accurate time tracking",
        description: "Employee clock-in/clock-out tracking is made easy with our terminal, geo location, and manual clock-in options.",
        icon: <div className="h-8 w-8 flex justify-center items-center rounded-full bg-slate-200"><ClockIcon className="w-4 h-4"/></div>,
        to: '/time-tracking'
    },
]

const apps2 = [
    {
        name: "Onboarding",
        title: "Paperless onboarding",
        description: "Streamline your onboarding process with paperless onboarding. Employees can complete legal forms like W-4, I-9, and more online, ensuring compliance and reducing paperwork.",
        icon: <div className="h-8 w-8 flex justify-center items-center rounded-full bg-slate-200"><UserIcon className="w-4 h-4"/></div>,
        to: '/onboarding'
    },
    {
        name: "Documents",
        title: "Employee documents",
        description: "Manage employee documents with ease. Upload, request and create documents for your employees. Set expiration reminders and e-signatures to ensure compliance and keep your team organized.",
        icon: <div className="h-8 w-8 flex justify-center items-center rounded-full bg-slate-200"><FolderIcon className="w-4 h-4"/></div>,
        to: '/documents'
    },
]

const apps3 = [
    {
        name: "Announcements",
        title: "Keep your team informed",
        description: "Keep your team informed with announcements. Share important updates, news, and events to ensure everyone is on the same page.",
        icon: <div className="h-8 w-8 flex justify-center items-center rounded-full bg-slate-200"><BellIcon className="w-4 h-4"/></div>,
        to: '/announcements'
    },
    {
        name: "Peer Reviews",
        title: "Foster a culture of recognition",
        description: "Foster a culture of recognition and appreciation with peer reviews. Encourage employees to give feedback to each other, boosting morale and engagement.",
        icon: <div className="h-8 w-8 flex justify-center items-center rounded-full bg-slate-200"><StarIcon className="w-4 h-4"/></div>,
        to: '/reviews'
    },
]

const Header = () => {
    const [topOffset, setTopOffset] = useState(0)
    const headerRef = useRef(null)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setTopOffset(window.pageYOffset)
        }

        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', () => { setWindowWidth(window.innerWidth) })

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', () => { setWindowWidth(window.innerWidth) })
        }
    }, [])

    // {`${topOffset > 50 ? ' border-bottom' : ''}`}

    return (
        <header ref={headerRef}
            className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        >
            <div className="max-w-[800px] mx-auto px-6">
                <div className='flex h-16 max-w-screen-2xl items-center'>
                    <div className="flex items-center">
                        <NavLink to="/" className='mr-4 items-center gap-1'>
                        {windowWidth > 800 ?
                            <svg height="28px" viewBox="0 0 207 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.2283 0.679294C30.7738 0.679294 33.0011 0.962132 34.9103 1.52781C36.8902 2.09348 38.3751 2.76522 39.365 3.54302L37.5619 13.0888C36.7841 12.5938 35.9002 12.2049 34.9103 11.9221C33.9204 11.6392 32.7537 11.4978 31.4102 11.4978C28.8646 11.4978 26.7787 12.1342 25.1524 13.407C23.5968 14.609 22.819 16.7303 22.819 19.7708V27.0892L23.5614 29.953V78H8.9246V18.8162C8.9246 14.7151 9.77311 11.3211 11.4701 8.6341C13.1672 5.94714 15.4652 3.96728 18.3643 2.69451C21.3341 1.35103 24.6221 0.679294 28.2283 0.679294ZM38.9407 24.968V35.7865H0.121281V24.968H38.9407ZM69.7855 23.9073C75.018 23.9073 79.6494 25.0033 83.6799 27.1953C87.7103 29.3873 90.8569 32.5339 93.1196 36.635C95.453 40.7362 96.6197 45.6858 96.6197 51.484C96.6197 57.2822 95.453 62.2318 93.1196 66.333C90.8569 70.4341 87.7103 73.5807 83.6799 75.7727C79.6494 77.9646 75.018 79.0606 69.7855 79.0606C64.553 79.0606 59.9215 77.9646 55.8911 75.7727C51.8607 73.5807 48.7141 70.4341 46.4514 66.333C44.1887 62.2318 43.0573 57.2822 43.0573 51.484C43.0573 45.6858 44.1887 40.7362 46.4514 36.635C48.7141 32.5339 51.8607 29.3873 55.8911 27.1953C59.9215 25.0033 64.553 23.9073 69.7855 23.9073ZM69.7855 34.7259C67.3107 34.7259 65.154 35.3622 63.3156 36.635C61.5478 37.8371 60.169 39.6755 59.1791 42.1503C58.2599 44.6252 57.8002 47.7364 57.8002 51.484C57.8002 55.2316 58.2599 58.3428 59.1791 60.8176C60.169 63.2924 61.5478 65.1662 63.3156 66.439C65.154 67.6411 67.3107 68.2421 69.7855 68.2421C72.331 68.2421 74.4877 67.6411 76.2554 66.439C78.0231 65.1662 79.402 63.2924 80.3919 60.8176C81.3818 58.2721 81.8768 55.1609 81.8768 51.484C81.8768 47.7364 81.3818 44.6252 80.3919 42.1503C79.402 39.6755 78.0231 37.8371 76.2554 36.635C74.4877 35.3622 72.331 34.7259 69.7855 34.7259ZM108.591 78V24.968H121.425L122.167 35.6804C123.44 31.9328 125.384 29.0338 128.001 26.9832C130.688 24.9326 133.976 23.9073 137.865 23.9073C139.067 23.9073 140.127 24.0134 141.046 24.2255C142.036 24.4376 142.85 24.7205 143.486 25.074L141.789 37.3775C141.223 37.0946 140.41 36.8825 139.349 36.7411C138.359 36.5289 137.087 36.4229 135.531 36.4229C133.41 36.4229 131.395 36.9532 129.485 38.0138C127.647 39.0745 126.127 40.6654 124.925 42.7867C123.793 44.8373 123.228 47.4182 123.228 50.5294V78H108.591ZM205.441 24.968L181.365 50.7415L178.501 51.9082L163.122 68.8785L163.016 53.3931L188.789 24.968H205.441ZM166.834 1.846V78H152.197V1.846H166.834ZM183.38 41.8322L206.608 78H190.168L173.41 50.4233L183.38 41.8322Z" fill="black"/>
                            </svg>
                        : 
                            <svg height="28px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.6804 24.7935C25.1158 33.3781 26.7618 35.1141 27.4968 36.2671C28.5781 37.9754 29.501 40.1521 29.9812 42.0952C30.3943 43.8518 30.308 48.8409 29.8259 52.479C29.2741 56.5249 29.622 59.5304 31.0417 63.0698C32.5569 66.8241 31.518 65.6662 50.8064 84.9546L63.8953 98.0425C59.4837 99.3162 54.8215 100 49.9998 100C22.3858 100 1.9778e-05 77.6144 -0.000244141 50.0005C-0.000244141 38.2337 4.06616 27.4171 10.8679 18.8765L16.6804 24.7935ZM51.3572 42.811C54.4939 41.6186 57.2677 41.4657 60.199 42.3667C63.2595 43.3075 62.1995 42.3672 79.7322 59.6909L93.9792 73.8042C92.2747 76.9468 90.2424 79.8851 87.9294 82.5757L74.7937 69.3716C58.8251 53.3288 59.2553 53.735 57.5759 53.4888C56.5977 53.3507 55.4501 53.6606 54.6111 54.3042C53.1833 55.397 52.9642 58.045 54.1453 59.7944C54.5646 60.4114 58.9782 64.874 69.2849 75.1313L82.3445 88.1245C79.6744 90.3921 76.7647 92.3854 73.656 94.0581L59.157 79.4214C44.4096 64.5247 43.3545 63.41 42.8748 62.4526C41.5765 59.7213 41.2659 56.4247 42.0281 53.1265C42.9747 48.9678 47.0474 44.4723 51.3572 42.811ZM49.9998 -0.000488281C77.614 -0.000488281 99.9998 22.3863 99.9998 50.0005C99.9997 54.9766 99.2722 59.7827 97.9187 64.3188C95.4518 61.8014 91.541 57.8615 85.3015 51.5864C74.2575 40.4827 68.1545 34.4687 67.1902 33.7134C64.3697 31.49 60.8565 30.1563 57.0671 29.8599C56.0259 29.774 53.4995 29.9055 51.4343 30.1392C46.9829 30.6737 44.1271 30.6549 41.6492 30.1177C39.6322 29.6831 37.1841 28.6081 35.5935 27.4653C34.9246 27.0054 30.9483 23.1483 25.1443 17.3442C22.7473 14.9472 20.4915 12.7135 18.7322 10.9839C27.2951 4.11265 38.1666 -0.000431741 49.9998 -0.000488281Z" fill="black"/>
                            </svg>
                        }
                        </NavLink>
                        {/* {windowWidth > 980 ? */}
                        
                        <NavigationMenu viewport={false}>
                            <NavigationMenuList
                                className="flex items-center space-x-6 ms-4"
                            >
                                <NavigationMenuItem>
                                <NavigationMenuLink asChild className="text-base font-semibold hover:text-primary focus:text-primary">
                                    <Link to="/">Home</Link>
                                </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                <NavigationMenuTrigger
                                    className="text-base font-semibold bg-transparent hover:text-primary hover:bg-transparent focus:bg-transparent data-[state=open]:text-primary data-[state=open]:bg-transparent p-0"
                                >
                                    Features
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    {/* <div className="text-sm font-semibold pt-3 pb-2 px-3">
                                        Schedule & Time Tracking
                                    </div> */}
                                    <ul className="grid md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] px-2 pt-2">
                                        {apps.map((app, index) => (
                                            <li key={index} className="row-span-3">
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        className="from-muted/50 to-muted hover:text-primary flex h-full w-full flex-col justify-end rounded-lg bg-linear-to-b p-3 no-underline outline-hidden select-none hover:bg-slate-100"
                                                        to={app.to}
                                                    >
                                                        <div className="flex gap-5">
                                                            <div className="h-6 w-6 rounded-full bg-slate-200">
                                                                {app.icon}
                                                            </div>
                                                            <div>
                                                                <div className="text-base font-medium">
                                                                    {app.name}
                                                                </div>
                                                                <div className="text-xs text-muted-foreground">
                                                                    {app.title}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        ))}
                                    </ul>
                                    {/* <div className="text-sm font-semibold pt-3 pb-2 px-3">
                                        Staff HR & Compliance
                                    </div> */}
                                    <ul className="grid md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] px-2">
                                        {apps2.map((app, index) => (
                                            <li key={index} className="row-span-3">
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        className="from-muted/50 to-muted hover:text-primary flex h-full w-full flex-col justify-end rounded-lg bg-linear-to-b p-3 no-underline outline-hidden select-none hover:bg-slate-100"
                                                        to={app.to}
                                                    >
                                                        <div className="flex gap-5">
                                                            <div className="h-6 w-6 rounded-full bg-slate-200">
                                                                {app.icon}
                                                            </div>
                                                            <div>
                                                                <div className="text-base font-medium">
                                                                    {app.name}
                                                                </div>
                                                                <div className="text-xs text-muted-foreground">
                                                                    {app.title}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        ))}
                                    </ul>
                                    {/* <div className="text-sm font-semibold pt-3 pb-2 px-3">
                                        Retention & Engagement
                                    </div> */}
                                    <ul className="grid md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] px-2 pb-2">
                                        {apps3.map((app, index) => (
                                            <li key={index} className="row-span-3">
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        className="from-muted/50 to-muted hover:text-primary flex h-full w-full flex-col justify-end rounded-lg bg-linear-to-b p-3 no-underline outline-hidden select-none hover:bg-slate-100"
                                                        to={app.to}
                                                    >
                                                        <div className="flex gap-5">
                                                            <div className="h-6 w-6 rounded-full bg-slate-200">
                                                                {app.icon}
                                                            </div>
                                                            <div>
                                                                <div className="text-base font-medium">
                                                                    {app.name}
                                                                </div>
                                                                <div className="text-xs text-muted-foreground">
                                                                    {app.title}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuLink asChild className="text-base font-semibold hover:text-primary focus:text-primary">
                                    <Link to="/pricing">Pricing</Link>
                                </NavigationMenuLink>
                            </NavigationMenuList>
                        </NavigationMenu>
                        {/* :
                        null
                        } */}
                    </div>
                        <div className="flex flex-1 items-center space-x-2 justify-end">
                    {/* {windowWidth <= 980 ?
                        <Drawer
                            open={open} onOpenChange={setOpen}
                        >
                            <DrawerTrigger>
                                <Button variant="ghost" className="text-base">
                                    <HamburgerMenuIcon className="h-6 w-6" />
                                </Button>
                            </DrawerTrigger>
                            <DrawerContent>
                                <DrawerHeader>
                                    <Link to="/products/supply"
                                        onClick={() => setOpen(false)}
                                    >
                                        <Button variant="ghost" className="w-full text-base justify-start"><ShoppingBag className="w-6 h-6 me-2" />Supply</Button>
                                    </Link>
                                    <Link to="/products/team-management"
                                        onClick={() => setOpen(false)}
                                    >
                                        <Button variant="ghost" className="w-full text-base justify-start"><UsersIcon className="w-6 h-6 me-2" />Team</Button>
                                    </Link>
                                    <Link to="/products/vendors"
                                        onClick={() => setOpen(false)}
                                    >
                                        <Button variant="ghost" className="w-full text-base justify-start"><ArchiveIcon className="w-6 h-6 me-2" />Vendors</Button>
                                    </Link>
                                    <Link to="/pricing"
                                        onClick={() => setOpen(false)}
                                    >
                                        <Button variant="ghost" className="w-full text-base justify-start"><InfoCircledIcon className="w-6 h-6 me-2" />Pricing</Button>
                                    </Link>
                                    <Link to="/demo"
                                        onClick={() => setOpen(false)}
                                        className="flex-1"
                                    >
                                        <Button className="w-full text-base justify-start" variant="ghost"><BackpackIcon className="w-6 h-6 me-2" />Request a demo</Button>
                                    </Link>
                                    <Link to="https://app.forkhr.com"
                                        target="_blank"
                                        onClick={() => setOpen(false)}
                                        className="flex-1"
                                    >
                                        <Button className="w-full text-base justify-start" variant="ghost">Log in</Button>
                                    </Link>
                                </DrawerHeader>
                            </DrawerContent>
                        </Drawer>
                    : 
                        <> */}
                            <NavLink
                                to="https://app.forkhr.com/login"
                                target="_blank"
                            >
                                <Button
                                    variant="text"
                                    className="text-base hover:text-primary"
                                >
                                    Sign in
                                    <ArrowRight className="w-4 h-4 ms-2" />
                                </Button>
                            </NavLink>
                            <NavLink to="https://app.forkhr.com/register"
                                target="_blank"
                            >
                                <Button>
                                    Free trial
                                </Button>
                            </NavLink>
                        {/* </>
                    } */}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header


