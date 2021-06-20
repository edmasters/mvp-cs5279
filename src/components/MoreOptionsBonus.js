import React, {useState} from 'react';

export const MoreOptionsBonus = () => {

	const [readMore,setReadMore]=useState(false);
	const extraContent=<fieldset class="form-part">
      <label> 
        Total Sales: 
        <br />
        <br />
        <input name="total sales" />
        <br />
      </label>
      <label> Commision %: 
        <br />
        <br />
        <input name="commisionpercent" />
      </label>
      <button type="submit"> Submit </button>
    </fieldset>
	const linkName=readMore?'Less':'More Options'

	return (
    	<div className="expand_item--clickable">
      		<a className="More_Options_Link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
      		{readMore && extraContent}
    	</div>
  	);
}