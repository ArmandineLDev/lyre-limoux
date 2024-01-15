import Image from "next/legacy/image";
import HomeAgenda from "../components/HomeAgenda";

import classes from "./Home.module.css";
const Home = () => {
  return (
    <>
      <p className={classes.bienvenue}>Bienvenue chez nous !</p>
      <div className={classes.imageContainer}>
        <Image
          // src={"/Photo-lyre-2017.png"}
          src={"/lyre.png"}
          width={1200}
          height={450}
          layout="responsive"
          // priority="false"
          priority
        />
      </div>
      <section className={classes.section}>
        <article className={classes.article}>
          <div>
            <h2>Le mot du Président</h2>
            <p className={classes.intro}>
              Une harmonie en bonne santé est une Lyre qui grossit et se
              redessine pour envisager l’avenir.
            </p>
            <p className={classes.intro}>
              Au sein de la Lyre, la structure évolue régulièrement et les
              responsabilités aussi.
            </p>
            <p className={classes.intro}>
              La Lyre, forte de 70 musiciens, dirigée par l’incontournable chef
              Guy ROBERT pour la partie musicale, est actuellement présidée et
              ce depuis 2015 par Jacques SALASAR, lui-même entouré d’un Conseil
              d’Administration d’une vingtaine de membres actifs.
            </p>
            <p className={classes.intro}>
              L’association « Lyre Intercommunale du Limouxin » comprend aussi
              le Big Band de Limoux, la Chorale Les Polissons et peut être
              bientôt de nouvelles formations.
            </p>
            <p className={classes.intro}>
              Son concept est de pratiquer l’art musical, de poursuivre
              l’éducation musicale des jeunes musiciens sortant de l’école de
              musique du Limouxin, de promouvoir la musique à travers des
              concerts, animations et manifestations locales sur Limoux, les
              villages aux alentours et bien au-delà. La lyre et la chorale
              assurent également des manifestations et cérémonies officielles
              (défilés).
            </p>
            <p className={classes.intro}>
              Nous n’oublierons pas les bénévoles dévoués qui pour certains, ne
              taquinent jamais un instrument mais qui travaillent dans l’ombre
              toute l’année à la bonne marche de cette institution qu’est la
              Lyre et aux événements musicaux qu’elle a générés sur la ville
              depuis une quinzaine d’années, tels que le Limoux Brass Festival.
              Une petite armée de l’ombre qui ne rechigne jamais à digérer des
              tâches ingrates de la logistique pour que vive l’esprit de la
              musique en limouxin.
            </p>
            <p className={classes.intro}>
              La Lyre Intercommunale du Limouxin est une association loi 1901.
            </p>
            <p className={classes.intro}>
              Elle est également membre de la CMF (Confédération Musicale de
              France).
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
    </>
  );
};

export default Home;
