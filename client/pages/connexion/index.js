import classes from "./Connexion.module.css";
const Connexion = () => {
  return (
    <div>
      <h2>Connexion</h2>
      <form className={classes.form}>
        <input type="email" className={classes.formInput} placeholder="email" />
        <input
          type="password"
          className={classes.formInput}
          placeholder="mot de passe"
        />
        <button className={classes.formButton}>Valider</button>
      </form>
    </div>
  );
};
export default Connexion;
