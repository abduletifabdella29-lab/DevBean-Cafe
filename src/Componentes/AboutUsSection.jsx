import React from "react";
import aboutimg from "../assets/Images/about-img.png";

export default function AboutUsSection() {
    return (
        <section className="w-full bg-[#3E2723] px-5 py-10 font-['Literata',Georgia,serif] sm:px-8 md:px-12 md:py-12 lg:px-16">
            <h2 className="mb-8 text-center text-[32px] font-[DM_Serif_Text] text-[#D7C6B9] md:mb-7">
                About Us
            </h2>

            <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2 md:gap-8 lg:gap-12">
                {/* Image */}
                <img
                    src={aboutimg}
                    alt="Three hands clinking cups of latte and iced coffee"
                    className=" w-full  object-cover"
                />

                {/* Text */}
                <div className="text-[0.9rem] shrink-0 leading-[1.40] text-[#8B6B5E] sm:text-[0.95rem] lg:text-base ">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam lectus,
                        porttitor et nibh at, pellentesque scelerisque purus. Proin vel molestie sem.
                        Praesent fringilla ultrices diam, nec ultricies turpis dignissim id. Vivamus at
                        urna sodales, sodales diam eget, tempus felis. Ut facilisis ante odio, non semper
                        tellus vulputate et. Praesent maximus fringilla mi, quis viverra tellus blandit
                        eu.
                    </p>
                    <p className="mt-4">
                        Pellentesque maximus elementum dui vitae luctus. Maecenas commodo aliquet diam.
                        Etiam ac urna eleifend, tincidunt dui sed, pharetra nunc. Nunc fermentum leo non
                        nulla rhoncus condimentum. Sed mauris neque, lobortis hendrerit porta sed,
                        placerat non nisl. In tempor elit sem.</p>
                </div>
            </div>
        </section>
    );
}