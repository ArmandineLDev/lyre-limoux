import Image from "next/image";
import { useState } from "react";
import classes from "./Header.module.css";
import Navbar from "./Navbar";
import Mobile from "./Navbar/Mobile";
import Web from "./Navbar/Web";
// import logoImage from "/dessin.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState("false");

  return (
    <header className={classes.header}>
      <div className={classes.logoTitle}>
        <div className={classes.logoContainer}>
          <Image src={"/dessin.svg"} layout="fill" priority="true" />
        </div>
        <div className={classes.title}>
          <h1>LYRE DE LIMOUX</h1>
        </div>
      </div>
      <div className={classes.menuButton} onClick={() => setIsOpen(!isOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </div>

      {console.log("isopen", { isOpen })}
      {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
      <div className={classes.webMenu}>
        <Web />
      </div>
    </header>
  );
};

export default Header;
