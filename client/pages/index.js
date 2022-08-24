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
      <div className={classes.tips}>
        {/* <div className={classes.tipContainers}>
          <Image src={"/histoire.png"} width={200} height={150} />
        </div> */}
        <p>Bonjour à tous !</p>
      </div>
    </div>
  );
};

export default Home;
