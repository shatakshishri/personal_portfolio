{/* <section class="about" id="about">

    <h1 class="heading"> about <span>me</span> </h1>

    <div class="row">

        {/*<div class="image">
            <img class="tilt" src="images/about-pic.jpg" alt="">
        </div>*/}

//         <div class="content">
//             <h3> My name is <span> aparna raha </span> </h3>
//             <p class="info">I'm pursuing B.Tech in Electron from O. P. Jindal University, Raigarh. 
//                 I like to explore new things as well as learn and earn knowledge. 
//                 I'm enthusiastic in Web development and Data analysis. I'm learning Data Structure and Algorithm Analysis. I'm improving my skills at programming languages like C++ and C. </p>
//             <div class="box-container">
//                 <div class="box">
//                     <p> <span> age: </span> 22 </p>
//                     <p> <span> gender: </span> female </p>
//                     <p> <span> experience  : </span> fresher </p>
//                     <p> <span> freelance : </span> available </p>
//                 </div>
//                 <div class="box">
//                     <p> <span> language : </span> hindi / english / bengoli</p>
//                     <p> <span> phone : </span> 9755536829 </p>
//                     <p> <span> email : </span> Aparna.raha0@gmail.com </p>
//                     <p> <span> address : </span> Chhattisgarh, india - 490024 </p>
//                 </div>
//             </div>
//             <a href="https://drive.google.com/file/d/13a8f_u08DrJG_s4Oyf-SQvpuAw30hVW4/view?usp=sharing" class="btn">download CV</a>
//         </div>

//     </div>

// </section> */}
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Here is the range of expertise I have acquired till date.This section serves as a testament to my technical prowess, creative problem-solving abilities, and passion for crafting exceptional web experiences.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Data Structure and Algorithms</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Figma</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Python</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
