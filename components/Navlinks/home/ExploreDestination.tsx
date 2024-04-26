
import styles from '@/styles/Style.module.scss';
import Section from '@/components/ui/feature/Section';
import Container from '../../ui/feature/Container';

const ExploreDestination = () => {
  return (
    <Section
      classes={`w-full flex justify-center min-h-screen`}
    >

      <Container classes={`md:px-5 mt-24 w-[99%]`}>
        

        <div className={`w-full flex items-center justify-between`}>
            
          <div>
            <span className={`${styles.main_heading} ${styles.big_heading} dark:text-gray-400 font-bold`}>Explore Destinations</span>
          </div>

        </div>
        
      </Container>

    </Section>
  );
};

export default ExploreDestination;