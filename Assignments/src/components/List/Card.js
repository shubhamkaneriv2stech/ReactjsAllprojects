import React from "react";
import { useState } from "react";

import Style from "./List.module.css";

const Card = (props, key) => {
  // console.log(props);
  // console.log(props.details.hours);

  const [show, setshow] = useState(false);

  const tableShow = () => {
    setshow(!show);
  };

  return (
    <div className={Style.cards} key={key}>
      <div className={Style.card}>
        <img
          src={props.details.logo}
          alt="mypic"
          className={Style.card__img}
        ></img>
        <div className={Style.card__info}>
          <h2 className={Style.card__title}>{props.details.name}</h2>
          <h3 className={Style.card__title}>{props.details.type}</h3>
          <div className="d-flex justify-content-start ">
            <h4>Description:</h4>
            <p className={Style.desc}>{props.details.description}</p>
          </div>

          <div className="d-flex justify-content-start">
            <h4>Review:</h4>
            <p className={Style.desc}>{props.details.review}</p>
          </div>
          <div className="d-flex justify-content-start">
            <h4>Address:</h4>
            <p className={Style.desc}>{props.details.address}</p>
          </div>
          <div className="d-flex justify-content-start">
            <h4>Phone:</h4>
            <p className={Style.desc}>{props.details.phone_number}</p>
          </div>

          <button className="btn btn-primary" onClick={tableShow}>
            Hours
          </button>
          <br />
          <br />
          <div>
            <table className="table table-hover table-striped">
              <thead>
                <tr>
                  <th scope="col">Day</th>
                  <th scope="col">Open At</th>
                  <th scope="col">Closed At</th>
                  <th scope="col">Closed/open</th>
                </tr>
              </thead>
            </table>

            {show &&
              Object.entries(props.details.hours).map(([key, value], i) => {
                return (
                  <table class="table table-hover table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">{key}</th>
                        <td>{value.opens_at}</td>
                        <td>{value.closes_at}</td>
                        <td>{value.is_closed ? "Closed" : "Open"}</td>
                      </tr>
                    </tbody>
                  </table>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
