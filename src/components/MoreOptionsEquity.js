import React, {useState} from 'react';
import '../App.css';
import Checkboxes from "./CheckBoxRender";

export default class MoreOptionsBase extends React.Component {
    constructor() {
        super();

        this.state = {
            Equity: 0,
            Years: 0,
            Ticker: "",
            Annual: 100000,
            open: false
        };
    }

    handleTickerInput = e => {
        this.setState({ Ticker: e.target.value });
    };
    handleYearsInput = e => {
        this.setState({ Years: e.target.value });
    };
    handleEquityInput = e => {
        this.setState({ Equity: e.target.value });
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
                            Hourly Rate:
                            <br/>
                            <br/>
                            <input name="equity" onChange={this.handleEquityInput} value={this.state.Equity}/>
                            <br/>
                        </label>
                        <label>
                            Hourly Rate:
                            <br/>
                            <br/>
                            <input name="years" onChange={this.handleYearsInput} value={this.state.Years}/>
                            <br/>
                        </label>
                        <label> Hours Per Week:
                            <br/>
                            <br/>
                            <input name="ticker" onChange={this.handleTickerInput} value={this.state.Ticker}/>
                        </label>
                        <label> Return Assumption:</label>
                        < Checkboxes />
                        <button type="submit"> Submit</button>
                    </fieldset>
                </div>
            </div>
        );
    }
}