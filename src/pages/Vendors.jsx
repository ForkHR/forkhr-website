import { InfoCircledIcon } from '@radix-ui/react-icons'
import React from 'react'

const Vendors = () => {
    return (
        <div className="min-h-[50vh] container flex justify-center items-center">
            <div className="flex border-r me-4 pe-4">
                <InfoCircledIcon className="w-8 h-8 text-primary-500" />
            </div>
            <div className="flex flex-col">
                <h1 className="text-2xl text-center">
                    This portal is under construction
                </h1>
                <p className="text-base text-muted-foreground">
                    Please check back later
                </p>
            </div>
        </div>
    )
}

export default Vendors