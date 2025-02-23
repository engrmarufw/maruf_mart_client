import { Facebook, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="bg-white text-gray-800 py-8">
            <div className="container mx-auto text-center">
                {/* Logo and Description */}
                <div className="mb-6">
                    <h1 className="text-3xl font-extrabold text-rose-600">Maruf_Mart</h1>
                    <p className="mt-2 text-sm text-gray-600">
                        Your go-to online store for quality products at unbeatable prices.
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="mb-6">
                    <div className="flex justify-center space-x-6">
                        <Link href="/" className="text-lg hover:text-rose-500 transition">Home</Link>
                        <Link href="/about" className="text-lg hover:text-rose-500 transition">About</Link>
                        <Link href="/shop" className="text-lg hover:text-rose-500 transition">Shop</Link>
                        <Link href="/contact" className="text-lg hover:text-rose-500 transition">Contact</Link>
                    </div>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center space-x-6 mb-6">
                    <Link href="https://facebook.com" target="_blank" className="text-xl hover:text-rose-500 transition">
                        <Facebook />
                    </Link>
                    <Link href="https://twitter.com" target="_blank" className="text-xl hover:text-rose-500 transition">
                        <Twitter />
                    </Link>
                    <Link href="https://instagram.com" target="_blank" className="text-xl hover:text-rose-500 transition">
                        <Instagram />
                    </Link>
                </div>

                {/* Contact & Copyright */}
                <div className="mt-6 text-sm text-gray-600">
                    <p>&copy; {new Date().getFullYear()} Maruf_Mart. All rights reserved.</p>
                    <p>Contact us: <a href="mailto:info@marufmart.com" className="text-rose-500">info@marufmart.com</a></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
