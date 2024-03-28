import { memo, useEffect, useRef, useState } from "react";
import classes from "./style.module.css";

type options = {
  id: number;
  title: string;
  image: string;
};

type props = {
  selectedOptions: { id: number; text: string }[];
  options: options[];
  setOption: (id: number, text: string, remove?: boolean) => void;
};

const OptionList = ({ options, setOption, selectedOptions }: props) => {
  const [active, setActive] = useState<number | null>();
  const randomId = useRef(Math.random());

  const optionClickHandler = (id: number, text: string) => {
    if (active === id) {
      setActive(null);
      setOption(randomId.current, text, true);
      return;
    }
    setActive(id);
    setOption(randomId.current, text);
  };

  useEffect(() => {
    const exists = selectedOptions.some(
      (option) => option.id === randomId.current,
    );
    if (!exists) {
      setActive(null);
    }
  }, [selectedOptions]);

  return (
    <div className={classes.optionContainer}>
      {options.map((option) => (
        <div
          key={option.id}
          className={`${classes.option} ${active === option.id ? classes.active : ""}`}
          onClick={() => optionClickHandler(option.id, option.title)}
        >
          <div className={classes.imgContainer}>
            <img src={option.image} alt={option.title} />
          </div>
          <div className={classes.title}>{option.title}</div>
        </div>
      ))}
    </div>
  );
};

export default memo(OptionList);
