import { Link } from "react-router-dom";
import pageNotFoundImage from "../img/not_found.png";

function PageNotFound() {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="flex flex-col md:flex-row text-amber-50 bg-stone-800 p-4   md:p-10 rounded-lg justify-between items-center gap-8">
        <div className="flex flex-col md:justify-center md:Fitems-center">
          <h2 className="text-4xl font-bold mb-8">Page not found!</h2>
          <h6 className="text-2xl my-2">Seems like you're lost...</h6>
          <h6 className="text-xl mb-8">Wanna see some awesome products?</h6>
          <Link to="/">
            <h6 className="underline text-xl text-center">Click here!</h6>
          </Link>
        </div>
        <img src={pageNotFoundImage} alt="page not found" />
      </div>
    </div>
  );
}

export default PageNotFound;
