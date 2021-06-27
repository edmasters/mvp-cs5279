import React, {useState} from 'react';
import './App.css';
import ReactGA from 'react-ga-gtm';
import CalculatorControls from "./components/CalculatorControls";

ReactGA.initialize('UA-179516420-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
		<div className="App">
			<header>
					<h1>Compensation Calculator</h1>
			</header>
			<CalculatorControls/>
			<div className="center">
				<label className="label"> Job Title: </label>
				<input className="input" name="jobtitle" />
			</div>
			<div className="center">
				<button className="button"> Submit to see Comparison
				</button>
			</div>
		</div>
  );
}

export default App;
