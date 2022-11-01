import classes from "./SubMenu.module.css";
import style from "./NavItem.module.css";
const SubMenu = ({ submenus, dropdown }) => {
  return (
    <ul className={`${classes.submenu} ${dropdown ? classes.show : ""}`}>
      {submenus.map((submenu, index) => (
        <li key={index} className={style.item}>
          <a href={submenu.url}>{submenu.name}</a>
        </li>
      ))}
    </ul>
  );
};
export default SubMenu;
