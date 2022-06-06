import "./App.css";
import Background from "./Background";
import Search from "./Search";
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
            <WeeklyForecast />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}
