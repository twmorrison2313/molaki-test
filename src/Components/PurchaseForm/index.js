import { Select } from 'antd';
import './Purchase.css'
import React from 'react';
import { Form, InputNumber, Input, Button, Steps } from 'antd';
import { Row, Col } from 'antd';

const { Option } = Select;
const { Step } = Steps;
const steps = [
  {
    title: 'Property',
    content: 'Property',
  },
  {
    title: 'Employment',
    content: 'Liabilities',
  },
  {
    title: 'Income',
    content: 'Income',
  },

  {
    title: 'Liabilities',
    content: 'Liabilities',
  },
  {
    title: 'Contact',
    content: 'Contact',
  },
];

class Purchase extends React.Component {
  constructor (props) {
    super (props) ;
    this.state = {
      current:  0,
      showMe:false,
      itsOk:false,
      loanAmount: [],
      disappear: true, 
      streetAddress: '',
      apartmentNumber: '',
      city:'',
      stateSelected:'',
      zipCode: [],
      secondInput: '',
      income: [],
      employment: "",
      liabilities: [],
      firstName: '',
      lastName:'', 
      email:'',
      phone:'',
    }
  }
  


  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    const {  streetAddress,
    apartmentNumber,
    city,
    stateSelected,
    zipCode,
    secondInput,
    income,
    loanAmount,
    employment,
    liabilities,
    firstName,
    lastName, 
    email,
    phone, } = this.state;

    console.log(streetAddress,
      apartmentNumber,
      city,
      stateSelected,
      zipCode,
      secondInput,
      income,
      loanAmount,
      employment,
      liabilities,
      firstName,
      lastName, 
      email,
      phone, )
  }

  // Only way that I could get the number state to be saved and parsed and what not

  handleNumberInput = value => {
    this.setState({
      income:value
    })
  };

  handleLoanAmountInput = value => {
    this.setState({
      loanAmount:value
    })
  };

  handleSelectInput = value => {
    this.setState({
      employment:value
    })
  };

  handleLiabilitiesInput = value => {
    this.setState({
      liabilities:value
    })
  };

  handleStateInput = value => {
    this.setState({
      stateSelected:value
    })
  };

  render() {
    const { current } = this.state
    return (
      <div className='form-container'>
        <div className = 'Steps'>
          
          {/* Steps Things  */}

          <Steps style={{fontFamily: "serif", fontSize:"1.5vh"}} current={current} theme="light">
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
          </Steps>
        </div>

   
        <Form onSubmit={this.handleSubmit} className="purchase-form">
        {current === 0 ? (


    //  ....................................... Loan Amount Form ...............................................                               
          <Form.Item >
            
            <div style = {{marginTop: '5vh', fontFamily:'serif'}}>
              <span className='form-text'>
                How much do you need to be approved for?
              </span>  
            </div>

                
            <InputNumber
                className='input-number'
                placeholder={"Loan Amount"}
                value={this.state.loanAmount}
                formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                onChange={this.handleLoanAmountInput}
              />
              
          </Form.Item>
        
      
        ): ''}


  
     
        {current === 1 ? (
      
          <Form.Item>
          
            <div style={{textAlign:"center", marginTop:'5vh', fontFamily:'serif'}}>
              <span className='form-text'>
                What is your main source of income?             
              </span>    
            </div>    
              <Select
                placeholder="Select Employment Option"
                value = {this.state.employment}
                showSearch
                style={{ width: 200 }}
                className='select-button'
                optionFilterProp="children"
                onChange={this.handleSelectInput}
                filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="Self-Employed">Self-Employed</Option>
                <Option value="W-2">W-2 Employee</Option>
                <Option value="Both">Both</Option>   
              </Select>

          </Form.Item>
   
          ): ''}

    {/* ...................................... Income Form ...............................................                                */}

        {current === 2 ? (
        <Form.Item>
          
          <div style={{textAlign:"center", marginTop:'5vh', fontFamily:'serif'}}>
            <span className='form-text'>
              What is your gross (Pre Tax) Income?           
            </span>    
          </div>  
            
            <InputNumber
              className='input-number'
              placeholder="Income"
              value={this.state.income}
              formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value.replace(/\$\s?|(,*)/g, '')}
              onChange={this.handleNumberInput}
            />
          
      

          
        </Form.Item>
        ): ''}

{/* ...................................... Obligations Form ...............................................                                */}


      {current === 3 ? (
        <Form.Item>
          
          <div style={{textAlign:"center", marginTop:'5vh', fontFamily:'serif'}}>
            <span className='form-text'>
              What are your monthly obligations?          
            </span>    
          </div>  
            
          <InputNumber
            placeholder="Income"
            className='input-number'
            value={this.state.liabilities}
            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')}
            onChange={this.handleLiabilitiesInput}
            />

        </Form.Item>
        ): ''}

{/* ...................................... End Obligations Form ...............................................                                */}


{/* ...................................... Contact Form ...............................................                                */}




      {current === 4 ? (
        <Form.Item>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={12}> 
              <span className='contact-form-text'>
                First name          
              </span>  
              <Input
                style = {{marginBottom: '1vh'}}
                value={this.state.firstName}
                placeholder={'First Name'}
                onChange={(e) => this.setState({firstName: e.target.value})}
                />
            </Col>
      
            <Col span={12}> 
              <span className='contact-form-text'>
                Last name           
              </span>  
                
              <Input 
                style = {{marginBottom: '1vh'}}
                value={this.state.lastName}
                placeholder={'Last Name'}
                onChange={(e) => this.setState({lastName: e.target.value})}
                />
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={14}> 
              <span className='contact-form-text'>
                Email          
              </span>               
              
              <Input
                style = {{marginBottom: '1vh'}}
                placeholder="Email"
                value={this.state.email}
                onChange={(e) => this.setState({email: e.target.value})}
              />
            </Col>
               
            <Col span={10}> 
              <span className='contact-form-text'>
                Phone 
              </span>        
    
              <Input
                style = {{marginBottom: '1vh'}}
                placeholder="Phone"
                value={this.state.phone}
                onChange={(e) => this.setState({phone: e.target.value})}
              />
            </Col>

          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={16}> 
              <span className='contact-form-text'>
                Street Address          
              </span>               
              <Input
                style = {{marginBottom: '1vh'}}
                placeholder="Street Address"
                value={this.state.streetAddress}
                onChange={(e) => this.setState({streetAddress: e.target.value})}
              />
            </Col>
            
            <Col span={8}> 
              <span className='contact-form-text'>
                Suite/Apt # 
              </span>        
            
              <Input
                style = {{marginBottom: '1vh'}}
                placeholder="Suite/Apt #"
                value={this.state.apartmentNumber}
                onChange={(e) => this.setState({apartmentNumber: e.target.value})}
              />
            </Col>
          </Row>
                          
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={8}> 
              <span className='contact-form-text'>
                City         
              </span>               
              <Input
                style = {{marginBottom: '1vh'}}
                placeholder="City"
                value={this.state.city}
                onChange={(e) => this.setState({city: e.target.value})}
              />
            </Col>
               
            <Col span={8}> 
              <span className='contact-form-text'>
                State          
              </span>        
              <Select
                placeholder="State"
                value = {this.state.stateSelected}
                showSearch
                optionFilterProp="children"
                onChange={this.handleStateInput}
                filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="Alabama">Alabama</Option>
                <Option value="Alaska">Alaska</Option>
                <Option value="Arizona">Arizona</Option>
                <Option value="Arkansas">Arkansas</Option>
                <Option value="California">California</Option>
                <Option value="Colorado">Colorado</Option>
                <Option value="Connecticut">Connecticut</Option>
                <Option value="Delaware">Delaware</Option>
                <Option value="Florida">Florida</Option>
                <Option value="Georgia">Georgia</Option>
                <Option value="Hawaii<">Hawaii</Option>
                <Option value="Idaho">Idaho</Option>
                <Option value="Illinois">Illinois</Option>
                <Option value="Indiana<">Indiana</Option>
                <Option value="Iowa">Iowa</Option>
                <Option value="Kansas<">Kansas</Option>
                <Option value="Kentucky">Kentucky</Option>
                <Option value="Louisiana">Louisiana</Option>
                <Option value="Maine">Maine</Option>
                <Option value="Maryland">Maryland</Option>
                <Option value="Massachusetts">Massachusetts</Option>
                <Option value="Michigan">Michigan</Option>
                <Option value="Minnesota">Minnesota</Option>
                <Option value="Mississipi">Mississipi</Option>
                <Option value="Missouri">Missouri</Option>
                <Option value="Montana">Montana</Option>
                <Option value="Nebraska">Nebraska</Option>
                <Option value="Nevada">Nevada</Option>
                <Option value="New Hampshire">New Hampshire</Option>
                <Option value="New Jersey">New Jersey</Option>
                <Option value="New Mexico">New Mexico</Option>
                <Option value="New York">New York</Option>
                <Option value="North Carolina">North Carolina</Option>
                <Option value="North Dakota">North Dakota</Option>
                <Option value="Ohio">Ohio</Option>
                <Option value="Oklahoma">Oklahoma</Option>
                <Option value="Oregon">Oregon</Option>
                <Option value="Pennsylvania">Pennsylvania</Option>
                <Option value="Rhode Island">Rhode Island</Option>
                <Option value="South Carolina">South Carolina</Option>
                <Option value="South Dakota">South Dakota</Option>
                <Option value="Tennessee">Tennessee</Option>
                <Option value="Texas">Texas</Option>
                <Option value="Utah">Utah</Option>
                <Option value="Virginia">Virginia</Option>
                <Option value="Washington">Washington</Option>
                <Option value="West Virginia">West Virginia</Option>
                <Option value="Wisconsin">Wisconsin</Option>
                <Option value="Wyoming">Wyoming</Option>
              </Select>
            </Col>

            <Col span={8}> 

              <span className='contact-form-text'>
                Zip/Postal          
              </span>        
    
              <Input
                style = {{marginBottom: '1vh'}}
                placeholder="Zip Code"
                value={this.state.zipCode}
                onChange={(e) => this.setState({zipCode: e.target.value})}
              />
            </Col>

          </Row>

        </Form.Item>
        ): ''}

      </Form>

      

      <div className = 'next-button-container' style = {{textAlign:'right', marginTop: '13vh'}}>
        {current > 0 && (
          
          <Button style={{ marginRight: 8 }} onClick={() => this.prev()}>
            Previous
          </Button>
          )}

        {current < steps.length - 1 && (
          <Button type="primary" style= {{float:'right'}} onClick={() => this.next()}>
            Next
          </Button>
          )}
        {current === steps.length - 1 && (
          <Button type="submit" onClick={this.onSubmit}>
            Done
          </Button>
          )}
         
      </div>
    </div>
          
    );
  }
}

export default Purchase