import React from 'react';
import Navbar from './Components/Navbar'
import './App.css';
import { Layout } from 'antd';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import Home from './Components/Pages/Home';
import Learn from './Components/Pages/Learn';
import About from './Components/Pages/About';
import Purchase from './Components/PurchaseForm';
import Refi from './Components/Pages/Refi';

const {Footer, Header} = Layout;

class App extends React.Component {
  render() {
    return (
      
      <Router>
        
        <Layout style={{background:'#FFF'}}>
          
          <Header className= 'header' >
            <Navbar />
          </Header>       
            
            <div style = {{height: '100vh'}}>
              <Switch>
                <Route path = '/' exact component= {Home}/>
                <Route path = '/about' exact component= {About}/>
                <Route path = '/learn' exact component= {Learn}/>
                <Route path = '/purchase' exact component= {Purchase}/>
                <Route path = '/refinance' exact component= {Refi}/>
              </Switch>
            </div>

          <Footer style = {{background:'#FFF', height: '20px', fontSize: '8px'}}> 
            This is the Footer for the awesome Molaki Company/ #MortgageBoyzForLyf
          </Footer>
        
        </Layout>
        
      </Router>
        
    );
  }
}

export default App;
