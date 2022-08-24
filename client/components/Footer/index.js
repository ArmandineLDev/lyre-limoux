import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>Copyright Lyre du Limouxin - 2021</p>
      <a href="./mentions-legales"> Mention Légales</a>
      <p className={classes.powered}> powered by ArmandineLDev</p>
    </footer>
  );
};
export default Footer;
