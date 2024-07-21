import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";
import { useState } from "react";
import {useAuth0} from '@auth0/auth0-react';
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import LogoutButton from '../ui/LogoutButton';
import LoginButton from '../ui/LoginButton';

const Nav = () => {
  const navigate = useNavigate();
  const {isAuthenticated, user} = useAuth0();

  const [position, setPosition] = useState("bottom");

  if (!isAuthenticated) {
    toast.info("Please Login in order to use the app", {
      position: "bottom-right",
      duration: 2500,
      className:
        "flex items-center justify-center p-6 border-2 rounded-md shadow-lg bg-blue-50 text-blue-700 dark:bg-blue",
    });

    setTimeout(() => {
      navigate("/");
    }, 2500);
  }

  return (
    <nav className="pz-2 sticky inset-x-0 bg-black py-5">
      <Toaster />
      <MaxWidthWrapper className="">
        <main className="flex items-center justify-between ">
          {/* Logo */}
          <div className="flex h-full w-full items-center space-x-4">
          {/* <img
              onClick={() => navigate("/")}
              src="/assets/logo1.png"
              alt="Code Duel"
              className="mr-4 h-[100%] w-[140px] cursor-pointer"
            /> */}
            <h1>CodeWin</h1>
          </div>
          {/* right side */}
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <p className="text-gray-400">{user?.name}</p>
              {/* dropdown menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <User
                    size={28}
                    className="text-gray-100 hover:text-primary"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-max border-gray-300 bg-third text-accent ">
                  {/* <DropdownMenuLabel>Panel Position</DropdownMenuLabel> */}
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={position}
                    onValueChange={setPosition}
                  >
                    <DropdownMenuItem>
                      <Link to="/myquestion">My Questions</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      {/* <Link to="/addquestion">Add Question</Link> */}
                    </DropdownMenuItem>
                    <LogoutButton />
                    {/* <DropdownMenuItem onClick={()=>disconnect()}>
                      Disconnect
                      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem> */}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="">
              <LoginButton />
            </div>
          )}
        </main>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Nav;
