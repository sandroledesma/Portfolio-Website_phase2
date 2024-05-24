import { useRouteError, Link } from "react-router-dom";

function Error() {
    const error = useRouteError();
    return(
        <div>
        <h1 className="text-center">"Sorry, haven't gotten this far yet 😟"</h1>
        </div>
    )
}

export default Error;