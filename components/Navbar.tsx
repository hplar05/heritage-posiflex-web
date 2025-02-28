import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/images/hmopi-logo.png";
// import Text from "@/images/hmopi-text.gif";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
];

export const Navbar = () => {
  return (
    <header className="flex item-center justify-between z-20 shadow-sm shadow-gray-200 dark:shadow-none dark:bg-[#020817] bg-gradient-to-br from-purple-100 to-indigo-200 sticky top-0">
      <div className="space-x-2 flex items-center justify-center py-1 mb-2 gap-[5rem]  text-center ml-[8rem] max-lg:ml-[2rem]">
        <Link className="mt-3 flex justify-between gap-2" href="/">
          <Image src={Logo} alt="logo" width={50} height={50} />
          <h1 className="flex justify-center items-center text-[#563abb] font-semibold max-lg:hidden">
            Heritage Multi-Office Products Inc.
          </h1>
        </Link>
      </div>

      <div className="flex items-center justify-center space-x-8 mr-[8rem] max-lg:mr-[2rem]">
        <div className="text-xs hidden md:block">
          <ul className="flex items-center space-x-4 gap-2 font-semibold text-[0.9rem]">
            <Link
              className="hover:underline underline-offset-4 mx-auto"
              href="/"
            >
              HOME
            </Link>
            <Link
              className="hover:underline underline-offset-4 mx-auto"
              href="/about"
            >
              POSIFLEX
            </Link>
            <NavigationMenu className="justify-end mx-auto bg-transparent">
              <NavigationMenuList className="bg-transparent">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-semibold">
                    PRODUCTS
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link
              className="hover:underline underline-offset-4 mx-auto"
              href="/about"
            >
              ABOUT US
            </Link>
          </ul>
        </div>
        <div className="rounded-md max-md:hidden">
          <Link
            className="hover:underline underline-offset-4 font-semibold rounded-full bg-[#3d2c7c] hover:bg-[#4c359d] text-white px-4 py-3 justify-between flex items-center gap-2"
            href="/contact"
          >
            <Phone />
            CONTACT US
          </Link>
        </div>
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
