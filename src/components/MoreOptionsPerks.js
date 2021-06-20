import React, {useState} from 'react';
import Checkboxperks from './CheckBoxPerks'

export const MoreOptionsPerks = () => {

	const [readMore,setReadMore]=useState(false);
	const extraContent=<fieldset class="form-part">
      <label> 
        Vacation Days: 
        <br />
        <br />
        <input name="vacationdays" />
        <br />
      </label>
      <label> Sick Days: 
        <br />
        <br />
        <input name="sickdays" />
      </label>
      <label> Monthly Health Care Cost: 
        <br />
        <br />
        <input name="healthcarecost" />
      </label>
      <label> Miscellaneous: 
        <br />
        <br />
        <input name="misc" />
      </label>
      <label> Other Perks:
        < br />
        <Checkboxperks />
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