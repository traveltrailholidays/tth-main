
import PaymentsAccordion from '@/components/payments/PaymentsAccordion';

export default function PaymentsOptions() {
  return (
    <section className={`w-full flex justify-center`}>
        <div className={`max_container_width mt-24`}>
            <div className={`flex justify-between p-2`}>
                <div className={`w-full`}>
                    <div>
                        <span className={`font-semibold text-lg`}>Select the desired payment option</span>
                    </div>
                    <div>
                        <PaymentsAccordion/>
                    </div>
                </div>

                <div className={``}>
                    hiii
                </div>
            </div>
        </div>
    </section>
  )
}
