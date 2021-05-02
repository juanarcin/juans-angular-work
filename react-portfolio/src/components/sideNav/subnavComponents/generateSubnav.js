import React from 'react';
import GenerateLink from './generateLink'

class generateSubnav extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      navState: 'close'
    }
  }

  openSubnav = () => {
    this.setState({
      navState: 'open'
    })
  }

  closeSubnav = () => {
    this.setState({
      navState: 'close'
    })
  }
  render() {
  	let data = this.props.data
  	// console.log(data)
    return (
    	<li key={this.props.id} className="contains-subnav" onMouseEnter={this.openSubnav} onMouseLeave={this.closeSubnav}>{data.text}
	    	<ul className={'subnav ' + this.state.navState}>
	    		{data.subnav.map((link, i) => {
	    			return <GenerateLink data={link} key={link.text}/>
	    		})}
	    	</ul>
    	</li>
    )
  }
}
export default generateSubnav;