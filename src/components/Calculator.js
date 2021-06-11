import React, {useState} from 'react';
import {HeaderFigures} from './HeaderFigures';
import {CalculatorControls} from './CalculatorControls';


export const Calculator = () => {
	const [bonusAmount, setbonusAmount] = useState(10000);
	const [baseSalary, setbaseSalary] = useState(100000);
	const [equityValue, setequityValue] = useState(12000);
	const [perksValue, setperksValue] = useState(60000);

	//Set initial values for example
	const totalValue = parseInt(baseSalary) + parseInt(bonusAmount) + parseInt(equityValue) + parseInt(perksValue);


	return(
		<>
			<HeaderFigures 
				totalValue={totalValue}
				perksValue = {perksValue}
				bonusAmount={bonusAmount}
				baseSalary={baseSalary}
			/>
			<CalculatorControls 
				bonusAmount={bonusAmount}
				setbonusAmount={setbonusAmount}
				baseSalary={baseSalary}
				setbaseSalary={setbaseSalary}
				equityValue={equityValue}
				setequityValue={setequityValue}
				perksValue={perksValue}
				setperksValue={setperksValue}
			/>
		</>
	);

}