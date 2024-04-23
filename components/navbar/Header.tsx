'use client'

import Logo from '@/components/navbar/Logo';
import Navlink from '@/components/navbar/Navlink';
import MenuBtn from '@/components/navbar/MenuBtn';


const Header = () => {
  return (
    <section 
      className='bg-light_bg dark:bg-dark_bg fixed top-0 z-40 w-full flex justify-center items-center shadow-light_all_sides dark:shadow-dark_all_sides h-20'
    >
      <div 
        className='max_container_width flex justify-between items-center relative'
      >
            
        <Logo/>

        <div
          className={`flex items-center gap-10`}
        >
          <Navlink/>
          <MenuBtn/>
        </div>  
            
      </div>
    </section>
  )
}

export default Header;