import React, { useState, useLayoutEffect } from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
// import Image from '../components/image';
// import SEO from '../components/seo';

import Tilt from '../components/Tilt';
import iphone from '../images/iphone-mockup.png';
import flashbackApp from '../images/flashback-app.jpg';
import comicBackground from '../images/comic-background.jpg';
import battleFieldBackground from '../images/battlefield-5-banner.jpg';
import brickWallBackground from '../images/brick-wall-background.jpg';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import HeroBackground from '../components/HeroBackground';

const projectRef1 = React.createRef();
const projectRef2 = React.createRef();
const projectRef3 = React.createRef();
const navbarRef = React.createRef();
const portfolioRef = React.createRef();

const IndexPage = () => {

    const [animProj1, setAnimProj1] = useState(false);
    const [animProj2, setAnimProj2] = useState(false);
    const [animProj3, setAnimProj3] = useState(false);
    const [navbarSticky, setNavbarSticky] = useState(false);
    const [gradientLayer, setGradientLayer] = useState({0: true, 1: false});

    useLayoutEffect(() => {
        const navbar = navbarRef.current.offsetHeight;
        let portfolio = portfolioRef.current;
        let project1 = projectRef1.current;
        let project2 = projectRef2.current;
        let project3 = projectRef3.current;

        const isFullyVisible = (el) => {
            const elBound = el.getBoundingClientRect();

            const top = elBound.top;
            const bottom = elBound.bottom;

            return ((top >= 0) && (bottom <= window.innerHeight));
        }

        const isInArea = (el) => {
            const elBound = el.getBoundingClientRect();

            const top = elBound.top;
            const bottom = elBound.bottom;

            return ((top <= 0) && (bottom >= 0));
        }

        const handleScroll = () => {
            console.log(window.scrollY, isFullyVisible(portfolio));
            if (window.scrollY >= window.innerHeight - navbar) {
                setNavbarSticky(true);
            }
            else {
                setNavbarSticky(false);
            }

            if (isInArea(portfolio)) {
                setGradientLayer(prevState => { return {...prevState, 1: true}});
            }
            else {
                setGradientLayer(prevState => { return {...prevState, 1: false}});
            }

            if (isFullyVisible(project1)) {
                setAnimProj1(true);
            }

            if (isFullyVisible(project2)) {
                setAnimProj2(true);
            }

            if (isFullyVisible(project3)) {
                setAnimProj3(true);
            }

        }
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    return (
        <Layout>
            {/* <SEO title='Home' /> */}
            <div className="gradient-background-0" />
            <div
                className={
                    gradientLayer[1] ?
                    'gradient-background-1 gradientFadeIn'
                    :
                    'gradient-background-1 gradientFadeOut'
                }
            />
            <div className="hero-container">
                <HeroBackground />
                <Navbar navbarSticky={navbarSticky} ref={navbarRef} />
            </div>
            <div
                style={{
                    marginTop: '250px',
                    marginBottom: '250px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    maxWidth: 960,
                    padding: `0px 1.0875rem 1.45rem`,
                    paddingTop: 0,
                }}
            >
                <div ref={portfolioRef}>
                    <h1
                        style={{
                            color: 'white',
                            fontFamily: 'Roboto, sans-serif',
                            marginBottom: '500px'
                        }}
                    >
                        PORTFOLIO
                    </h1>
                    
                    <div
                        ref={projectRef1}
                        style={{
                            marginBottom: '500px'
                        }}
                    >
                        <h2
                            className={animProj1 ? 'fadeIn' : 'hidden'}
                            style={{
                                color: 'white',
                                fontSize: '3em',
                                textShadow: '2px 4px 3px rgba(0,0,0,0.75)',
                                fontFamily: `"Roboto", sans-serif`,
                                textTransform: 'uppercase',
                                display: 'inline-block',
                                position: 'relative',
                                top: 250,
                                bottom: 0,
                                left: -50,
                                zIndex: 40
                            }}
                        >
                            Flashback
                        </h2>
                        <Button
                            text="View Project"
                            textColor="white"
                            backgroundColor="#c70d3a"
                            animationStart={animProj1}
                            style={{
                                position: 'relative',
                                top: 300,
                                bottom: 0,
                                left: -355,
                                zIndex: 40
                            }}
                        />
                        <Tilt
                            className={animProj1 ? 'growIn parallax-effect' : 'hidden parallax-effect'}
                            backgroundImage={comicBackground}
                        >
                            <div className="inner-element">
                                <div
                                    style={{
                                        height: '500px', 
                                        width: '800px',
                                        position: 'relative',
                                        bottom: 32,
                                        left: 0,
                                        overflow: 'hidden'
                                    }}
                                >
                                    <img
                                        src={iphone}
                                        alt="i phone"
                                        style={{
                                            height: '100%', 
                                            width: 'auto',
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            zIndex: 20,
                                            marginLeft: 'auto',
                                            marginRight: 'auto'
                                        }}
                                    />
                                    <img
                                        src={flashbackApp}
                                        alt="flashback app"
                                        style={{
                                            height: '375px',
                                            width: 'auto',
                                            position: 'absolute',
                                            bottom: 38,
                                            left: 0,
                                            right: 8,
                                            zIndex: 10,
                                            marginLeft: 'auto',
                                            marginRight: 'auto',
                                            borderRadius: 8
                                        }}
                                    />
                                </div>
                            </div>
                        </Tilt>
                    </div>

                    <div
                        ref={projectRef2}
                        style={{
                            marginBottom: '500px'
                        }}
                    >
                        {/* <h2
                            className={animProj2 ? 'fadeIn' : 'hidden'}
                            style={{
                                color: 'white',
                                fontSize: '3em',
                                textShadow: '2px 4px 3px rgba(0,0,0,0.75)',
                                fontFamily: `"Roboto", sans-serif`,
                                textTransform: 'uppercase',
                                display: 'inline-block',
                                position: 'relative',
                                top: 250,
                                bottom: 0,
                                left: -50,
                                zIndex: 40
                            }}
                        >
                            Warp Zone
                        </h2> */}
                        <Button
                            text="View Project"
                            textColor="white"
                            backgroundColor="#c70d3a"
                            animationStart={animProj2}
                            style={{
                                position: 'relative',
                                top: 600,
                                left: 770,
                                zIndex: 40
                            }}
                        />
                        <Tilt
                            className={animProj2 ? 'growIn parallax-effect' : 'hidden parallax-effect'}
                            backgroundImage={battleFieldBackground}
                        >
                            <div className="inner-element">
                                <div
                                    style={{
                                        height: '500px', 
                                        width: '800px',
                                        position: 'relative',
                                        bottom: 32,
                                        left: 0,
                                        overflow: 'hidden'
                                    }}
                                >
                            <h2
                                style={{
                                    fontSize: '2em',
                                    textShadow: '2px 4px 3px rgba(0,0,0,0.75)',
                                    fontFamily: `"Roboto", sans-serif`,
                                    textTransform: 'uppercase',
                                    display: 'inline-block',
                                    zIndex: 40,
                                    color: '#f9ca24',
                                    marginLeft: 'auto',
                                    marginRight: 'auto'
                                }}
                            >
                                Warp Zone
                            </h2>
                                    <h3
                                        style={{
                                            display: 'inline-block',
                                            position: 'absolute',
                                            top: '50%',
                                            left: 0,
                                            right: 0,
                                            zIndex: 20,
                                            marginLeft: 'auto',
                                            marginRight: 'auto',
                                            textAlign: 'center',
                                            color: 'white',
                                            textShadow: '2px 4px 3px rgba(0,0,0,0.75)'
                                        }}
                                    >
                                        Discover Your Next Game
                                    </h3>
                                </div>
                            </div>
                        </Tilt>
                    </div>
                    
                    <div
                        ref={projectRef3}
                        style={{
                            marginBottom: '500px'
                        }}
                    >
                        <h2
                            className={animProj3 ? 'fadeIn' : 'hidden'}
                            style={{
                                color: 'white',
                                fontSize: '1.5em',
                                textShadow: '2px 4px 3px rgba(0,0,0,0.75)',
                                fontFamily: `"Roboto", sans-serif`,
                                display: 'inline-block',
                                position: 'relative',
                                top: 250,
                                bottom: 0,
                                left: 64,
                                zIndex: 40
                            }}
                        >
                            What are YOU watching next?
                        </h2>
                        <Button
                            text="View Project"
                            textColor="white"
                            backgroundColor="#c70d3a"
                            animationStart={animProj3}
                            style={{
                                position: 'relative',
                                top: 300,
                                bottom: 0,
                                left: -200,
                                zIndex: 40
                            }}
                        />
                        <Tilt
                            className={animProj3 ? 'growIn parallax-effect' : 'hidden parallax-effect'}
                            backgroundImage={brickWallBackground}
                            isDarken
                        >
                            <div className="inner-element">
                                {/* <p>What are YOU watching next?</p> */}
                                <div
                                    style={{
                                        height: '100%',
                                        width: 'auto',
                                        position: 'relative',
                                        top: -100,
                                        right: -300,
                                        zIndex: 20
                                    }}
                                >
                                    <h3 className="neon-text">Fla<span className=".neon-anim-offset">v</span>orus</h3>
                                </div>

                            </div>
                        </Tilt>
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default IndexPage
