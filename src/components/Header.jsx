import React from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  NavbarBrand,
} from "@nextui-org/react";
import { useLocation } from "react-router-dom";
import { paths } from "../routes";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const menuItems = [
  {
    name: "Home",
    href: paths.portfolio,
  },
  {
    name: "About Me",
    href: paths.portfolio,
  },
  {
    name: "Project",
    href: paths.portfolio,
  },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  return (
    <nav data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">
      <Navbar
        className="flex items-center justify-center w-full bg-transparent backdrop-blur-none backdrop-saturate-100"
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="text-white backdrop-blur-sm backdrop-saturate-150 sm:hidden"
            icon={
              isMenuOpen ? (
                <AiOutlineClose size={36} />
              ) : (
                <AiOutlineMenu size={36} />
              )
            }
          />
        </NavbarContent>
        <NavbarContent
          className="hidden sm:flex gap-12 mb-0 justify-center w-full uppercase"
          justify="center"
        >
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.href;
            return (
              <NavbarItem key={`${item.name}-${index}`} isActive={isActive}>
                <Link
                  className={`w-full text-white text-xs duration-500 opacity-50 font-bold hover:!opacity-100 hover:!text-white ${isActive && "text-white opacity-100"}`}
                  href={item.href}
                  size="sm"
                >
                  {console.log("item", item)}
                  {item.name}
                </Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.name}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                className="w-full"
                href={item.href}
                size="lg"
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </nav>
  );
};
