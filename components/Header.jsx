import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { fetchDataFromApi } from "@/utils/api";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [Show, setShow] = useState("translate-y-0");
  const [lastScrollY, SetLastScrollY] = useState(0);
  const [categories, setCategories] = useState(null);

  // Hide and unhide navbar effect // start from Here//
  const controlNavbar = () => {
    if (window.scrollY > 500) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    SetLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  });
  // Hide and unhide navbar effect // End  Here//

  // fetch data for categories

  useEffect(() => {
    fetchcategories();
  }, []);

  const fetchcategories = async () => {
    const { data } = await fetchDataFromApi(`/api/categories?populate=*`);
    setCategories(data);
  };

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${Show}`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center">
        <Link href="/">
          <img src="logo.svg" alt="logo" className="w-[40px] md:w-[60px]" />
        </Link>
        <Menu
          showCatMenu={showCatMenu}
          setShowCatMenu={setShowCatMenu}
          categories={categories}
        />
        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
            categories={categories}
          />
        )}

        {/* icon start */}
        <div className="flex items-center gap-2 text-black">
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <IoMdHeartEmpty className="text-[19px] md:text-[25px] " />
            <div className="h-[14px] md:h-[18px] min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
              51
            </div>
          </div>
          {/* icon end */}
          <Link href="/cart">
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
              <BsCart className="text-[19px] md:text-[25px] " />
              <div className="h-[14px] md:h-[18px] min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                51
              </div>
            </div>
          </Link>
          {/* icon end */}
          {/* mobile menu */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex  md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2`">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[20px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
