import './navbar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll';
import Contact from '../../assets/Contact-Me.png'
export default function navbar() {
    return(
        <nav className='navbar'>
            <img src={logo} className='logo'></img>
            <div className='desktopMenu'>
              <a className='desktopMenuListItem' href='#intro'>Home</a>
              <a className='desktopMenuListItem' href='#Skill'>Skills</a>
              <a className='desktopMenuListItem' href='#EDU'>Education</a>
              <a className='desktopMenuListItem' href='#Contact'>Contact</a>

            </div>
        </nav>
    );
}