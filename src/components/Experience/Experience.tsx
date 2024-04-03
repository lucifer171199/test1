import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Experience() {
  return (
    <Container id="experience">
      <h2>Experience</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body" style={{display:"flex", justifyContent:"center"}}>
             
                <h3>&#123;  Software Developer  &#125;</h3>
         
            </div>
            <h4 style={{display:"flex", justifyContent:"center"}}> TECHORIENT TECHNOLOGIES FZCO (Jan 2024 - Present)</h4>
            <p style={{display:"flex", justifyContent:"center", marginTop: "10px" }}>
              C# , Selenium, .NET Framework, Desktop Application
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body" style={{display:"flex", justifyContent:"center"}}>
             
                <h3>&#123;  Software Developer  &#125;</h3>
         
            </div>
            <h4 style={{display:"flex", justifyContent:"center"}}> SPARROW SOFTTECH (Aug 2022 - Jan 2024)</h4>
            <p style={{display:"flex", justifyContent:"center", marginTop: "10px" }}>
            C#, Desktop Application,OleDb, EmguCV, OpenCV, AccessDb, MySQL, ReactJs, NodeJs, MongoDB
            </p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body" style={{display:"flex", justifyContent:"center"}}>
             
                <h3>&#123;  Software Developer Intern  &#125;</h3>
         
            </div>
            <h4 style={{display:"flex", justifyContent:"center"}}> SPARROW SOFTTECH (May 2022 - Aug 2022)</h4>
            <p style={{display:"flex", justifyContent:"center", marginTop: "10px" }}>
              C#, .NET Framework, Desktop Application
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}

