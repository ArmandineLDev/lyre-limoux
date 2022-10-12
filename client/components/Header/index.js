import Image from "next/image";
import { useState } from "react";
import classes from "./Header.module.css";
import Menu from "./Menu";

// import logoImage from "/dessin.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState("");

  return (
    <header className={classes.header}>
      <div className={classes.logoContainer}>
        <Image src={"/dessin.svg"} layout="fill" priority="true" />
      </div>
      <div className={classes.titleNav}>
        <h1>LYRE DE LIMOUX</h1>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
