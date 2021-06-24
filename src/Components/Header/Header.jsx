import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import FindWeather from "../../assets/svg-icons/magnifying-glass-icon.svg?component";
import makeToast from "../../Toaster";
import {  FETCH_CITY_WEATHER } from "../../util/appUtil";


export default function Header({socket}) {

  const [ citySearch, setCitySearch ] = useState('');

  const [submit, setSubmit] = useState(false);

  const dispatch = useDispatch()
  const cityRef = React.createRef(); 

  useEffect(()=>{

    if (socket && submit) {
    
      const weather = cityRef.current.value;
      socket.emit("getCityWeather",  weather);

      socket.on("newCityWeather", ({data,userId}) => {
          makeToast("success", `Get ${data.cityName} weather forecast!`);
          return dispatch({type: FETCH_CITY_WEATHER ,payload: data})
      }); 
      
      

    }
    
  },[submit])

  return (
    <header className="header" id="site-header">
      <div className="page-title">
        <h6>weather widget</h6>
      </div>
      <div className="header-content-wrapper">
        <form className="search-bar w-search notification-list friend-requests">
          <div className="form-group with-button">
            <input
              className="form-control js-user-search"
              placeholder="Search here people or pages..."
              type="text"
              ref={cityRef}
            />
            <button onClick={(e)=>{
              e.preventDefault();
              setSubmit(!submit);
            }}>
              <FindWeather />
            </button>
          </div>
        </form>
      </div>
    </header>
  );
}
