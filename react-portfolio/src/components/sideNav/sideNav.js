import React from 'react';
import links from './routes';
import GenerateNav from './subnavComponents/generateNav';
import Styles from './side-nav.css';
import styled, { keyframes } from 'styled-components';
import {useSpring, animated} from 'react-spring'
import { FaBars } from 'react-icons/fa';

class sideNav extends React.Component {



	constructor(props){
		super(props);
		this.state = {
			navOpen: false,
			animationClass: ''
		}
	}

	toggleNav = () => {
		this.setState(prevState => ({
			navOpen: !prevState.navOpen
		}));
	}
  render() {
  	if (!this.state.navOpen){
  		return <span onClick={this.toggleNav} className="sub-nav-icon"><FaBars /></span>
  	}
    return (
    	<Container>
    		<div className="nav-toggle">
    			<span onClick={this.toggleNav} className="sub-nav-icon"><FaBars /></span>
    		</div>
    		<GenerateNav data={links} />
    	</Container>
    )
  }
}

export default sideNav;



const FadeInLeft = keyframes`
 0% { margin-left:-1000px }
 100% { margin-left: 0;  }
`

const Container = styled.aside`
	background:#252525;
	max-width: 200px;
	width: 100%;
	min-height: 100vh;
	color:#ccc;
	display:block;
	position: fixed;
	top:0;
	left:0;
	animation-name: ${FadeInLeft};
	animation-duration: .2s;
`

