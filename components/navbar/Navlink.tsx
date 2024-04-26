"use client";

import ActiveLink from "@/components/ui/feature/ActiveLink";

const Navlink = () => {
  return (
    <div className={`gap-5 items-center hidden lg:flex font-[500]`}>
      <ActiveLink href="/" exact className={``}>
        <span>Home</span>
      </ActiveLink>

      <ActiveLink href="/packages" exact className={``}>
        <span>Packages</span>
      </ActiveLink>

      <ActiveLink href="/about" exact className={``}>
        <span>About</span>
      </ActiveLink>

      <ActiveLink href="/contact" exact className={``}>
        <span>Contact</span>
      </ActiveLink>

      <ActiveLink href="/payments" exact className={``}>
        <span>Payments</span>
      </ActiveLink>
    </div>
  );
};

export default Navlink;