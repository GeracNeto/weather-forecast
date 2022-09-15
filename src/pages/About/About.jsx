// CSS
import './About.css'

// Icons
import github from '../../assets/images/github.png'
import linkedin from '../../assets/images/linkedin.png'

// Page
import Home from "../Home/Home"

const About = () => {
  return (
    <Home>
      <main>
        <p>
          The project consists of a weather foreacst API requests based on React.js.<br />
          All HTTP requests were made using the <a href='https://openweathermap.org/' target='_blank'>OpenWeather API</a><br /><br />
          <span id="poweredBy">Powered by: Geraldo Pereira</span>
        </p>
        <div className="imgs">
          <a href="https://github.com/GeracNeto" target='_blank'><img src={github} alt="github" /></a>
          <a href="https://www.linkedin.com/in/geracneto/" target='_blank'><img src={linkedin} alt="linkedin" /></a>
        </div>
      </main>
    </Home>
  )
}

export default About