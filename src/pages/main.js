import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import { CCarousel, CCarouselItem, CImage} from '@coreui/react'

import '../App.css';


const MainPage = () => {  
  

  return (
    <div className="appPages">
        <div className="navSpace"></div>
        <div>
    <CCarousel controls>
  <CCarouselItem className="caraItem">  
  <iframe className="caraApp" title="WeatherApp" src="https://weatherappbc2023.netlify.app/" allow="geolocation" width="100%" height="99.4%" ></iframe>
  <div className="caraText">Weather App written during bootcamp and updated since to add new features. <p>Click on link below to open it.</p></div>
  <Link to='/WeatherApp' className = "mainNavItem"><span className='linkN'>WeatherApp</span></Link>
  </CCarouselItem>
  <CCarouselItem className="caraItem">
  <iframe className="caraApp" title="To Do App" src="https://todotodos.netlify.app/" width="100%" height="99.4%" ></iframe>
  <div className="caraText">To Do app written during bootcamp. <p>Click on link below to open it.</p></div>
  <Link to='/TodoApp' className = "mainNavItem"><span className='linkN'>To Do App</span></Link>
  </CCarouselItem>
  <CCarouselItem className="caraItem">
  <iframe className="caraApp" title="Card Games App" src="https://play-card-games.netlify.app/" width="100%" height="99.4%" ></iframe>
  <div className="caraText">Card Game App derived from Card Dealer script written at the start of the bootcamp. <p>Click on link below to open it.</p></div>
  <Link to='/CardGamesApp' className = "mainNavItem"><span className='linkN'>Card Games</span></Link>
  </CCarouselItem>
</CCarousel>
</div>
</div>
  );
}

export default MainPage;