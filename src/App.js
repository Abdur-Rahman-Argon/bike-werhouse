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
import ManageInventories from "./components/ManageInventories/ManageInventories";
import NotFound from "./components/Share/NotFound/NotFound";
import auth from "./firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Spiners from "./components/Share/Spiners/Spiners";
import { ToastContainer } from "react-toastify";

function App() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Spiners />;
  }

  return (
    <div className="App">
      <Headers></Headers>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/inventorise"
          element={<Inventories></Inventories>}
        ></Route>
        <Route
          path="/addnewitem"
          element={
            <RequireAuth>
              <AddNewIteams></AddNewIteams>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/inventorise/:itemId"
          element={
            <RequireAuth>
              <UpdateItem></UpdateItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageinventorise"
          element={
            <RequireAuth>
              <ManageInventories></ManageInventories>
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

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
