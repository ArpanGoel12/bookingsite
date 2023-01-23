import axios from "axios";

import {useContext,useState} from "react";
import {AuthContext} from "../../context/AuthContext.js";
import { useNavigate } from "react-router-dom";

import "./Login.css";

const Login = () => {
    const {setLogin}=useContext(AuthContext);
    const[error,setError]=useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post("/auth/login", credentials);
      setError(false);
      setLogin(true);
      navigate("/");
    } catch (err) {
        setError(true);
        setLogin(false);
      console.log(err);
    }
  };

  

  


  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          value={credentials.username}
          className="lInput"
          onChange={((e)=>{
            setCredentials({
                username:e.target.value ,
    password: credentials.password,
            })
          })}
        />
        <input
          type="password"
          className="lInput"
          placeholder="password"
          id="password"
          value={credentials.password}
          onChange={((e)=>{
            setCredentials({
                username:credentials.username,
    password:e.target.value ,
            })
          })}
          
        />
        <button onClick={handleClick}  className="lButton">
          Login 
        </button>
      <p>If not registered, then <a href="/register">Register</a></p>
        {error && <p> Invalid entry.Please try again</p>}
      </div>
    </div>
  );
};

export default Login;