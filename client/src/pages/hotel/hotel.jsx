import "./hotel.css";
import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";
import MailList from "../../components/MailList/MailList";
import Footer from "../../components/footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faHandsAmericanSignLanguageInterpreting,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";


const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { data, loading, error } = useFetch(`/hotels/find/${id}`);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
const [p,setp]=useState(false);

 

   

  const handleClick = () => {
setp(true);
    
  }
  return (
    <div>
      <Navbar />
      <Header  />
      {loading ? (
        "loading"
      ) : (
        <div className="hotelContainer">
          
            
          <div className="hotelWrapper">
            
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
              Excellent location – {data.distance}{data.rooms}
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over ${data.cheapestPrice} at this property and get a
              free airport taxi
            </span>
            <div className="hotelImages">
              {data.photos?.map((photo, i) => (
                <div className="hotelImgWrapper" key={i}>
                  <img
                    
                    src={photo}
                    alt=""
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">{data.desc}</p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Book your stay at ${data.cheapestPrice} per night now!</h1>
                <span>
                </span>
                   
                <button onClick={handleClick}>Reserve or Book Now!</button>
                {p && <p>Thanks for booking with PlanmyTrip!</p>}
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
      
    </div>
  );
};

export default Hotel;








