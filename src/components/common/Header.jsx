import { useEffect, useRef, useState } from "react"
import LogoImg from "../../assets/common/logo.jpeg"
import { menulists } from "../../assets/data/data"
import { Badges, CustomeLink,CustomeNavLink } from "./CustomComponents"
import { IoSearchOutline, IoCartOutline, IoHeart } from "react-icons/io5"

export const Header = () => {
const [isOpen,setIsOpen] = useState(false);
const [isScrolled,setIsScrolled] = useState(false);
const menuRef = useRef(null); 

const toggleMenu = () => {
  setIsOpen(!isOpen)
}

// close menu if click outside menu button
const closeMenuOutSide = (event) => {
  if(menuRef.current && !menuRef.current.contains(event.target)) {
    setIsOpen(false);
  }
}

// handle scroll with animation
const handleScroll = () => {
  setIsScrolled(window.scrollY > 0)
}

useEffect(() =>{
  document.addEventListener("mousedown", closeMenuOutSide);
  window.addEventListener("scroll", handleScroll);

  return () => {
    document.removeEventListener("mousedown", closeMenuOutSide);
    window.removeEventListener("scroll", handleScroll);
  }
})

// we only want to show that black box in home page
const isHomePage = location.pathname === "/";

  return (
    <>
    <header className={isHomePage ? `header px-12 py-3 bg-white-100 relative z-20 ${
      isScrolled ? "scrolled" : ""
      }` 
      : `header px-12 py-3 relative z-20`
      }
      >
        {isHomePage && (
        <div 
        className={`${
          isScrolled ? "lg:bg-none" : "lg:bg-black"
        } lg:h-[88px] lg:absolute lg:top-0 lg:right-0 lg:w-1/3 lg:-z-10`}
        ></div>
        )} 
      <nav className="p-4 flex justify-between items-center relative">
        <div className="flex items-center gap-14">
         <div>
           <img src={LogoImg} alt="LogoImg" className="h-16"/>
         </div>
         <div className="hidden lg:flex items-center justify-between gap-8">
          {menulists.map((list) => (
            <li key={list.id} className="uppercase list-none">
              <CustomeNavLink href={list.path}>{list.link}</CustomeNavLink>
            </li>
          ))}
        </div>
        </div>
        <div className="flex items-center gap-8 icons">
          <div className="uppercase hidden lg:block relative z-20">
            <CustomeLink className={`${
              isScrolled || isHomePage ? "text-white" : "text-primary"
              }`}
              >Login
               </CustomeLink>
            <span className={`${
              isScrolled || isHomePage ? "text-white" : "text-primary"
              }`}
              >
                /
            </span>
            <CustomeLink className={`${
              isScrolled || isHomePage ? "text-white" : "text-primary"
              }`}
              > Register
              </CustomeLink>
          </div>
          <div className={`icon flex items-center justify-center gap-6 ${
            isScrolled || isHomePage ? "text-white" : "text primary"
          }`}
          >
            <IoSearchOutline size={23} />
            
            <div className=" relative z-20">
            <IoCartOutline size={23} />

            <div className="absolute -top-3.5 -right-1.5 ">
              <Badges color="bg-primary-green">0</Badges>
            </div>
            </div>
            <div className=" relative z-20">
            <IoHeart size={23} />

            <div className="absolute -top-3.5 -right-1.5 ">
              <Badges color="bg-primary-green">0</Badges>
            </div>
            </div>
          </div>
        </div>
        </nav>
    </header>
    </>
  )
}

export default Header