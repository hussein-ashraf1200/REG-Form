import "./App.css";
import Infromation from "./component/Infromation";
import Plan from "./component/Plan";
import Pick from "./component/Pick";
import Finishing from "./component/Finshing";
import Summery from "./component/Summery";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Infromation />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/pick" element={<Pick />} />
        <Route path="/finish" element={<Finishing />} />
        <Route path="/summery" element={<Summery />} />
      </Routes>
    </div>
  );
}

export default App;
