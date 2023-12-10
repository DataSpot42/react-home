import { Link } from "react-router-dom";
import "./navBar.css"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const NavBar = () => {
  const doc = [
    { title: "Wk 1 JavaScript Workshop", file: "Week1JavaScripWorkshop.pdf" },
    { title: "Wk 2 HTML Challange", file: "Week2HTMLChallange.pdf" },
    { title: "Wk 2 Databases Workshop", file: "Databases1.pdf" },
    { title: "Wk 2 SQL Workshop", file: "SQL1.pdf" },
    { title: "Wk 2 SQL Introduction", file: "Week2SQLIntroduction1.pdf" },
    { title: "Wk 2 SQL Introdcution 2", file: "Week2SQLIntoduction2.pdf" },
    { title: "Wk 3 SQL Databases", file: "Week3SQLDatabases.pdf" },
    { title: "Wk 4 MongoDB Task", file: "Week4MongodBTask.pdf" },
    { title: "Wk 5-6 Text Adv Game", file: "Week5-6TextBasedAdventureGame.pdf" },
    { title: "Archery App", file: "ArcheryAppTask.pdf" },
    { title: "Blog Task", file: "blogTask.pdf" },
    { title: "Punk IPA", file: "punkDesign.pdf" },

  ]
  return (
    <div>

      <div className="mainNavBar-container">
      
        <div className="titleText"><Link className="titleText" to='/'>camelCode </Link><img src={`./favicon.ico`} alt="Camel Icon" height="25px"></img></div>
        <div className="dropMenuIcon">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              <img className="dropMenu icon" src={`./menu.png`} alt="Menu" width="40px" height="20px"></img>
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropMenu">

              <Dropdown className="dropSubMenu">
                <DropdownButton variant="secondary" className="dropSubMenu" id="dropdown-button-drop-start" drop="start"
                  title="Applications">

                  <Dropdown.Item>                    
                    <Link to='/EComm' className="MenuNavItem"><span className='linkN'>eCommerce Apps</span></Link>
                    <Link to='/Util' className="MenuNavItem"><span className='linkN'>Tool Apps</span></Link>
                    <Link to='/Games' className="MenuNavItem"><span className='linkN'>Game Apps</span></Link>
                  </Dropdown.Item>
                </DropdownButton>

              </Dropdown>
              <Dropdown.Divider />
              <Dropdown>


                <DropdownButton variant="secondary" className="dropSubMenu" id="dropdown-button-drop-start" drop="start"
                  title="HTML Pages">

                  <Dropdown.Item>
                    <div>
                    <Link to='/HomePage' className="mainNavItem"><span className='linkN'>Main Site</span></Link>                    
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <div>
                  <Link to='/StarTrek' className="mainNavItem"><span className='linkN'>Star Trek Game</span></Link>  
                  </div>
                  </Dropdown.Item>
                </DropdownButton>

              </Dropdown>
              <Dropdown.Divider />
              <Dropdown>



                <DropdownButton variant="secondary" id="dropdown-button-drop-start" drop="start"
                  title="Assignments">
                  {doc ? doc.map((doc, index) =>
                    <Dropdown.Item key={index}>
                      
                      <Link className="MenuNavItem linkN" to={`/Assignments/${doc.file}`}><span>{doc.title}</span></Link>
                      
                    </Dropdown.Item>
                  ) : <></>}
                </DropdownButton>

              </Dropdown>
            </Dropdown.Menu>

          </Dropdown>


        </div>
      </div>
    </div>
  )
}
export default NavBar