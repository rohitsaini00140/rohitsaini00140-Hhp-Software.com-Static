"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
  const usePathName = usePathname();

  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);
  const closeNavbar = () => {
    setNavbarOpen(false);
    setOpenIndex(-1); // Ensure submenu closes when navbar closes
  };

  const handleSubmenu = (index) =>
    setOpenIndex(openIndex === index ? -1 : index);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY >= 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".submenu") && !event.target.closest(".has-submenu")) {
        setOpenIndex(-1);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-[9999] w-full transition-all ${
        sticky ? "bg-white shadow-md dark:bg-gray-dark" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-0">
        <Link href="/" onClick={closeNavbar}>
          <Image
            src="/images/logo/HHPlogoNew.png"
            alt="logo"
            width={140}
            height={40}
            className="w-[6rem] dark:hidden"
          />
          <Image
            src="/images/logo/HHPlogoNew.png"
            alt="logo"
            width={140}
            height={40}
            className="hidden w-[6rem] dark:block"
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center  gap-4 lg:hidden">
          <ThemeToggler />
          <button onClick={navbarToggleHandler} className="relative z-50">
            <span
              className={`mb-1 block h-0.5 w-6 bg-black transition-transform dark:bg-white ${
                navbarOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`mb-1 block h-0.5 w-6 bg-black transition-opacity dark:bg-white ${
                navbarOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black transition-transform dark:bg-white ${
                navbarOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Navigation */}
        <nav
          className={`lg:static lg:flex lg:w-auto lg:items-center lg:bg-transparent lg:shadow-none ${
            navbarOpen
              ? "fixed inset-0 w-[60%] max-w-sm bg-white p-6 shadow-lg dark:bg-dark"
              : "hidden"
          }`}
        >
          <ul className="block lg:flex lg:space-x-12">
            {menuData.map((menuItem, index) => (
              <li key={index} className="relative has-submenu">
                {menuItem.path ? (
                  <Link
                    onClick={closeNavbar}
                    href={menuItem.path}
                    className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                      usePathName === menuItem.path
                        ? "text-[#fb6404] dark:text-white"
                        : "text-dark hover:text-[#fb6404] dark:text-white/70 dark:hover:text-white"
                    }`}
                  >
                    {menuItem.title}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => handleSubmenu(index)}
                      className="flex w-full items-center justify-between py-2 text-base text-dark dark:text-white/70 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                    >
                      {menuItem.title}
                      <span className="pl-3">
                        <svg width="25" height="24" viewBox="0 0 25 24">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </button>
                    <div
                      className={`submenu left-0 top-full rounded-sm bg-white transition-all duration-300 dark:bg-dark lg:absolute lg:top-[110%] lg:w-[250px] lg:p-4 lg:shadow-lg ${
                        openIndex === index ? "block" : "hidden"
                      }`}
                    >
                      {menuItem.submenu.map((submenuItem, idx) => (
                        <Link
                          onClick={closeNavbar}
                          href={submenuItem.path}
                          key={idx}
                          className="block rounded py-2.5 text-sm text-dark hover:text-[#fb6404] dark:text-white/70 dark:hover:text-white lg:px-3"
                        >
                          {submenuItem.title}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>

          <div className="ml-6 hidden lg:block">
            <ThemeToggler />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
