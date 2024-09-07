import React, { useState } from "react";
import Menu from "./Menu/Menu";
import CardAuto from "./Menu/CardsPage/CardAuto/CardAuto";
import CardHome from "./Menu/CardsPage/CardHome/CardHome";
import CardPet from "./Menu/CardsPage/CardPet/CardPet";
import CardSchool from "./Menu/CardsPage/CardSchool/CardSchool";
import CardVacations from "./Menu/CardsPage/CardVacantions/CardVacantions";

const Main = () => {
  const [activePage, setActivePage] = useState("home");

  const renderContent = () => {
    switch (activePage) {
      case "home":
        return <CardHome />;
      case "auto":
        return <CardAuto />;
      case "pets":
        return <CardPet />;
      case "school":
        return <CardSchool />;
      case "vacations":
        return <CardVacations />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex flex-grow">
      <Menu setActivePage={setActivePage} />
      <div className="flex-grow  bg-white">{renderContent()}</div>
    </div>
  );
};

export default Main;
