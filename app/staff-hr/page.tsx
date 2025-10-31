"use client"
import { Button } from '@/components/ui/button'
import { ArrowLeftRightIcon, ArrowRight, Book, CalendarClock, CheckIcon, CoffeeIcon, FileSignatureIcon, FileWarning, FolderIcon, FolderKanban, FormInputIcon, SendIcon, UserPlus } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect } from 'react'

const Section2 = () => {
    return (
        // Animation fade-in page
        <div className="border-t border-slate-200 bg-white fade-in-up border-dashed">
            <section className="max-w-[800px] mx-auto w-100 md:py-20 py-10 border-r border-l border-slate-200 border-dashed w-full">
                <div className="flex justify-between md:px-8 px-4 pb-10 flex-col gap-8 md:max-w-[75%]">
                    <div className="flex-1">
                        <h1 className="md:text-5xl text-3xl font-semibold underline decoration-primary decoration-4 underline-offset-4 decoration-dashed">
                            Organize your HR tasks
                            <span className="text-primary">.</span>
                        </h1>
                    </div>
                    <p className="flex-1 text-base text-gray-600">
                        Fork’s HR tools help you manage employee documents, e-signatures, and onboarding forms. It’s designed to make HR tasks easy and efficient, so you can focus on running your business.
                    </p>
                </div>
                <div className="flex">
                    <div className="flex-1">
                        <div className="flex gap-3 flex-col py-6">
                            <FolderIcon className="w-6 h-6 text-primary md:mx-8 mx-4"/>
                            <h5 className="text-base font-bold flex-1 md:px-8 px-4 border-l border-primary border-dashed">
                                Employee documents
                            </h5>
                            <div className="text-base md:text-base md:px-8 px-4">
                                Request, upload and securely store employee documents in Fork, so you can easily access them when you need them.
                            </div>
                        </div>
                        <div className="flex gap-3 flex-col py-6">
                            <FileWarning className="w-6 h-6 text-primary md:mx-8 mx-4"/>
                            <h5 className="text-base font-bold flex-1 md:px-8 px-4 border-l border-primary border-dashed">
                                Incidents
                            </h5>
                            <div className="text-base text-gray-600 md:px-8 px-4">
                                Document and track workplace incidents. Maintain a safe and compliant work environment by keeping detailed records of any incidents that occur.
                            </div>
                        </div>
                        <div className="flex gap-3 flex-col py-6">
                            <UserPlus className="w-6 h-6 text-primary md:mx-8 mx-4"/>
                            <h5 className="text-base font-bold flex-1 md:px-8 px-4 border-l border-primary border-dashed">
                                Hiring
                            </h5>
                            <div className="text-base text-gray-600 md:px-8 px-4">
                                Manage job postings and applications. Streamline your hiring process by posting job openings and tracking applications all in one place.
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
        document.title = "Staff HR - Fork"
    }, [])

    return (
        <>
            <div className="max-w-[800px] fade-in-up mx-auto flex gap-5 min-h-[60vh] flex-col md:flex-row">
                <div className="mx-auto w-full flex max-w-[980px] flex-col md:px-8 px-4 gap-3 md:gap-6 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20 flex-1 justify-center border-l border-r border-slate-200 border-dashed">
                    <div className="flex">
                        <div className="flex-1">
                            <h1 className="max-w-[350px] md:max-w-[650px] text-5xl font-bold leading-[1] tracking-tighter lg:text-6xl xl:text-7xl lg:leading-[1.1]">
                                Staff<br/>HR<span className="text-primary">.</span>
                            </h1>
                            <div className="flex flex-col gap-1 pt-4 md:pt-10">
                                <li className="flex items-center text-base gap-2"><CheckIcon className="w-5 h-5" color="#533afd"/>Employee documents, and e-signatures</li>
                                <li className="flex items-center text-base gap-2"><CheckIcon className="w-5 h-5" color="#533afd"/>Onboarding forms</li>
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
                            <img
                                alt="img-1"
                                src="/assets/introduction-documents.png"
                                draggable="false"
                                className="w-full h-auto max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px]"
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