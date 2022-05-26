import React from 'react';
import './Intro.css';
import Github from '../../../img/github.png';
import LinkedIn from '../../../img/linkedin.png';
import Instagram from '../../../img/instagram.png';
import Vector1 from '../../../img/Vector1.png';
import Vector2 from '../../../img/Vector2.png';
import Boy from '../../../img/boy.png';
import Thumbup from '../../../img/thumbup.png';
import Crown from '../../../img/crown.png';
import Glassesman from '../../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
// i means intro
function Intro() {
    return (
        <div className='intro'>

            <div> {/*Blur Divs*/}
                <div className='blur'
                    style={
                        {background: 'rgb(238 210 255)'}
                }></div>
                <div className='blur'
                style={{
                    background:'#c1f5ff',
                    top:'65%',
                    width:'21rem',
                    height:'11rem',
                    left:'35%'
                }} ></div>
            </div>

            <div className='i-left'>
                <div className='i-name'>
                    <span>Hi! I Am</span>
                    <span>Waleed Hassan</span>
                    <span>Frontend Developer With High Level Of Experience in Web Designing and Development, Doing the Quality Work</span>
                </div>
                <button className='button i-button'>Get Services</button>
                <div className='i-icons'>
                    <a href='#'><img src={Github}
                            alt=''/></a>
                    <a href='#'><img src={LinkedIn}
                            alt=''/></a>
                    <a href='#'><img src={Instagram}
                            alt=''/></a>

                </div>
            </div>
            <div className='i-right'>
                <img src={Vector1}
                    alt=""/>
                <img src={Vector2}
                    alt=""/>
                <img src={Boy}
                    alt=""/>
                <img src={Glassesman}
                    alt=''/>
                <div style={
                    {
                        top: '-4%',
                        left: '68%'
                    }
                }>
                    <FloatingDiv image={Crown}
                        text1='Web'
                        text2='Developer'/>
                </div>
                <div style={
                    {
                        top: '18rem',
                        left: '0rem'
                    }
                }>
                    <FloatingDiv image={Thumbup}
                        text1={'Attractive'}
                        text2={'Designs'}/>
                </div>


            </div>

        </div>
    )
}

export default Intro
