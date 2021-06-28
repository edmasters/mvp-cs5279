import React, { Component } from "react";
import Checkbox from "./CheckBoxes";

const OPTIONS = [1,2,3];
const RETURNS = [0, 5, 7];

class Checkboxes extends React.Component {
  constructor() {
    super();
    this.state = {
      checkboxes: new Array(3).fill().map((OPTIONS, RETURNS) => !RETURNS),
      return: 5
    };
  }
  onChange(e, changedIndex) {
    const { checked } = e.target;
    console.log({checked});

    this.setState(state => ({
      checkboxes: state.checkboxes.map((_, i) => i === changedIndex ? checked : false),
    }));
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
          <label> 7% </label>
          <label> 0% </label>
        </div>
      </div>
    );
  }
}


export default Checkboxes;