"use client";

import Logo from "@/components/navbar/Logo";
import Navlink from "@/components/navbar/Navlink";
import MenuBtn from "@/components/navbar/MenuBtn";
import Container from "@/components/ui/feature/Container";
import Section from "@/components/ui/feature/Section";

const Header = () => {
  return (
    <Section classes="fixed top-0 z-40">
      <div className={`py-4 border-b-[1px]`}>
        <Container classes="lg:relative">
          <div
            className={`
              flex flex-row items-center justify-between gap-3 lg:gap-0
            `}
          >
            <Logo />

            <div className={`flex items-center gap-10`}>
              <Navlink />
              <MenuBtn />
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default Header;