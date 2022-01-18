import RegisterSuccess from "./SignupSuccess";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function AuthManager(props) {
    debugger;
    if (props.location.pathname == '/login') {
        return (<SignIn></SignIn>)
    } else if (props.location.pathname == '/signup') {
        return (<SignUp></SignUp>)
    } else if (props.location.pathname == '/signup-success') return (<RegisterSuccess></RegisterSuccess>)
}
