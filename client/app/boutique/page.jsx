import Link from "next/link";
import classes from "./Shop.module.css";

const Shop = () => {
  return (
    <div>
      <h2>Page en construction</h2>
      <h3 className={classes.pp}>Merci de votre compréhension</h3>
      <h2>Le CD de la Lyre</h2>
      <p>Vous pouvez acheter le CD de la lyre au prix de 15€.</p>
      <p className={classes.p}>
        Pour tout renseignement, merci de prendre{" "}
        <Link href="/contact">contact</Link> avec le secrétariat de l'orchestre.
      </p>
    </div>
  );
};
export default Shop;
