import React, {useState} from 'react';
import '../App.css';

 export default class MoreOptionsBase extends React.Component {
     constructor() {
         super();

         this.state = {
             readMore: false,
             Hours: 0,
             Rate: 0,
             Annualbase: 100000,
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
     };

     annualOnSubmit = () => {
         this.setState({
            Annualbase: (this.state.Hours * this.state.Rate * 50)
             });
         console.log(this.state.Annualbase);
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
                            Hourly Rate:
                            <br/>
                            <br/>
                            <input name="hourlyrate" onChange={this.handleRateInput} value={this.state.Rate}/>
                            <br/>
                        </label>
                        <label> Hours Per Week:
                            <br/>
                            <br/>
                            <input name="hoursperweek" onChange={this.handleHoursInput} value={this.state.Hours}/>
                        </label>
                        <button type="submit" onClick={this.annualOnSubmit}> Submit</button>
                    </fieldset>
                </div>
            </div>
        );
    }
}