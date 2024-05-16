import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProjectsHomePage from "./pages/ProjectsHomePage";
import PhotographyHomePage from "./pages/PhotographyHomePage/PhotographyHomePage";
import BlogHomePage from "./pages/BlogHomePage";
import HighlightsPage from "./pages/HighlightsPage";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/projects' element={<ProjectsHomePage />} />
        <Route path='/photography' element={<PhotographyHomePage />} />
        <Route path='/blog' element={<BlogHomePage />} />
        <Route path='/highlights' element={<HighlightsPage />} />
        <Route
          path='/photography/gallery/:id'
          element={<Button name='Someting' />}
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
