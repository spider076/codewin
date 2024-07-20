import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return <button className='bg-red-600 w-[170px] rounded-md px-4 py-1' onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>;
};

export default LogoutButton;
