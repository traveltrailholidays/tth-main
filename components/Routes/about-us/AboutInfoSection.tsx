'use client';

import Container from "@/app/components/libs/Container";
import Section from "@/app/components/libs/Section";

export default function AboutInfoSection() {
    return (
      <Section className={`w-full flex justify-center`}>
          <Container className={`mt-24 !w-[99%] px-5`}>
              <div className={`flex flex-col gap-5`}>
                  <span className={`text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl`}>Welcome To Travel Trail Holidays</span>
                  <p>
                      At Travel Trail Holidays, our mission is to design journeys that leave an indelible mark on travelers, unveiling the captivating essence of India&apos;s culture, heritage, and natural splendor. As a leading travel company specializing in bespoke India tour packages, we are committed to curating experiences that surpass expectations and forge enduring memories.
                  </p>
              </div>
              <div className={`flex gap-5 justify-around py-5 mt-5 flex-col lg:flex-row`}>
                  <div className={`rounded border-2 p-5 min-w-[230px] lg:w-1/2`}>
                      <span className={`text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl`}>Our Mission</span>
                      <p className={`py-3`}>
                          We&apos;re dedicated to inspiring travelers to explore India&apos;s enchanting allure through meticulously planned tours, expert guidance, and unparalleled hospitality. Our mission is to foster deeper connections between travelers and India&apos;s heritage, creating meaningful experiences that leave a lasting impact.
                      </p>
                  </div>
                  <div className={`rounded border-2 p-5 min-w-[230px] lg:w-1/2`}>
                      <span className={`text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl`}>Our Vision</span>
                      <p className={`py-3`}>
                          Capturing the essence of India&apos;s varied landscapes, profound history, and cultural richness, our aim is to become the foremost provider of personalized and immersive travel experiences in the country. We are dedicated to crafting journeys that not only showcase India&apos;s diversity but also ensure unparalleled service and utmost customer satisfaction. Our vision is to offer travelers a unique opportunity to delve deeply into the soul of India, creating memories that will linger long after their journey concludes. How do you plan to manifest this vision into reality?
                      </p>
                  </div>
              </div>
          </Container>
      </Section>
    )
  }
  