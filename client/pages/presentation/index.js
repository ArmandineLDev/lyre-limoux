import Image from "next/image";

import classes from "./Orchestre.module.css";

import PupitreCard from "../../components/UI/PupitreCard";
import { pupitreItems } from "../../datas/pupitreItem";

const Orchestre = () => {
  return (
    <>
      <article className={classes.article}>
        <h2>A la baguette : GUY ROBERT</h2>
        <div className={classes.image}>
          <Image
            src="/guy_robert.png"
            width={150}
            height={100}
            layout="responsive"
          />
        </div>
        <p>
          On ne présente plus Guy Robert. Son professionnalisme et sa
          gentillesse font de lui une personne attachante et exceptionnelle.
        </p>
        <p>
          Artiste internationalement reconnu, Guy transmet son savoir avec
          bonheur. Ce chef d&apos;orchestre émérite a déjà une longue carrière
          musicale derrière lui. Musicien de variétés pendant de nombreuses
          années, il enregistra de nombreux disques avec les plus grandes
          vedettes : Michel Sardou, Mike Brant, Nino Ferrer, Antoine…
        </p>
        <p>
          Musicien au Capitole, premier prix de musique de chambre, professeur
          de jazz, il excelle dans tous les genres. Le cinéma est un univers
          qu&apos;il fréquente régulièrement. Il a joué la musique d&apos;une
          vingtaine de films, dont «&nbsp;Faubourg 36&nbsp;», film musical,
          deuxième long-métrage après «&nbsp;Les Choristes&nbsp;» de Christophe
          Barratier, César de la meilleure musique de film en 2009.
        </p>
      </article>
      <div className={classes.orchestra}>
        {pupitreItems.map((item, index) => {
          return <PupitreCard item={item} key={index} />;
        })}
      </div>
    </>
  );
};
export default Orchestre;
