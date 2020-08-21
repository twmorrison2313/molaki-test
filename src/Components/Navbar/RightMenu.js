import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';


class RightMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal" style = {{fontFamily:'serif', color: '#24305E'}}>
        <Menu.Item style = {{float: 'left', fontSize: '35px', marginLeft:'2vw' }}className='menu-buttons'><Link to="/" />
          Molaki 
        </Menu.Item>
        
        <Menu.Item style = {{float: 'right', fontSize: '25px', marginRight:'2vw'}} className='menu-buttons'><Link to="/learn" />
          Learn
        </Menu.Item>
        <Menu.Item style = {{float: 'right', fontSize: '25px', marginRight:'2vw' }} className='menu-buttons'><Link to="/about" />
          About 
        </Menu.Item>
      </Menu>
    );
  }
}

export default RightMenu;
