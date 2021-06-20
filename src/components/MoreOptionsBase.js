import React, {useState} from 'react';

export const MoreOptionsBase = () => {

	const [readMore,setReadMore]=useState(false);
	const extraContent=<fieldset class="form-part">
    	<label> 
        Hourly Rate: 
        <br />
        <br />
        <input name="hourlyrate" />
        <br />
      </label>
      <label> Hours Per Week: 
        <br />
        <br />
        <input name="hoursperweek" />
      </label>
      <button type="submit"> Submit </button>
  	</fieldset>
	const linkName=readMore?'Less':'More Options'

	return (
    	<div className="grid_item">
      		<a className="grid_item" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
      		{readMore && extraContent}
    	</div>
  	);
}