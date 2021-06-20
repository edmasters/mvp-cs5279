import React, {useState} from 'react';
import Checkboxes from './CheckBoxRender'

export const MoreOptionsEquity = () => {

	const [readMore,setReadMore]=useState(false);
	const extraContent=<fieldset class="form-part">
      <label> 
        Number of Shares: 
        <br />
        <br />
        <input name="numbershares" />
        <br />
      </label>
      <label> Years of Vesting: 
        <br />
        <br />
        <input name="vestyears" />
      </label>
      <label> Stock Ticker: 
        <br />
        <br />
        <input name="ticker" />
      </label>
      <label> Return Assumptions: 
        <br />
        <Checkboxes />
      </label>
      <button type="submit"> Submit </button>
    </fieldset>
	const linkName=readMore?'Less':'More Options'

	return (
    	<div className="more_Options">
      		<a className="More_Options_Link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
      		{readMore && extraContent}
    	</div>
  	);
}