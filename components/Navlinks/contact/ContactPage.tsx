import ContactForm from "@/components/Navlinks/contact/ContactForm";
import OfficeLocation from "./OfficeLocation";



export default function ContactPage() {
  return (
    <section className={`w-full flex justify-center`}>
        <div className={`max_container_width flex flex-col items-center py-24 px-5 gap-24`}>
            <ContactForm/>
            <OfficeLocation height="450px" width="1500px"/>
        </div>
    </section>
  )
}
