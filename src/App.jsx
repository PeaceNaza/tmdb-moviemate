import Homepage from "./pages/Homepage";
import MovieLists from "./pages/MovieLists";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Moviedetails from "./pages/Moviedetails";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <div className="px-5 md:px-20">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movies" element={<MovieLists />} />
          <Route path="/movie/:movieId" element={<Moviedetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
