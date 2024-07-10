import { EventProvider } from "../context/eventContext";
import EventListTest from "./eventListTest";
import EventList from "./eventListTest";
import MenuComponent from "./menuComponent";

const DummyPage = () => {
  return (
    <div>
      <MenuComponent />
      <EventListTest />
    </div>
  );
};

export default DummyPage;
