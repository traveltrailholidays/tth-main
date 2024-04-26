'use client';

interface SectionProps {
    children: React.ReactNode;
    classes?: string;
}

const Section: React.FC<SectionProps> = ({
    children,
    classes
}) => {
  return (
    <section
        className={`
            ${classes}
            bg-light_bg 
            dark:bg-dark_bg
            w-full
        `}
    >
        {children}
    </section>
  )
}

export default Section;