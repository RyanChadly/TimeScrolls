import { Link } from "react-router-dom";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <p>
        Author:
        <a href="https://github.com/RyanChadly"> Ryan Chadly</a>
      </p>
      <p>I thought someone else might find it useful.</p>
      <p>This is still in progress. I am planning to add:</p>
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
