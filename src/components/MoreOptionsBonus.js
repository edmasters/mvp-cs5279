import React, {useState} from 'react';
import '../App.css';

export default class MoreOptionsBase extends React.Component {
    constructor() {
        super();

        this.state = {
            Sales: 0,
            Commision: 0,
            Annualcom: 10000,
            open: false
        };
    }

    handleSalesInput = e => {
        this.setState({ Sales: e.target.value });
    };
    handleCommisionInput = e => {
        this.setState({ Commision: e.target.value });
    };

    toggle() {
        this.setState({
            open: !this.state.open
        });
    }

    annualOnSubmit = () => {
        this.setState({
            Annualcom: (this.state.Sales * this.state.Commision / 100)
        });
        console.log(this.state.Annualcom);
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
                            Total Sales:
                            <br/>
                            <br/>
                            <input name="hourlyrate" onChange={this.handleSalesInput} value={this.state.Sales}/>
                            <br/>
                        </label>
                        <label> Commision %:
                            <br/>
                            <br/>
                            <input name="hoursperweek" onChange={this.handleCommisionInput} value={this.state.Commision}/>
                        </label>
                        <button type="submit" onClick={this.annualOnSubmit}> Submit</button>
                    </fieldset>
                </div>
            </div>
        );
    }
}