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
            Annual: 100000,
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
                            <input name="equity" onChange={this.handleVacationInput} value={this.state.Vacation}/>
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
                        <label> Other Perks:
                            <Checkboxes />
                        </label>
                        <button type="submit"> Submit</button>
                    </fieldset>
                </div>
            </div>
        );
    }
}