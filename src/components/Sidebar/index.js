import {Link} from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/developer.png'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/portfolio'>
            <img src={LogoS} alt="logo" />
        </Link>
    </div>


)

export default Sidebar