import AppComponents from "./Components/AppComponents";
import "./Styles/Styles.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp";
/*------------------------------*/
function App() {
  return (
    <Router>
      <div className="flex items-center justify-center h-screen lg:bg-zinc-100 border">
        <Routes>
          <Route path="/Tailwind-Practice/" element={<AppComponents />} />
          <Route path="/Tailwind-Practice/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
