import Image from "next/image";
import { useState } from "react";
import classes from "./Header.module.css";
import Menu from "./Menu";

// import logoImage from "/dessin.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState("");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.logoTitle}>
          <div className={classes.logoContainer}>
            <Image src={"/dessin.svg"} layout="fill" priority="true" />
          </div>
          <div className={classes.title}>
            <h1>LYRE DE LIMOUX</h1>
          </div>
        </div>
        <Menu />
      </header>
    </>
  );
};

export default Header;
