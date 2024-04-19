
import AboutHeroSectio from "@/components/about/AboutHeroSectio";
import AboutInfoSection from "@/components/about/AboutInfoSection";
import AboutSetUsApart from "@/components/about/AboutSetUsApart";

export default function About() {
  return (
    <section className={``}>
      <AboutHeroSectio/>
      <AboutInfoSection/>
      <AboutSetUsApart/>
    </section>
  )
}