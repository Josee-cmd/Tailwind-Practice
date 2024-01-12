import AppComponents from "./Components/AppComponents";
import "./Styles/Styles.scss";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import NoFound from "./Pages/404";
import Data from "./Data/Data.json";
import { useState, useEffect } from "react";
import { Protected } from "./Components/Protected";
import Setting from "./User/Setting";
import NavBar from "./Components/NavBar";
import Panel from './Pages/Panel'
/*---------------------------------------------------------------------------------*/

function App() {
  const [data, SetData] = useState([]);
  useEffect(() => {
    SetData(Data);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen lg:bg-zinc-100 border">
      <Routes>
        <Route path="/Tailwind-Practice/" element={<AppComponents />} />
        <Route path="/Tailwind-Practice/signup" element={<SignUp />} />

        <Route
          element={
            <Protected
              isAllowed={
                !!data && data.map((element) => element.Nombre).includes("Jose")
              }
            />
          }
        >
          <Route path="/Tailwind-Practice/panel" element={<NavBar />}>
            <Route path = "home" element = {<Panel/>}/>
            <Route path="User-Setting" element={<Setting />}></Route>
          </Route>
        </Route>

        <Route path="/Tailwind-Practice/*" element={<NoFound />} />
      </Routes>
    </div>
  );
}

export default App;
