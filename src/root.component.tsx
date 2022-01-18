import { BrowserRouter, Route } from "react-router-dom";
import AuthManager from "./Components/AuthManager";

export default function Root(props) {
  let pathName=window.location.pathname;
  return <BrowserRouter><Route path={pathName} component={AuthManager} />
  </BrowserRouter>
}