import { Link } from "react-router-dom";
import "./About.scss";
const About = () => {
  return (
    <div className="about">
      <a href="https://github.com/RyanChadly">Author</a>
      <p>Roadmap:</p>
      <ul>
        <li>Better styling for the timezone editor.</li>
        <li>The option to toggle the highlighted hours.</li>
        <li>Editing of already created timezones.</li>
        <li>Better styling for the footer.</li>
        <li>Dark theme.</li>
        <li>A help window.</li>
      </ul>
      <Link to="/"> Go Back</Link>
    </div>
  );
};
export default About;
