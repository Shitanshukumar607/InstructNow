"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Companions", href: "/companions" },
  { label: "Profile", href: "/profile" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={46}
            height={44}
            priority
            className="h-auto"
          />
        </div>
      </Link>
      <div className="flex items-center gap-4 sm:gap-8">
        <nav className="flex items-center gap-4 sm:gap-8">
          {navItems.map(({ label, href }) => (
            <Link
              href={href}
              key={label}
              className={cn(pathname === href && "font-semibold")}
            >
              {label}
            </Link>
          ))}
        </nav>
        <p>Sign In</p>
      </div>
    </nav>
  );
};

export default Navbar;
