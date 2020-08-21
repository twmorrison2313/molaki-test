import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import DebtToIncome from './DebtToIncome'
import Equity from './Equity'
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import './Articles.css'

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

class Articles extends React.Component { 
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  state = {
    openKeys: ['sub1'],
  };

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };
  
  render() {
    return (
      <Router>

        <Layout style = {{height: '100vh', background:'#FFF'}}>

        <Content className='article-content-container'>
          <Switch>
            <Route path = '/learn' component= {DebtToIncome}/>
            <Route path = '/equity' component= {Equity}/>
          </Switch>
        </Content>
          <Sider
            className='sider'
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >

          <Menu
          mode="inline"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          style={{ width: 256 }}
          >
         
            <SubMenu
              key="sub1"
              title={
                <span>
                  <span>Finance</span>
                </span>
              }
            >
              <Menu.Item key="1"><Link to="/learn" />Debt to Income Ratio</Menu.Item>
              <Menu.Item key="2"><Link to="/equity" />Understanding Equity</Menu.Item>
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title="Navigation Two">
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu key="sub4" title="Navigation Three">
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
          
          </Sider>

        </Layout>
  
      </Router>
          
      );
    }
  }
  
  export default Articles;
