'use client'

import { useRef, useState } from 'react';
import { Button } from '../ui/button';
import { ArrowRight, CalendarClock, ClockIcon, FolderIcon, UserIcon } from 'lucide-react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';


const apps = [
    {
        name: "Scheduler",
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
    {
        name: "Staff HR",
        title: "Employee management",
        description: "Manage employee information, ensure all legal documents are completed, and up to date.",
        icon: <div className="h-8 w-8 flex justify-center items-center rounded-full bg-slate-200"><FolderIcon className="w-4 h-4"/></div>,
        to: '/staff-hr'
    },
    {
        name: "Retention & Engagement",
        title: "Employee engagement",
        description: "Engage your employees with our retention and engagement tools. Create surveys, polls, and feedback forms to understand employee satisfaction and improve retention.",
        icon: <div className="h-8 w-8 flex justify-center items-center rounded-full bg-slate-200"><UserIcon className="w-4 h-4"/></div>,
        to: '/retention-and-engagement'
    },
]

const Header = () => {
    const headerRef = useRef(null)
    const [open, setOpen] = useState(false)

    return (
        <header ref={headerRef}
            className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 border-dashed"
        >
            <div className="max-w-[800px] mx-auto md:px-8 px-4 border-r border-l border-slate-200 border-dashed">
                <div className='flex h-16 max-w-screen-2xl items-center'>
                    <div className="flex items-center w-full">
                        <Link href="/" className='mr-4 items-center gap-1'>
                            <svg height="28px" viewBox="0 0 345 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M150.228 8.67929C152.774 8.67929 155.001 8.96213 156.91 9.52781C158.89 10.0935 160.375 10.7652 161.365 11.543L159.562 21.0888C158.784 20.5938 157.9 20.2049 156.91 19.9221C155.92 19.6392 154.754 19.4978 153.41 19.4978C150.865 19.4978 148.779 20.1342 147.152 21.407C145.597 22.609 144.819 24.7303 144.819 27.7708V35.0892L145.561 37.953V86H130.925V26.8162C130.925 22.7151 131.773 19.3211 133.47 16.6341C135.167 13.9471 137.465 11.9673 140.364 10.6945C143.334 9.35103 146.622 8.67929 150.228 8.67929ZM160.941 32.968V43.7865H122.121V32.968H160.941ZM191.785 31.9073C197.018 31.9073 201.649 33.0033 205.68 35.1953C209.71 37.3873 212.857 40.5339 215.12 44.635C217.453 48.7362 218.62 53.6858 218.62 59.484C218.62 65.2822 217.453 70.2318 215.12 74.333C212.857 78.4341 209.71 81.5807 205.68 83.7727C201.649 85.9646 197.018 87.0606 191.785 87.0606C186.553 87.0606 181.922 85.9646 177.891 83.7727C173.861 81.5807 170.714 78.4341 168.451 74.333C166.189 70.2318 165.057 65.2822 165.057 59.484C165.057 53.6858 166.189 48.7362 168.451 44.635C170.714 40.5339 173.861 37.3873 177.891 35.1953C181.922 33.0033 186.553 31.9073 191.785 31.9073ZM191.785 42.7259C189.311 42.7259 187.154 43.3622 185.316 44.635C183.548 45.8371 182.169 47.6755 181.179 50.1503C180.26 52.6252 179.8 55.7364 179.8 59.484C179.8 63.2316 180.26 66.3428 181.179 68.8176C182.169 71.2924 183.548 73.1662 185.316 74.439C187.154 75.6411 189.311 76.2421 191.785 76.2421C194.331 76.2421 196.488 75.6411 198.255 74.439C200.023 73.1662 201.402 71.2924 202.392 68.8176C203.382 66.2721 203.877 63.1609 203.877 59.484C203.877 55.7364 203.382 52.6252 202.392 50.1503C201.402 47.6755 200.023 45.8371 198.255 44.635C196.488 43.3622 194.331 42.7259 191.785 42.7259ZM230.591 86V32.968H243.425L244.167 43.6804C245.44 39.9328 247.384 37.0338 250.001 34.9832C252.688 32.9326 255.976 31.9073 259.865 31.9073C261.067 31.9073 262.127 32.0134 263.046 32.2255C264.036 32.4376 264.85 32.7205 265.486 33.074L263.789 45.3775C263.223 45.0946 262.41 44.8825 261.349 44.7411C260.359 44.5289 259.087 44.4229 257.531 44.4229C255.41 44.4229 253.395 44.9532 251.485 46.0138C249.647 47.0745 248.127 48.6654 246.925 50.7867C245.793 52.8373 245.228 55.4182 245.228 58.5294V86H230.591ZM327.441 32.968L303.365 58.7415L300.501 59.9082L285.122 76.8785L285.016 61.3931L310.789 32.968H327.441ZM288.834 9.846V86H274.197V9.846H288.834ZM305.38 49.8322L328.608 86H312.168L295.41 58.4233L305.38 49.8322Z" fill="black"/>
                            <path d="M16.6804 24.7935C25.1158 33.3781 26.7618 35.1141 27.4968 36.2671C28.5781 37.9754 29.501 40.1521 29.9812 42.0952C30.3943 43.8518 30.308 48.8409 29.8259 52.479C29.2741 56.5249 29.622 59.5304 31.0417 63.0698C32.5569 66.8241 31.518 65.6662 50.8064 84.9546L63.8953 98.0425C59.4837 99.3162 54.8215 100 49.9998 100C22.3858 100 1.9778e-05 77.6144 -0.000244141 50.0005C-0.000244141 38.2337 4.06616 27.4171 10.8679 18.8765L16.6804 24.7935ZM51.3572 42.811C54.4939 41.6186 57.2677 41.4657 60.199 42.3667C63.2595 43.3075 62.1995 42.3672 79.7322 59.6909L93.9792 73.8042C92.2747 76.9468 90.2424 79.8851 87.9294 82.5757L74.7937 69.3716C58.8251 53.3288 59.2553 53.735 57.5759 53.4888C56.5977 53.3507 55.4501 53.6606 54.6111 54.3042C53.1833 55.397 52.9642 58.045 54.1453 59.7944C54.5646 60.4114 58.9782 64.874 69.2849 75.1313L82.3445 88.1245C79.6744 90.3921 76.7647 92.3854 73.656 94.0581L59.157 79.4214C44.4096 64.5247 43.3545 63.41 42.8748 62.4526C41.5765 59.7213 41.2659 56.4247 42.0281 53.1265C42.9747 48.9678 47.0474 44.4723 51.3572 42.811ZM49.9998 -0.000488281C77.614 -0.000488281 99.9998 22.3863 99.9998 50.0005C99.9997 54.9766 99.2722 59.7827 97.9187 64.3188C95.4518 61.8014 91.541 57.8615 85.3015 51.5864C74.2575 40.4827 68.1545 34.4687 67.1902 33.7134C64.3697 31.49 60.8565 30.1563 57.0671 29.8599C56.0259 29.774 53.4995 29.9055 51.4343 30.1392C46.9829 30.6737 44.1271 30.6549 41.6492 30.1177C39.6322 29.6831 37.1841 28.6081 35.5935 27.4653C34.9246 27.0054 30.9483 23.1483 25.1443 17.3442C22.7473 14.9472 20.4915 12.7135 18.7322 10.9839C27.2951 4.11265 38.1666 -0.000431741 49.9998 -0.000488281Z" fill="black"/>
                            </svg>
                        </Link>
                        <div className="hidden lg:block flex-1">
                            <div className="flex justify-between w-full items-center">
                                <div className="flex-1">
                                <NavigationMenu viewport={false}>
                                    <NavigationMenuList
                                        className="flex items-center space-x-8 ms-4"
                                    >
                                        <NavigationMenuItem>
                                        <NavigationMenuLink asChild className="text-base font-semibold hover:text-primary focus:text-primary">
                                            <Link href="/">Home</Link>
                                        </NavigationMenuLink>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem>
                                        <NavigationMenuTrigger
                                            className="text-base font-semibold bg-transparent hover:text-primary hover:bg-transparent focus:bg-transparent data-[state=open]:text-primary data-[state=open]:bg-transparent p-0"
                                        >
                                            Features
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                                {apps.map((app, index) => (
                                                    <li key={index} className="row-span-3">
                                                        <NavigationMenuLink asChild>
                                                            <Link
                                                                className="from-muted/50 to-muted hover:text-primary flex h-full w-full flex-col justify-end rounded-lg p-3 no-underline outline-hidden select-none"
                                                                href={app.to}
                                                            >
                                                                <div className="flex gap-8">
                                                                    <div className="h-4 w-4 rounded-full bg-slate-100">
                                                                        {app.icon}
                                                                    </div>
                                                                    <div>
                                                                        <div className="text-base font-medium">
                                                                            {app.name}
                                                                        </div>
                                                                        <div className="text-xs text-muted-foreground line-clamp-2">
                                                                            {app.description}
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
                                            <Link href="/pricing">Pricing</Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuList>
                                </NavigationMenu>
                                </div>
                                <div className="flex items-center space-x-2 justify-end">
                                    <Link
                                        href="https://app.forkhr.com/login"
                                        target="_blank"
                                    >
                                        <Button
                                            variant="ghost"
                                            className="text-base text-primary hover:opacity-75"
                                        >
                                            Sign in
                                            <ArrowRight className="w-4 h-4 ms-2" />
                                        </Button>
                                    </Link>
                                    <Link
                                        href="https://app.forkhr.com/register"
                                        target="_blank"
                                    >
                                        <Button>
                                            Get started
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="flex flex-1 items-center space-x-2 justify-end">
                            <div className="lg:hidden flex items-center gap-2">
                            <div className="flex items-center gap-2">
                            <Link
                                href="https://app.forkhr.com/login"
                                target="_blank"
                            >
                                <Button
                                    variant="ghost"
                                    className="text-base text-primary hover:opacity-75"
                                >
                                    Sign in
                                    <ArrowRight className="w-4 h-4 ms-2" />
                                </Button>
                            </Link>
                            <Sheet
                                open={open} onOpenChange={setOpen}
                            >
                                <SheetTrigger>
                                    <Button variant="secondary" className="text-base">
                                        <HamburgerMenuIcon className="h-6 w-6" />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent
                                    className="flex flex-col p-0 w-full"
                                >
                                    <SheetHeader>
                                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                                    <div className="p-4 flex items-center border-b border-dashed border-slate-200">
                                        <div className="flex-1">
                                            <svg height="28px" viewBox="0 0 345 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M150.228 8.67929C152.774 8.67929 155.001 8.96213 156.91 9.52781C158.89 10.0935 160.375 10.7652 161.365 11.543L159.562 21.0888C158.784 20.5938 157.9 20.2049 156.91 19.9221C155.92 19.6392 154.754 19.4978 153.41 19.4978C150.865 19.4978 148.779 20.1342 147.152 21.407C145.597 22.609 144.819 24.7303 144.819 27.7708V35.0892L145.561 37.953V86H130.925V26.8162C130.925 22.7151 131.773 19.3211 133.47 16.6341C135.167 13.9471 137.465 11.9673 140.364 10.6945C143.334 9.35103 146.622 8.67929 150.228 8.67929ZM160.941 32.968V43.7865H122.121V32.968H160.941ZM191.785 31.9073C197.018 31.9073 201.649 33.0033 205.68 35.1953C209.71 37.3873 212.857 40.5339 215.12 44.635C217.453 48.7362 218.62 53.6858 218.62 59.484C218.62 65.2822 217.453 70.2318 215.12 74.333C212.857 78.4341 209.71 81.5807 205.68 83.7727C201.649 85.9646 197.018 87.0606 191.785 87.0606C186.553 87.0606 181.922 85.9646 177.891 83.7727C173.861 81.5807 170.714 78.4341 168.451 74.333C166.189 70.2318 165.057 65.2822 165.057 59.484C165.057 53.6858 166.189 48.7362 168.451 44.635C170.714 40.5339 173.861 37.3873 177.891 35.1953C181.922 33.0033 186.553 31.9073 191.785 31.9073ZM191.785 42.7259C189.311 42.7259 187.154 43.3622 185.316 44.635C183.548 45.8371 182.169 47.6755 181.179 50.1503C180.26 52.6252 179.8 55.7364 179.8 59.484C179.8 63.2316 180.26 66.3428 181.179 68.8176C182.169 71.2924 183.548 73.1662 185.316 74.439C187.154 75.6411 189.311 76.2421 191.785 76.2421C194.331 76.2421 196.488 75.6411 198.255 74.439C200.023 73.1662 201.402 71.2924 202.392 68.8176C203.382 66.2721 203.877 63.1609 203.877 59.484C203.877 55.7364 203.382 52.6252 202.392 50.1503C201.402 47.6755 200.023 45.8371 198.255 44.635C196.488 43.3622 194.331 42.7259 191.785 42.7259ZM230.591 86V32.968H243.425L244.167 43.6804C245.44 39.9328 247.384 37.0338 250.001 34.9832C252.688 32.9326 255.976 31.9073 259.865 31.9073C261.067 31.9073 262.127 32.0134 263.046 32.2255C264.036 32.4376 264.85 32.7205 265.486 33.074L263.789 45.3775C263.223 45.0946 262.41 44.8825 261.349 44.7411C260.359 44.5289 259.087 44.4229 257.531 44.4229C255.41 44.4229 253.395 44.9532 251.485 46.0138C249.647 47.0745 248.127 48.6654 246.925 50.7867C245.793 52.8373 245.228 55.4182 245.228 58.5294V86H230.591ZM327.441 32.968L303.365 58.7415L300.501 59.9082L285.122 76.8785L285.016 61.3931L310.789 32.968H327.441ZM288.834 9.846V86H274.197V9.846H288.834ZM305.38 49.8322L328.608 86H312.168L295.41 58.4233L305.38 49.8322Z" fill="black"/>
                                            <path d="M16.6804 24.7935C25.1158 33.3781 26.7618 35.1141 27.4968 36.2671C28.5781 37.9754 29.501 40.1521 29.9812 42.0952C30.3943 43.8518 30.308 48.8409 29.8259 52.479C29.2741 56.5249 29.622 59.5304 31.0417 63.0698C32.5569 66.8241 31.518 65.6662 50.8064 84.9546L63.8953 98.0425C59.4837 99.3162 54.8215 100 49.9998 100C22.3858 100 1.9778e-05 77.6144 -0.000244141 50.0005C-0.000244141 38.2337 4.06616 27.4171 10.8679 18.8765L16.6804 24.7935ZM51.3572 42.811C54.4939 41.6186 57.2677 41.4657 60.199 42.3667C63.2595 43.3075 62.1995 42.3672 79.7322 59.6909L93.9792 73.8042C92.2747 76.9468 90.2424 79.8851 87.9294 82.5757L74.7937 69.3716C58.8251 53.3288 59.2553 53.735 57.5759 53.4888C56.5977 53.3507 55.4501 53.6606 54.6111 54.3042C53.1833 55.397 52.9642 58.045 54.1453 59.7944C54.5646 60.4114 58.9782 64.874 69.2849 75.1313L82.3445 88.1245C79.6744 90.3921 76.7647 92.3854 73.656 94.0581L59.157 79.4214C44.4096 64.5247 43.3545 63.41 42.8748 62.4526C41.5765 59.7213 41.2659 56.4247 42.0281 53.1265C42.9747 48.9678 47.0474 44.4723 51.3572 42.811ZM49.9998 -0.000488281C77.614 -0.000488281 99.9998 22.3863 99.9998 50.0005C99.9997 54.9766 99.2722 59.7827 97.9187 64.3188C95.4518 61.8014 91.541 57.8615 85.3015 51.5864C74.2575 40.4827 68.1545 34.4687 67.1902 33.7134C64.3697 31.49 60.8565 30.1563 57.0671 29.8599C56.0259 29.774 53.4995 29.9055 51.4343 30.1392C46.9829 30.6737 44.1271 30.6549 41.6492 30.1177C39.6322 29.6831 37.1841 28.6081 35.5935 27.4653C34.9246 27.0054 30.9483 23.1483 25.1443 17.3442C22.7473 14.9472 20.4915 12.7135 18.7322 10.9839C27.2951 4.11265 38.1666 -0.000431741 49.9998 -0.000488281Z" fill="black"/>
                                            </svg>
                                        </div>
                                    </div>
                                    </SheetHeader>
                                        <div className="flex-1">
                                        <Link href="/"
                                            onClick={() => setOpen(false)}
                                            className="py-4 border-b border-dashed text-gray-700 border-slate-200 font-semibold text-lg flex items-start px-4 gap-2"
                                        >
                                            Home
                                        </Link>
                                        <Link href="/scheduler"
                                            onClick={() => setOpen(false)}
                                            className="py-4 border-b border-dashed text-gray-700 border-slate-200 font-semibold text-lg flex px-4 items-center"
                                        >
                                            Scheduler
                                        </Link>
                                        <Link href="/time-tracking"
                                            onClick={() => setOpen(false)}
                                            className="py-4 border-b border-dashed text-gray-700 border-slate-200 font-semibold text-lg flex px-4 items-center"
                                        >
                                            Time Tracking
                                        </Link>
                                        <Link href="/staff-hr"
                                            onClick={() => setOpen(false)}
                                            className="py-4 border-b border-dashed text-gray-700 border-slate-200 font-semibold text-lg flex px-4 items-center"
                                        >
                                            Staff HR
                                        </Link>
                                        <Link href="/retention-and-engagement"
                                            className="py-4 border-b border-dashed text-gray-700 border-slate-200 font-semibold text-lg flex px-4 items-center"
                                            onClick={() => setOpen(false)}
                                        >
                                            Retention & Engagement
                                        </Link>
                                        <Link href="/pricing"
                                            onClick={() => setOpen(false)}
                                            className="py-4 border-b border-dashed text-gray-700 border-slate-200 font-semibold text-lg flex items-start px-4 gap-2"
                                        >
                                            Pricing
                                        </Link>
                                    </div>
                                    <SheetFooter className="p-2">
                                        <div className="flex flex-1 gap-3">
                                            <Link
                                                href="https://app.forkhr.com/login"
                                                target="_blank"
                                                className="flex-1"
                                            >
                                                <Button
                                                    variant="secondary"
                                                    className="text-base text-primary w-full"
                                                >
                                                    Sign in
                                                </Button>
                                            </Link>
                                            <Link href="https://app.forkhr.com/register"
                                                target="_blank"
                                                className="flex-1"
                                            >
                                                <Button className="flex-1 w-full">
                                                    Free trial
                                                </Button>
                                            </Link>
                                        </div>
                                    </SheetFooter>
                                </SheetContent>
                            </Sheet>
                            </div>
                            <div className="hidden lg:flex items-center gap-2"> 
                                <Link
                                    href="https://app.forkhr.com/login"
                                    target="_blank"
                                >
                                    <Button
                                        variant="ghost"
                                        className="text-base text-primary hover:opacity-75"
                                    >
                                        Sign in
                                        <ArrowRight className="w-4 h-4 ms-2" />
                                    </Button>
                                </Link>
                                <Link href="https://app.forkhr.com/register"
                                    target="_blank"
                                >
                                    <Button>
                                        Free trial
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header


