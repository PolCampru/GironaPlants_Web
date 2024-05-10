import { useEffect, useState } from "react";
import { sectionData } from "../../data/navBar";
import Button from "../Button/Button";

import { Mail, Phone, ShoppingCart } from "tabler-icons-react";

const NavBar = () => {
  const handleMailClick = () => {
    window.location.href = "mailto:gironaplants@gironaplants.com";
  };

  const handleMobileClick = () => {
    window.location.href = "tel:+34639811560";
  };

  const [isScrolled, setisScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setisScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="w-full fixed top-0 left-0 h-auto mx-auto rounded-b-xl bg-graycartopacity flex flex-col justify-start items-center transition-all duration-300 hover:bg-white">
      <div className="w-full flex justify-between items-center bg-gpgreen text-white">
        <div className="bg-transparent flex items-start">
          <Button leftIcon={<Mail size={18} />} onClick={handleMailClick}>
            gironaplants@gironaplants.com
          </Button>
          <Button leftIcon={<Phone size={18} />} onClick={handleMobileClick}>
            +34 639 811 560
          </Button>
        </div>
        <div className="bg-transparent mr-10 font-interRegular flex items-center">
          <Button leftIcon={<ShoppingCart size={18} />}></Button>
          <p className="bg-transparent">CAT</p>
        </div>
      </div>
      <div
        className={`w-full ${
          isScrolled ? "h-12" : "h-24"
        } flex justify-between items-center bg-transparent px-8 transition-height duration-300`}
      >
        <img
          src="./assets/images/Logo.png"
          alt="./assets/images/Logo.png"
          className={`h-[90%] bg-transparent cursor-pointer`}
          onClick={() => {
            window.location.href = "/";
          }}
        />
        <div className="flex bg-transparent h-full">
          {sectionData.map((section, index) => (
            <Button
              key={index}
              isLink={true}
              style={{ padding: "0 20px" }}
              to={section.to}
            >
              {section.text}
            </Button>
          ))}
        </div>
        <div className="bg-transparent">
          <Button style={isScrolled ? { padding: "5px 20px" } : {}}>
            Veure catàlegs
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
