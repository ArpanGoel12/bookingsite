import axios from "axios";

import {useContext,useState} from "react";
import {AuthContext} from "../../context/AuthContext.js";
import { useNavigate } from "react-router-dom";

import "./Register.css";

const Register = () => {
    const {setLogin}=useContext(AuthContext);
    const[error,setError]=useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email:""
  });

  

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post("/auth/register", credentials);
      setError(false);
      setLogin(true);
      navigate("/")
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
    email: credentials.email
            })
          })}
        />
        <input
          type="text"
          placeholder="email"
          id="email"
          value={credentials.email}
          className="lInput"
          onChange={((e)=>{
            setCredentials({
                username:credentials.username,
    password: credentials.password,
    email:e.target.value
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
    email:credentials.email
            })
          })}
          
        />
        
        <button onClick={handleClick}  className="lButton">
          Register 
        </button>
        {error && <p> Invalid entry.Please try again</p>}
      </div>
    </div>
  );
};

export default Register;