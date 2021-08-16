import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Button } from './Button';
import add from '../images/Add.png'
import user from '../images/user.svg'
class Users extends React.Component {
//   constructor(props) {
//       super();

//       this.state = {
//         dropDownValue: '1'
//   }}
//   changeValue(text) {
//       this.setState({dropDownValue: dropDownValue+1})
//     }
    
  
//   render() { 
//       return (  
//         <div className="class">
//       <Dropdown className= "dropdownClass">
//        <Dropdown.Toggle calssName="selected" variant="outlined-secondary">
      
//       {this.state.dropDownValue}
//        </Dropdown.Toggle>
//        <Dropdown.Menu>
//        <Dropdown.Item as='button'><div className="a" onClick={(e) => this.changeValue(e.target.textContent)}>{this.state.dropDownValue} <img src={add} alt="" /></div>
          
//          </Dropdown.Item>
//          <Dropdown.Item as='button'><div onClick={(e) => this.changeValue(e.target.textContent)}>Economy</div>
//          </Dropdown.Item>
//          <Dropdown.Item as='button'><div onClick={(e) => this.changeValue(e.target.textContent)}>First Class</div>
//          </Dropdown.Item>
//        </Dropdown.Menu>
//      </Dropdown>
//     </div>
              

       
//       )
//   }
constructor(props) {
    super(props);
    this.state = {
      count: 1
    }

  }

  handleCount(value) {
    this.setState((prevState) => ({ count: prevState.count + value }));
  }

  render() {


    return (
      <div className="userbtn">
          
       Adult        
        <Button className="addbtn" sign="-"  count={this.state.count} updateCount={this.handleCount.bind(this)} />
        {this.state.count}
        <Button sign="+" count={this.state.count} updateCount={this.handleCount.bind(this)} />
      </div>
    );
  }
}



export default Users;