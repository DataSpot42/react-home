import { Link } from 'react-router-dom';

import '../App.css';

const MobileMain = () => {

    return (
        <div className="appPages">
            <div className="eachApp">
                <iframe className="scrollApp" title="WeatherApp" src="https://weatherappbc2023.netlify.app/" allow="geolocation" width="100%" height="99.4%" ></iframe>
                <div className="scrollText">Weather App written during bootcamp and updated since to add new features. <p>Click on button below to open the app or look at the GitHub Repo for the code</p></div>
                <div className="scroll-button-container"><a className="scrollButton" href="https://weatherappbc2023.netlify.app/" target="_blank" rel="noreferrer">Weather App</a>
                    <a className="scrollButton" href="https://github.com/DataSpot42/weatherapp" target="_blank" rel="noreferrer">Code</a></div>
            </div>
            <div className="eachApp">
                <iframe className="scrollApp" title="To Do App" src="https://todotodos.netlify.app/" width="100%" height="99.4%" ></iframe>
                <div className="scrollText">To Do app written during bootcamp. <p>Click on button below to open the app or look at the GitHub Repo for the code</p></div>
                <div className="scroll-button-container"><a className="scrollButton" href="https://todotodos.netlify.app/" target="_blank" rel="noreferrer">To do App</a>
                    <a className="scrollButton" href="https://github.com/DataSpot42/ReactToDo" target="_blank" rel="noreferrer">Code</a>
                    <a className="scrollButton" href="https://github.com/DataSpot42/FullStackToDo" target="_blank" rel="noreferrer">Code (FS Version)</a></div>
            </div>
            <div className="eachApp">
                <iframe className="scrollApp" title="Card Games App" src="https://play-card-games.netlify.app/" width="100%" height="99.4%" ></iframe>
                <div className="scrollText">Card Game App derived from Card Dealer script written at the start of the bootcamp. Click on button below to open the app or look at the GitHub Repo for the code</div>
                <div className="scroll-button-container"><a className="scrollButton" href="https://play-card-games.netlify.app" target="_blank" rel="noreferrer">Card Games App</a>
                    <a className="scrollButton" href="https://github.com/DataSpot42/card-games-app" target="_blank" rel="noreferrer">Code</a></div>
            </div>
            <div className="eachApp">
                <iframe className="scrollApp" title="PunkIPA" src="https://punkipa.netlify.app/" width="100%" height="99.4%" ></iframe>
                <div className="scrollText">eCommerce App complted during bootcamp with a fellow student. Click on link below to open the app</div>
                <div className="scroll-button-container"><a className="scrollButton" href="https://punkipa.netlify.app/" target="_blank" rel="noreferrer">PunkIPA App</a>
                    <a className="scrollButton" href="https://github.com/DataSpot42/punk-local-app" target="_blank" rel="noreferrer">Code</a>
                    <a className="scrollButton" href="https://github.com/stefanthomasjones/PunkSite" target="_blank" rel="noreferrer">Code (FS Version)</a></div>
            </div>
            <div className="eachApp">
                <div className="scrollApp"><img className="caraSlide" src="./images/Slide2.svg" alt="TechDogBlogSlideShow"></img></div>
                <div className="scrollText">The final Bootcamp assignment was to create a full stack app in a team of 4.  We chose a blog platform and called it TechDog.blog  Heres is a slide show of our presentation</div>
                <div className="scroll-button-container"><Link className="scrollButton" to="/TechDogBlogPPT">TechDogBlogPPT</Link>
                    <a className="scrollButton" href="https://github.com/DataSpot42/techDogblog" target="_blank" rel="noreferrer">Code</a></div>
            </div>
            <div className="eachApp">
            <iframe className="scrollApp" title="DrumKit" src="https://camelcode-drumkit.netlify.app/" width="100%" height="99.4%" ></iframe>
                <div className="scrollText">Basic Drum Kit App, created in React after Bootcamp. Click on link below to open the app</div>
                <div className="scroll-button-container"><a className="scrollButton" href="https://camelcode-drumkit.netlify.app/" target="_blank" rel="noreferrer">DrumKit App</a>
                    <a className="scrollButton" href="https://github.com/DataSpot42/drumkit-app" target="_blank" rel="noreferrer">Code</a>
               </div>     
            </div>
            
        </div>
    )


}
export default MobileMain;