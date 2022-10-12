import Image from "next/image";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.imageContainer}>
        <Image
          src={props.item.photo}
          width={100}
          height={100}
          layout="responsive"
          priority="false"
        />
      </div>
      <h3>{props.item.title}</h3>
      <p>{props.item.text}</p>
    </div>
  );
};
export default Card;
