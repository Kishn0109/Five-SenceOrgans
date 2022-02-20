import React, { useState } from "react";
import "./SignUp.scss";
// /workspace/Five-SenceOrgans/react-app/src/Components/Auth/SignIn/SignIn.scss
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {Outlet} from "react-router-dom"
function SignUp() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [Name, setName] = useState("");
  const [error, seterror] = useState("");
  let navigate = useNavigate();
  const handelSignup = (e) => {
    e.preventDefault();
    if (email.length > 0 && password.length > 0) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/SignIn");
        })
        .catch((error) => {
          console.log(error);
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } else {
      seterror("please enter all the fields");
    }
  };
  return (
    <Box sx={{ minWidth: 275 }} className="signIn-input box">
      <Card variant="outlined Card">
        <h1>Sign Up</h1>
        <TextField
          fullWidth
          label="Name"
          id="fullWidth"
          className="my-2"
          onChange={(e) => setName(e.target.value)}
          value={Name}
        />
        <TextField
          fullWidth
          label="Email Id"
          id="fullWidth"
          className="my-2"
          onChange={(e) => setemail(e.target.value)}
          value={email}
        />
        <TextField
          fullWidth
          label="password"
          id="fullWidth"
          className="my-2"
          onChange={(e) => setpassword(e.target.value)}
          value={password}
        />
        <Button
          variant="contained"
          onClick={(e) => handelSignup(e)}
          type="submite"
        >
          SignUp
        </Button>
        <p>
          <Link to="/SignIn">Have you already created your account</Link>
        </p>
      </Card>
      <Outlet />
    </Box>
  );
}

export default SignUp;
