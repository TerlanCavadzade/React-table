import classes from "./style.module.css";
type props = {
  text: string;
  tryAgain: () => void;
};

const ErrorComponent = ({ text, tryAgain }: props) => {
  return (
    <div className={classes.error}>
      <p className={classes.heading}>Error Occured!</p>
      <p className={classes.cause}>{text}</p>
      <button onClick={tryAgain}>Try again</button>
    </div>
  );
};

export default ErrorComponent;
