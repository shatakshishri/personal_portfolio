import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, github, Onclick }) => {
  return (
    // <Col size={12} sm={6} md={4}>
    //   <div className="proj-imgbx">
    //     <img src={imgUrl} height={300} width={300}/>
    //     <div className="proj-txtx">
    //       <h4>{title}</h4>
    //       <span>{description}</span>
    //     </div>
    //   </div>
    // </Col>
    <a href={github} target="_blank" style={{ textDecoration: "none", color: "white"}} >
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </a>
  )
}
