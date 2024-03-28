import classes from "./Row.module.css";
import Arrow from "../../../assets/icons/Arrow.svg";
import { Player } from "../../../assets/data/result";
import rowCalculator from "../../../utils/rowCalculator";

interface props extends Player {
  index: number;
}

const TableRow = ({
  index,
  team,
  bib,
  name,
  D,
  E,
  PEN,
  Total,
  Score,
}: props) => {
  return (
    <li
      style={
        {
          "--row-count": rowCalculator(D, E, PEN, Total),
        } as React.CSSProperties
      }
      className={`${classes.grid} ${classes.playerInfo}`}
    >
      <div className={classes.playerRank}>{index + 1}</div>
      <div className={classes.playerTeam}>
        <div className={classes.imgContainer}>
          <img src={team.flag} />
        </div>
        <p>{team.county}</p>
      </div>
      <div className={classes.playerBib}>{bib}</div>
      <div className={classes.playerName}>{name}</div>
      <div className={classes.mobileDropdown}>
        <label>
          <input type="checkbox" />
          <img src={Arrow} alt="arrow" />
        </label>
      </div>
      <div className={classes.mobileMenu}>
        <div data-text="D" className={classes.D}>
          {D.map((score, id) => (
            <p key={id}>{score}</p>
          ))}
        </div>
        <div data-text="E" className={classes.E}>
          {E.map((score, id) => (
            <p key={id}>{score}</p>
          ))}
        </div>
        <div data-text="PEN" className={classes.PEN}>
          {PEN.map((score, id) => (
            <p key={id}>{score}</p>
          ))}
          <p className={classes.playerTotalScoreText}>Score</p>
        </div>
        <div data-text="Total" className={classes.total}>
          {Total.map((score, id) => (
            <p key={id}>{score}</p>
          ))}
          <p className={classes.playerTotalScore}>{Score}</p>
        </div>
      </div>
    </li>
  );
};

export default TableRow;
