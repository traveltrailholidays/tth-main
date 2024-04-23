'use client';

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
    children
}) => {
  return (
    <section
        className={`max_container_width`}
    >
        {children}
    </section>
  );
}

export default Container;