import {
    faBed,
    faCalendarDays,
    faCar,
    faPerson,
    faPlane,
    faTaxi,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import "./header.css";
  import { DateRange } from "react-date-range";
  import { useState } from "react";
  import "react-date-range/dist/styles.css"; // main css file
  import "react-date-range/dist/theme/default.css"; // theme css file
  import { format } from "date-fns";
  import { useNavigate } from "react-router-dom";
  import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext.js";
  
  const Header = () => {

const {login}= useContext(AuthContext);
const navigate=useNavigate();
const handleSearch=()=>{
    navigate("/hotels", { state: { destination, date, options } });
}


    const [destination, setDestination] = useState("");
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
      adult: 1,
      room: 1
    });
    const [note,setnote]=useState(false);
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      ]);
  
    return (
      <div className="header">
        
        <div
          className="headerContainer">
         
          
            
              <h1 className="headerTitle">
                Want a lifetime of discounts?
              </h1>
              <p className="headerDesc">
                Get rewarded for your travels – unlock instant savings of 10% or
                more with a free PlanMyTrip account
              </p>
            



              <div className="headerSearch" onClick={()=>setnote(true)}>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>



              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>


              
              
              
              
              
              
              
              
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.adult} adult · ${options.room} room`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={()=>{
                             setOptions({
                                adult: options.adult-1,
                                room: options.room
                              });
                          }}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={()=>{
                            setOptions({
                               adult: options.adult+1,
                               room: options.room
                             });
                         }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={()=>{
                            setOptions({
                               adult: options.adult,
                               room: options.room-1
                             });
                         }}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={()=>{
                            setOptions({
                               adult: options.adult,
                               room: options.room+1
                             });
                         }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>













              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                Search
                </button>
              </div>










               



              </div>
            
        
        </div>
    
      </div>
    );
  };
  
  export default Header;