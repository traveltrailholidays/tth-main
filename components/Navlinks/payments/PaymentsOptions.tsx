'use client';

import PaymentsAccordion from '@/components/Navlinks/payments/PaymentsAccordion';
import styles from "@/styles/Style.module.scss";
import { DialerSolid } from '@/assets/svgs/uiSvg';

export default function PaymentsOptions() {
  return (
    <section className={`w-full flex justify-center`}>
        <div className={`max_container_width mt-24`}>
            <div className={`p-2 flex justify-between flex-col md:flex-row gap-10`}>
                <div className={`w-full`}>
                    <div>
                        <span className={`font-semibold text-lg`}>Select the desired payment option</span>
                    </div>
                    <div className='mt-5'>
                        <PaymentsAccordion/>
                    </div>
                </div>

                <div className={`rounded-md bg-light_secondBg dark:bg-dark_secondBg p-10 max-w-[450px] w-full h-[300px]`}>
                    <div>
                        <div className={`${styles.text_primary} font-semibold text-xl`}>
                            <span>Get Help</span>
                        </div>
                        <div className={`font-semibold text-3xl mt-3`}>
                            <span>Have Any Query ?</span>
                        </div>
                        <div className={`text-[15px] mt-5`}>
                            <div>
                                Need help with any payment related issue? Please feel free to contact us!
                            </div>
                        </div>
                        <div className={`text-[15px] mt-5`}>
                            <div className={`flex items-center gap-5`}>
                                <div className={`${styles.bg_primary} rounded-full w-16 h-16 flex justify-center items-center`}>
                                <DialerSolid height="1.7rem" width="1.7rem" fillColor="#ffffff" strokeWidth="0" strokeColor="currentColor"/>
                                </div>
                                <div>
                                    <div>
                                        <span className={`font-semibold text-base`}>Call Us</span>
                                    </div>
                                    <div>
                                        <span className={`font-semibold text-lg`}>+91 9625992025</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.text_primary} w-full flex justify-center py-20 px-2 text-center`}>
                <div>
                    Please kindly provide a screenshot confirming your successful payment. Your cooperation is greatly appreciated.
                </div>
            </div>
        </div>
    </section>
  )
}
