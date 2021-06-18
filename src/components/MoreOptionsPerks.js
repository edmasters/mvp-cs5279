import React, {useState} from 'react';

export const MoreOptionsPerks = () => {

	const [readMore,setReadMore]=useState(false);
	const extraContent=<h3>
    	<p>
        more perk options!</p>
  	</h3>
	const linkName=readMore?'Less':'More Options'

	return (
    	<div className="more_Options">
      		<a className="More_Options_Link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
      		{readMore && extraContent}
    	</div>
  	);
}