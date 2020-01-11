import React from 'react';

const ProjectDetail = (props) => {
    return (
        <div className={props.className} style={{background: 'rgba(0, 0, 0, .25)'}}>
            <div style={{position: 'relative', float: 'right', top: -24, right: 8}}>
                <div className="icon" onClick={props.handleProjectDetailClose}>
                    <div className="arrow" />
                </div>
            </div>
            <h2 style={{marginBottom: '8px'}}>{props.title}</h2>
            <p>{props.description}</p>
            <p>{props.technology ? `Technology: ${props.technology}` : null}</p>
        </div>
    );
}

export default ProjectDetail;
