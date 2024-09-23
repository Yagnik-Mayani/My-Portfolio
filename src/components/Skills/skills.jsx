import './skills.css'
import Mongo from '../../assets/mongodb.png'
import Express from '../../assets/express-js.png'
import React from '../../assets/reactjs.png'
import Node from '../../assets/nodejs.png'
import Html from '../../assets/Html.png'
import Css from '../../assets/Css.png'
import Javascript from '../../assets/javascript.png'
import Github from '../../assets/Github.png'
import Bootstrap from '../../assets/Bootstrap.png'
import Git from '../../assets/Git.png'
export default function Skills(){
    return(
        <div className="skills" id='Skill'>
        <h1 className='h1'>Skills</h1>
        <div className='img'>
          <img src={Mongo} className='Mongo'></img>
          <img src={Express} className='Express'></img>
          <img src={React} className='React'></img>
          <img src={Node} className='Node'></img>
          <img src={Html} className='Html'></img>
          </div>
          <br></br><br></br><br></br>
          <div className='img2'>
          <img src={Css} className='Css'></img>
          <img src={Javascript} className='Javascript'></img>
          <img src={Github} className='Github'></img>
          <img  src={Git} className='Git'></img>
          <img src={Bootstrap} className='Bootstrap'></img>
        </div>
        </div>
    );
}