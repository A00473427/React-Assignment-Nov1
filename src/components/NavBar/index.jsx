import React, { useState } from 'react'
import NavButton from './Buttons/NavButton';
import ICONS from '../../constants/icons';
import ROUTES from '../../constants/routes';
import './index.css';

export default function NavBar(props){

    const getModifiedUrlPath = (str) => {
        return str.replace('%20', " ").replace('/', '');
    }
    const [activeRoute, setActiveRoute] = useState(getModifiedUrlPath(window.location.pathname))
    const onRouteChange = (routeName) => {
        setActiveRoute(routeName);
    }

    return (
        <>
            <div className="controls" >
                <NavButton 
                    icon={ICONS.ABOUT_ME}
                    name={ROUTES.ABOUT_ME}
                    isActive={activeRoute === ROUTES.ABOUT_ME}
                    onClickCallback={onRouteChange}
                />
                <NavButton 
                    icon={ICONS.MY_TOWN}
                    name={ROUTES.MY_TOWN}
                    isActive={activeRoute === ROUTES.MY_TOWN}
                    onClickCallback={onRouteChange}
                />
            </div>
        </>
    );
}
