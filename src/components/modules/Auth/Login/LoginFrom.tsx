"use client"

import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label" // Import ShadCN UI Label component
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginValidationSchema } from "./loginValidation"
import { loginUser, reCapTchaTokenVerification } from "@/services/AuthService"
import { toast } from "sonner"
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react"

const LoginFrom = () => {
    const form = useForm({
        resolver: zodResolver(loginValidationSchema)

    })
    const { formState: { isSubmitting } } = form;
    const [reCapTchaStatus, setReCapTchaStatus] = useState(false)
    const handleReCaptcha = async (value: string | null) => {
     
        
        try {
            const res = await reCapTchaTokenVerification(value!);
            console.log(res);
            if (res?.success) {
                setReCapTchaStatus(true)
            }
        } catch (error: any) {
            console.error(error)
        }
    }

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            const res = await loginUser(data);
            if (res?.success) {
                toast.success(res?.message)
            } else {
                toast.error(res?.message)

            }

        } catch (error: any) {
            console.error(error)
        }
    }

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="bg-white shadow-lg rounded-xl w-[400px] p-3">
                <div className="text-center">
                    <h1 className="text-xl font-black text-rose-600">Maruf_Mart</h1>
                </div>
                <h1 className="text-xl font-black text-gray-900 mb-2">LogIn</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">



                        {/* Email Field */}
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <Label htmlFor="email">Email</Label> {/* ShadCN UI Label */}
                                    <FormControl>
                                        <Input
                                            id="email"
                                            placeholder="Enter your email"
                                            type="email"
                                            {...field}
                                            value={field.value || ""}
                                            className="focus:ring-2 focus:ring-blue-500 p-2 border rounded-md w-full"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Password Field */}
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <Label htmlFor="password">Password</Label> {/* ShadCN UI Label */}
                                    <FormControl>
                                        <Input
                                            id="password"
                                            placeholder="Enter your password"
                                            type="password"
                                            {...field}
                                            value={field.value || ""}
                                            className="focus:ring-2 focus:ring-blue-500 p-2 border rounded-md w-full"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />


                        <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY} onChange={handleReCaptcha} />

                        {/* Submit Button */}
                        <Button
                            disabled={reCapTchaStatus ? false : true}
                            type="submit"
                            className="bg-black text-white hover:bg-gray-900 p-2 rounded-full w-full"
                        >
                            {
                                isSubmitting ? "Logging...." : "Login"
                            }
                        </Button>
                    </form>
                </Form>

                {/* Sign In Link */}
                <div className="text-center mt-4">
                    <p className="text-sm">
                        Don't have an account?{" "}
                        <Link href="/register" className="text-blue-600 hover:text-blue-800">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginFrom
