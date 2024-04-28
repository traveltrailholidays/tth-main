'use client';

import Image from "next/image";

interface PackagesCarsPorps {
    title: string;
    images: string[];
}

const PackagesCard: React.FC<PackagesCarsPorps> = ({
    title,
    images
}) => {

    const src = images.length > 0 ? images[0] : "";

  return (
    <div
        className={`max-w-[422px] h-[530px] w-full border-[1px] rounded-md`}
    >
        <Image src={src} alt={title} width={100} height={100} className={`w-full rounded-t-md`}/>
    </div>
  )
}

export default PackagesCard;