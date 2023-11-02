import { Link } from "react-router-dom";
import "./navBar.css"
import Dropdown from 'react-bootstrap/Dropdown';

const NavBar = () =>{
    const doc = [
{title: "Week 1 JavaScript Workshop", file: "Week1JavaScripWorkshop.pdf"},
{title: "Week 2 HTML Challange", file: "Week2HTMLChallange.pdf"},
{title: "Week 2 Databases Workshop", file: "Databases1.pdf"},
{title: "Week 2 SQL Workshop", file: "SQL1.pdf"},
{title: "Week 2 SQL Introduction", file:"Week2SQLIntroduction1.pdf"},
{title: "Week 2 SQL Introdcution 2", file: "Week2SQLIntoduction2.pdf"},
{title: "Week 3 SQL Databases", file: "Week3SQLDatabases.pdf"},
{title: "Week 4 MongoDB Task", file: "Week4MongodBTask.pdf"},
{title: "Week 5-6 Text Based Adventure Game", file: "Week5-6TextBasedAdventureGame.pdf"},
{title: "Archery App", file: "ArcheryAppTask.pdf"},
{title: "Blog Task", file: "blogTask.pdf"},
{title: "Punk IPA", file:"punkDesign.pdf"},

]
return (
    <div>
    
    <div className="mainNavBar-container">
    <Link to='/HomePage' className = "mainNavItem"><span className='linkN'>Main Site</span></Link>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-custom-1"  className="mainNavItem">
        Assignments
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropMenu">
        {doc ? doc.map((doc, index) => 
        <Dropdown.Item key={index}><Link className="dropText" to={`/Assignments/${doc.file}`}>{doc.title}</Link>
        </Dropdown.Item>
        ): <></> }
      </Dropdown.Menu>
    </Dropdown>
        
        <Link to='/' className = "mainNavItem"><span className='linkN'>Apps Carousel</span></Link>
        <Link to='/EComm' className = "mainNavItem"><span className='linkN'>eCommerce</span></Link>
        <Link to='/Util' className = "mainNavItem"><span className='linkN'>Utilities</span></Link>
        <Link to='/Games' className = "mainNavItem"><span className='linkN'>Games</span></Link>
        
    </div>
    </div>
)
}
export default NavBar