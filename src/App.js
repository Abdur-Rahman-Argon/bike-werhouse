import "./App.css";
import { Route, Routes } from "react-router-dom";
import Headers from "./components/Headers/Headers";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Headers></Headers>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
