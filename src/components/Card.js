

const Card = ({appCard}) => {
    console.log("I am such a card")
    

    return (
        <div className="card-container">
            <div className="appTitle">{appCard.title}</div>
            <div className="appSubTitle">{appCard.subTitle}</div>
            <div className="appText">{appCard.text}</div>
            <div className="appImage"><img src={appCard.image} alt={appCard.imageAlt}></img></div>            
            <div id="bottom">
            <a className = "cardButton" href={appCard.linkUrl} target="_blank" rel="noreferrer">{appCard.linkText}</a>
        </div>
        </div>
    )
}
export default Card    