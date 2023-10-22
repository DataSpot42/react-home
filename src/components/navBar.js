import { Link } from "react-router-dom";
import "./navBar.css"

const NavBar = () =>{
return (
    <div>
    
    <div className="mainNavBar-container">
        <Link to='/HomePage' className = "mainNavItem"><span className='linkN'>Home</span></Link>
        <Link to='/' className = "mainNavItem"><span className='linkN'>Apps Carousel</span></Link>
        <Link to='/EComm' className = "mainNavItem"><span className='linkN'>eCommerce</span></Link>
        <Link to='/Util' className = "mainNavItem"><span className='linkN'>Utilities</span></Link>
        <Link to='/Games' className = "mainNavItem"><span className='linkN'>Games</span></Link>
    </div>
    </div>
)
}
export default NavBar