import React, { useContext } from "react";
import { admin } from "../model/admin.model";

const DataContext = React.createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvidor = ({ children }) => {
  const Admin = new admin();
  return (
    <DataContext.Provider
      value={{
        teacherAction: Admin.teacherAction,
        addStudent: Admin.addStudent,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
