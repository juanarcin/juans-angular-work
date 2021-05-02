import React from 'react';
import GenerateSubnav from './generateSubnav';

class generateLink extends React.Component {
  render() {
  	let data = this.props.data
  	if(data.subnav){
  		return <GenerateSubnav data={data} />
  	}
    return <li key={data.text}><a href={data.url}>{data.text}</a></li>
  }
}
export default generateLink;