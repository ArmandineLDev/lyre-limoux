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
          height={350}
          layout="responsive"
          priority="false"
        />
      </div>
      <section className={classes.section}>
        <article className={classes.article}>
          <div>
            <h2>Le mot du Président</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              molestie mi non diam accumsan, nec tristique augue luctus. Vivamus
              condimentum sapien ut orci laoreet, sit amet varius urna accumsan.
              Fusce mi magna, tincidunt nec maximus vitae, dignissim vitae elit.
              Aenean nec sapien ac justo vestibulum pellentesque id gravida
              turpis. Lorem.
            </p>
          </div>
          <div>
            <h2>Le cd de la Lyre est disponible</h2>
            <p>Nous avons enregistré il y a peu un magnifique double CD.</p>
            <p>Quelques exemplaires sont encore disponbiles.</p>
            <p>Pour tout renseignement vous pouvez nous contacter ici</p>
          </div>
        </article>
        <aside className={classes.aside}>
          <HomeAgenda />
        </aside>
      </section>
    </Fragment>
  );
};

export default Home;
