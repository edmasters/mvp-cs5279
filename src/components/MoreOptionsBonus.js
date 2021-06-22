import React, {useState} from 'react';
import '../App.css';

export default class MoreOptionsBase extends React.Component {
    constructor() {
        super();

        this.state = {
            Sales: 0,
            Commision: 0,
            Annual: 100000,
            open: false
        };
    }

    handleHoursInput = e => {
        this.setState({ Hours: e.target.value });
    };
    handleRateInput = e => {
        this.setState({ Rate: e.target.value });
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
                            Total Sales:
                            <br/>
                            <br/>
                            <input name="hourlyrate" onChange={this.handleRateInput} value={this.state.Sales}/>
                            <br/>
                        </label>
                        <label> Commision %:
                            <br/>
                            <br/>
                            <input name="hoursperweek" onChange={this.handleHoursInput} value={this.state.Commision}/>
                        </label>
                        <button type="submit"> Submit</button>
                    </fieldset>
                </div>
            </div>
        );
    }
}