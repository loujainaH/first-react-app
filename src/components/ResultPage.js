import React from 'react';
import Header from './Header';
import '../components/ResultPage.css'
import Sidebar from './Sidebar';
import SearchTest from "../components/Searchbar"
import Where from "../components/Where"
import Filters from "../components/Filters";
import BookData from "../Data.json";
import ResultPageSearch from './ResultPageSearch';
import CovidWarning from './CovidWarning'
import Home from "../components/Home";
import Result from "../components/Result";
import BestFlights from "../components/BestFlights"
import OtherFlights from "../components/OtherFlights"
import Footer from "../components/Footer"
function ResultPage(){
    return(
<div>
    <div className="header">
     <Header/>
    </div>
    <Sidebar/>
    <div className="content">

<div className="placeSearch">
{/* <SearchTest  placeholder="From" data={BookData} />

<Where placeholder="Where?" data={BookData}/> */}

{/* <DatePicker/> */}

</div>

<Result/>
{/* <Counter/> */}
{/* <Users/> */}
    </div>
   

   <ResultPageSearch/>
   
   <CovidWarning/>
<BestFlights/>
<OtherFlights/>
<Footer/>

    </div>
    )
    
}
 
export default ResultPage;