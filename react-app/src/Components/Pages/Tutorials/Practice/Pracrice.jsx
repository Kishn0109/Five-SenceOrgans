import * as React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { auth } from "../../../../firebase";
import { Button } from "@mui/material";
function Pracrice() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Ques-1" onClick={() => navigate("1")} />
        <Tab label="Ques-2" onClick={() => navigate("2")} />
        <Tab label="Ques-3" onClick={() => navigate("3")} />
        <Tab label="Ques-4" onClick={() => navigate("4")} />
        <Tab label="Ques-5" onClick={() => navigate("5")} />
        <Button
          label="logout"
          onClick={() => auth.signOut().then(() => navigate("/SignIn"))}
        >
          logout
        </Button>
      </Tabs>
      <Outlet />
    </div>
  );
}

export default Pracrice;
