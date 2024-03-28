import { memo, useRef } from "react";
import classes from "./style.module.css";

type props = {
  options: string[];
  selectedOptions: { id: number; text: string }[];
  setOption: (id: number, text: string, remove?: boolean) => void;
};

const ButtonGroup = ({ options, setOption, selectedOptions }: props) => {
  const optionId = useRef(Math.random());

  const isActive = (text: string) => {
    return selectedOptions.some((option) => option.text === text);
  };

  const optionClickHandler = (text: string) => {
    if (isActive(text)) {
      setOption(optionId.current, text, true);
      return;
    }

    setOption(optionId.current, text);
  };

  return (
    <div className={classes.buttonGroup}>
      {options.map((text) => (
        <button
          key={text}
          className={isActive(text) ? classes.active : ""}
          onClick={() => optionClickHandler(text)}
        >
          {text.toLocaleLowerCase()}
        </button>
      ))}
    </div>
  );
};

export default memo(ButtonGroup);
