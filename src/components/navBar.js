import { Link } from "react-router-dom";
import "./navBar.css"

const NavBar = () =>{
return (
    <div className="mainNavBar-container">
        <Link to='/HomePage' className = "mainNavItem"><span className='linkN'>Home</span></Link>
        <Link to='/' className = "mainNavItem"><span className='linkN'>Apps Carousel</span></Link>
        <Link to='/CardGamesApp' className = "mainNavItem"><span className='linkN'>Card Games</span></Link>
        <Link to='/WeatherApp' className = "mainNavItem"><span className='linkN'>WeatherApp</span></Link>
        <Link to='/TodoApp' className = "mainNavItem"><span className='linkN'>To Do App</span></Link>
    </div>
)
}
export default NavBar