import "./App.css";
import { Route, Routes } from "react-router-dom";
import Headers from "./components/Headers/Headers";

import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import RequireAuth from "./components/Share/RequreAuth/RequreAuth";
import Home from "./Home/Home/Home";
import Inventories from "./components/Inventories/Inventories";
import AddNewIteams from "./components/AddNewIteams/AddNewIteams";
import UpdateItem from "./components/Share/UpdateItem/UpdateItem";
import MyItems from "./components/MyItems/MyItems";

function App() {
  return (
    <div className="App">
      <Headers></Headers>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/addnewitem"
          element={
            <RequireAuth>
              <AddNewIteams></AddNewIteams>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/inventorise"
          element={
            <RequireAuth>
              <Inventories></Inventories>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/inventorise/:id"
          element={
            <RequireAuth>
              <UpdateItem></UpdateItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myitems"
          element={
            <RequireAuth>
              <MyItems></MyItems>
            </RequireAuth>
          }
        ></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
      </Routes>
    </div>
  );
}

export default App;
