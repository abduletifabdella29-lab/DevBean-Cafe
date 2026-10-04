import React from "react";

const quickLinks = ["Menu", "About", "Contact", "Gallery", "Best Sellers"];

const hours = [
    { day: "Mon-Thu:", time: "7am - 11pm" },
    { day: "Fri:", time: "7am - 1am" },
    { day: "Sat:", time: "8am - 1am" },
    { day: "Sun:", time: "8am - 10pm" },
];

const contact = [
    { label: "Dev Bean" },
    { label: "City, Pincode" },
    { label: "(987) 654-3210", href: "tel:+99876543210" },
    { label: "support@devbean.cafe", href: "support@devbean.cafe" },
];

export default function Footer() {
    return (
        <footer className="bg-[#111] text-[#D7C6B9] font-serif">
            <div className="mx-auto max-w-7xl px-6 py-8">
                <div className="grid grid-cols-4 gap-10">

                    {/* Quick Links */}
                    <div className="pl-12">
                        <h3 className="text-[24px]  text-[#E3983E] font-[DM_Serif_Text] mb-4">Quick Links</h3>
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
                        <ul className="space-y-3 text-[16px] font-[DM_Serif_Text] max-w-50">
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
                        <ul className="space-y-3 text-[16px] font-[DM_Serif_Text]">
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
                    <div className="-ml-18">
                        <h3 className="text-[24px] text-[#E3983E] font-[DM_Serif_Text] mb-4">Newsletter</h3>
                        <p className="text-[16px] font-[DM_Serif_Text] mb-4">
                            Subscribe for exclusive offers
                        </p>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="flex w-full max-w-75"
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

                    {/* Divider line */}
                    <div className="mx-12 w-[1146.03px] mt- border-t border-[#3E2723]" />

                </div>
            </div>
        </footer>
    );
}