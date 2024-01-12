import Footer from "../Footer";
import Header from "../Header/page";

import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <container className={classes.main}>
      <Header />
      <main>{children}</main>

      <Footer />
    </container>
  );
};

export default Layout;
