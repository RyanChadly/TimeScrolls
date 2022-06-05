import { Link } from "react-router-dom";
import "./About.scss";
const About = () => {
  return (
    <div className="about">
      <a href="https://github.com/RyanChadly">Author</a>

      <Link to="/"> Go Back</Link>
    </div>
  );
};
export default About;
