import React from 'react';
import PropTypes from 'prop-types';

const Details = ({weather, date, humidity, temp,})=>{
    Details.prototype = {
        weather: PropTypes.instanceOf(Object).isRequired,
        date: PropTypes.instanceOf(Object).isRequired,
        humidity: PropTypes.string.isRequired,
        temp: PropTypes.string.isRequired,
    };
    return(
        <div>


        </div>
    )
};
export default Details;