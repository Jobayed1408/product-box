import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="text-base-content">
            {/* Main Footer Content */}
            <div className="footer p-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
                
                {/* Brand Section */}
                <aside className="max-w-xs">
                    <div className="  mb-2">
                        <Logo />
                    </div>
                    <p className="opacity-70">
                        Managing your items and listings with ease. <br />
                 
                    </p>
                </aside>

                {/* Navigation Links - Relevant to your App */}
                <nav>
                    <h6 className="footer-title opacity-100 font-bold">Application</h6>
                    <Link href="/" className="link link-hover">Home</Link>
                    <Link href="/items" className="link link-hover">View Items</Link>
                    <Link href="/add-product" className="link link-hover">Add New Product</Link>
                </nav>

                {/* Company Section */}
                <nav>
                    <h6 className="footer-title opacity-100 font-bold">Location</h6>
                    <h3>Chattogram, Bangladesh </h3>
                </nav>

                
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-base-300">
                <div className="footer px-10 py-4 max-w-7xl mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-sm opacity-60">
                    <p>© {new Date().getFullYear()} - All right reserved by PRODUCT-BOX</p>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;