import React from 'react';
import MoreOptionsEquity from './MoreOptionsEquity';
import MoreOptionsPerks from './MoreOptionsPerks';

export default class CalculatorControls extends React.Component {
	constructor() {
		super();

		this.state = {
			baseSalary: window.baseSalary,
			bonusAmount: window.bonusAmount,
			equityValue: window.equityValue,
			perksValue: window.perksValue,
			totalValue: window.totalValue,
			readMore: false,
			Hours: 0,
			Rate: 0,
			open: false,
			Sales: 0,
			Commision: 0,
			openBonus: false
		};
	}

	updateBase = val => {
		this.setState({baseSalary: val})
	}

	updateBonus = val => {
		this.setState({bonusAmount: val})
	}

	updateEquity = event => {
		this.setState({equityValue: event.target.value})
	}

	updatePerks = event => {
		this.setState({perksValue: event.target.value})
	}

	updateTotal = val => {
		this.setState({totalValue: parseInt(val) + parseInt(this.state.equityValue) + parseInt(this.state.perksValue) + parseInt(this.state.bonusAmount)})
	}

	updateTotalBonus = val => {
		this.setState({totalValue: parseInt(val) + parseInt(this.state.equityValue) + parseInt(this.state.perksValue) + parseInt(this.state.baseSalary)})
	}

	baseUpdates = event => {
		const val = event.target.value;
		this.updateBase(val);
		this.updateTotal(val);
	}

	bonusUpdates = event => {
		const val = event.target.value;
		this.updateBonus(val);
		this.updateTotalBonus(val);
	}

	equityUpdates = event => {
		this.updateEquity(event);
		this.updateTotal(event);
	}

	perksUpdates = event => {
		this.updatePerks(event);
		this.updateTotal(event);
	}

	handleHoursInput = e => {
		this.setState({ Hours: e.target.value });
	};
	handleRateInput = e => {
		this.setState({ Rate: e.target.value });
	};

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
	};

	toggleBonus() {
		this.setState({
			openBonus: !this.state.openBonus
		});
	}

	annualOnSubmit = () => {
		const val = this.state.Hours * this.state.Rate * 50;
		this.setState({baseSalary: val});
		this.updateTotal(val);
	};

	annualBonusOnSubmit = () => {
		const val = this.state.Sales * this.state.Commision / 100;
		this.setState({bonusAmount: val});
		this.updateTotalBonus(val);
	};

	
	render() {
		return (
			<div>
			<div className="grid__item">
				<span className="grid__item--mainheader">
					${parseInt(this.state.totalValue)}
				</span>
				<div className="grid__item--mainlabel">Total Value</div>
			</div>
			<div className="grid__container">
				<div className="grid__item">
					<span className="grid__item--header">${parseInt(this.state.baseSalary)}</span>
					<input
						type="range"
						className="grid__item--range-slider"
						id="baseSalary"
						min="0"
						max="300000"
						step="1000"
						value={this.state.baseSalary}
						onChange={(event) =>
							this.baseUpdates(event)}/>
					<label className="grid__item--label" htmlFor="baseSalary">Base Salary {"\n"} </label>
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
				</div>


				<div className="grid__item">
					<span className="grid__item--header">${parseInt(this.state.bonusAmount)}</span>
					<input
						type="range"
						className="grid__item--range-slider"
						id="bonusAmount"
						min="0"
						max="150000"
						step="1000"
						value={this.state.bonusAmount}
						onChange={(event) =>
							this.bonusUpdates(event)}/>
					<label className="grid__item--label" htmlFor="points">Bonus</label>
					<div>
						<h2>
							<a onClick={this.toggleBonus.bind(this)}>
								More Options
							</a>
						</h2>
						<div className={"collapse" + (this.state.openBonus ? ' in' : '')}>
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
								<button type="submit" onClick={this.annualBonusOnSubmit}> Submit</button>
							</fieldset>
						</div>
					</div>
				</div>

				<div className="grid__item">
					<span className="grid__item--header">${parseInt(this.state.equityValue)} </span>
					<input
						type="range"
						className="grid__item--range-slider"
						id="equityValue"
						min="0"
						max="100000"
						step="100"
						value={this.state.equityValue}
						onChange={(event) =>
							this.equityUpdates(event)}/>
					<label className="grid__item--label" htmlFor="equityValue">Annual Equity Value</label>
					<MoreOptionsEquity/>
				</div>
				<div className="grid__item">
					<span className="grid__item--header">${this.state.perksValue}</span>
					<input
						type="range"
						className="grid__item--range-slider"
						id="perksValue"
						min="0"
						max="150000"
						step="200"
						value={this.state.perksValue}
						onChange={(event) =>
							this.perksUpdates(event)}/>
					<label className="grid__item--label" htmlFor="perksValue">Perks Value</label>
					<MoreOptionsPerks/>
				</div>
			</div>
			</div>
		);
	}
}