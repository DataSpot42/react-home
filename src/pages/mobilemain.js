
import PortfolioCards from '../components/appDetails';
import PortCards from '../components/portCards';
import '../App.css';

const MobileMain = () => {
    let appDetails = PortfolioCards();
    
    return (
        
        <div className="appPages">
            <div className="eachApp"> 
            <div className="scrollText">
                <br></br>
                <div className="siteTitle">camelCode React Portfolio App</div><br></br>  I'm Steve, a Software Developer based in the North West of England.  Having completed a Bootcamp earlier in the year this app allows be to demonstraite my coding skills.  Please take a look around, try out the apps or check out my code in GitHub.  </div></div>
                
                <div className="appPages">
      {appDetails ? appDetails.map((appDetails, index) => (
        <PortCards key={index} {...appDetails} />
      ))
      : <p>Loading</p>}
    </div>


           
            
            
        </div>
    )


}
export default MobileMain;