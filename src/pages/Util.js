import '../App.css';
import './appPages.css'
import { Link } from 'react-router-dom';
import Card from '../components/Card';

import UtilCards from '../components/utilCards';

const Util = () => {

    let appCards = UtilCards();
    console.log(appCards)
    return (
        <div className="appPages">
        <div className="navSpace"></div>
         <div className="appGrid-container">
         {appCards ? appCards.map((appCards, index) => <div className="appCards">
         <Card appCard={appCards}/>
         

</div>
) : <p>Loading...</p>}
<div className="appCards">
<div className="card-container">
            <div className="appTitle">TechDog.blog</div>
            <div className="appSubTitle">Blogging Platform Slideshow</div>
            <div className="appText">Here is a slideshow of the development of our final Bootcamp assignment.</div>
            <div className="appImage"><img src="./images/Slide2.svg" alt="TechDog.blog SlideShow"></img></div>            
            <div id="bottom">
            <Link className = "cardButton" to="/TechDogBlogPPT">TechDogBlogPPT</Link>
            </div>
        </div>
        </div>
            </div>   
            </div>   
        

    )
    }
    export default Util;   
    