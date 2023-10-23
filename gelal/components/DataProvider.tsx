"use client";
import { PropsWithChildren } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
import { GlobalData } from "./GlobalData";

import { useRouter } from "next/router";

const DataProvider = ({ children }: PropsWithChildren<any>) => {
  const [globalData, setGlobalData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { push: routerPush, query } = useRouter();
  console.log(query);

  useEffect(() => {
    async function fetch() {
      return axios
        .get("http://localhost:8888/api/gelals/detail", {
          params: { userId: "6530993f771321fde352c36c" },
        })
        .then((result) => {
          setGlobalData(result.data.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);

          routerPush("/not-found", undefined, { shallow: true });
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
