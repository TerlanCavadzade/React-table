import classes from "./style.module.css";

import TableRow from "./Row";
import { Team } from "../../../assets/data/live";

type props = {
  teams: Team[];
};

const Table = ({ teams }: props) => {
  return (
    <div className={classes.tableContainer}>
      <div className={`${classes.grid} ${classes.tableHead}`}>
        <p></p>
        <p>APP</p>
        <p>AA</p>
        <p>TEAM</p>
      </div>
      <ul className={classes.rows}>
        {teams?.map((team) => <TableRow key={team.id} {...team} />)}
      </ul>
    </div>
  );
};

export default Table;
