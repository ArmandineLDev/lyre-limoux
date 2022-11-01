import classes from "./NavItem.module.css";
import Link from "next/link";
import { Fragment, useState } from "react";

const NavItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const underMenuHandle = (event) => {
    event.preventDefault();
    console.log("truc");
  };

  return (
    <>
      <Link href={props.item.url}>
        <a className={classes.item}>{props.item.name}</a>
      </Link>
    </>
  );
};
export default NavItem;
