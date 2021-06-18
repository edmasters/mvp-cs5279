import React, {useState} from 'react';

export const MoreOptionsBonus = () => {

	const [readMore,setReadMore]=useState(false);
	const extraContent=<h3>
    	<p>
        more options will be coming here soon!</p>
  	</h3>
	const linkName=readMore?'Less':'More Options'

	return (
    	<div className="expand_item--clickable">
      		<a className="More_Options_Link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
      		{readMore && extraContent}
    	</div>
  	);
}