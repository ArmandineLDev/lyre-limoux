import Image from "next/image";
import classes from "./Home.module.css";
const Home = () => {
  return (
    <div>
      <div className={classes.imageContainer}>
        <Image
          src={"/Photo-lyre-2017.png"}
          width={1200}
          height={450}
          layout="responsive"
          priority="false"
        />
      </div>
      <div>ceci est un nouveau texte</div>
    </div>
  );
};

export default Home;
