import classes from "./NavBar.module.css";
import NavItem from "./NavItem";

import { menuItems } from "../../../../datas/menuItems.js";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      {menuItems.map((navItem, index) => {
        const depthLevel = 0;
        return <NavItem item={navItem} key={index} depthLevel={depthLevel} />;
      })}
    </div>
  );
};
export default Navbar;
