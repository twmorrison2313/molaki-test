import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import Slide from 'react-reveal/Slide';
import './Pages.css'



function Home() {
  return (
    <main className = 'mainContainer'>
  
      <div className = 'homepage-container' style = {{textAlign: "center"}}>
        <Slide top>
          <div style = {{textAlign: "center", fontSize: "8vh"}}>Molaki</div>
        </Slide>
          
        <div className = 'definition-container'>
          <Slide left>
            <p>(noun) Mortgage.</p>
          </Slide>
          
          <Slide right>
            <p>(origin: Hawaiian)</p>
          </Slide>
        </div>

        <Slide left>
          <p style = {{fontSize: '3.5vh', marginTop:'4vh'}}> 
            What are you looking to do? 
          </p>
        </Slide>

        <Link to="/refi">
          <Button className = 'home-screen-buttons' style = {{marginRight: "2vw", width:'150px', height: '50px', fontSize: '14px'}} type="primary">
            Refinance
          </Button>
        </Link>
        
        <Link to="/purchase">
          <Button className = 'home-screen-buttons' style = {{marginLeft: "2vw", width:'150px', height: '50px', fontSize: '14px'}} type="primary">
            Purchase
          </Button> 
        </Link>
      
      </div>

    </main>
  );
}

export default Home;
 