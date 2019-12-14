import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

import Tilt from '../components/Tilt';
import iphone from '../images/iphone-mockup.png';
import flashbackApp from '../images/flashback-app.jpg';
import comicBackground from '../images/comic-background.jpg';

const IndexPage = () => {


    return (
        <Layout>
            {console.log('test',  window.innerWidth-100)}
            <SEO title='Home' />
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <div style={{ maxWidth: '300px' }}>
            <Image />
            <Link to="/page-2/">Go to page 2</Link>
            </div>
            <div style={{marginTop: '500px', marginBottom: '500px'}}>
                <div>
                    <div
                        style={{
                            // display: 'flex',
                            // alignItems: 'center',
                            // justifyContent: 'center',
                            width: 400,
                            position: 'relative',
                            top: 200,
                            bottom: 0,
                            left: -200,
                            zIndex: 40,
                            marginTop: 'auto',
                            marginBottom: 'auto',
                            border: '1px solid green'
                        }}
                    >
                        <h1
                            style={{
                                color: 'white',
                                fontSize: 72,
                                textShadow: '2px 2px black'
                            }}
                        >
                            Flashback
                        </h1>
                        <button
                            style={{
                                padding: '8px 24px',
                                color: 'white',
                                backgroundColor: 
                            }}
                        >
                            View Project
                        </button>
                    </div>
                    <Tilt
                        className="parallax-effect"
                        style={{
                            height: '450px',
                            width: 'auto',
                            backgroundImage: `url(${comicBackground})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            borderRadius: 1
                        }}
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
            <div style={{marginTop: '500px', marginBottom: '500px'}}>
                <Tilt
                    tiltMaxAngleX="37"
                    tiltMaxAngleY="37"
                    glareEnable={true}
                    glareMaxOpacity={0.8}
                    glareColor="#ffffff"
                    glarePosition="bottom"
                >
                    <div
                        style={{
                            height: '300px',
                            width: 'auto',
                            backgroundImage: `url(${comicBackground})`,
                        }}
                    >
                        
                    </div>
                </Tilt>
            </div>
            
            

        </Layout>
    )
}

export default IndexPage
