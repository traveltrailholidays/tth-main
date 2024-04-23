'use client';

import styles from "@/styles/Style.module.scss";
import { MessageSolid } from "@/assets/svgs/uiSvg";

export default function ContactForm() {
  return (
    <section className={`max-w-[1500px] w-full flex flex-col md:flex-row md:items-center gap-20 md:gap-0`}>
        <div className={`bg-light_secondBg dark:bg-dark_secondBg md:w-2/3 p-7 pr-10 rounded-md md:rounded-none md:rounded-l-md `}>
            <div className={`flex items-center justify-between`}>
                <span className={`${styles.box_heading} font-[500]`}>Send us a message</span>
                <MessageSolid height="1.3rem" width="1.3rem" fillColor="#ffffff" strokeWidth="0" strokeColor="currentColor"/>
            </div>
            <div className={`mt-10 flex flex-col md:gap-10 gap-5`}>
                <div className={`flex flex-col md:flex-row gap-5 md:gap-10 justify-between`}>
                    <div className={`w-full flex flex-col gap-1`}>
                        <div className={`ml-[2px]`}>
                            <span>Your Name</span>
                        </div>
                        <input type="text" className={`w-full rounded-md border-[0.15rem] border-gray-300 dark:border-gray-600 p-2`} />
                    </div>
                    <div className={`w-full flex flex-col gap-1`}>
                        <div className={`ml-[2px]`}>
                            <span>Email Address</span>
                        </div>
                        <input type="text" className={`w-full rounded-md border-[0.15rem] border-gray-300 dark:border-gray-600 p-2`} />
                    </div>
                </div>
                <div className={`flex flex-col md:flex-row md:gap-10 gap-5 justify-between`}>
                    <div className={`w-full flex flex-col gap-1`}>
                        <div className={`ml-[2px]`}>
                            <span>Phone Number</span>
                        </div>
                        <input type="text" className={`w-full rounded-md border-[0.15rem] border-gray-300 dark:border-gray-600 p-2`} />
                    </div>
                    <div className={`w-full flex flex-col gap-1`}>
                        <div className={`ml-[2px]`}>
                            <span>Subject</span>
                        </div>
                        <input type="text" className={`w-full rounded-md border-[0.15rem] border-gray-300 dark:border-gray-600 p-2`} />
                    </div>
                </div>
                <div>
                    <div className={`w-full flex flex-col gap-1`}>
                        <div className={`ml-[2px]`}>
                            <span>Message</span>
                        </div>
                        <textarea rows={5} className={`w-full rounded-md border-[0.15rem] border-gray-300 dark:border-gray-600 p-2 resize-none`} />
                    </div>
                </div>
            </div>
            <div className={`mt-10 flex w-full flex-row-reverse`}>
                <button>Submit</button>
            </div>
        </div>
        <div className={`${styles.bg_primary} text-white md:w-1/3 p-7 rounded-md md:rounded-none md:rounded-r-md h-full flex flex-col justify-between w-full`}>
            <div>
                <span className={`${styles.box_heading} font-[500]`}>Contact Information</span>
            </div>
            <div className={`flex w-full justify-center`}>
                <div>
                    <span>support@traveltrailholidays.com</span>
                </div>
            </div>
            <div>
                hii
            </div>
        </div>
    </section>
  )
}
