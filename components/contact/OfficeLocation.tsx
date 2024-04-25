'use client';

interface OfficeLocationProps {
    height: string;
    width: string;
}

const OfficeLocation: React.FC<OfficeLocationProps> = ({
    height,
    width
}) => {
  return (
    <address className={`max-w-[1500px] w-full h-[400px]`}>
        <iframe className={`w-full h-full rounded-md`} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d876.5848857789487!2d77.31124146963987!3d28.49943037707592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x233345ea4f02dbf5%3A0x55345f187277ecd2!2sTravel%20Trail%20Holidays!5e0!3m2!1sen!2sin!4v1713936312988!5m2!1sen!2sin"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </address>
  )
}

export default OfficeLocation;