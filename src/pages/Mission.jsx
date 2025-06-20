import React, { useEffect } from 'react'

const Mission = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "Mission"
    }, [])

    return (
        <section className="md:container px-2 py-10 md:py-20 min-h-screen fade-in-up">
            <div className="text-5xl md:text-8xl font-semibold">
                Our Mission
            </div>
            <div className="py-10">
                <div className="text-2xl font-semibold">
                    How Emplorex was born
                </div>
                <div className="py-4">
                    <div className="text-base max-w-[700px]">
                        Having dedicated years to food service businesses, we've noticed a weak points of small businesses in the industry and decided to create a platform that would help businesses streamline their operations and connect them with vendors and service providers.
                        This would help businesses grow, scale and compete with larger corporations.
                    </div>
                    <br/>
                    <br/>
                    <div className="text-2xl font-semibold">
                        Industry Problems
                    </div>
                <br/>
                    <strong>Supply</strong>
                    <ul className="list-disc pl-8">
                        <li>Lack of communication between vendors and businesses</li>
                        <li>Inefficient supply, managing multiple vendors is a hassle</li>
                        <li>Lack of transparency in pricing</li>
                        <li>Lack of quality control</li>
                    </ul>
                    <br/>

                    <strong>Team Management</strong>
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
                <strong>Supply</strong>
                <ul className="list-disc pl-8">
                    <li>Connect businesses with vendors</li>
                    <li>Streamline the supply chain</li>
                    <li>Provide transparency in pricing</li>
                    <li>Quality control</li>
                </ul>
                <br/>
                <strong>Team Management</strong>
                <ul className="list-disc pl-8">
                    <li>Connect team members</li>
                    <li>Transparent communication</li>
                    <li>Streamline the onboarding process</li>
                    <li>Simplify scheduling</li>
                    <li>Provide transparency in payroll</li>
                    <li>Provide training</li>
                </ul>
                <br/>
                <strong>Platform for vendors</strong>
                <ul className="list-disc pl-8">
                    <li>Connect vendors with businesses</li>
                    <li>Custom pricing and discounts</li>
                    <li>Diverse ordering options</li>
                    <li>Quality control</li>
                </ul>
                <br/>
                <strong>Platform for service providers</strong>
                <ul className="list-disc pl-8">
                    <li>Connect service providers with businesses</li>
                    <li>Custom pricing and discounts</li>
                    <li>Service scheduling</li>
                    <li>Quality control</li>
                </ul>
            </div>
        </section>
    )
}

export default Mission