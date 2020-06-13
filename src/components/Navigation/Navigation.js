/**A file that is used for the sign out option on the top right corner.*/
import React from 'react';

const Navigation = () => {
	return(
		<nav className='f3 black dim underline pa3 pointer' style={{display: 'flex', justifyContent:'flex-end'}}>
			<p>Sign Out</p>
		</nav>
	);
}
export default Navigation;