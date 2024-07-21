import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';

const Nav = () => {
  const navigate = useNavigate();
  const { user } = useAuth0();

  return (
    <nav className="sticky inset-x-0 bg-background px-6 py-2">
      <main className="flex items-center justify-between py-1">
        {/* Logo */}
        <Link to='/'>
          <h1>CodeWin</h1>
        </Link>
        <div className="flex h-full w-full items-center space-x-4">
          {/* prev and next problem buttons */}
          <div className="flex items-center space-x-2 pl-4 text-lg text-foreground">
            <ChevronLeft
              className="cursor-pointer"
              size={28}
              onClick={() => navigate(-1)}
            />
            <span className="text-sm text-second">{"Problem 1"}</span>
            <ChevronRight className="cursor-pointer" size={28} />
          </div>
        </div>
        {/* right side */}
        <div className="flex items-center space-x-4">
          <p>{user?.name}</p>
          {/* <ConnectButton /> */}
        </div>
      </main>
    </nav>
  );
};

export default Nav;
