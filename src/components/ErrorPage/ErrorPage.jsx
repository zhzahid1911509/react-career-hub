import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            Oops!!!Not Found <br />
            <Link to='/'>Go Back Home</Link>
        </div>
    );
};

export default ErrorPage;