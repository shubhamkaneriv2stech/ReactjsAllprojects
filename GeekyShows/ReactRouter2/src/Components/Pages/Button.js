import { useHistory } from "react-router-dom";

function Button() {
  let history = useHistory();

  function handleClick() {
    history.push("/");
    //history.goBack("/");
    // history.goForward();
  }
  return (
    <button className="btn btn-danger" type="button" onClick={handleClick}>
      click me
    </button>
  );
}

export default Button;
