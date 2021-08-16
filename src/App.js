import Header from "./components/Header";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import SearchTest from "./components/Searchbar"
import Where from "./components/Where"
import Filters from "./components/Filters";
import BookData from "./Data.json";
import DatePicker from "./components/DatePicker";
import { NavDropdown } from 'react-bootstrap';
import FlightIcon from '@material-ui/icons/Flight';
// import { Dropdown } from 'react-bootstrap';
import Index from "./index"
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/Counter'
import SearchButton from "./components/SearchButton"
import HomePage from "./components/HomePage"
import Users from "./components/Users";
import Dropdown from 'react-bootstrap/Dropdown';
import Search from "@material-ui/icons/Search";
import ResultPage from "./components/ResultPage";
import  ReturnFlight from "./components/ReturnFlight"
import {Route , Link} from "react-router-dom"
function App() {
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200&family=Inter:wght@100;200;300&family=Montserrat:wght@100;200;300&display=swap" rel="stylesheet"></link>
  return (
    <div className='App '> 
    
    <Route exact path = "/" component={HomePage}/>
    <Route exact path = "/results" component={ResultPage}/>
    <Route exact path = "/results-return" component={ReturnFlight}/>
    
    


</div>
  
  );
}

export default App;
