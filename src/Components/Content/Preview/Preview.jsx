import React from "react";
import ThreeDot from "../../../assets/svg-icons/three-dots-icon.svg?component";
import CloudyIcon from "../../../assets/svg-icons/sprites/icons-weather-sunny.svg?component";
export default function Preview() {
  return (
    <div className="ui-block">
      <div className="ui-block-title">
        <h6 className="title">Widget Preview</h6>
      </div>
      {/* W-Weather */}
      <div className="widget w-wethear">
        <a href="#" className="more">
          <ThreeDot />
        </a>
        <div className="wethear-now inline-items">
          <div className="temperature-sensor">64°</div>
          <div className="max-min-temperature">
            <span>58°</span>
            <span>76°</span>
          </div>
          <CloudyIcon />
        </div>
        <div className="wethear-now-description">
          <div className="climate">Partly Sunny</div>
          <span>
            Real Feel: <span>67°</span>
          </span>
          <span>
            Chance of Rain: <span>49%</span>
          </span>
        </div>
        <div className="date-and-place">
          <h5 className="date">Saturday, March 26th</h5>
          <div className="place">San Francisco, CA</div>
        </div>
      </div>
      {/* W-Weather */}
    </div>
  );
}
