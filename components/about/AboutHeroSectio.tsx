
import Image from 'next/image';
import paymentBgImage from '@/assets/images/payments.jpg';
import styles from "@/styles/Style.module.scss";

export default function AboutHeroSectio() {
  return (
    <section className={`mt-20`}>
        <div className={`larger_screen hidden md:block w-full h-[400px] relative`}>
            <Image src={paymentBgImage} alt="hero_bg" priority className="w-[100vw] h-full object-cover select-none" />
            <div className="absolute w-full h-full bg-black top-0 opacity-50 flex justify-center items-center"></div>
            <div className="absolute w-full h-full top-0 flex flex-col gap-10 justify-center items-center">
                <span className={`${styles.reem_kufi} text-white text-[7vw] xl:text-8xl font-semibold`}>About Us</span>
            </div>
        </div>
    </section>
  )
}
