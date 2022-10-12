import Image from "next/image";
import { Fragment } from "react";
import HomeAgenda from "../components/HomeAgenda";

import classes from "./Home.module.css";
const Home = () => {
  return (
    <Fragment>
      <p className={classes.bienvenue}>Bienvenue chez nous !</p>
      <div className={classes.imageContainer}>
        <Image
          // src={"/Photo-lyre-2017.png"}
          src={"/lyre.png"}
          width={1200}
          height={450}
          layout="responsive"
          priority="false"
        />
      </div>
      <section className={classes.section}>
        <article className={classes.article}>
          <h2>Le mot du Président</h2>
        </article>
        <aside className={classes.aside}>
          <HomeAgenda />
        </aside>
      </section>
    </Fragment>
  );
};

export default Home;
