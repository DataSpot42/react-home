import 'bootstrap/dist/css/bootstrap.min.css'
import { CCarousel, CCarouselItem} from '@coreui/react'

import '../App.css';


const TechDogPPT = () => {  
  const powerPoint = ["Slide2","Slide3","Slide4","Slide5","Slide6","Slide7","Slide8","Slide9","Slide10","Slide11","Slide12","Slide13","Slide14","Slide15","Slide16","Slide17","Slide18","Slide19","Slide20","Slide21","Slide22"]
    console.log("Hello")
  return (
    <div className="appPages">
        <div className="navSpace"></div>
        <div>
    <CCarousel controls>
        {powerPoint.map((powerPoint,index)  => 
  <CCarouselItem className="caraItem">  
  <div className="caraSlide"><img src={`./images/${powerPoint}.svg`} alt="PowerPoint Slide" width="80%" height="auto"></img></div>
  
 
        </CCarouselItem>)}
  
</CCarousel>
</div>
</div>
  );
}

export default TechDogPPT;