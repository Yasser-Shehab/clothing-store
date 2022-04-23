import "./Style/Hero.style.scss";
import girl from "./Style/heroSubject.png";

const Hero = () => {
  return (
    <div className="bg-gradient">
      <div className="hero-container container">
        <div className="hero-slogan">
          <div className="hero-title">
            <h1>
              Clothes
              <br />
              that
              <br />
              matters.
            </h1>
          </div>
          <div className="start-btn">
            <p>START SHOPPING</p>
          </div>
        </div>

        <div className="hero-image">
          <img className="hero__girl" src={girl} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
