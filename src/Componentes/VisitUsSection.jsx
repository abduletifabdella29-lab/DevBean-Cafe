import React from "react";
import { FiMapPin } from "react-icons/fi";

function VisitUsSection() {
    return (
        <div className="bg-[#121212]">
            {/* visit us */}
            <div className="text-[#ffffff] font-[DM_Serif_Text] text-[32px] text-center pt-14 font-bold">
                Visit Us
            </div>

            <div className="bg-[#3E2723] mx-4 md:mx-20 mt-5 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-8 text-center font-[DM_Serif_Text]">
                    {/* Location */}
                    <div>
                        <h2 className="text-[#E3983E] text-2xl font-bold">Location</h2>
                        <div className="mt-1 font-[DM_Serif_Text] text-[#D7C6B9] text-xl leading-relaxed">
                            <p>Building, Street Name</p>
                            <p>Locality, City</p>
                            <p>State, Pincode</p>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h2 className="text-[#E3983E] text-2xl font-bold">Contact</h2>
                        <div className="mt-1 text-[#D7C6B9] text-xl leading-relaxed">
                            <p>
                                <a href="mailto:support@devbean.cafe" className="hover:underline">
                                    support@devbean.cafe
                                </a>
                            </p>
                            <p>
                                <a href="tel:+999876543210" className="hover:underline">
                                    (987) 654 3210
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex h-16 items-center justify-center mt-12 pb-25">
                <a
                    href="https://maps.google.com/?q=Building+Street+Name+Locality+City"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-[0.4em] rounded-full bg-[#FFB74D] px-4 py-2 text-[16px] text-[#121212] font-[Averia_Serif_Libre] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E3983E] hover:shadow-lg"
                >
                    View on Map
                    <FiMapPin className="text-black" size="1.5em" strokeWidth={2.5} />
                </a>
            </div>
        </div >
    );
}

export default VisitUsSection;
