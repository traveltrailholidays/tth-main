
import Link from "next/link";
import styles from '@/styles/Style.module.scss';
import Image from "next/image";
import logo from '@/assets/images/logo.png';
import { FacebookSolid, XRegular, InstagramRegular, LinkedinSolid } from "@/assets/svgs/socialSvg";
import { ArrowRightSolid, LocationSolid, MessageSolid, DialerSolid } from "@/assets/svgs/uiSvg";
import Navlink from "@/components/feature/ActiveLink";


const Footer = () => {

  const diwakarjha = process.env.DIWAKAR_JHA_LINK;

  return (
    <section
      className={`w-full flex justify-center items-center shadow-light_all_sides dark:shadow-dark_all_sides py-0`}
    >
      <div
        className={`max_container_width flex justify-between items-center relative flex-col`}
      >
        <div className={`flex justify-between items-center w-full pt-10 pb-5 flex-col gap-5 md:flex-row`}>
          <Link href="/" className="flex items-center select-none gap-3">
            <Image src={logo} alt="logo" priority className={`w-10 md:w-12`} />
            <span className={`${styles.text_primary} font-[500] text-2xl`}>
              travel trail holidays
            </span>
          </Link>

          <div className="Social_links flex gap-5 flex-wrap">
            <Link
              href="https://www.facebook.com/profile.php?id=61557426376541"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-600 rounded-full w-10 h-10 items-center justify-center flex hover:bg-[#FF5956]"
            >
              <FacebookSolid
                height="1rem"
                width="1rem"
                fillColor="#fff"
                strokeWidth="0"
                strokeColor="currentColor"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/102316821/admin/feed/posts/?feedType=following"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-600 rounded-full w-10 h-10 items-center justify-center flex hover:bg-[#FF5956]"
            >
              <LinkedinSolid
                height="1rem"
                width="1rem"
                fillColor="#fff"
                strokeWidth="0"
                strokeColor="currentColor"
              />
            </Link>
            <Link
              href="https://twitter.com/TTrailHolidays"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-600 rounded-full w-10 h-10 items-center justify-center flex hover:bg-[#FF5956]"
            >
              <XRegular
                height="1rem"
                width="1rem"
                fillColor="#fff"
                strokeWidth="0"
                strokeColor="currentColor"
              />
            </Link>
            <Link
              href="https://www.instagram.com/traveltrailholidays/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-600 rounded-full w-10 h-10 items-center justify-center flex hover:bg-[#FF5956]"
            >
              <InstagramRegular
                height="1rem"
                width="1rem"
                fillColor="#fff"
                strokeWidth="0"
                strokeColor="currentColor"
              />
            </Link>
          </div>
        </div>

        <div className="w-full h-[0.1px] bg-gray-200 dark:bg-gray-800"></div>

        <div className={`w-[95%] flex justify-between pt-10 pb-5 flex-wrap gap-10 `}>
          <div className={`max-w-[410px]`}>
            <div className={``}>
              <span className={`text-xl font-[500]`}>Quick Links</span>
            </div>
            <div className={`sm:p-3 flex flex-col gap-2 px-3 py-2`}>
                <div className="flex items-center gap-1">
                  <ArrowRightSolid height="0.7rem" width="0.7rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                  <Navlink href="/" exact  className={``}>
                    <span>Home</span>
                  </Navlink>
                </div>
                <div className="flex items-center gap-1">
                  <ArrowRightSolid height="0.7rem" width="0.7rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                  <Navlink href="/about" exact  className={``}>
                    <span>About</span>
                  </Navlink>
                </div>
                <div className="flex items-center gap-1">
                  <ArrowRightSolid height="0.7rem" width="0.7rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                  <Navlink href="/contact" exact  className={``}>
                    <span>Contact</span>
                  </Navlink>
                </div>
                <div className="flex items-center gap-1">
                  <ArrowRightSolid height="0.7rem" width="0.7rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                  <Navlink href="/payments" exact  className={``}>
                    <span>Payments</span>
                  </Navlink>
                </div>
            </div>
          </div>
          <div className={`max-w-[410px]`}>
            <div className={``}>
              <span className={`text-xl font-[500]`}>Top Destinations</span>
            </div>
            <div className={`sm:p-3 flex flex-col gap-2 px-3 py-2`}>
            <div className="flex items-center gap-1">
                  <ArrowRightSolid height="0.7rem" width="0.7rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                  <Navlink href="#" exact  className={``}>
                    <span>Rishikesh</span>
                  </Navlink>
                </div>
                <div className="flex items-center gap-1">
                  <ArrowRightSolid height="0.7rem" width="0.7rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                  <Navlink href="#" exact  className={``}>
                    <span>Haridwar</span>
                  </Navlink>
                </div>
                <div className="flex items-center gap-1">
                  <ArrowRightSolid height="0.7rem" width="0.7rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                  <Navlink href="#" exact  className={``}>
                    <span>Dehradun</span>
                  </Navlink>
                </div>
                <div className="flex items-center gap-1">
                  <ArrowRightSolid height="0.7rem" width="0.7rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                  <Navlink href="#" exact  className={``}>
                    <span>Mussoorie</span>
                  </Navlink>
                </div>
            </div>
          </div>
          <div className={`max-w-[410px]`}>
            <div className={``}>
              <span className={`text-xl font-[500]`}>Legal</span>
            </div>
            <div className={`sm:p-3 flex flex-col gap-2 px-3 py-2`}>
                <div className="flex items-center gap-1">
                  <ArrowRightSolid height="0.7rem" width="0.7rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                  <Navlink href="#" exact  className={``}>
                    <span>Privacy Policy</span>
                  </Navlink>
                </div>
                <div className="flex items-center gap-1">
                  <ArrowRightSolid height="0.7rem" width="0.7rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                  <Navlink href="#" exact  className={``}>
                    <span>Terms & Condition</span>
                  </Navlink>
                </div>
                <div className="flex items-center gap-1">
                  <ArrowRightSolid height="0.7rem" width="0.7rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                  <Navlink href="#" exact  className={``}>
                    <span>Refund & Cancellation Policy</span>
                  </Navlink>
                </div>
            </div>
          </div>
          <div className={`max-w-[410px]`}>
            <div className={``}>
              <span className={`text-xl font-[500]`}>GET IN TOUCH</span>
            </div>
            <div className={`sm:p-3 flex flex-col gap-2 px-3 py-2`}>
            <div className="flex items-center gap-2">
                  <div>
                    <DialerSolid height="1rem" width="1rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                  </div>
                  <Navlink href="tel:+919953276022" exact className={``}>
                    <span>+91 9953276022</span>
                  </Navlink>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <DialerSolid height="1rem" width="1rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                  </div>
                  <Navlink href="tel:+919625992025" exact className={``}>
                    <span>+91 9625992025</span>
                  </Navlink>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <MessageSolid height="1rem" width="1rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                  </div>
                  <Navlink href="mailto:support@traveltrailholidays.com" exact className={`flex w-full`}>
                    <div>support@traveltrailholidays.com</div>
                  </Navlink>
                </div>
                <div className="flex  gap-2">
                  <div className={`mt-[0.20rem]`}>
                    <LocationSolid height="1rem" width="1rem" fillColor="#cbd5e0" strokeWidth="0" strokeColor="currentColor"/>
                  </div>
                  <Navlink href={`#`} exact className={`flex w-full`}>
                    <div>Office No - 35, Gali No. 03, Block B, Molarband Extn, Badarpur, New Delhi - 110044</div>
                  </Navlink>
                </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[0.1px] bg-gray-200 dark:bg-gray-800"></div>

        <div className={`pt-5 w-full flex justify-between md:pb-5 mb-5 md:mb-0 flex-col text-center md:flex-row items-center gap-2`}>
          <span className={``}>Copyright © 2024 <Link href={`/`} className={`hover:underline`}>Travel Trail Holidays</Link>. All Rights Reserved.</span>
          <span className={``}>
            <span>Designed with <span className={`${styles.text_primary} text-lg select-none`}>&#x2665;</span> by <Link href={diwakarjha!} target="_blank" className={`${styles.text_primary} hover:underline`}>iamdkjha</Link>.</span>
          </span>
        </div>

      </div>
    </section>
  );
}

export default Footer;