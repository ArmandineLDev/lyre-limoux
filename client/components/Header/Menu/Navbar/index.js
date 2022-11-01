import classes from "./NavBar.module.css";
import NavItem from "./NavItem";

import { menuItems } from "../../../../datas/menuItems.js";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      {menuItems.map((navItem, index) => {
        return <NavItem item={navItem} key={index} />;
      })}
    </div>
  );
};
export default Navbar;
