import Header from "../components/Header";

import Sidebar from "../components/Sidebar";
import Home from "../components/Home";
import SearchTest from "../components/Searchbar"
import Where from "../components/Where"
import Filters from "../components/Filters";
import BookData from "../Data.json";
import DatePicker from "../components/DatePicker";
import { NavDropdown } from 'react-bootstrap';
import FlightIcon from '@material-ui/icons/Flight';
// import { Dropdown } from 'react-bootstrap';
// import Index from "/index"
import 'bootstrap/dist/css/bootstrap.css';
import Counter from '../components/Counter'
import SearchButton from "../components/SearchButton"
import { makeStyles } from '@material-ui/core/styles';

import Users from "../components/Users";
import Dropdown from 'react-bootstrap/Dropdown';
import Search from "@material-ui/icons/Search";
const useStyles = makeStyles((theme) => ({
  search: {

  },




}));



function HomePage() {
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200&family=Inter:wght@100;200;300&family=Montserrat:wght@100;200;300&display=swap" rel="stylesheet"></link>

  const classes = useStyles();


  return (
    <div className='App '>


      <Header />

      <Sidebar />
      <div className="content">
        <Home />
        {/* <SearchButton /> */}
        <div className={classes.search}>
          {/* <SearchTest  placeholder="From" data={BookData} />

<Where placeholder="Where?" data={BookData}/> */}

          {/* <DatePicker/> */}
        </div>
        {/* <Filters/> */}
        {/* <Counter/> */}
        {/* <Users/> */}
      </div>
      {/* <Search/> */}
      {/* <DatePicker/> */}


    </div>

  );
}

export default HomePage;