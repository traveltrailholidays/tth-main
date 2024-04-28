'use client';


import styles from '@/styles/Style.module.scss';
import Section from '@/components/ui/feature/Section';
import Container from '../../ui/feature/Container';
import PackagesCard from '@/components/packages/PackagesCard';

const ExploreDestination = () => {
  return (
    <Section
      classes={`w-full flex justify-center min-h-screen`}
    >

      <Container classes={`md:px-5 mt-24 w-[99%]`}>
        

        <div className={`w-full flex items-center justify-between`}>
            
          <div>
            <span className={`${styles.main_heading} ${styles.big_heading} dark:text-gray-400 font-bold`}>Explore Packages</span>
          </div>

        </div>

        <div className={`mt-12 flex flex-wrap gap-5 px-2 justify-around`}>
          <PackagesCard 
            title='Dehradun' 
            images={[
              'https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

            ]}
          />

          <PackagesCard 
            title='Dehradun' 
            images={[
              'https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

            ]}
          />

          <PackagesCard 
            title='Dehradun' 
            images={[
              'https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

            ]}
          />

          <PackagesCard 
            title='Dehradun' 
            images={[
              'https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

            ]}
          />

          <PackagesCard 
            title='Dehradun' 
            images={[
              'https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

            ]}
          />

          <PackagesCard 
            title='Dehradun' 
            images={[
              'https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

            ]}
          />
        </div>
        
      </Container>

    </Section>
  );
};

export default ExploreDestination;