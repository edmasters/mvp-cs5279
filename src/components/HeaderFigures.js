import React from 'react';

export const HeaderFigures = props => {
	return(
			<div className="grid__item">
				<span className="grid__item--mainheader">
					${parseInt(props.totalValue)}
				</span>
				<div className="grid__item--mainlabel">Total Value</div>
		</div>
	)
}