import "../styles/globals.css";
import Header from "../components/Header/page";
import Footer from "../components/Footer";

export const metadata = {
  title: "Lyre de Limoux",
  description:
    "La lyre intercommunale de Limoux est une harmonie composée de 80 musiciens, basée sur Limoux et la communauté de communes du Limouxin et du Saint Hilairois.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="fr">
      <body>
        <container>
          <Header />
          <main>{children}</main>

          <Footer />
        </container>
      </body>
    </html>
  );
};

export default RootLayout;
