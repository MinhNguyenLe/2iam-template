import { PropsWithChildren } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./components/Loader";
import { GlobalData } from "./GlobalData";
import { useNavigate, useParams } from "react-router-dom";

const DataProvider = ({ children }: PropsWithChildren) => {
  const [globalData, setGlobalData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { userId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    async function fetch() {
      return axios
        .get("http://localhost:8080/api/erfjs/detail", {
          params: { userId },
        })
        .then((result) => {
          setGlobalData(result.data.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);

          navigate("/page/not-found");

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
        <GlobalData.Provider value={globalData}>{children}</GlobalData.Provider>
      )}
    </>
  );
};

export default DataProvider;
