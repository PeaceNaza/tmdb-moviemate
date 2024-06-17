import { Link } from "react-router-dom";
import Header from "../components/Layouts/Header";
import Poster from "../components/Layouts/Poster";
import Button from "../components/Button";

const Homepage = () => {
  return (
    <>
      <Header />
      <main className="mt-10 mb-20 flex">
        <div className="w-1/2">
          <h1 className="text-2xl md:text-4xl lg:text-7xl mt-36">
            Learn more about your favourite movies
          </h1>
          {/**/}

          <div className="mt-10 flex gap-8">
            <Link to={"/movies"}>
              <Button variant="primary">Get started</Button>
            </Link>

            <Link to={"/movies"}>
              <Button variant="outline">I am feeling lucky</Button>
            </Link>
          </div>
        </div>

        <div className="w-1/2">
          <div className="grid grid-cols-6 gap-1">
            <div className="col-start-1 col-span-3">
              <Poster movieId={183} />
            </div>
            <div className="col-start-1 col-end-3"> </div>
            <div className="col-end-7 col-span-3">
              <Poster movieId={20} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Homepage;
