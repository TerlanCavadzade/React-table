import classes from "./style.module.css";

import { Players } from "../../../assets/data/result";
import TableRow from "./Row";

type props = {
  players: Players;
};

const Table = ({ players }: props) => {
  return (
    <div className={classes.tableContainer}>
      <div className={`${classes.grid} ${classes.tableHead}`}>
        <p>Rank</p>
        <p>Team</p>
        <p>Bib</p>
        <p>Name</p>
        <p>D</p>
        <p>E</p>
        <p>PEN</p>
        <p>Total</p>
      </div>
      <ul className={classes.rows}>
        {players?.map((player, index) => (
          <TableRow key={player.id} index={index} {...player} />
        ))}
      </ul>
    </div>
  );
};

export default Table;
