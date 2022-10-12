import classes from "./AgendaDateCard.module.css";

const AgendaDateCard = (props) => {
  const theDate = new Date(props.date);
  const day = new Intl.DateTimeFormat("fr-FR", { day: "2-digit" }).format(
    theDate
  );
  const month = new Intl.DateTimeFormat("fr-FR", { month: "long" }).format(
    theDate
  );
  const year = theDate.getFullYear();
  console.log("month", month);
  return (
    <div className={classes.date}>
      <div className={classes.date_day}>{day}</div>{" "}
      <div className={classes.date_month}>{month.toUpperCase()}</div>
      <div className={classes.date_year}>{year}</div>
    </div>
  );
};

export default AgendaDateCard;
