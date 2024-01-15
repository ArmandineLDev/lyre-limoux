import Image from "next/legacy/image";
import classes from "./Card.module.css";

const Card = ({ item }) => {
  console.log("item", item);
  return (
    <div className={classes.card}>
      <div className={classes.imageContainer}>
        <Image
          src={item.photo}
          width={100}
          height={100}
          layout="responsive"
          priority
        />
      </div>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </div>
  );
};
export default Card;
