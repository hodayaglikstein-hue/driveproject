import "./App.css";
import DriveHome from "./pages/DriveHome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/driveHome" element={<DriveHome />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
