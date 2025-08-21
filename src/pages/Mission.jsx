import React, { useEffect } from 'react'

const Mission = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "Mission"
    }, [])

    return (
        <section className="max-w-[800px] mx-auto w-full px-4 py-10 md:py-20 min-h-screen fade-in-up">
            <div className="text-5xl md:text-7xl font-semibold">
                Our Mission<span className="text-primary">.</span>
            </div>
            <div className="py-10">
                <div className="text-2xl font-semibold">
                    How Fork was born
                </div>
                <div className="py-4">
                    <div className="text-base max-w-[700px]">
                        Having dedicated years to food service businesses, we've noticed a weak points of small businesses in the industry and decided to create a platform that would help businesses streamline workforce management. Our goal is to provide a comprehensive solution that addresses the unique challenges faced by small and medium-sized businesses in the food service industry. We aim to empower these businesses with tools that enhance communication, simplify scheduling, and improve overall team management. By doing so, we hope to create a more efficient and productive work environment for all team members.
                    </div>
                    <br/>
                    <br/>
                    <div className="text-2xl font-semibold">
                        Industry Problems
                    </div>
                <br/>
                    <ul className="list-disc pl-8">
                        <li>Lack of communication between team members</li>
                        <li>Inefficient onboarding process and the problem of high turnover</li>
                        <li>Scheduling is a nightmare</li>
                        <li>Lack of transparency in payroll</li>
                        <li>Lack of training</li>
                    </ul>
                    <br/>
                </div>
                <br/>
                <br/>
                <div className="text-2xl font-semibold">
                    Our Solution
                </div>
                <br/>
                <ul className="list-disc pl-8">
                    <li>Connect team members</li>
                    <li>Streamline the onboarding process</li>
                    <li>Simplify scheduling</li>
                    <li>Provide transparency in payroll</li>
                    <li>Provide training</li>
                    <li>Gather feedback from team members</li>
                </ul>
            </div>
        </section>
    )
}

export default Mission