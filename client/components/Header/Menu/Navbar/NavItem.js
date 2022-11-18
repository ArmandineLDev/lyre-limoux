import classes from "./NavItem.module.css";
import SubMenu from "./SubMenu";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const NavItem = ({ item, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  return (
    <>
      <Link href={item.url}>
        {item.submenu ? (
          <div className={classes.item} ref={ref}>
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={dropdown ? true : false}
              onClick={() => setDropdown((prev) => !prev)}
            >
              {item.name}{" "}
              {depthLevel > 0 ? (
                <span>&raquo;</span>
              ) : (
                <span className={classes.arrow} />
              )}
            </button>
            <SubMenu submenus={item.submenu} dropdown={dropdown} />
          </div>
        ) : (
          <a className={classes.item}>{item.name}</a>
        )}
      </Link>
    </>
  );
};
export default NavItem;
