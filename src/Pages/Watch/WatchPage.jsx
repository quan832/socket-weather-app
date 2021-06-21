import React, { useEffect, useState } from "react";

// import component
import Carousel from "../../Components/Carousel/Carousel";
import Header from "../../Components/Header/Header";
import MainContent from "../../Components/Content/MainContent";

// utils
import { APP_TOKEN } from "../../util/appUtil";
import axios from "axios";

export default function WatchPage(props) {
  const [allWeathers, setallWeathers] = useState([]);

  const getAllWeathers = () => {
    axios
      .get("http://localhost:8000/weather", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem(APP_TOKEN),
        },
      })
      .then((response) => {
        setallWeathers(response.data);
      })
      .catch((err) => {
        setTimeout(getAllWeathers, 5000);
      });
  };

  useEffect(() => {
    getAllWeathers();
  }, []);

  console.log(allWeathers);

  return (
    <div>
      <div>
        {/* Header-BP */}

        <Header />

        {/* ... end Header-BP */}
        <div class="header-spacer header-spacer-small"></div>
        {/* Main Header Weather */}
        <Carousel />
        {/* ... end Main Header Weather */}

        {/* Widget Weather */}
        <MainContent socket={props.socket} />
        {/* ... end Widget Weather */}
        <a className="back-to-top" href="#">
          <img
            src="svg-icons/back-to-top.svg"
            alt="arrow"
            className="back-icon"
          />
        </a>
      </div>
    </div>
  );
}
