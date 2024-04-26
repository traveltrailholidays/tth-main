
import AboutHeroSectio from "@/components/Navlinks/about/AboutHeroSectio";
import AboutInfoSection from "@/components/Navlinks/about/AboutInfoSection";
import AboutSetUsApart from "@/components/Navlinks/about/AboutSetUsApart";

export default function About() {
  return (
    <section className={``}>
      <AboutHeroSectio/>
      <AboutInfoSection/>
      <AboutSetUsApart/>
    </section>
  )
}