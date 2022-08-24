import classes from "./NavItem.module.css";
import Link from "next/link";

const NavItem = (props) => {
  console.log("props", props);
  return (
    <Link href={props.item.link}>
      <a className={classes.item}>{props.item.name}</a>
    </Link>
  );
};
export default NavItem;
