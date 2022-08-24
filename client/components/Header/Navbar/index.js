import classes from "./NavBar.module.css";
import NavItem from "./NavItem";

const NAVBAR_DATAS = [
  { name: "Présentation", link: "/presentation" },
  { name: "Agenda", link: "/agenda" },
  { name: "Contact", link: "/contact" },
  { name: "Boutique", link: "/boutique" },
  { name: "Accès musicien", link: "/connexion" },
];

const Navbar = () => {
  const navItems = NAVBAR_DATAS;
  return (
    <div className={classes.navbar}>
      {navItems.map((navItem, index) => {
        return <NavItem item={navItem} key={index} />;
      })}
    </div>
  );
};
export default Navbar;
