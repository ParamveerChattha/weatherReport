import React from 'react';

import PropTypes from 'prop-types';

import 'owfont/css/owfont-regular.css';

const Details = ({
  weather, date, humidity, temp,
}) => {
  Details.propTypes = {
    weather: PropTypes.instanceOf(Object).isRequired,
    date: PropTypes.instanceOf(Object).isRequired,
    humidity: PropTypes.string.isRequired,
    temp: PropTypes.string.isRequired,
  };
  return (
    <div className="row weather-row">
      <div className="col-md-2">

        <div className={`owf owf-${weather.id}`} />
        <br />
        <span>
          {weather.main}
        </span>
      </div>
      <div className="col-md-3 weather-row__date">
        {date.format('MMM D')}
        <br />
        {date.format('ha')}
      </div>
      <div className="col-md-3">
        <span>
          {Math.round(humidity)}
%
          <br />
humidity
        </span>
      </div>
      <div className="col-md-3">
        <span>
          {Math.round(temp)}
          <sup>
o
          </sup>
          <span>
C
          </span>
        </span>

      </div>
    </div>);
};

export default Details;
