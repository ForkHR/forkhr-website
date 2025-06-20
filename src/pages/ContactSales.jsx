import { Button } from '@/components/ui/button'
import { ArrowRight, MailIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from "@/components/ui/label"
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from '@/components/ui/textarea'


// Send a request to the server to create a new lead
const createLead = async (data) => {
    try {
        // const response = await fetch('http://localhost:5000/api/support/demo', {
        const response = await fetch('https://app.emplorex.com/api/support/contact-sales', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        if (response.ok) {
            return response.json()
        }
        throw new Error('Failed to create a new lead')
    } catch (error) {
        console.error(error)
    }
}

const ContactSales = () => {

    const [fullName, setFullName] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [email, setEmail] = useState('')
    const [companySize, setCompanySize] = useState('')
    const [state, setState] = useState('')
    const [moreInfo, setMoreInfo] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)


    const handleSubmit = async () => {
        setIsLoading(true)
        const data = {
            fullName,
            companyName,
            email,
            companySize,
            state,
            moreInfo,
        }
        try {
            const res = await createLead(data)

            if (!res) {
                setIsLoading(false)
                return
            }
            setIsLoading(false)
            setFullName('')
            setCompanyName('')
            setEmail('')
            setCompanySize('')
            setState('')
            setMoreInfo('')
            setIsSuccess(true)
            window.scrollTo(0, 0)

        } catch (error) {
            console.error(error)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = 'Request a demo'
    }
    , [])

    return (
        <main className="md:container px-2 py-10 md:py-20 flex flex-col justify-center items-center gap-8 fade-in-up">
            {isSuccess ?
                <div className="flex flex-col items-center gap-4 min-h-[50vh] justify-center fade-in-up">
                    <h1 className="text-4xl font-semibold text-center">
                        Thank you for your interest!
                    </h1>
                    <p className="text-xl text-muted-foreground text-center max-w-[450px]">
                        We have received your request and will get in touch with you shortly.
                    </p>
                    <Link to="/">
                        <Button>
                            Go back to home
                            <ArrowRight className="w-4 h-4 ms-2"/>
                        </Button>
                    </Link>
                </div>
                :
                <>
            <div className="flex flex-col justify-start items-start text-start flex-1 w-full max-w-[400px]">
                <h1 className="text-4xl font-semibold">
                    Request a demo
                </h1>
                <p className="text-xl text-muted-foreground max-w-[450px] pt-4">
                    Please provide us with information about your company and we’ll get in touch shortly.
                </p>
            </div>
            <div className="flex gap-20 w-full flex-col md:flex-row justify-center items-center">
                <div className="flex gap-4 flex-wrap w-full flex-col py-10 max-w-[400px]">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="Full name">Full name *</Label>
                        <Input
                            placeholder="Full name"
                            value={fullName}
                            className="w-full"
                            label="Full name"
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="Email">Email *</Label>
                        <Input
                            placeholder="Email"
                            value={email}
                            label="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="Company name">Company name *</Label>
                        <Input
                            placeholder="Company name"
                            value={companyName}
                            label="Company name"
                            onChange={(e) => setCompanyName(e.target.value)}
                        />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="Company size">Company size *</Label>
                        <Select onValueChange={(value) => setCompanySize(value)}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select company size" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectItem value="1-9">1-9 employees</SelectItem>
                                <SelectItem value="10-49">10-49 employees</SelectItem>
                                <SelectItem value="50-99">50-99 employees</SelectItem>
                                <SelectItem value="100-299">100-299 employees</SelectItem>
                                <SelectItem value="300-plus">300+ employees</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="State">State *</Label>
                        <Select onValueChange={(value) => setState(value)}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select state where your company is located" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {[ 'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming' ].map((state) => (
                                        <SelectItem key={state} value={state}>{state}</SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="More info">More info</Label>
                        <Textarea 
                            placeholder="Tell us more about your company"
                            value={moreInfo}
                            onChange={(e) => setMoreInfo(e.target.value)}
                            className="max-h-40"
                        />
                    </div>
                    <div className="py-2 fs-base">
                        Fields marked with an asterisk (*) are required.
                    </div>
                    <div className="flex">
                        <Button
                            className="text-base"
                            disabled={!fullName || !email || !companyName || !companySize || !state || isLoading}
                            onClick={handleSubmit}
                        >
                            {isLoading ? 'Loading...' : 'Request demo'}
                        </Button>
                    </div>
                </div>
                {/* <div className="max-w-[250px] py-10">
                    <div className="border rounded-xl bg-black text-white py-6 px-4 flex flex-col gap-4">
                        <div className="text-xl">
                            Looking for product help or support?
                        </div>
                        <Link to="mailto:support@forkhr.com">
                            <Button
                                variant="ghost"
                            >
                                <MailIcon className="w-4 h-4 me-2"/>
                                Email support
                            </Button>
                        </Link>
                    </div>
                </div> */}
            </div>
            </>
            }
        </main>
    )
}

export default ContactSales