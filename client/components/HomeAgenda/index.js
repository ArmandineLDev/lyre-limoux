import classes from "./HomeAgenda.module.css";
import Link from "next/link";
import agendaDatas from "../../datas/agenda_datas.json";
import AgendaCard from "./AgendaCard";

const HomeAgenda = () => {
  return (
    <div className={classes.agenda}>
      <h2>Nos prochaines dates</h2>
      <div>
        {agendaDatas.map((AgendaData, index) => {
          return (
            <div key={index}>
              <AgendaCard item={AgendaData} />
            </div>
          );
        })}
      </div>
      <button className={classes.button}>
        <Link href="/agenda">Pour en savoir plus</Link>
      </button>
    </div>
  );
};
export default HomeAgenda;
