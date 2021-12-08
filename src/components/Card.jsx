import React from "react";

const Card = (props) => {
  const countryInformation = props.country;

  return (
    <div>
      <div className="card-nav">
        <div className="card-body">
          <h3 className="card-title">
            <b>{countryInformation.country}</b>
          </h3>
          <p className="card-text">
            Browse through the data, with strategic information and get to know
            everything about COVID-19 in a transparent and analytical way.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Confirmed Cases</b> : {countryInformation.confirmed}
          </li>
          <li className="list-group-item">
            <b>Recovered Cases</b> : {countryInformation.recovered}
          </li>
          <li className="list-group-item">
            <b>Critical Cases</b> : {countryInformation.critical}
          </li>
          <li className="list-group-item">
            <b>Deaths</b> : {countryInformation.deaths}
          </li>
          <li className="list-group-item">
            <b>Last Update Date</b> : {countryInformation.lastUpdate}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
