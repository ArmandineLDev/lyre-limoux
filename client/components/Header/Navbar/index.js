import classes from "./NavBar.module.css";
import NavItem from "./NavItem";

const NAVBAR_DATAS = [
  { link: "Présentation" },
  { link: "Agenda" },
  { link: "Contact" },
  { link: "Accès musicien" },
];

const Navbar = () => {
  const navItems = NAVBAR_DATAS;
  return (
    <div className={classes.navbar}>
      {navItems.map((navItem, index) => {
        return <NavItem item={navItem.link} key={index} />;
      })}
    </div>
  );
};
export default Navbar;
