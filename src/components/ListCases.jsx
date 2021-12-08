import React from "react";

const ListCases = (props) => {
  const provinces = props.province;

  return (
    <div>
      <div className="card-body">
        <h3 className="card-title">
          <b>List of cases by state/province</b>
        </h3>
        <p className="card-text">
          From states/provinces, stay informed on where COVID-19 is spreading to
          understand how it could affect families, commerce, and travel.
        </p>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Province</th>
            <th scope="col">Active cases</th>
            <th scope="col">Confirmed cases</th>
            <th scope="col">Deaths</th>
            <th scope="col">Recovered</th>
          </tr>
        </thead>
        <tbody>
          {provinces.map((province, index) => (
            <tr key={index}>
              <td>{province.province}</td>
              <td>{province.active}</td>
              <td>{province.confirmed}</td>
              <td>{province.deaths}</td>
              <td>{province.recovered}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListCases;
