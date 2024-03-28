import { Outlet } from "react-router";
import Heading from "../components/Heading";

const StatisticsLayout = () => {
  return (
    <>
      <section>
        <Heading />
        <div className="container">
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default StatisticsLayout;
