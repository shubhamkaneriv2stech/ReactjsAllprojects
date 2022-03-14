import React, { useEffect, useState, useRef } from "react";

const RecipieFinder = () => {
  const API_KEY = "29a7aa40f4b9128ba2f0d4b23ffb5932";

  const APP_ID = "26552a97";
  const inputRef = useRef(null);
  const [ingredientList, updatedIngredientList] = useState([]);
  const [loading, setLoading] = useState(false);

  const search = () => {
    searchIngredient(inputRef.current.value);
  };

  const searchIngredient = (query) => {
    setLoading(true);
    let url = `search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`;

    fetch(url, { mode: "cors" })
      .then((response) => {
        console.log(response);
        console.log("---------------------------------------------");
        return response.json();
      })
      .then((res) => {
        console.log("Final response", res.hits);
        updatedIngredientList(res.hits);

        setLoading(false);
      })
      .catch((err) => {
        console.log("error", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    //  searchIngredient("eggs");
  });

  return (
    <div>
      <input type="text" placeholder="Search For Recipie" ref={inputRef} />
      <button onClick={search}>Search</button>

      {loading && <p>Loading......</p>}

      {ingredientList.map((item, i) => {
        return (
          <div key={i} className="wrapper">
            <strong>{item.recipe.label}</strong>
            <br />
            <img src={item.recipe.image} height="200px" width="300px" alt="" />
            {item.recipe.ingredientLines.map((step, a) => {
              return <p key={a}>{step}</p>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default RecipieFinder;
