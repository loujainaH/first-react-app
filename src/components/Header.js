import trollii from '../images/trollii.png'
import avatar from '../images/Avatar.png'
import dropdown from '../images/Dropdown.png'
const Header = () => {
   
    return (
        <div className="headerdiv">
        <nav className="header">
            <img src={trollii} alt="logohear" className="logo" />

            
            <div className="username">
            <img src={avatar} alt="logohear" className="avatar" />
                <h1>User name</h1>
                <img src={dropdown} alt="" className="dropdownicon"/>
            </div>
        </nav> 
        </div>
    )
}



export default Header
