import React, {useState} from 'react';
import MoreOptionsBase from './MoreOptionsBase';
import MoreOptionsBonus from './MoreOptionsBonus';
import MoreOptionsEquity from './MoreOptionsEquity';
import MoreOptionsPerks from './MoreOptionsPerks';

export default class CalculatorControls extends React.Component {
	constructor() {
		super();

		this.state = {
			baseSalary: window.baseSalary,
			bonusAmount: window.bonusAmount,
			equityValue: window.equityValue,
			perksValue: window.perksValue
		};
	}

	

	render() {
		return (
			<div>
			<div className="grid__item">
				<span className="grid__item--mainheader">
					${parseInt(window.totalValue)}
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
							this.setState({baseSalary: event.target.value})}/>
					<label className="grid__item--label" htmlFor="baseSalary">Base Salary {"\n"} </label>
					<MoreOptionsBase/>
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
							this.setState({bonusAmount: event.target.value})}/>
					<label className="grid__item--label" htmlFor="points">Bonus</label>
					<MoreOptionsBonus/>
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
							this.setState({equityValue: event.target.value})}/>
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
							this.setState({perksValue: event.target.value})}/>
					<label className="grid__item--label" htmlFor="perksValue">Perks Value</label>
					<MoreOptionsPerks/>
				</div>
			</div>
			</div>
		);
	}
}