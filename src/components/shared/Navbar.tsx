"use client"
import { Heart, LogOut, ShoppingCart } from "lucide-react";
import SearchBox from "../modules/Navbar/SearchBox";
import { Button } from "../ui/button";
import Link from "next/link";
import { useUser } from "@/context/UserContext";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { logout } from "@/services/AuthService";

const Navbar = () => {
    const {user, setIsLoading} = useUser();
    console.log(user);

    return (
        <div className="sticky top-0 z-10 bg-[#F1F1F3] py-2">
            <div className="container mx-auto">
                <div className=" hidden md:block">
                    <div className="flex items-center justify-between">
                        <div className="logo">
                            <h1 className="text-xl font-black text-rose-600">Maruf_Mart</h1>
                        </div>
                        <SearchBox />
                        <div className="flex items-center gap-5">
                            <Button className="rounded-full w-8 h-8" variant="outline"><Heart className="w-8 h-8" /></Button>
                            <Button className="rounded-full w-8 h-8" variant="outline"><ShoppingCart className="w-8 h-8" /></Button>
                            {
                                user?.userId ? <>
                                    <Link href="/create-shop"><Button variant="outline" className="rounded-full" >Create Shop</Button></Link>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger>
                                            <Avatar>
                                                <AvatarImage src="https://github.com/shadcn.png" />
                                                <AvatarFallback>{user?.name}</AvatarFallback>
                                            </Avatar>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuLabel>My Account</DropdownMenuLabel>

                                            <DropdownMenuItem>Profile</DropdownMenuItem>
                                            <DropdownMenuItem>Dashboard</DropdownMenuItem>
                                            {
                                                user?.hasShop == true && <DropdownMenuItem>Myshop</DropdownMenuItem>
                                            }

                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem onClick={() => {
                                                logout();
                                                setIsLoading(true);
                                            }} className="cursor-pointer text-rose-700">
                                                <LogOut /> <span>LogOut</span>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>

                                </> : <Link href="/login"><Button className="rounded-full" variant="outline">Sign In</Button>
                                </Link>
                            }
                        </div>
                    </div>

                </div>
                <div className="md:hidden block px-2">
                    <div className="flex items-center justify-between">
                        <div className="logo">
                            <h1 className="text-xl font-black text-rose-600">Maruf_Mart</h1>
                        </div>
                        <div className="flex items-center gap-5">
                            <Button className="rounded-full w-8 h-8" variant="outline"><Heart className="w-8 h-8" /></Button>
                            <Button className="rounded-full w-8 h-8" variant="outline"><ShoppingCart className="w-8 h-8" /></Button>
                            {
                                user?.userId ? <>
                                    <Link href="/create-shop"><Button variant="outline" className="rounded-full" >Create Shop</Button></Link>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger>
                                            <Avatar>
                                                <AvatarImage src="https://github.com/shadcn.png" />
                                                <AvatarFallback>{user?.name}</AvatarFallback>
                                            </Avatar>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuLabel>My Account</DropdownMenuLabel>

                                            <DropdownMenuItem>Profile</DropdownMenuItem>
                                            <DropdownMenuItem>Dashboard</DropdownMenuItem>
                                            {
                                                user?.hasShop == true && <DropdownMenuItem>Myshop</DropdownMenuItem>
                                            }

                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem onClick={() => {
                                                logout();
                                                setIsLoading(true);
                                            }} className="cursor-pointer text-rose-700">
                                                <LogOut /> <span>LogOut</span>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>

                                </> : <Link href="/login"><Button className="rounded-full" variant="outline">Sign In</Button>
                                </Link>
                            }
                        </div>
                    </div>
                    <div className="flex justify-center mt-2">
                        <SearchBox />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;