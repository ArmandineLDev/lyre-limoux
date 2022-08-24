import classes from "./Presentation.module.css";

const Presentation = () => {
  return (
    <div>
      <article className={classes.article}>
        <h2>Plus de 120 ans de passion pour la musique !</h2>
        <p>
          Grâce à la ténacité de Pierre Chanaud qui réussit à inciter le conseil
          municipal des années 1850 à créer la première école de musique à
          Limoux, on retrouve trois formations dans les années 1890 battant le
          pavé : l&apos;Harmonie Municipale qui est l&apos;ancêtre de la Lyre,
          l&apos;Union Orphéonique et le Réveil.{" "}
        </p>
        <p>
          Aujourd&apos;hui, 80 musiciens de tous âges et de milieux sociaux
          différents, assument au sein de l’harmonie làapos;héritage d’une
          culture essentiellement musicale qui est l&apos;identité propre de la
          ville. Le brassage entre anciens et jeunes garantit à la fois le
          présent et devenir de la formation. Dirigée par Guy Robert, lauréate
          de nombreux concours dont un premier prix national en 2006 dans la
          catégorie division excellence 2ème section, elle donne une vingtaine
          de concerts par an. De grands solistes sont invités à l’occasion des
          concerts du Nouvel An suivis par un public record chaque année.
        </p>
        <p>
          A l&apos;occasion de son 120ème anniversaire en 2009, la Lyre,
          s&apos;appuyant sur cette notoriété nationale, organise un festival de
          musique de cuivres baptisé judicieusement “Limoux Cuivrée Spéciale” et
          regroupant dans un même projet des musiciens professionnels de haut
          niveau et les vignerons. 1O ans plus tard, le rendez-vous rebaptisé
          plus internationalement “Limoux Brass Festival” figure parmi les
          grands festivals européens de la spécialité.
        </p>
        <p>
          La Lyre de Limoux est aujourd&apos;hui le grand acteur culturel de la
          ville.
        </p>
      </article>

      <article className={classes.article}>
        <h2>A la baguette : GUY ROBERT</h2>
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
      <article className={classes.article}>
        <h2>Liste des Présidents de 1888 à aujourd&apos;hui</h2>
        <div>
          <table className={classes.presidentsTable}>
            <tbody>
              <tr>
                <td>M. CROS Adrien</td>
                <td>1888 - 1914</td>
              </tr>
              <tr>
                <td>M. PRADIER Antoine</td>
                <td>1919 - 1925</td>
              </tr>
              <tr>
                <td>M. LACROUX Noël</td>
                <td>1925 - 1938</td>
              </tr>
              <tr>
                <td>M. THERON Joseph</td>
                <td>1938 - 1945</td>
              </tr>
              <tr>
                <td>M. BAILLAUQUES René</td>
                <td>1945 - 1962</td>
              </tr>
              <tr>
                <td>M. SANTAMANS Félix</td>
                <td>1962 - 1967</td>
              </tr>
              <tr>
                <td>M. PELOUS Marius</td>
                <td>1967 - 1977</td>
              </tr>
              <tr>
                <td>M. SYLVESTRE Georges</td>
                <td>1977 - 1979</td>
              </tr>
              <tr>
                <td>M. BUSCAIL Paul</td>
                <td>1979 - 1982</td>
              </tr>
              <tr>
                <td>M. BAC Charles</td>
                <td>1982 - 1987</td>
              </tr>
              <tr>
                <td>M. CUXAC André</td>
                <td>1987 - 1996</td>
              </tr>
              <tr>
                <td>Melle BONNET Chantal</td>
                <td>1996 - 1998</td>
              </tr>
              <tr>
                <td>M. BAILLAUQUES André</td>
                <td>1996 - 2000</td>
              </tr>
              <tr>
                <td>M. ROUSSET Guy</td>
                <td>1996 - 2007</td>
              </tr>
              <tr>
                <td>M. FERNANDEZ David</td>
                <td>2005 - 2015</td>
              </tr>
              <tr>
                <td>M. SALASAR Jacques</td>
                <td>2015 - ...</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </div>
  );
};
export default Presentation;
