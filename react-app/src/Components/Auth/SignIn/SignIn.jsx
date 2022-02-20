import React, { useState, useEffect } from "react";
import "./SignIn.scss";
// /workspace/Five-SenceOrgans/react-app/src/Components/Auth/SignIn/SignIn.scss
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, Outlet } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../../firebase";
function SignIn() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  let navigate = useNavigate();
  // const [error, seterror] = useState("");
  // const [user, setuser] = useState(null);
  const [user, loading, error] = useAuthState(auth);
  const handelLogin = (e) => {
    e.preventDefault();
    if (email.length > 0 && password.length > 0) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);
        });

      console.log(email, password);
    } else {
      // seterror("please enter all the fields");
    }
  };
  return (
    <>
      {user != null ? (
        navigate("/")
      ) : (
        <>
          <Box sx={{ minWidth: 275 }} className="signIn-input box">
            <Card variant="outlined Card">
              <h1>Sign In</h1>
              <button onClick={() => auth.signOut()}>logout</button>
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
                onClick={(e) => handelLogin(e)}
                type="submite"
                disabled={user == null ? false : true}
              >
                SignIn
              </Button>
              <Link to="/SignUp">create an account</Link>
              {/* <h1>{user}</h1> */}
            </Card>
          </Box>
        </>
      )}
      <Outlet />
    </>
  );
}

export default SignIn;
