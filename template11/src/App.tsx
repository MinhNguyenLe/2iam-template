import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./components/Loader";
import { GlobalData } from "./GlobalData";

const App = () => {
  const [globalData, setGlobalData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      return axios
        .get("http://localhost:8080/api/erfjs", {
          params: { userId: "abcd1234" },
        })
        .then((result) => {
          setGlobalData(result.data.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }

    fetch();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <GlobalData.Provider value={globalData}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </GlobalData.Provider>
      )}
    </>
  );
};

export default App;
