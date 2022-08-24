import classes from "./NavItem.module.css";

const NavItem = (props) => {
  console.log("props", props);
  return <div className={classes.item}>{props.item}</div>;
};
export default NavItem;
