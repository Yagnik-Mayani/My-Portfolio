import './Education.css'
import Gujrat from '../../assets/Gujarat_University.png'
import Somlalit from '../../assets/somlalit.png'
export default function Education() {
    return( 
    <div className='EDU' id='EDU'>
<h1 className='edu'>Education</h1>
<img src={Gujrat} className='Gu'></img>
<h2 className='h2'>Gujrat University</h2>
<h4 className='h4'>2022-2025</h4>
<img src={Somlalit} className='college'></img>
</div>
);
}