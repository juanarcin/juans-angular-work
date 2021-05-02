import React from 'react';
import GenerateSubnav from './generateSubnav';
import GenerateLink from './generateLink';

class generateNav extends React.Component {
  render() {
  	let data = this.props.data
  	// console.log('generateNav data = ', data)
  	return (
  		<ul className="navigation">
  			{data.map((data, index) =>{
  				if(data.subnav){
		  			return <GenerateSubnav data={data}  key={data.text} />
		  		}
		    		return <GenerateLink data={data} key={data.text} />
		  	})}
  		</ul>
  	)
  }
}
export default generateNav;