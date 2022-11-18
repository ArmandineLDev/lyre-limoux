import classes from "./SubMenu.module.css";
import style from "./NavItem.module.css";
import Link from "next/link";
const SubMenu = ({ submenus, dropdown }) => {
  return (
    <ul className={`${classes.submenu} ${dropdown ? classes.show : ""}`}>
      {submenus.map((submenu, index) => (
        <li key={index} className={style.item}>
          <Link href={submenu.url}>
            <a>{submenu.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default SubMenu;
