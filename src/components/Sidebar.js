import Homeicon from '../images/Homeicon.png'
import airplane from '../images/airplane.png'
import hotel from '../images/hotel.png'
import explore from '../images/explore.png'
const Sidebar = () => {
    return ( 
        <div className="Sidebar">
            <div className="travel">
                <img src={Homeicon} alt="" className="homeicon"/>
            <h1>Travel</h1>
            </div>
            <div className="flight">
                <img src={airplane} alt="" className="airplaneicon"/>
                <h1>Flight</h1>
            </div>
            <div className="hotel">
                <img src={hotel} alt="" className="hotelicon"/>
                <h1>Hotel</h1>
            </div>
            <div className="explore">
                <img src={explore} alt="" className="exploreicon"/>
                <h1>Explore</h1>
            </div>
            
            
            
        </div>
     );
}
 
export default Sidebar;