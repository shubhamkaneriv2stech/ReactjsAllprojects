import Profile from "../Pages/Profile/Profile";
import img from "../../assests/images/img.png";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../../stylesheet/DashBoard.css";

import SideBar from "../common/SideBar";
import StudentDetail from "../Pages/Student/StudentDetail";
import StudentList from "../Pages/Student/StudentList";
import Header from "../common/Header";
import FormValidation from "../Pages/Student/FormValidation";

const Approuter = () => {
  return (
    <Router>
      <SideBar img={img} />
      <Header />
      <Switch>
        <Route exact path="/" component={Profile} />

        <Route exact path="/table" component={StudentList} />
        <Route exact path="/table/:id" component={StudentDetail} />
        <Route exact path="/formValidation" component={FormValidation} />
        <Route exact path="/formValidation/:id" component={FormValidation} />
      </Switch>
    </Router>
  );
};

export default Approuter;
