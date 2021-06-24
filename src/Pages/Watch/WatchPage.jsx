import React, { useEffect, useState } from "react";

// import component
import Carousel from "../../Components/Carousel/Carousel";
import Header from "../../Components/Header/Header";
import MainContent from "../../Components/Content/MainContent";

export default function WatchPage(props) {

    // if(props.match.params===)

  return (
    <div>
      <div>
        {/* Header-BP */}

        <Header socket={props.socket} />

        {/* ... end Header-BP */}
        <div className="header-spacer header-spacer-small"></div>
        {/* Main Header Weather */}
        <Carousel />
        {/* ... end Main Header Weather */}

        {/* Widget Weather */}
        <MainContent socket={props.socket} />
        {/* ... end Widget Weather */}
      </div>
    </div>
  );
}
