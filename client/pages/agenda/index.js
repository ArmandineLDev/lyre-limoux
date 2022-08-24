import Image from "next/image";
import classes from "./Agenda.module.css";
import Card from "../../components/Card";

const AGENDA_DATAS = [
  {
    title: "Concert des Fêtes de Septembre",
    date: "04/09/2022",
    text: "Comme chaque année, nous nous retrouverons pour fêter ensemble la rentrée",
    photo: "/concert.png",
  },
  {
    title: "Concert à Gignac",
    date: "17/09/2022",
    text: "Concert sur invitation de l'Harmonie de Gignac à 17h",
    photo: "/concert.png",
  },
  {
    title: "Défilé de l'armistice du 11 Novembre",
    date: "11/11/2022",
    text: "Défilé des les rue de Limoux à partir de 11h en l'honneur de la commémoration de l'armistice du 11 Novembre 1918",
    photo: "/fanfare_NB.png",
  },
  {
    title: "Grand Loto de la Lyre",
    date: "11/11/2022",
    text: "Nous nous retrouverons sous les halles à Limoux pour notre grand loto annuel.",
    photo: "/loto.png",
  },
  {
    title: "Concert de la Sainte Cécile",
    date: "19/11/2022",
    text: "Concert de la Lyre dans le cadre de la fête des Musiciens",
    photo: "/concert.png",
  },
];

const Agenda = () => {
  const datas = AGENDA_DATAS;
  return (
    <div>
      <div className={classes.imageContainer}>
        <Image
          src={"/marching-band.png"}
          width={125}
          height={100}
          layout="responsive"
          priority="true"
        />
      </div>
      <div className={classes.cards}>
        {datas.map((data, index) => {
          return <Card item={data} key={index}></Card>;
        })}
      </div>
    </div>
  );
};
export default Agenda;
