import Navbar from "../components/Navbar";
import MonthEvent from "./components/MonthEvents/MonthEvent";
import TitleBlock from "./components/titleblock";

export const eventlist = () => {
  return (
    <div>
      <Navbar />
      <TitleBlock />
      <MonthEvent />
    </div>
  );
};

export default eventlist;
