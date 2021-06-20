import React, { Fragment } from "react";
// import component
import Input from "./Input/Input";
import ExtendedForecast from "./Extened/ExtendedForecast";
import Preview from "./Preview/Preview";

export default function MainContent() {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col col-xl-9 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
            <Input />
            <ExtendedForecast />
          </div>
          <div className="col col-xl-3 order-xl-1 col-lg-12 order-lg-2 col-md-12 col-sm-12 col-12">
            <Preview />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
