import ContactForm from "@/components/contact/ContactForm";



export default function ContactPage() {
  return (
    <section className={`w-full flex justify-center`}>
        <div className={`max_container_width flex flex-col items-center py-24 px-5`}>
            <ContactForm/>
        </div>
    </section>
  )
}
