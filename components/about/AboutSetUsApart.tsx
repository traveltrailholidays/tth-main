import React from 'react'

export default function AboutSetUsApart() {
  return (
    <section className={`w-full flex justify-center bg-slate-50 dark:bg-[#101010] mt-10`}>
        <div className={`max_container_width px-5 py-10`}>
            <div>
                <span className={`text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl`}>What Sets Us Apart</span>
            </div>
            <div className={`flex gap-5 justify-around py-5 flex-wrap mt-5`}>
                <div className={`rounded shadow-light_all_sides dark:shadow-dark_all_sides p-3 min-w-[230px]`}>
                    <span className={`text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl`}>Tailored Experiences</span>
                    <p className={`py-3`}>
                        Understanding the diversity of travelers, we specialize in crafting personalized tour packages tailored to individual preferences, interests, and budgets. Our goal is to ensure a customized and unforgettable experience for each traveler exploring the enchanting allure of India.
                    </p>
                </div>
                <div className={`rounded shadow-light_all_sides dark:shadow-dark_all_sides p-3 min-w-[230px]`}>
                    <span className={`text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl`}>Expert Guidance</span>
                    <p className={`py-3`}>
                        Backed by seasoned travel experts, we delve deep into India's iconic destinations and hidden gems. From must-see landmarks to off-the-beaten-path wonders, every detail of your journey is meticulously curated. Trust us to craft an expertly tailored experience, ensuring your exploration of India is nothing short of extraordinary.
                    </p>
                </div>
                <div className={`rounded shadow-light_all_sides dark:shadow-dark_all_sides p-3 min-w-[230px]`}>
                    <span className={`text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl`}>Unparalleled Service</span>
                    <p className={`py-3`}>
                        At the heart of our service lies unwavering dedication to customer satisfaction. From your initial inquiry to the conclusion of your journey, our devoted team ensures personalized assistance and support, guaranteeing a seamless and memorable experience at every stage of your trip.
                    </p>
                </div>
                <div className={`rounded shadow-light_all_sides dark:shadow-dark_all_sides p-3 min-w-[230px]`}>
                    <span className={`text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl`}>Responsible Tourism</span>
                    <p className={`py-3`}>
                        Committed to sustainable tourism, we prioritize practices that minimize environmental impact and uplift local communities. Through responsible tourism initiatives, we strive to preserve natural resources and promote cultural integrity, ensuring a meaningful and enduring impact on the destinations we explore.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}
