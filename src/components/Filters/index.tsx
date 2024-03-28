import ButtonGroup from "../ui/ButtonGroup";
import OptionList from "../ui/OptionList";
import classes from "./style.module.css";
import filterIcon from "../../assets/icons/Filter.svg";
import cancelIcon from "../../assets/icons/Cancel.svg";

import FX from "../../assets/images/FX.png";
import HB from "../../assets/images/HB.png";
import PB from "../../assets/images/PB.png";
import PH from "../../assets/images/PH.png";
import SR from "../../assets/images/SR.png";
import VT from "../../assets/images/VT.png";
import { useCallback, useState } from "react";

const options = [
  {
    id: 1,
    image: FX,
    title: "test",
  },
  {
    id: 2,
    image: HB,
    title: "test",
  },
  {
    id: 3,
    image: PB,
    title: "test",
  },
  {
    id: 4,
    image: PH,
    title: "test",
  },
  {
    id: 5,
    image: SR,
    title: "test",
  },
  {
    id: 6,
    image: VT,
    title: "test",
  },
];

type selectedOptions = {
  id: number;
  text: string;
};

const FilterContainer = () => {
  const [selectedOptions, setSelectedOptions] = useState<selectedOptions[]>([]);

  const selectedOptionHandler = useCallback(
    (id: number, text: string, remove: boolean = false) => {
      if (remove) {
        selectedOptionRemoveHandler(id);
        return;
      }

      setSelectedOptions((prev) => {
        const isExist = prev.some((option) => option.id === id);

        if (!isExist) {
          return [...prev, { id, text }];
        }
        return prev.map((option) => (option.id === id ? { id, text } : option));
      });
    },
    [],
  );

  const selectedOptionRemoveHandler = (id: number) => {
    setSelectedOptions((prev) => prev.filter((option) => option.id !== id));
  };

  return (
    <>
      <div className={classes.mobileBtn}>
        <label>
          <input type="checkbox" name="" id="" />
          <span>
            <img src={filterIcon} alt="filter icon" />
            Filter
          </span>
        </label>
      </div>
      <div className={classes.filterContainer}>
        <div className={classes.optionContainer}>
          <ButtonGroup
            selectedOptions={selectedOptions}
            setOption={selectedOptionHandler}
            options={["mag", "wag"]}
          />
          <ButtonGroup
            selectedOptions={selectedOptions}
            setOption={selectedOptionHandler}
            options={["Qualification", "final"]}
          />
          <ButtonGroup
            selectedOptions={selectedOptions}
            setOption={selectedOptionHandler}
            options={["Apparatus", "Team", "All-around"]}
          />
          <ButtonGroup
            selectedOptions={selectedOptions}
            setOption={selectedOptionHandler}
            options={["Seniors", "Juniors"]}
          />
        </div>
        <OptionList
          selectedOptions={selectedOptions}
          setOption={selectedOptionHandler}
          options={options}
        />
      </div>
      <div className={classes.selectedOptions}>
        {selectedOptions.map((option) => (
          <div key={option.id}>
            <button onClick={() => selectedOptionRemoveHandler(option.id)}>
              <img src={cancelIcon} alt="cancel" />
            </button>
            {option.text}
          </div>
        ))}
      </div>
    </>
  );
};

export default FilterContainer;
