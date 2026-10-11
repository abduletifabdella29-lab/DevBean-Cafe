import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

{/* Quick Links */}
const quickLinks = ["Menu", "About", "Contact", "Gallery", "Best Sellers"];

{/* Hours */}
const hours = [
    { day: "Mon-Thu:", time: "7am - 11pm" },
    { day: "Fri:", time: "7am - 1am" },
    { day: "Sat:", time: "8am - 1am" },
    { day: "Sun:", time: "8am - 10pm" },
];
    
{/* Contact */}
const contact = [
    { label: "Dev Bean" },
    { label: "City, Pincode" },
    { label: "(987) 654-3210", href: "tel:+99876543210" },
    { label: "support@devbean.cafe", href: "mailto:support@devbean.cafe" },
];

{/* Social Media */}
const socials = [
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
];

{/* Copyright + legal */}
const legal = ["Privacy Policy", "Terms & Conditions"];


export default function Footer() {
    return (
        <footer className="bg-[#111] text-[#D7C6B9] font-serif">
            <div className="mx-auto max-w-7xl px-6 py-8">

                {/* Columns: 1 col mobile, 2 cols tablet, 4 cols desktop */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

                    {/* Quick Links */}
                    <div className="lg:pl-12">
                        <h3 className="text-[24px] text-[#E3983E] font-[DM_Serif_Text] mb-4">Quick Links</h3>
                        <ul className="space-y-3 text-[16px] font-[DM_Serif_Text]">
                            {quickLinks.map((link) => (
                                <li key={link}>
                                    <a href="#" className="hover:text-[#E3983E] transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h3 className="text-[24px] text-[#E3983E] font-[DM_Serif_Text] mb-4">Hours</h3>
                        <ul className="space-y-3 text-[16px] font-[DM_Serif_Text] max-w-xs lg:max-w-50">
                            {hours.map(({ day, time }) => (
                                <li key={day} className="flex justify-between gap-4">
                                    <span>{day}</span>
                                    <span>{time}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-[24px] text-[#E3983E] font-[DM_Serif_Text] mb-4">Contact</h3>
                        <ul className="space-y-3 text-[16px] font-[DM_Serif_Text] wrap-break-word">
                            {contact.map(({ label, href }) => (
                                <li key={label}>
                                    {href ? (
                                        <a href={href} className="hover:text-[#E3983E] transition-colors">
                                            {label}
                                        </a>
                                    ) : (
                                        <span>{label}</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="xl:-ml-18">
                        <h3 className="text-[24px] text-[#E3983E] font-[DM_Serif_Text] mb-4">Newsletter</h3>
                        <p className="text-[16px] font-[DM_Serif_Text] mb-4">
                            Subscribe for exclusive offers
                        </p>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="flex w-full max-w-sm xl:max-w-75"
                        >
                            <input
                                type="email"
                                required
                                placeholder="your email"
                                className="min-w-0 flex-1 rounded-l-md bg-[#3A2622] px-4 py-2 text-[14px] text-[#D7C6B9] placeholder:text-[#7a6358] outline-none focus:ring-1 focus:ring-[#FFB547]"
                            />
                            <button
                                type="submit"
                                className="rounded-r-md bg-[#FFB547] px-5 py-2 text-[14px] font-semibold text-[#111] hover:bg-[#E3983E] transition-colors"
                            >
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                {/* Divider + bottom bar (outside the grid) */}
                <div className="mt-10 lg:ml-12 lg:mr-10">

                    {/* Divider line */}
                    <div className="border-t border-[#3E2723]" />

                    {/* Bottom bar */}
                    <div className="mt-8 flex flex-col items-center gap-6 text-center font-[DM_Serif_Text] sm:mt-10 sm:flex-row sm:justify-between sm:text-right">
                        {/* Social icons */}
                        <ul className="flex items-center gap-5 text-[20px] sm:pl-3">
                            {socials.map(({ icon: Icon, href, label }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        aria-label={label}
                                        className="hover:text-[#E3983E] transition-colors"
                                    >
                                        <Icon />
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Copyright + legal */}
                        <div className="sm:pr-4">
                            <p className="text-[16px] mb-2">© 2026 Dev Bean. all rights reserved.</p>
                            <ul className="flex flex-wrap justify-center gap-4 text-[14px] sm:justify-end">
                                {legal.map((item) => (
                                    <li key={item}>
                                        <a href="#" className="hover:text-[#E3983E] transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}