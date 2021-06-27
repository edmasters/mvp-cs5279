import React, { Component } from "react";
import Checkbox from "./CheckBoxes";

const OPTIONS = ["Company Avg.", "S&P Average", "No Returns"];
const RETURNS = [5, 0, 7];

class Checkboxes extends React.Component {
  constructor() {
    super();
    this.state = {
      checkboxes: new Array(3).fill().map((OPTIONS, RETURNS) => !RETURNS),
    };
  }
  onChange(e, changedIndex) {
    const { checked } = e.target;
    
    this.setState(state => ({
      checkboxes: state.checkboxes.map((_, i) => i === changedIndex ? checked : false),
    }));
    console.log(this.state.checkboxes)
  }
  render() {
    const { checkboxes } = this.state;
    
    return (
      <div>
        <div className="center-boxes">
          {checkboxes.map((item, i) => (
            <input
              key={i}
              type="checkbox"
              checked={item}
              onChange={e => this.onChange(e, i)}
            />
          ))}
        </div>
        <div className="box-text">
          <label> 5% </label>
          <label> 0% </label>
          <label> 7% </label>
        </div>
      </div>
    );
  }
}


export default Checkboxes;