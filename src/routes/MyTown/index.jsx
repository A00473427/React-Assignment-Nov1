import React from 'react'
import './index.css';
import WeatherWidget from '../../components/WeatherWidget';

export default function MyTown(props){

    return (
        <>
            <div className="header-content">
            <div className="weather-widget">
                <div className="h-shape"></div>
                <div className="image">
                    <WeatherWidget/>
                </div>
            </div>
            <div className="right-header">
                <div className="t-shape"></div>
                <h1 className="name">
                    I'm Living in <span>Halifax</span>, 
                    A Coastal city
                </h1>
                <p>
                    Halifax is an economic centre of Atlantic Canada, home to a concentration of government offices and private companies. 
                    Major employers include the Department of National Defence, Dalhousie University, Nova Scotia Health Authority, Saint Mary's University, 
                    the Halifax Shipyard, various levels of government, and the Port of Halifax.
                </p>
            </div>
        </div>
        </>
    );
}
