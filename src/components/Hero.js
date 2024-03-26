import React, { useEffect } from "react";
import logoGithub from "../assets/image/github (3).png";
import HeroButton from "./HeroButton";
import HeroSocial from "./HeroSocial";
import "./styles/Hero.css";
const gihubLink = "https://github.com/brandonecheverry";

const Hero = () => {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    handleScrollToTop()
  }, [])


  return (
    <section id="hero" className="s-hero target-section">
      <div className="s-hero__bg rellax" data-rellax-speed={-7} />
      <div className="row s-hero__content">
        <div className="column">
          <div className="s-hero__content-about">
            <h1>
              <span className="font-500">Brandon Echeverry</span>
            </h1>
            <h3>
              <span>BackEnd Developer</span>
              <br />
              <span>JavaScript | React JS | Node | MySQL | PostgreSQL | AWS | Soporte</span>
            </h3>
            <div className="s-hero__content-social">
              <HeroSocial
                href={gihubLink}
                src={logoGithub}
                alt="logo de github"
                title="Github"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="s-hero__scroll links">
        <HeroButton
          path="/contact"
          // text="Hire Me"
          text="Contáctame"
        />
        <HeroButton
          path="/portfolio"
          //text="Explore Me"
          text="Proyectos"
        />
      </div>
    </section>
  );
};

export default Hero;
