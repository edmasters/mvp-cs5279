import React, {useState} from 'react';
import '../App.css';
import Checkboxes from "./CheckBoxPerks";

export default class MoreOptionsPerks extends React.Component {
    constructor() {
        super();

        this.state = {
            Vacation: 0,
            Sick: 0,
            Health: 0,
            Misc: 0,
            AnnualPerks: 60000,
            open: false
        };
    }

    handleVacationInput = e => {
        this.setState({ Vacation: e.target.value });
    };
    handleSickInput = e => {
        this.setState({ Sick: e.target.value });
    };
    handleHealthInput = e => {
        this.setState({ Health: e.target.value });
    };

    handleMiscInput = e => {
        this.setState({ Misc: e.target.value });
    };

    toggle() {
        this.setState({
            open: !this.state.open
        });
    }

    annualOnSubmit = () => {
        this.setState({
            AnnualPerks: (parseInt(this.state.Sick) * 50 + parseInt(this.state.Vacation) * 100 + parseInt(this.state.Misc) + (456 - parseInt(this.state.Health))*12)
        });
        console.log(this.state.AnnualPerks);
    };

    render() {
        return (
            <div>
                <h2>
                    <a onClick={this.toggle.bind(this)}>
                        More Options
                    </a>
                </h2>
                <div className={"collapse" + (this.state.open ? ' in' : '')}>
                    <fieldset className="form-part">
                        <label>
                            Vacation Days:
                            <br/>
                            <br/>
                            <input name="vacation" onChange={this.handleVacationInput} value={this.state.Vacation}/>
                            <br/>
                        </label>
                        <label>
                            Sick Days:
                            <br/>
                            <br/>
                            <input name="years" onChange={this.handleSickInput} value={this.state.Sick}/>
                            <br/>
                        </label>
                        <label> Miscellaneous:
                            <br/>
                            <br/>
                            <input name="ticker" onChange={this.handleMiscInput} value={this.state.Misc}/>
                        </label>
                        <label> Monthly Health Care Cost:
                            <br/>
                            <br/>
                            <input name="ticker" onChange={this.handleHealthInput} value={this.state.Health}/>
                        </label>
                        <label> Other Perks:
                            <Checkboxes />
                        </label>
                        <button type="submit" onClick={this.annualOnSubmit}> Submit</button>
                    </fieldset>
                </div>
            </div>
        );
    }
}