import React from "react";

export default function Input() {
  return (
    <div className="ui-block">
      <div className="ui-block-title">
        <h6 className="title">Widget Preview</h6>
      </div>
      <div className="ui-block-content">
        {/* Form Weather */}
        <form>
          <div className="row">
            <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
              <fieldset className="form-group label-floating is-select">
                <label className="control-label">Country and Timezone</label>
                <select className="selectpicker form-control">
                  <option value="AL">United States (UTC-8)</option>
                  <option value={2}>Ontario (UTC−6)</option>
                  <option value="WY">Alberta (UTC−6)</option>
                </select>
              </fieldset>
              <fieldset className="form-group label-floating is-select">
                <label className="control-label">Extended Forecast Days</label>
                <select className="selectpicker form-control">
                  <option value="AL">Show Next 7 days</option>
                  <option value={2}>Show Next 10 days</option>
                  <option value="WY">Show Next 14 days</option>
                </select>
              </fieldset>
              <a href="#" className="btn btn-secondary btn-md full-width">
                Restore all Attributes
              </a>
            </div>
            <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
              <fieldset className="form-group label-floating is-select">
                <label className="control-label">Temperature Unit</label>
                <select className="selectpicker form-control">
                  <option value="AL">F° (Farenheit)</option>
                  <option value={2}>C° (Celsius)</option>
                </select>
              </fieldset>
              <div className="switcher-block">
                <div className="h6 title">Show Extended Forecast on Widget</div>
                <div className="togglebutton blue">
                  <label>
                    <input type="checkbox" defaultChecked />
                  </label>
                </div>
              </div>
              <a href="#" className="btn btn-blue btn-md full-width">
                Save all Changes
              </a>
            </div>
          </div>
        </form>
        {/* ... end Form Weather */}
      </div>
    </div>
  );
}
