import React from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
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
    href: paths.aboutMenu,
  },
  {
    name: "Project",
    href: paths.projectMenu,
  },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const checkIsActive = (href) =>
    location.pathname === href || location.pathname === href + "/";

  return (
    <nav data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">
      <Navbar
        className="flex items-center justify-center w-full bg-transparent backdrop-blur-none backdrop-saturate-100"
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
      >
        <NavbarContent className="pl-2 pt-3">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="text-white backdrop-blur-sm backdrop-saturate-150 ml-0 pl-0 sm:hidden"
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
            const isActive = checkIsActive(item.href);
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
          {menuItems.map((item, index) => {
            const isActive = checkIsActive(item.href);
            return (
              <NavbarMenuItem key={`${item.name}-${index}`}>
                <Link
                  className={`w-full ${isActive ? "text-primary" : "text-dark"}`}
                  href={item.href}
                  size="lg"
                >
                  {item.name}
                </Link>
              </NavbarMenuItem>
            );
          })}
        </NavbarMenu>
      </Navbar>
    </nav>
  );
};
