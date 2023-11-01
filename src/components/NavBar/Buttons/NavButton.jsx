import React from 'react'
import { Tooltip } from 'react-tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import '../index.css';

export default function NavButton(props){
    const {icon, name, isActive, onClickCallback} = props;
    const buttonOnclick = () => onClickCallback(name);

    return (
        <>
            <Link to={`/${name}`} className={`control${isActive ? ' active-btn' : ''}`} data-tooltip-id={`${name}_tooltip`} data-tooltip-content={name} onClick={buttonOnclick}>
                <FontAwesomeIcon icon={icon} />
            </Link>
            <Tooltip id={`${name}_tooltip`} />
        </>
    );
}
