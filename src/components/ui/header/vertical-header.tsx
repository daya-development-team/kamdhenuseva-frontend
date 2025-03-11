'use client';

import { Link } from '@/i18n/routing';
import { useAuthStore } from '@/stores/authStore';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import ShortFooter from '../footer/short-footer';

interface NavLink {
  href: string;
  label: string;
}

interface VerticalSidebarProps {
  heading: string;
  headingLink: string;
  links: NavLink[];
}

export default function VerticalSidebar({
  heading,
  headingLink,
  links,
}: VerticalSidebarProps) {
  const { isAuthenticatedUser, user, logoutUser } = useAuthStore();

  const handleLogout = async () => {
    await logoutUser();
  };

  return (
    <Sidebar className='fixed top-0 left-0'>
      <SidebarHeader className="p-6">
        <h2 className="text-foreground text-2xl font-bold">
          <Link href={headingLink}>{heading}</Link>
        </h2>
      </SidebarHeader>
      <SidebarContent className="p-6">
        <nav className="mt-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground hover:text-primary-foreground text-lg"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex flex-col">
          {isAuthenticatedUser && user ? (
            <Button
              variant={'outline'}
              onClick={handleLogout}
              className="hover:text-primary-foreground cursor-pointer text-lg"
            >
              Logout
            </Button>
          ) : null}
        </div>
        <ShortFooter />
      </SidebarFooter>
    </Sidebar>
  );
}
