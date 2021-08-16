import DropdownButton from 'react-bootstrap/DropdownButton';
import { Dropdown } from 'react-bootstrap';
import React from 'react';
import { Button } from './Button';
class Filters extends React.Component {
  constructor(props) {
      super();

      this.state = {
        dropDownValue: "Economy",
        count: 1
  }}
  changeValue(text) {
      this.setState({dropDownValue: text})
    }
    
     
  
    handleCount(value) {
      this.setState((prevState) => ({ count: prevState.count + value }));
    }
    
  
  render() { 
      return (  
        <div className="">
      {/* <Dropdown className= "dropdownClass">
       <Dropdown.Toggle calssName="selected" variant="outlined-secondary">
      
      {this.state.dropDownValue}
       </Dropdown.Toggle>
       <Dropdown.Menu>
       <Dropdown.Item as='button'><div className="a" onClick={(e) => this.changeValue(e.target.textContent)}>Business</div>
          
         </Dropdown.Item>
         <Dropdown.Item as='button'><div onClick={(e) => this.changeValue(e.target.textContent)}>Economy</div>
         </Dropdown.Item>
         <Dropdown.Item as='button'><div onClick={(e) => this.changeValue(e.target.textContent)}>First Class</div>
         </Dropdown.Item>
       </Dropdown.Menu>
     </Dropdown> */}
     
    </div>
              

       
      )
  }
}

export default Filters;

