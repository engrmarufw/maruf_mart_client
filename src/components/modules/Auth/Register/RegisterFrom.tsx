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
import { registerValidationSchema } from "./registerValidation"
import { registeruser } from "@/services/AuthService"
import { toast } from "sonner"

const RegisterForm = () => {
    const form = useForm({
        resolver: zodResolver(registerValidationSchema)

    })
    const { formState: { isSubmitting } } = form;

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            const res = await registeruser(data);
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
                <h1 className="text-xl font-black text-gray-900 mb-2">Register</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                        {/* Name Field */}
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <Label htmlFor="name">Name</Label> {/* ShadCN UI Label */}
                                    <FormControl>
                                        <Input
                                            id="name"
                                            placeholder="Enter your name"
                                            {...field}
                                            value={field.value || ""}
                                            className="focus:ring-2 focus:ring-blue-500 p-2 border rounded-md w-full"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

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

                        {/* Confirm Password Field */}
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <Label htmlFor="confirmPassword">Confirm Password</Label> {/* ShadCN UI Label */}
                                    <FormControl>
                                        <Input
                                            id="confirmPassword"
                                            placeholder="Confirm your password"
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

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            className="bg-black text-white hover:bg-gray-900 p-2 rounded-full w-full"
                        >
                            {
                                isSubmitting ? "Registering...." : "Register"
                            }
                        </Button>
                    </form>
                </Form>

                {/* Sign In Link */}
                <div className="text-center mt-4">
                    <p className="text-sm">
                        Already have an account?{" "}
                        <Link href="/login" className="text-blue-600 hover:text-blue-800">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm
