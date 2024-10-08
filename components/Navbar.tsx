"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Icons } from "./icons"
import { Button } from "./ui/button"
import Image from "next/image"
import { useEffect } from "react"

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
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]



export function Navbar() {
    useEffect(() => {
        let lastScrollTop = 0;
        const navbar = document.getElementById("navbar");

        const handleScroll = () => {
            let scrollTop = window.scrollY || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                navbar?.classList.add("active");
            } else {
                navbar?.classList.remove("active");
            }
            lastScrollTop = scrollTop;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div id="navbar" className="fixed top-0 w-[100vw] bg-white transition-all ease-linear duration-500 z-50">
            <div className="flex justify-around items-center py-2 bg-transparent ">
                <div>
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={100}
                        height={20} />
                </div>
                <div className="flex">
                    {/* <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Icons.logo className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
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
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu> */}
                    <NavigationMenu>

                        <HoverCard>

                            <HoverCardTrigger>
                                <GhostButton>
                                    Product
                                </GhostButton>
                            </HoverCardTrigger>

                            <HoverCardContent>

                            </HoverCardContent>
                        </HoverCard>

                        <HoverCard>
                            <HoverCardTrigger>
                                <GhostButton>
                                    Platform
                                </GhostButton>
                            </HoverCardTrigger>
                            <HoverCardContent>

                            </HoverCardContent>
                        </HoverCard>

                        <HoverCard>
                            <HoverCardTrigger>
                                <GhostButton>
                                    Solutions
                                </GhostButton>
                            </HoverCardTrigger>
                            <HoverCardContent>

                            </HoverCardContent>
                        </HoverCard>

                        <HoverCard>
                            <HoverCardTrigger>
                                <GhostButton>
                                    MarketPlace
                                </GhostButton>
                            </HoverCardTrigger>
                            <HoverCardContent>

                            </HoverCardContent>
                        </HoverCard>

                        <HoverCard>
                            <HoverCardTrigger>
                                <GhostButton>
                                    Company
                                </GhostButton>
                            </HoverCardTrigger>
                            <HoverCardContent>

                            </HoverCardContent>
                        </HoverCard>

                        <HoverCard>
                            <HoverCardTrigger>
                                <GhostButton>
                                    Resources
                                </GhostButton>
                            </HoverCardTrigger>
                            <HoverCardContent>

                            </HoverCardContent>
                        </HoverCard>

                        <HoverCard>
                            <HoverCardTrigger>
                                <GhostButton>
                                    Pricing
                                </GhostButton>
                            </HoverCardTrigger>
                            <HoverCardContent>

                            </HoverCardContent>
                        </HoverCard>

                    </NavigationMenu>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm">Login</Button>
                    <Button variant="custom" size="sm">Book a demo</Button>
                </div>
            </div>
        </div>
    )
}

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
    )
})
ListItem.displayName = "ListItem"


const GhostButton = ({ children }: { children: string }) => {
    return <Button variant="ghost" size="custom" className="text-xs text-[#7A7A7A]">
        {children}
    </Button>
}
