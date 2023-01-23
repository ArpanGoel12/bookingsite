import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Hotel from "./pages/hotel/hotel.jsx";
import List from "./pages/list/list.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register";
import Logout from "./pages/logout/logout";
import {createContext,useState} from "react";
import {AuthContext} from "./context/AuthContext";
function App() {
  const [login,setLogin]=useState(false);
  return (
    <BrowserRouter>
    <AuthContext.Provider value={{login,setLogin}}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List />}/>
        <Route path="/hotels/:id" element={<Hotel />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/logout" element={<Logout/>} />
        
      </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;