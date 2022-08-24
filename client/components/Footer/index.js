import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div classeName={classes.footer}>
      <p>Copyright Lyre du Limouxin - 2021</p>

      <a href="./mentions-legales"> Mention Légales</a>
      <p className="text-xs"> powered by Armandine_LDev</p>
    </div>
  );
};
