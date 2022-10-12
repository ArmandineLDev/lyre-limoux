import classes from "./AgendaCard.module.css";
import AgendaDateCard from "./AgendaDateCard";

const AgendaCard = (props) => {
  return (
    <div className={classes.card}>
      <AgendaDateCard date={props.item.thedate} />
      <p className={classes.title}>{props.item.title}</p>
    </div>
  );
};

export default AgendaCard;
