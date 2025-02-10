import NavBar from "./componenets/NavBar";
import ThemeToggle from "./componenets/ThemeToggle";
import { Routes, Route, useLocation} from "react-router-dom";
import Home from './componenets/Home'
import Footer from "./componenets/Footer/Footer";
import Login from "./componenets/LoginSignUp/Login";


function App(){
  
  const location = useLocation(); // Get the current page URL
  const isLoginPage = location.pathname === "/login"; // Check if the current page is "/login"
  return (
    <div>
      
      <NavBar /> 
      <ThemeToggle />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/login" element={<Login />} />
      </Routes>
      {!isLoginPage && <Footer />}
      </div>
    
  );
}

export default App;