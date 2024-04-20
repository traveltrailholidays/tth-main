
import styles from '@/styles/Style.module.scss';

const ExploreDestination = () => {
  return (
    <section
      className={`w-full flex justify-center min-h-screen`}
    >

      <div className={`max_container_width px-5 mt-24`}>

        <div className={`w-full flex items-center justify-between`}>
            
          <div>
            <span className={`${styles.destination_Header} ${styles.big_heading} dark:text-gray-400 font-bold`}>Explore Destinations</span>
          </div>
          
          {/* <div>
            <span>Explore</span>
          </div> */}

        </div>
        
      </div>

    </section>
  );
};

export default ExploreDestination;