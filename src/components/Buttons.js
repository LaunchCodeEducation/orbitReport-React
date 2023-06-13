import satData from "./satData";
import "./styling.css";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    // className optional if applying stylings - else plain <div>
    <div className="flex-container"> 
      {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
      })}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;