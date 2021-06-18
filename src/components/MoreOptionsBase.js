import React, {useState} from 'react';

export const MoreOptionsBase = () => {

	const [readMore,setReadMore]=useState(false);
	const extraContent=<h3>
    	<text>
        B</text>
  	</h3>
	const linkName=readMore?'Less':'More Options'

	return (
    	<div className="grid_item">
      		<a className="grid_item" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
      		{readMore && extraContent}
    	</div>
  	);
}