import React from "react";
import Style from "./Profile.module.css";
import Moment from "moment";
const Profile = () => {
  let details = {
    results: [
      {
        gender: "male",
        name: {
          title: "mr",
          first: "brad",
          last: "gibson",
        },
        location: {
          street: "9278 new road",
          city: "kilcoole",
          state: "waterford",
          postcode: "93027",
          coordinates: {
            latitude: "20.9267",
            longitude: "-7.9310",
          },
          timezone: {
            offset: "-3:30",
            description: "Newfoundland",
          },
        },
        email: "brad.gibson@example.com",
        login: {
          uuid: "155e77ee-ba6d-486f-95ce-0e0c0fb4b919",
          username: "silverswan131",
          password: "firewall",
          salt: "TQA1Gz7x",
          md5: "dc523cb313b63dfe5be2140b0c05b3bc",
          sha1: "7a4aa07d1bedcc6bcf4b7f8856643492c191540d",
          sha256:
            "74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480",
        },
        dob: {
          date: "1993-07-20T09:44:18.674Z",
          age: 26,
        },
        registered: {
          date: "2002-05-21T10:59:49.966Z",
          age: 17,
        },
        phone: "011-962-7516",
        cell: "081-454-0666",
        id: {
          name: "PPS",
          value: "0390511T",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/75.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
        },
        nat: "IE",
      },
    ],
    info: {
      seed: "fea8be3e64777240",
      results: 1,
      page: 1,
      version: "1.3",
    },
  };

  return (
    <div className="container">
      {details.results.length &&
        details.results.map((items, i) => {
          return (
            <div className={Style.main__body}>
              <div className="row gutters-sm">
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex flex-column align-items-center text-center">
                        <img
                          src={items.picture.large}
                          alt="Admin"
                          className="rounded-circle"
                          width="150"
                        />
                        <div className="mt-3">
                          <h4>
                            {items.name.title}.{items.name.first}
                            {items.name.last}
                          </h4>
                          <p className="text-secondary mb-1">
                            Full Stack Java Developer
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mt-3">
                    <ul className="list-group list-group-flush">
                      <li
                        className="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                        style={{ backgroundColor: "white" }}
                      >
                        <h6 className="mb-0">UserName</h6>
                        <span className="text-secondary">
                          {items.login.username}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Full Name</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {items.name.first} {items.name.last}
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0 mr-4">Email</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {items.email}
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0 mr-4">Gender</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {items.gender}
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0  mr-4">DOB</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {Moment(new Date(items.dob.date)).format(
                            "DD/MM/YYYY"
                          )}
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0  mr-4">Address</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {items.location.street}, {items.location.city}
                          {items.location.state}, {items.location.postcode}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row gutters-sm">
                    <div className="col-sm-6 mb-3">
                      <div className="card h-100">
                        <div className="card-body">
                          <h6>Registered Details</h6>
                          <hr />
                          <ul className="list-group list-group-flush">
                            <li
                              className="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                              style={{
                                backgroundColor: "white",
                                padding: "6px",
                              }}
                            >
                              <h6 className="mb-0">Registered Date</h6>
                              <span className="text-secondary">
                                {Moment(new Date(items.registered.date)).format(
                                  "MM/DD/YYYY"
                                )}
                              </span>
                            </li>

                            <li
                              className="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                              style={{
                                backgroundColor: "white",
                                padding: "6px",
                              }}
                            >
                              <h6 className="mb-0">Registered Age</h6>
                              <span className="text-secondary">
                                {items.registered.age}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Profile;
