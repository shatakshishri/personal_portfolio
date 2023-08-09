import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/hypermart.png";
import projImg5 from "../assets/img/khanakhazana.png";
import projImg6 from "../assets/img/Eischool.png";
import projImg7 from "../assets/img/just_salads.png";
import projImg8 from "../assets/img/netflix.png";
import projImg9 from "../assets/img/Burger.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    { 
      title: "Sorting Visualizer",
      description:"Sorting visualizer project showcasing various sorting algorithms using JavaScript and HTML/CSS.",
      imgUrl: projImg1,
      github: "https://627fa2aa8e33d567d12f9344--quiet-puffpuff-0701aa.netlify.app/"
    },
    {
      title: "Weather App",
      description:"Interactive weather app built with React for real-time weather forecasts and location-based updates.",
      imgUrl: projImg2,
      github: "https://github.com/shatakshishri/weather-app"
    },
    {
      title: "Automating Hostel Mess System",
      description:"Automating hostel mess system with Node.js and Prisma for efficient meal management and billing.",
      imgUrl: projImg3,
      github: "https://google.com"
    },
    { 
      title: "Just Salads",
      description:"Just Salads offers a fresh and vibrant online platform for ordering nutritious and customizable salads and bowls.",
      imgUrl: projImg7,
      github: "https://just-salads-22cq.vercel.app/"
    },
    { 
      title: "Netflix-Clone",
      description:"Netflix clone using Firebase and React.js: A replica of the Netflix streaming platform built with React.js for the front end and Firebase for backend functionalities.",
      imgUrl: projImg8,
      github: "https://github.com/shatakshishri/netflix-clone"
    },
    { 
      title: "Yum Burger",
      imgUrl: projImg9,
      description:"Engaging Figma design for a dynamic burger app, blending creativity and user-centric visuals.",
      github: "https://www.figma.com/file/cXWKkabJeSVY1mz4LJRyk4/Burger-app?type=design&node-id=0%3A1&mode=design&t=PJmnsQc76cgFJbug-1"
    },
    {
      title: "Hypermart",
      description: "Figma design for 'Hypermart': a comprehensive e-commerce platform with modern, user-friendly interfaces, intuitive navigation, and a visually appealing shopping experience.",
      imgUrl: projImg4,
      github: "https://www.figma.com/file/Vus7NjkgMT89sHQr1tCq3Y/hypermart?type=design&node-id=0%3A1&mode=design&t=92mzBJmvWdZcfLip-1"
    },
    {
      title: "Khana Khazana",
      description: "Figma design for 'Khana Khazana': A visually appealing cooking recipe app that offers a user-friendly interface for discovering, exploring, and creating culinary delights.",
      imgUrl: projImg5,
      github: "https://www.figma.com/file/TQv7eCOYXJ2NVMzgeDUazI/khana-khazana?type=design&node-id=0%3A1&mode=design&t=EQ9yEsa0HbWtWYPY-1"
    },
    {
      title: "Eischool",
      description: "Figma design for 'Eischool': A user-friendly and modern interface for an innovative educational platform.",
      imgUrl: projImg6,
      github:"https://www.figma.com/file/NnxZ1EzUEM2fMY03lj1eqE/Eischool-light?type=design&node-id=0%3A1&mode=design&t=N9bAZhDZojYgwlgu-1"
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>My Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab"> */}
                    {/* <Nav.Item>
                      <Nav.Link eventKey="first">Frontend </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">FullStack</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Figma Designs</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <div className="project-container" >
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </div>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
