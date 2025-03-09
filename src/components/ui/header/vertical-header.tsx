'use client';

import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/utils/mode-toggle';

interface NavLink {
  href: string;
  label: string;
}

interface VerticalSidebarProps {
  heading: string;
  headingLink: string;
  links: NavLink[];
  onLogout: () => void;
}

const sidebarVariants = {
  hidden: { x: -250, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

export default function VerticalSidebar({
  heading,
  headingLink,
  links,
  onLogout,
}: VerticalSidebarProps) {
  return (
    <motion.aside
      initial="hidden"
      animate="visible"
      variants={sidebarVariants}
      className="bg-background fixed top-0 left-0 z-10 flex h-full w-64 flex-col p-6 shadow-lg"
    >
      <div className="mb-8">
        <h2 className="text-foreground text-2xl font-bold">
          <Link href={headingLink}>{heading}</Link>
        </h2>
      </div>
      <nav className="flex flex-col gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-foreground hover:text-accent text-lg"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="mt-auto pt-8">
        <ModeToggle />
        <Button variant="outline" onClick={onLogout} className="mt-4 w-full">
          Logout
        </Button>
      </div>
    </motion.aside>
  );
}
