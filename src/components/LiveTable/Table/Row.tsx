import classes from "./Row.module.css";
import Arrow from "../../../assets/icons/Arrow.svg";
import { Team } from "../../../assets/data/live";

const TableRow = ({
  country,
  category,
  bib,
  name,
  D,
  E,
  P,
  status,
  app,
  AA,
  Team,
  inquiry,
}: Team) => {
  return (
    <li className={`${classes.grid} ${classes.playerInfo}`}>
      <div className={classes.infoContainer}>
        {inquiry && <p className={classes.inquiryText}>Inquiry submitted</p>}
        <div className={classes.category}>
          <img src={category.icon} alt={category.name} />
        </div>
        <div className={classes.country}>
          <div className={classes.imgContainer}>
            <img src={country.flag} alt={country.name} />
          </div>
          <p>{country.name}</p>
        </div>

        <p className={classes.bib}>{bib}</p>
        <p className={classes.playerName}>{name}</p>

        <p
          className={`${classes.app} ${status ? classes.status + " " + classes[status.toLowerCase()] : ""}`}
        >
          {status ? status : app.score}
        </p>

        <div
          className={`${classes.additionalInfo} ${inquiry ? classes.inqury : ""}`}
        >
          {status ? (
            <p className={`${classes.status} ${classes[status.toLowerCase()]}`}>
              {status.toLowerCase()}
            </p>
          ) : (
            <>
              <p>D:{D}</p>
              <p>E:{E}</p>
              <p>P:{P}</p>{" "}
            </>
          )}
        </div>
      </div>

      <div className={classes.mobileDropdown}>
        <label>
          <input type="checkbox" />
          <img src={Arrow} alt="arrow" />
        </label>
      </div>
      <div className={classes.mobileMenu}>
        <div className={classes.additionalInfo}>
          {!status && (
            <>
              <p>D:{D}</p>
              <p>E:{E}</p>
              <p>P:{P}</p>{" "}
            </>
          )}
        </div>

        <div data-text="App" className={classes.app}>
          <p>{app.score}</p>
          <p>{app.count}</p>
        </div>

        <div data-text="AA" className={classes.AA}>
          <p>{AA.score}</p>
          <p>{AA.count}</p>
        </div>

        <div data-text="Team" className={classes.team}>
          <p>{Team.score}</p>
          <p>{Team.count}</p>
        </div>
      </div>
    </li>
  );
};

export default TableRow;
