import React from "react";
import SigninPage from "./components/signin";
import SignupPage from "./components/signup";

function AuthPage() {
  let login = true;
  return <div>{login === true ? <SigninPage /> : <SignupPage />}</div>;
}

export default AuthPage;
