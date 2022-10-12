import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      <main>{children}</main>

      <Footer />
    </main>
  );
};

export default Layout;
