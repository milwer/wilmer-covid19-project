import React, { useState } from "react";
import "../styles/Countries.scss";
import useGetCountries from "../hooks/useGetCountries";
import { useGetCountry } from "../hooks/useGetCountry";
import Card from "../components/Card";
import ListCases from "../components/ListCases";

const apiUrl = "http://localhost/covid19-api/index.php/country/list";

const Countries = () => {
  const countries = useGetCountries(apiUrl);

  // Get country info
  const [countryId, setCountryId] = useState("");
  const url =
    countryId &&
    `http://localhost/covid19-api/index.php/cases/list?countryId=${countryId}`;
  const { status, data, error } = useGetCountry(url);

  var handleChange = async (e) => {
    const countryId = e.target.value;
    if (countryId) {
      setCountryId(countryId);
    }
  };

  const countryInfo = data;

  return (
    <div className="Countries">
      <br />
      <br />
      <div className="container countries-nav">
        <div className="row">
          <div className="col">
            <div className="card-body">
              <h3 className="card-title">
                <b>Cases by countries!</b>
              </h3>
              <p className="card-text">
                Please choose a country for display the description
              </p>
            </div>
            <div className="form-group">
              <select
                className="form-control form-select-lg mb-3"
                onChange={(event) => handleChange(event)}
              >
                <option value="">-- Select --</option>
                {countries.map((country) => {
                  if (country.alpha2code != null) {
                    return (
                      <option
                        key={`country-${country.alpha2code}`}
                        value={country.alpha2code}
                      >
                        {country.name}
                      </option>
                    );
                  }
                })}
              </select>
            </div>
          </div>
          <div className="col">
            {status === "idle" && (
              <div> Let's get started by searching information! </div>
            )}
            {status === "error" && <div>{error}</div>}
            {status === "fetching" && <div className="loading"></div>}
            {status === "fetched" && (
              <>
                <Card country={countryInfo} />
              </>
            )}
          </div>
        </div>
        <div>
          {status === "fetched" && (
            <>
              {countryInfo.province.length > 0 ? (
                <ListCases province={countryInfo.province} />
              ) : null}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Countries;
