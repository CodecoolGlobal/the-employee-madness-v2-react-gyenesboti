import { Link } from "react-router-dom";

const Error = () => {
    return (
        <>
        <h1>Oooops...</h1>
        <p>An error has occured...</p>
        <p>Invalid number input</p>
        <Link to="/years-of-experience">
            <button>Cancel</button>
        </Link>
        </>
    )
}

export default Error