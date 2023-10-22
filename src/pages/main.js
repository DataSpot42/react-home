
import 'bootstrap/dist/css/bootstrap.min.css'
import { CCarousel, CCarouselItem} from '@coreui/react'

import '../App.css';


const MainPage = () => {  
  

  return (
    <div className="appPages">
        <div className="navSpace"></div>
        <div>
    <CCarousel controls>
  <CCarouselItem className="caraItem">  
  <iframe className="caraApp" title="WeatherApp" src="https://weatherappbc2023.netlify.app/" allow="geolocation" width="100%" height="99.4%" ></iframe>
  <div className="caraText">Weather App written during bootcamp and updated since to add new features. <p>Click on link below to open the app</p></div>
  <div className="button-container"><a className = "mainItem" href="https://weatherappbc2023.netlify.app/" target="_blank" rel="noreferrer">Weather App (new tab)</a></div>
  </CCarouselItem>
  <CCarouselItem className="caraItem">
  <iframe className="caraApp" title="To Do App" src="https://todotodos.netlify.app/" width="100%" height="99.4%" ></iframe>
  <div className="caraText">To Do app written during bootcamp. <p>Click on link below to open app.</p></div>
  <div className="button-container"><a className = "mainItem" href="https://todotodos.netlify.app/" target="_blank" rel="noreferrer">To do App (new tab)</a></div>
  </CCarouselItem>
  <CCarouselItem className="caraItem">
  <iframe className="caraApp" title="Card Games App" src="https://play-card-games.netlify.app/" width="100%" height="99.4%" ></iframe>
  <div className="caraText">Card Game App derived from Card Dealer script written at the start of the bootcamp. Click on link below to open the app</div>
  <div className="button-container"><a className = "mainItem" href="https://play-card-games.netlify.app" target="_blank" rel="noreferrer">Card Games (new tab)</a></div>
  </CCarouselItem>
  <CCarouselItem className="caraItem">
  <iframe className="caraApp" title="PunkIPA" src="https://punkipa.netlify.app/" width="100%" height="99.4%" ></iframe>
  <div className="caraText">eCommerce App complted during bootcamp with a fellow student. Click on link below to open the app</div>
  <div className="button-container"><a className = "mainItem" href="https://punkipa.netlify.app/" target="_blank" rel="noreferrer">PunkIPA App (new tab)</a></div>
  </CCarouselItem>
</CCarousel>
</div>
</div>
  );
}

export default MainPage;