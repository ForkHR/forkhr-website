import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = 'Login'
    }
    , [])

    return (
        <main className="md:container px-2 py-10 md:py-20 flex flex-col justify-center items-center gap-8 fade-in-up">
            <div className="flex flex-col justify-start text-start flex-1 w-full">
                <h1 className="text-3xl font-semibold">
                    Supply, Manage, Sell.
                </h1>
                <p className="font-semibold text-muted-foreground">
                    Sing into your Emplorex account
                </p>
            </div>
            <div className="flex gap-10 flex-wrap flex-1 w-full">
                <div className="border rounded-xl p-10 min-h flex-1 flex flex-col justify-end">
                    <div className="flex justify-center">
                        <img src="/assets/supply-login.png" alt="img-1" className="h-full max-h-[30vh] w-fit"/>
                    </div>
                    <div>
                        <h2 className="text-4xl font-semibold">
                            Supply & Manage Your Business
                        </h2>
                        <p className="text-muted-foreground py-4 max-w-[350px]">
                            Supply your business with the best vendors and manage your team with Emplorex operations.
                        </p>
                        <Link to="https://app.emplorex.com" target="_blank">
                            <Button>
                                Open Emplorex operations
                                <ArrowRight className="w-4 h-4 ms-2"/>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login