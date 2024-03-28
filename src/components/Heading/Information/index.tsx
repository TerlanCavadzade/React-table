import { Link } from "react-router-dom";

import classes from "./style.module.css";
import leftArrow from "../../../assets/icons/arrow-narrow-left.svg";

type props = {
  title: string;
  location: string;
  period: string;
};

const Information = ({ title, location, period }: props) => {
  return (
    <div className={classes.headingContainer}>
      <div className={classes.leftArrow}>
        <Link to={""}>
          <img src={leftArrow} alt="" />
        </Link>
      </div>
      <div className={classes.mainContent}>
        <div className={classes.title}>
          <h2>{title}</h2>
        </div>
        <div className={classes.additionalInfo}>
          <p>{location}</p>
          <p>|</p>
          <p>{period}</p>
        </div>
      </div>
    </div>
  );
};

export default Information;
