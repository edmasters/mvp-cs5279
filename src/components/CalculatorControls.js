import React from 'react';
import {MoreOptionsBase} from './MoreOptionsBase';
import {MoreOptionsBonus} from './MoreOptionsBonus';
import {MoreOptionsEquity} from './MoreOptionsEquity';
import {MoreOptionsPerks} from './MoreOptionsPerks';

export const CalculatorControls = props => {

	return(
		<div className="grid__container">			
			<div className="grid__item">
				<span className="grid__item--header">${parseInt(props.baseSalary)}</span>
				<input 
					type="range"
					className="grid__item--range-slider"
					id="baseSalary"  
					min="0" 
					max="300000" 
					step="1000" 
					value={props.baseSalary} 
					onChange={(event) => 
						props.setbaseSalary(event.target.value)
					} />
				<label className="grid__item--label" htmlFor="baseSalary">Base Salary {"\n"} </label>
					<MoreOptionsBase/>
			</div>
			<div className="grid__item">
				<span className="grid__item--header">${parseInt(props.bonusAmount)}</span>
				<input 
					type="range"
					className="grid__item--range-slider"
					id="bonusAmount" 
					min="0" 
					max="150000" 
					step="1000" 
					value={props.bonusAmount}
         			onChange={(event) =>
						props.setbonusAmount(event.target.value)
         			} />
				<label className="grid__item--label" htmlFor="points">Bonus</label>
				<MoreOptionsBonus/>
			</div>
			<div className="grid__item">
				<span className="grid__item--header">${parseInt(props.equityValue)} </span>
				<input 
					type="range"
					className="grid__item--range-slider"
					id="equityValue"  
					min="0" 
					max="100000" 
					step="100" 
					value={props.equityValue} 
					onChange={(event) => 
						props.setequityValue(event.target.value)
					} />
				<label className="grid__item--label" htmlFor="equityValue">Annual Equity Value</label>
				<MoreOptionsEquity/>
			</div>
			<div className="grid__item">
				<span className="grid__item--header">${props.perksValue}</span>
				<input 
					type="range"
					className="grid__item--range-slider"
					id="perksValue"  
					min="0" 
					max="150000" 
					step="200" 
					value={props.perksValue} 
					onChange={(event) => 
						props.setperksValue(event.target.value)
					} />
				<label className="grid__item--label" htmlFor="perksValue">Perks Value</label>
				<MoreOptionsPerks/>
			</div>
		</div>
	);
}