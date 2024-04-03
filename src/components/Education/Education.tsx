import { Container } from "../Experience/styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Education() {
  return (
    <Container id="educations">
      <h2>Education</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body" style={{display:"flex", justifyContent:"center"}}>
             
                <h3>  Bachelor of Engineering  </h3>
         
            </div>
            <h4 style={{display:"flex", justifyContent:"center"}}> Goverment Engineering College, Bhavnagar</h4>
            <p style={{display:"flex", justifyContent:"center", marginTop: "10px" }}>
              2017 - 2022
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body" style={{display:"flex", justifyContent:"center"}}>
             
                <h3>  Higher Secondary School Certificate  </h3>
         
            </div>
            <h4 style={{display:"flex", justifyContent:"center"}}> Sanidhya School Of Science, Gariyadhar</h4>
            <p style={{display:"flex", justifyContent:"center", marginTop: "10px" }}>
            2016 - 2017
            </p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body" style={{display:"flex", justifyContent:"center"}}>
             
                <h3>  Secondary School Certificate  </h3>
         
            </div>
            <h4 style={{display:"flex", justifyContent:"center"}}> Shree M J Patel HighSchool, Paravadi </h4>
            <p style={{display:"flex", justifyContent:"center", marginTop: "10px" }}>
              2014 - 2015
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}



// import React from "react";
// import { Container, EducationTree, TreeNode, NodeTitle, NodeContent } from "./styles";
// import ScrollAnimation from "react-animate-on-scroll";
// import externalLink from "../../assets/external-link.svg"

// const Education: React.FC = () => {
//   return (
  
//     <Container id="educations">
//        <h2>Education</h2>
//        <div className="educations">
//        <ScrollAnimation animateIn="flipInX">
//         <header><div className="project-links">
//                 <a href="#" target="_blank" rel="noreferrer">
                  
//                 </a>
//               </div>
//             </header>
//       <EducationTree>
//         <TreeNode>
//           <NodeTitle>Bachelor of Engineering</NodeTitle>
//           <NodeContent>
//             <p>Goverment Engineering College, Bhavnagar</p>
//             <p>2017 - 2022</p>
//           </NodeContent>
//         </TreeNode>
//       </EducationTree>
//       </ScrollAnimation>

//       <ScrollAnimation animateIn="flipInX">
//       <EducationTree>
//       <TreeNode>
//           <NodeTitle>HSC</NodeTitle>
//           <NodeContent>
//             <p>Sanidhya School Of Science, Gariyadhar</p>
//             <p>2016 - 2017</p>
//           </NodeContent>
//         </TreeNode>
//       </EducationTree>
//       </ScrollAnimation>

//       <ScrollAnimation animateIn="flipInX">
//       <EducationTree>
//       <TreeNode>
//           <NodeTitle>SSC</NodeTitle>
//           <NodeContent>
//             <p>Shree M J Patel HighSchool, Paravadi</p>
//             <p>2014 - 2015</p>
//           </NodeContent>
//         </TreeNode>
//       </EducationTree>
//       </ScrollAnimation>

//       </div>
//       </Container>
//   );
// };

// export default Education;
