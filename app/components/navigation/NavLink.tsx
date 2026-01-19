'use client'

import { cn } from "@/app/utils/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";

interface NavLinkCompatProps {
  href: string;
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
  children?: React.ReactNode;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, href, ...props }, ref) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    // Next.js doesn't have a built-in "pending" state like React Router, so omit it or handle differently if needed

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className, isActive && activeClassName)}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };