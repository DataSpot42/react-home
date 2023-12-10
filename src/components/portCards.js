const PortCards = ({ title, url, description, github }) => {
    //const title=appDetail.title
    //const url=appDetail.url
    //const github=appDetail.github
    //const description=appDetail.description
    //console.log(appDetail)

    return (
      <div className="eachApp">
        <iframe className="scrollApp" title={title} src={url} width="100%" height="99.4%" />
        <div className="scrollText">{description} <p>Click on button below to open the app or look at the GitHub Repo for the code</p></div>
        <div className="scroll-button-container">
          <a className="scrollButton" href={url} target="_blank" rel="noreferrer">{title}</a>
          <a className="scrollButton" href={github} target="_blank" rel="noreferrer">Code</a>
        </div>
      </div>
    );
  };
  export default PortCards