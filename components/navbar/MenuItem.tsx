"use client";

import Link from "next/link";

interface MenuItemProps {
  onClickFunctions: (() => void)[];
  icon: JSX.Element;
  label: string;
  href: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  onClickFunctions,
  icon,
  label,
  href,
}) => {
  return (
    <Link
      href={href}
      className="w-full px-4 py-3 transition flex items-center justify-between hover:cursor-pointer"
      onClick={() => {
        onClickFunctions.forEach((func) => func());
      }}
    >
      <div className="flex items-center gap-2">
        {icon}
        <span>{label}</span>
      </div>
    </Link>
  );
};

export default MenuItem;
