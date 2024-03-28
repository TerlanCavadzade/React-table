import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import classes from "./style.module.css";
import { RouteCollection } from "../../../enums/route";

const LinkContainer = () => {
  const linkContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    for (const el of linkContainerRef.current?.children || []) {
      if (el.matches(".scrollTo")) {
        el.scrollIntoView({
          behavior: "auto",
          block: "center",
          inline: "center",
        });
      }
    }
  }, []);

  return (
    <div
      ref={linkContainerRef}
      className={`${classes.linkContainer} container`}
    >
      <NavLink
        to={RouteCollection.Live}
        className={({ isActive }) =>
          isActive ? `${classes.active} scrollTo` : ""
        }
      >
        <span className="red-dot"></span>
        Live
      </NavLink>
      <NavLink
        to={RouteCollection.Startlist}
        className={({ isActive }) =>
          isActive ? `${classes.active} scrollTo` : ""
        }
      >
        Startlist
      </NavLink>
      <NavLink
        to={RouteCollection.Schedule}
        className={({ isActive }) =>
          isActive ? `${classes.active} scrollTo` : ""
        }
      >
        Schedule
      </NavLink>
      <NavLink
        to={RouteCollection.Result}
        className={({ isActive }) => {
          return isActive ? `${classes.active} scrollTo` : "";
        }}
      >
        Results
      </NavLink>
      <NavLink
        to={RouteCollection.Medals}
        className={({ isActive }) =>
          isActive ? `${classes.active} scrollTo` : ""
        }
      >
        Medals
      </NavLink>
    </div>
  );
};

export default LinkContainer;
