
import Link from "next/link";
import styles from '@/styles/Style.module.scss';
import Image from "next/image";
import logo from '@/assets/images/logo.png';
import { FacebookSolid, XRegular, InstagramRegular, LinkedinSolid } from "@/assets/svgs/socialSvg";


const Footer = () => {
  return (
    <section className={`w-full flex justify-center items-center shadow-light_all_sides dark:shadow-dark_all_sides py-10`}>

      <div className={`max_container_width flex justify-between items-center relative flex-col gap-5`}>
        
        <div className={`flex justify-between items-center w-full`}>

            <Link href="/" className='flex items-center select-none gap-3'>
              <Image src={logo} alt='logo' priority className={`w-10 md:w-12`}/>
              <span className={`${styles.text_primary} font-[500] text-2xl`}>travel trail holidays</span>
            </Link>

            <div className="Social_links flex gap-5 flex-wrap">
              <Link href="https://www.facebook.com/profile.php?id=61557426376541" target="_blank" rel="noopener noreferrer" className="bg-[#463B4A] rounded-full w-10 h-10 items-center justify-center flex hover:bg-[#FF5956]">
                <FacebookSolid height="1rem" width="1rem" fillColor="#fff" strokeWidth="0" strokeColor="currentColor"/>
              </Link>
              <Link href="https://www.linkedin.com/company/102316821/admin/feed/posts/?feedType=following" target="_blank" rel="noopener noreferrer" className="bg-[#463B4A] rounded-full w-10 h-10 items-center justify-center flex hover:bg-[#FF5956]">
                <LinkedinSolid height="1rem" width="1rem" fillColor="#fff" strokeWidth="0" strokeColor="currentColor"/>
              </Link>
              <Link href="https://twitter.com/TTrailHolidays" target="_blank" rel="noopener noreferrer" className="bg-[#463B4A] rounded-full w-10 h-10 items-center justify-center flex hover:bg-[#FF5956]">
                <XRegular height="1rem" width="1rem" fillColor="#fff" strokeWidth="0" strokeColor="currentColor"/>
              </Link>
              <Link href="https://www.instagram.com/traveltrailholidays/" target="_blank" rel="noopener noreferrer" className="bg-[#463B4A] rounded-full w-10 h-10 items-center justify-center flex hover:bg-[#FF5956]">
                <InstagramRegular height="1rem" width="1rem" fillColor="#fff" strokeWidth="0" strokeColor="currentColor"/>
              </Link>
            </div>

        </div>

        <div className="w-full h-[0.1px] bg-gray-600"></div>

        <div className={``}>

        </div>

      </div>

    </section>
  )
}

export default Footer