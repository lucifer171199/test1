import { Container } from "./styles";
import sahilajmeri from "../../assets/sahilbg.png";
import csharp from "../../assets/csharp.svg";
import github from "../../assets/github.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import mongodb from "../../assets/mongodb-icon-1.svg";
import opencv from "../../assets/opencv-icon.svg";
import cpp from "../../assets/c.svg";
import mysql from "../../assets/mysql-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
          Welcome to my portfolio! I'm SAHIL AJMERI, a dedicated programmer fueled by passion and curiosity. With a penchant for problem-solving, I thrive on delving into the intricacies of technology and pushing boundaries. Specializing in C# (.NET Framework), I bring a robust skill set to the table, coupled with a relentless drive for learning and adapting to new technologies. Whether it's crafting desktop applications or enhancing the web experience, I'm committed to making a tangible impact in the tech landscape.

          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          In my professional journey, I embody versatility and adaptability. A quick learner with an insatiable appetite for knowledge, I am continuously honing my skills and exploring innovative solutions. My enthusiasm for programming extends beyond mere proficiency; it's a deep-seated passion that drives me to excel in every project I undertake. From conceptualization to execution, I approach each task with precision and creativity, aiming to deliver solutions that not only meet but exceed expectations.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
          With a firm foundation in C# (.NET Framework) and a fervent desire to innovate, I am poised to tackle diverse challenges in the realm of software development. Whether it's contributing to cutting-edge projects or collaborating with like-minded professionals, I am eager to leverage my expertise and make meaningful contributions to the ever-evolving tech landscape. If you're seeking a dynamic programmer with a proven track record of excellence, I'm ready to embark on the next exciting venture together.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={csharp} alt="csharp" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={cpp} alt="cpp" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={mongodb} alt="mongodb" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={mysql} alt="mysql" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={opencv} alt="opencv" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={github} alt="github" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={sahilajmeri} alt="Sahil Ajmeri" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
