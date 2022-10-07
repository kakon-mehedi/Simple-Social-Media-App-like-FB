import Home from "./pages/home/Home";
import './pages/home/home.css'
import './app.css'
import Profile from "./pages/profile/Profile";
import ErrorPage from "./pages/errorPage/ErrorPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/home" element = {<Home />} />
        <Route path="/profile" element = {<Profile />} />
        <Route path="*" element = {<ErrorPage />} />
      </Routes>
    </BrowserRouter>
       
    </>
  
  );
}

export default App;
