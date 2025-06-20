import React, { useEffect } from 'react'

const WorkInProgress = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = 'Work in progress'
    }, [])

    return (
        <div
            className="flex flex-col justify-center items-center min-h-[50vh] fade-in-up gap-2 py-20"
        >
            <div>
                <img
                    alt="page-in-progress"
                    src="/assets/work-in-progress.png"
                    draggable="false"
                    className="h-50"
                />
            </div>
            <div
                className="flex flex-col gap-2 justify-center items-center"
            >
                <div className="text-xl text-center border-r px-10">
                    This page is under construction
                </div>
                <div className="text-sm px-4 text-muted-foreground">
                    Please check back later
                </div>
            </div>
        </div>
    )
}

export default WorkInProgress