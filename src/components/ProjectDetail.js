import React from 'react';
import Button from '../components/Button';
import { Link } from 'gatsby';

const ProjectDetail = (props) => {
    const { isProjectDetail, handleProjectDetailClose, projectData } = props;

    return (
        <div
            className={isProjectDetail ? 'project-detail-container slideIn' : 'project-detail-container slideOut'}
            style={{background: 'rgba(0, 0, 0, .25)'}}
        >
            <div style={{position: 'absolute', float: 'right', zIndex: 100, top: 0, right: 0}}>
                <div className="icon" onClick={handleProjectDetailClose}>
                    <div className="arrow" />
                </div>
            </div>
            <div
                style={{height: '100%', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}
                className={isProjectDetail ? 'fadeIn fadeInDelay' : 'hidden'}
            >

                <h2 style={{fontSize: 54, marginBottom: '0', color: 'white'}}>{projectData.title}</h2>
                <p style={{marginBottom: '32px', color: '#C9C9C9'}}>{projectData.date}</p>
                <p style={{marginBottom: '32px', color: '#C9C9C9'}}>{projectData.description}</p>
                <p style={{marginBottom: '32px', color: '#C9C9C9'}}>{projectData.technology ? `Technology: ${projectData.technology}` : null}</p>
                <p style={{marginBottom: '32px',color: '#C9C9C9'}}>{projectData.preview ? `Preview: ` : null}</p>
                <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                    <img style={{height: '100px', width: 'auto'}} src={require(`../images/battlefield-5-banner.jpg`)} />
                </div>
                <div style={{display: 'flex', justifyContent: 'flex-start', marginTop: 'auto'}}>
                    <Button
                        text="Live Site"
                        textColor="white"
                        backgroundColor="#c70d3a"
                        animationStart={isProjectDetail}
                        style={{
                            marginRight: '32px'
                        }}
                        isLink
                        href="https://www.google.com"
                        // onClick={() => handleProjectDetailClick(1)}
                    />
                    <Button
                        text="App Code"
                        textColor="#c70d3a"
                        backgroundColor="#c70d3a"
                        animationStart={isProjectDetail}
                        style={{
                            marginRight: '32px'
                        }}
                        isBordered
                        isLink
                        href="https://www.google.com"
                        // onClick={() => handleProjectDetailClick(1)}
                    />
                    <Button
                        text="API Code"
                        textColor="#c70d3a"
                        backgroundColor="#c70d3a"
                        animationStart={isProjectDetail}
                        style={{
                            marginRight: '32px'
                        }}
                        isBordered
                        isLink
                        href="https://www.google.com"
                        // onClick={() => handleProjectDetailClick(1)}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProjectDetail;
