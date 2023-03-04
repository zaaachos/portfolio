import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/developer.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChessPawn,
  faHomeLg,
  faMailBulk,
  faUniversity,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/portfolio">
      <img src={LogoS} alt="logo" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/portfolio">
        <FontAwesomeIcon icon={faHomeLg} />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="experience-link"
        to="/experience"
      >
        <FontAwesomeIcon icon={faUser} />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="education-link"
        to="/education"
      >
        <FontAwesomeIcon icon={faUniversity} />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="projects-link"
        to="/projects"
      >
        <FontAwesomeIcon icon={faChessPawn} />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faMailBulk} />
      </NavLink>
    </nav>
  </div>
)

export default Sidebar
