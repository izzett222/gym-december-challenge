import Image from "next/image";
import menuIcon from "/public/icons/menu.svg";
import logoWhite from "/public/icons/logo-white.svg";
import searchIcon from "/public/icons/search.svg";
import menuMobileIcon from "/public/icons/menu-mob.svg";
import MenuLink from "../ui/MenuLink";

export default function Header() {
  return (
    <header className="bg-primary px-6 sticky top-0 left-0 right-0 z-10">
      <div className="flex items-center justify-between w-full mx-auto max-w-limit flex-wrap sm:flex-nowrap">
        <div className="flex items-center">
          <div className="p-1.5 w-fit">
            <Image src={menuIcon} alt="menu" />
          </div>
          <div className="flex py-5 gap-2 items-center">
            <div>
              <Image src={logoWhite} height={42} width={80} alt="home" />
            </div>
            <span className="text-xs hidden xl:inline-block text-white">
              Technical <br />
              University <br />
              of Munich
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <ul className="xl:flex gap-6 mr-13.5 hidden">
            <li>
              <MenuLink href="/">news and events</MenuLink>
            </li>
            <li>
              <MenuLink href="/">studies</MenuLink>
            </li>
            <li>
              <MenuLink href="/">lifelong learning</MenuLink>
            </li>
            <li>
              <MenuLink href="/">research</MenuLink>
            </li>
            <li>
              <MenuLink href="/">innovation</MenuLink>
            </li>
            <li>
              <MenuLink href="/">community</MenuLink>
            </li>
            <li>
              <MenuLink href="/">about tum</MenuLink>
            </li>
          </ul>
          <div className="flex items-center">
            <div className="flex text-base font-medium uppercase text-white mr-2.5">
              <span className="opacity-50 hover:opacity-100 transition-opacity duration-300 hover:cursor-pointer">de</span>
              <span className="inline-block border-l-white border-l-2 pl-2 ml-2">
                en
              </span>
            </div>
            <div className="p-2.5 hover:cursor-pointer">
              <Image src={searchIcon} alt="search" />
            </div>
            <div className="xl:hidden p-2.5 hover:cursor-pointer">
              <Image src={menuMobileIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
