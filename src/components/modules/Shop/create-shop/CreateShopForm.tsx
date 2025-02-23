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
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { toast } from "sonner"
import { shopSchema } from "./createShopValidation"



const CreateShopForm = () => {
    const form = useForm({
        resolver: zodResolver(shopSchema)

    })

    const { formState: { isSubmitting }, setValue } = form;

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            console.log("Shop data submitted:", data);
            toast.success("Shop registered successfully!")
        } catch (error) {
            toast.error("Failed to register shop")
        }
    }

    return (
        <div className="flex justify-center items-center bg-gray-100 p-5">
            <div className="bg-white shadow-xl rounded-2xl w-full max-w-4xl p-8">
                <h1 className="text-2xl font-black text-gray-900 mb-6 text-center">Register Your Shop</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Shop Name */}
                        <FormField control={form.control} name="shopName" render={({ field }) => (
                            <FormItem>
                                <Label>Shop Name</Label>
                                <FormControl>
                                    <Input placeholder="Enter shop name" {...field}
                                     value={field.value || ""}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        {/* Business License Number */}
                        <FormField control={form.control} name="businessLicenseNumber" render={({ field }) => (
                            <FormItem>
                                <Label>Business License Number</Label>
                                <FormControl>
                                    <Input placeholder="Enter business license number" {...field} 
                                     value={field.value || ""}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        {/* Address */}
                        <FormField control={form.control} name="address" render={({ field }) => (
                            <FormItem>
                                <Label>Address</Label>
                                <FormControl>
                                    <Input placeholder="Enter address" {...field}  value={field.value || ""} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        {/* Contact Number */}
                        <FormField control={form.control} name="contactNumber" render={({ field }) => (
                            <FormItem>
                                <Label>Contact Number</Label>
                                <FormControl>
                                    <Input placeholder="Enter contact number" {...field}  value={field.value || ""} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        {/* Website */}
                        <FormField control={form.control} name="website" render={({ field }) => (
                            <FormItem>
                                <Label>Website</Label>
                                <FormControl>
                                    <Input placeholder="Enter website URL" {...field}  value={field.value || ""} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        {/* Services Offered */}
                        <FormField
                            control={form.control}
                            name="servicesOffered"
                            render={({ field }) => (
                                <FormItem>
                                    <Label>Services Offered (comma-separated)</Label>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Enter services, separated by commas"
                                            {...field}  value={field.value || ""}
                                            onChange={(e) =>
                                                setValue("servicesOffered", e.target.value.split(",").map(item => item.trim()))
                                            }
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />


                        {/* Established Year */}
                        <FormField control={form.control} name="establishedYear" render={({ field }) => (
                            <FormItem>
                                <Label>Established Year</Label>
                                <FormControl>
                                    <Input type="number" placeholder="Enter established year" {...field}  value={field.value || ""} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        {/* Tax Identification Number */}
                        <FormField control={form.control} name="taxIdentificationNumber" render={({ field }) => (
                            <FormItem>
                                <Label>Tax Identification Number</Label>
                                <FormControl>
                                    <Input placeholder="Enter TIN" {...field}  value={field.value || ""} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        {/* Social Media Links */}
                        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <FormField control={form.control} name="socialMediaLinks.facebook" render={({ field }) => (
                                <FormItem>
                                    <Label>Facebook URL</Label>
                                    <FormControl>
                                        <Input placeholder="Enter Facebook URL" {...field}  value={field.value || ""} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />

                            <FormField control={form.control} name="socialMediaLinks.twitter" render={({ field }) => (
                                <FormItem>
                                    <Label>Twitter URL</Label>
                                    <FormControl>
                                        <Input placeholder="Enter Twitter URL" {...field}  value={field.value || ""} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />

                            <FormField control={form.control} name="socialMediaLinks.instagram" render={({ field }) => (
                                <FormItem>
                                    <Label>Instagram URL</Label>
                                    <FormControl>
                                        <Input placeholder="Enter Instagram URL" {...field}  value={field.value || ""} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        </div>

                        {/* Image Upload */}
                        <FormField
                            control={form.control}
                            name="shopImage"
                            render={({ field }) => (
                                <FormItem>
                                    <Label>Shop Image</Label>
                                    <FormControl>
                                        <Input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => field.onChange(e.target.files ? e.target.files[0] : null)}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="md:col-span-2">
                            <Button type="submit" className="bg-black text-white hover:bg-gray-900 p-2 rounded-full w-full">
                                {isSubmitting ? "Registering..." : "Register Shop"}
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default CreateShopForm;
