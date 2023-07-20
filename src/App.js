import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import React, {useState} from "react";
import satData from "./components/satData";

function App() {
  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
       return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
 };
  const [sat, setSat] = useState(satData);
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];
  return (
    <div>
      <Buttons
      filterByType={filterByType}
      setSat={setSat}
      displaySats={displaySats}
       />
      <Table sat={sat} />
      <Banner/>
    </div>
  );
}

export default App;
