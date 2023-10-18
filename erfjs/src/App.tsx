import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import DataProvider from "./DataProvider";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/demo" />} />
      <Route
        path="/:userId"
        element={
          <DataProvider>
            <Navbar />
            <Home />
          </DataProvider>
        }
      />
      <Route
        path="/:userId/skills"
        element={
          <DataProvider>
            <Navbar />
            <Skills />
          </DataProvider>
        }
      />
      <Route
        path="/:userId/experience"
        element={
          <DataProvider>
            <Navbar />
            <Experience />
          </DataProvider>
        }
      />
      <Route
        path="/:userId/projects"
        element={
          <DataProvider>
            <Navbar />
            <Projects />
          </DataProvider>
        }
      />
      <Route
        path="/:userId/contact"
        element={
          <DataProvider>
            <Navbar />
            <Contact />
          </DataProvider>
        }
      />
      <Route path="/page/not-found" element={<>Not found !!!</>} />
      <Route path="*" element={<Navigate to="/page/not-found" />} />
    </Routes>
  );
};

export default App;
