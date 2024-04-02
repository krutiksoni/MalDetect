import { useRouteError } from "react-router-dom";
import errorImage from "../icons/error_img.png";

const Error = () =>{
    const err = useRouteError();
    return (
        <div className="error-content">
            <h1>MalDetect</h1>
            <h1>Crash Landing!!</h1>
            <h2>{"Error " + err.status + " : " + err.statusText}</h2>
            <img src={errorImage} alt="Error 404" />
            <h2>The page you navigated to does not exist</h2>
            <h3>The page you were looking for is out of reach.</h3>
        </div>
    );
};

export default Error;