import React, { useState } from "react";
import { useData } from "../../context/DataProvidor";

const AdminSetting = () => {
  const [pass, setPass] = useState("");
  const { setSelectedPath, setDefaultPassword, currentDefault } = useData();
  setSelectedPath("setting");
  return (
    <div>
      <h4>Setting</h4>
      <div>Current Default-Password: {currentDefault}</div>
      <div>
        <label>Set Default-Password: </label>
        <input
          type="text"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
      </div>
      <button
        onClick={() => {
          setDefaultPassword(pass);
        }}
      >
        Save
      </button>
    </div>
  );
};

export default AdminSetting;
