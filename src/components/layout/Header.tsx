import classes from "./Header.module.css";
import hamburger from "../../assets/icons/hamburger.svg";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <div className={classes.hamburger}>
          <label>
            <img src={hamburger} />
            <input type="checkbox" />
          </label>
        </div>
      </nav>
    </header>
  );
};

export default Header;
