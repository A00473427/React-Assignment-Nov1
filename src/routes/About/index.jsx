import React from 'react'
import './index.css';
import myImage from "../../assets/images/me.jpeg";
import myResume from "../../assets/Documents/Deepakk-Vignesh-Jayamohan-Resume.pdf"
import ICONS from '../../constants/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function About(props){

    return (
        <>
            <div className="header-content">
            <div className="left-header">
                <div className="h-shape"></div>
                <div className="image">
                    <img src={myImage} alt="" />
                </div>
            </div>
            <div className="right-header">
                <h1 className="name">
                    Hi, I'm <span>Deepakk Vignesh Jayamohan</span>, 
                    A Frontend Developer.
                </h1>
                <p>
                    I'm currently a Graduate Student pursuing MSCDA. I will be graduating in 2024. Meanwhile I also intern as a Full stack developer at KardioDiagnostix.
                </p>
                <div className="btn-con">
                    <a className="main-btn" href={myResume} download={true}>
                        <span className="btn-text">Download CV</span>
                        <span className="btn-icon"><FontAwesomeIcon icon={ICONS.DOWNLOAD} /></span>
                    </a>
                </div>
            </div>
        </div>
        </>
    );
}
