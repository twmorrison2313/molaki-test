import React, { Component } from 'react';
import RightMenu from './RightMenu'
import { Drawer, Button } from 'antd';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import './Navbar.css'
import {
	HomeOutlined,
  } from '@ant-design/icons';

class Navbar extends Component {
	state = {
    current: 'mail',
    visible: false
  }
  showDrawer = () => {
    this.setState({
      visible: !this.state.visable,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
        <nav className="menuBar">

        	<div className="menuCon">

				<div className="rightMenu">
	        		<RightMenu />
				</div>
					<div>
						<div className="home-button">
						<Link to = '/'>
						<HomeOutlined />
						</Link>
						</div>
						<Button className="barsMenu" type="primary" onClick={this.showDrawer}>
							<span className="barsBtn"></span>
						</Button>
					</div>
				 	
					<Drawer
						mode="vertical"
						title="Molaki"
						placement="right"
						closable={false}
						onClose={this.onClose}
						visible={this.state.visible}
					>
		         
						<Menu mode="vertical" className = 'drawer'>
							
							<Menu.Item key="learn"><Link to ='learn' />
							Learn
							</Menu.Item>
							<Menu.Item key="purchase"><Link to ='purchase' />
							Get Started
							</Menu.Item>
							<Menu.Item key="about"><Link to ='about' />
							About
							</Menu.Item>
						</Menu>
		        	</Drawer>

        	</div>
        </nav>
    );
  }
}

export default Navbar;
