import classes from "./PupitreCard.module.css";
import Image from "next/legacy/image";

const PupitreCard = ({ item }) => {
  return (
    <>
      <div className={classes.director}></div>
      <div className={classes.pupitreCard}>
        <h3 className={classes.title}>{item.pupitre}</h3>
        <div className={classes.image}>
          <Image
            src={item.photo}
            width={150}
            height={100}
            alt={`pupitre de ${item.pupitre}`}
            layout="responsive"
            priority="false"
          />
        </div>
        {/* <button className={classes.dropdownButton}>V</button> */}
        <div className={classes.musicianBox}>
          {item.musicians.map((musician, index) => {
            return (
              <p className={classes.musician} key={index}>
                {musician.name}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default PupitreCard;
