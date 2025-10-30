import React, { useEffect } from 'react'

const Err404page = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = '404'
    }, [])
    return (
        <div
            className="flex flex-col justify-center items-center min-h-[75vh] fade-in-up gap-2 py-20"
        >
            <div
                className="flex justify-center items-center"
            >
                <h1 className="text-2xl text-center border-r px-4">404</h1>
                <div className="text-base px-4">
                    Page does not exist
                </div>
            </div>
        </div>
    )
}

export default Err404page