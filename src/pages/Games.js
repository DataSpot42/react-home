import '../App.css';
import './appPages.css'

import Card from '../components/Card';

import GamesCards from '../components/gamesCards';
const Games = () => {

    let appCards = GamesCards();
    console.log(appCards)
    return (
        <div className="appPages">
        <div className="navSpace"></div>
         <div className="appGrid-container">
         {appCards ? appCards.map((appCards, index) => <div className="appCards">
         <Card appCard={appCards}/>

</div>) : <p>Loading...</p>}
            </div>   
            </div>   
        

    )
    }
    export default Games       