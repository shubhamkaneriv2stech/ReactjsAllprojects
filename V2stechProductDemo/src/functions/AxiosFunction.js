import axios from "axios";

export const SaveStudentData = (values, api, history, setResponse) => {
  return axios
    .post("http://localhost:8080/user/login", values)
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};
