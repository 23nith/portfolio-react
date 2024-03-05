import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-z.png'
import AnimatedLetters from '../AnimatedLetters';
import ComputersCanvas from './Computer';
import './index.scss';
import Logo from './Logo';
import matrix from '../../assets/videos/tech2.mp4'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['e','n','i','t','h']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']
    
    useEffect(() => {
      setTimeout(()=>{
        setLetterClass('text-animate-hover')
      }, 4000)
    }, [])
    
    return (
        <>
            <div className='all-home-page'>
                <video src={matrix} autoPlay loop muted />
                <div className="container home-page">
                    <div className="text-zone">
                        <h1>
                            <span className={letterClass}>H</span> 
                            <span className={`${letterClass} _12`}>i,</span> 
                            <br />
                            <span className={`${letterClass} _13`}>I</span> 
                            <span className={`${letterClass} _14`}>'m</span> 
                            <img src={LogoTitle} alt="developer" /> 
                            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={5}/>
                            <br />
                            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>
                        </h1>
                        <h2>Full Stack Web Developer / Software Engineer</h2>
                        {/* <Link to="/contact" className='flat-button'>CONTACT ME</Link> */}
                    </div>
                    <ComputersCanvas />
                </div>
                <Loader type="pacman"/>
            </div>
        </>
    )
}

export default Home