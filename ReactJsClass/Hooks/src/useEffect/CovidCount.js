import React, { useEffect, useState } from "react";

const CovidCount = () => {
  const [country, setCountry] = useState("");

  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://covid19.mathdro.id/api/countries")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        // console.log(result.countries.name);
        setData(result);
      });
  }, []);

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <div>
      <label htmlFor="country">Enter Your Country Name</label>
      <input type="text" value={country} onChange={handleChange} />

      <p>Country Name is:{country}</p>
      <p>{data.name}</p>
    </div>
  );
};

export default CovidCount;
