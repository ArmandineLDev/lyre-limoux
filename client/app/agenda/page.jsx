import Image from "next/legacy/image";
import classes from "./Agenda.module.css";
import Card from "../../components/UI/Card";

import agendaDatas from "../../datas/agenda_datas.json";

const Agenda = () => {
  return (
    <div>
      <div className={classes.imageContainer}>
        <Image
          src={"/marching-band.png"}
          width={125}
          height={100}
          layout="responsive"
          priority="false"
        />
      </div>
      <div className={classes.cards}>
        {agendaDatas.map((AgendaData, index) => {
          return <Card item={AgendaData} key={index}></Card>;
        })}
      </div>
    </div>
  );
};
export default Agenda;
