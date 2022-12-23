import React, { useContext } from "react";

const DataContext = React.createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvidor = ({ children }) => {
  return (
    <DataContext.Provider
      value={{
        hello: () => {
          console.log("Hello WOlrd");
        },
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
