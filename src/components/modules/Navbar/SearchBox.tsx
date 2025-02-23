"use client"

import { useForm, Controller } from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SearchIcon } from "lucide-react"

const SearchBox = () => {
    const form = useForm({
        defaultValues: {
            searchText: "",
            searchCategory: "", // For the select input
        },
    })

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <div className="bg-white shadow-sm inline-block rounded-full px-2">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center justify-center space-x-4">

                    {/* Select Component */}
                    <FormField
                        control={form.control}
                        name="searchCategory"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Select
                                        value={field.value} // Ensure this is controlled
                                        onValueChange={field.onChange} // Bind onChange to the field
                                    >
                                        <SelectTrigger className="focus:outline-none focus:ring-0 border-none shadow-none p-0"> {/* Ensure no outline on select */}
                                            <SelectValue placeholder="Category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="category1">Category 1</SelectItem>
                                            <SelectItem value="category2">Category 2</SelectItem>
                                            <SelectItem value="category3">Category 3</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="searchText"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder="Search here anything"
                                        {...field}
                                        className="no-focus-outline border-none shadow-none md:w-[300px]" // Ensures no outline and no ring
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <button className="bg-black p-1 rounded-full" type="submit"><SearchIcon className="text-white w-[18px] h-[18px]" /></button>
                </form>
            </Form>
        </div>
    )
}

export default SearchBox
