import '../App.css';

const WeatherApp = () => {
    return (
        <div>
        <div className="navSpace"></div>
        <div className="appPages">
        <iframe title="WeatherApp" src="https://weatherappbc2023.netlify.app/" allow="geolocation" width="100%" height="99.4%" ></iframe>
        </div>
        </div>
    )
}
export default WeatherApp