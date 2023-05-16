import React from 'react'
import profileImg from '../../assets/profile-img.png'
import Icon from '../../assets/billing.svg'
import './home.css'
import {FaGithub, FaCodepen, FaLinkedin} from 'react-icons/fa'


const Home = () => {
  return (
    <section className='home' id='home'>
        <div className="homeWrapper">
            <div className='homeContainer container'>
                <p className='homeSubtitle text-cs'>
                    Hello, <span>my name is</span>
                </p>
                <h1 className='homeTitle text-cs'>
                    <span>Anthony</span>
                </h1>
                <p className='homeJob'>
                    <span className='text-cs'>I'm a</span><b>Web Developer</b>
                </p>
                <div className='homeImage'>
                    <div className="homeBanner">
                        <img src={profileImg} alt='' className='homeProfile'/>
                    </div>
                    <p className='homeData homeData-one'>
                        <span className='text-lg'>1</span>
                        <span className='text-sm text-cs'>
                            Year of <span>Experience</span>
                        </span>
                    </p>
                    <p className='homeData homeData-two'>
                        <span className='text-lg'>3  </span>
                        <span className='text-sm text-cs'>
                            Projects <span>Completed</span>
                        </span>
                    </p>
                </div>
                <p className='homeText'>
                    From Colombia. Passionate about FrontEnd. I love creating beautiful and responsive websites satisfying the user experience.
                </p>
                <div className='homeSocials'>
                    <a href='https://anthonymolinam.github.io/portfolio/' className='homeSocial'>
                        <FaLinkedin/>
                    </a>
                    <a href='https://github.com/anthonymolinam' className='homeSocial'>
                        <FaGithub/>
                    </a>
                    <a href="https://codepen.io/tony21019" className='homeSocial'>
                        <FaCodepen/>
                    </a>
                </div>
                <div className="homeBtns">
                <a href="https://drive.google.com/uc?id=1XwP6kBdYGswUuFYgKySILg2onQJULa46&export=download" target="_blank" className='boton'>
                <div className='download'>
                    <div className="iconDownload">
                        <img src={Icon} alt="" className='icon' />
                    </div>
                    <div className="textWrapper">
                        <p className='title'>Resume (CV)</p>
                        <p className='subtitle'>Download</p>
                    </div>
                </div>
                </a>
                </div>
            </div>
        </div>
        <div className='spacer wave'></div>
    </section>
  )
}

export default Home