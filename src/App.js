import "./App.css";
import Background from "./Background";
import Search from "./Search";
import CurrentLoc from "./CurrentLoc";
import CurrentDate from "./CurrentDate";
import WeeklyForecast from "./WeeklyForecast";
import Contact from "./Contact";

export default function App() {
  return (
    <div className="App">
      <Background />
      <div className="container">
        <div className="center">
          <div className="main">
            <Search />
            <CurrentLoc />
            <CurrentDate />
            <WeeklyForecast />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}
