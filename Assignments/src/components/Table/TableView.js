import React from "react";

const TableView = ({ details, key, color, id }) => {
  console.log();

  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{details.first_name}</td>
      <td>{details.last_name}</td>

      <td className="text-center" style={{ display: "flex", height: "73px" }}>
        <img src={details.avatar} alt="mypic" height="20px" width="20px"></img>
        {details.username}
      </td>

      <td>{details.gender}</td>
      <td>{details.date_of_birth}</td>
      <td>{details.address.city} </td>
      <td>{details.address.street_name}</td>
      <td>{details.address.state}</td>
      <td>{details.address.country}</td>

      <td>{details.subscription.plan}</td>
      <td className={color}>
        <strong>{details.subscription.status}</strong>
      </td>
    </tr>
  );
};

export default TableView;
