
import styles from '@/styles/Style.module.scss';
import { SearchSolid, LocationSolid, DurationSolid, CalenderRegular } from '@/assets/svgs/uiSvg';
import { BiSearch } from 'react-icons/bi';

const SearchBar = () => {
  return (
    <>
        <div 
            className={`bg-light_bg dark:bg-dark_bg border-[0.125rem] items-center border-[0.05] dark:border-[0.15rem] border-gray-300 dark:border-gray-600 w-[90vw] xl:w-[70vw] flex rounded-full max-w-[1100px]`}
        >
            
            
            <div className={`flex items-center w-full h-20 gap-2 p-3 rounded-full hover:cursor-pointer`}>
                <LocationSolid height="1.5rem" width="1.5rem" fillColor="#6b7280" strokeWidth="0" strokeColor="currentColor"/>
                <span className={` text-xl`}>Destination</span>
            </div>

            <div className={`w-[1px] h-10 bg-gray-300 dark:bg-gray-600 rounded-full mr-3`}></div>
            
            <div className={`flex items-center w-full h-20 gap-2 p-3 rounded-full hover:cursor-pointer`}>
                <DurationSolid height="1.5rem" width="1.5rem" fillColor="#6b7280" strokeWidth="0" strokeColor="currentColor"/>
                <span className={` text-xl`}>Duration</span>
            </div>
            
            <div className={`w-[1px] h-10 bg-gray-300 dark:bg-gray-600 rounded-full mr-3`}></div>
            
            <div className={`flex items-center w-full h-20 gap-2 p-3 rounded-full hover:cursor-pointer`}>
                <CalenderRegular height="1.5rem" width="1.5rem" fillColor="#6b7280" strokeWidth="0" strokeColor="currentColor"/>
                <span className={` text-xl`}>Select Month</span>
            </div> 
           

            <div
                className={`${styles.bg_primary} p-3 gap-2 rounded-full flex items-center justify-center mx-3 hover:cursor-pointer`}
            >
                <BiSearch size={20} className='text-white lg:hidden'/>
                <span className={`text-white font-[500] text-lg hidden lg:block`}>Search</span>
            </div>

        </div>
    </>
  )
}

export default SearchBar;