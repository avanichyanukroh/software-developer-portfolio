import React, { useState, useLayoutEffect } from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
// import Image from '../components/image';
// import SEO from '../components/seo';

import Tilt from '../components/Tilt';
import iphone from '../images/iphone-mockup.png';
import flashbackApp from '../images/flashback-app.jpg';
import comicBackground from '../images/comic-background.jpg';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import HeroBackground from '../components/HeroBackground';

const projectRef1 = React.createRef();
const navbarRef = React.createRef();
const portfolioRef = React.createRef();

const IndexPage = () => {

    const [animProj1, setAnimProj1] = useState(false);
    const [navbarSticky, setNavbarSticky] = useState(false);
    const [gradientLayer, setGradientLayer] = useState({0: true, 1: false});

    useLayoutEffect(() => {
        const navbar = navbarRef.current.offsetHeight;
        const project1 = projectRef1.current.offsetHeight;
        const porfolio = portfolioRef.current.offsetHeight;

        const handleScroll = () => {
            if (window.scrollY >= window.innerHeight - navbar) {
                setNavbarSticky(true);
            }
            else {
                setNavbarSticky(false);
            }

            if (window.scrollY > porfolio) {
                setGradientLayer(prevState => { return {...prevState, 1: true}});
            }
            else {
                setGradientLayer(prevState => { return {...prevState, 1: false}});
            }

            if (window.scrollY > project1) {
                setAnimProj1(true);
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
                        }}
                    >
                        PORTFOLIO
                    </h1>
                    
                    <div ref={projectRef1}>
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
                    
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage
