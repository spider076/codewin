import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className='bg-green-900 hover:bg-green-800 rounded-md w-[170px] py-1' onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;