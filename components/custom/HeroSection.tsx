import Image from "next/image";
import hero_bg from "@/assets/images/hero_bg.png";
import styles from "@/styles/Style.module.scss";
import SearchBar from '@/components/custom/SearchBar';
import { CalenderRegular, LocationSolid, DurationSolid } from '@/assets/svgs/uiSvg';

const HeroSection = () => {
  return (
    <main className="w-full">

      <div className="larger_screen hidden md:block w-full h-[600px] relative">
        <Image src={hero_bg} alt="hero_bg" priority className="w-[100vw] h-full object-cover select-none" />
        {/* <div className="absolute w-full h-full bg-black top-0 opacity-50 flex justify-center items-center"></div>
        <div className="absolute w-full h-full top-0 flex flex-col gap-10 justify-center items-center">
          <span className={`${styles.reem_kufi} text-white text-[7vw] xl:text-8xl font-semibold`}>Travel Beyond Boundaries</span>
          <span className={`${styles.reem_kufi} text-white text-4xl font-semibold`}>Where Every Mile is a New Beginning</span>
        </div> */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-10  flex flex-col items-center w-full">
        <div
            className={`flex justify-center items-center`}
          >
            <SearchBar/>
          </div>
        </div>
      </div>

      <div className="smaller_screen mt-28 sm:mt-32 md:hidden w-full flex flex-col px-3">
        <div className="w-full xs:text-center">
          <span className={`${styles.reem_kufi} font-bold text-2xl xs:text-[7vw]`}>Travel beyond boundaries !</span>
        </div>
        <div className={`mt-5 xs:mt-10 flex flex-col gap-3`}>
          <div className="flex flex-col">
            <span>Destination</span>
            <div className="w-full h-10 rounded bg-gray-200 hover:cursor-pointer items-center flex px-1">
              <LocationSolid height="1.5rem" width="1.5rem" fillColor="#6b7280" strokeWidth="0" strokeColor="currentColor"/>
            </div>
          </div>
          <div className="flex w-full gap-3">
            <div className="flex flex-col w-1/2">
              <span>Duration</span>
              <div className="w-full h-10 rounded bg-gray-200 hover:cursor-pointer items-center flex px-1">
                <DurationSolid height="1.5rem" width="1.5rem" fillColor="#6b7280" strokeWidth="0" strokeColor="currentColor"/>
              </div>
            </div>
            <div className="flex flex-col w-1/2">
              <span>Month</span>
              <div className="w-full h-10 rounded bg-gray-200 hover:cursor-pointer items-center flex px-1">
                <CalenderRegular height="1.5rem" width="1.5rem" fillColor="#6b7280" strokeWidth="0" strokeColor="currentColor"/>
              </div>
            </div>
          </div>
          <div className={`${styles.bg_primary} mt-3 flex justify-center items-center w-full h-10 rounded`}>
            <span className="text-white font-[500]">Search</span>
          </div>
        </div>
      </div>

    </main>
  )
}

export default HeroSection;
