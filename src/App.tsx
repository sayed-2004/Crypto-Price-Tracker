import NavBar from "./componenets/NavBar";
import ThemeToggle from "./componenets/ThemeToggle";
//import Stylee from "./componenets/Stylee";
import { Routes, Route } from "react-router-dom";
import Home from './componenets/Home'
import Footer from "./componenets/Footer/Footer";

function App(){
  return (
    <div>
      <NavBar />, <ThemeToggle />, 
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Footer></Footer>
      </div>
    
  );
}

export default App;