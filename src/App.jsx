import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import MoviesPage from "./pages/MoviesPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import Layout from "./layout/Layout.jsx";

const App = () => {
  return (
    <div className="px-20">
      <Layout />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
};
export default App;
