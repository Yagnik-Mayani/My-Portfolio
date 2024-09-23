import './intro.css'
import  My from '../../assets/My.png'
import {Link} from 'react-scroll';
import Hire from '../../assets/Hire.png'

export default function intro() {
    return(
       <section id='intro'>
         <div className='introContent'>
          <span className='Hello'>Hello,</span>
          <span className='introtext'>I'm <span className='introName'>Yagnik</span> From Rajkot</span>
            <span className='MERN'>I'm  MERN Stack Developer</span>
            <p className='intropara'> I do Devloping with Unique skill and Development with different ideas💡.</p>
            <Link><button className='btn'><img src={Hire} className='hire'></img>Hire Me</button></Link>
         </div>
       </section>
    );
}