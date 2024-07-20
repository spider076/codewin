import { buttonVariants } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Problem = ({ id, title, difficulty, examples }) => {
  const navigate = useNavigate();

  const clickHandler = (e, id) => {
    e.preventDefault();
    navigate(`/problems/${1}`);
  };

  const isEven = id % 2 === 0;
  return (
    <>
      <TableRow
        className={cn("relative h-16 border-none text-white", {
          "bg-black/50": isEven,
        })}
      >
        <TableCell className="">{id + 1}</TableCell>
        <TableCell className="hover:text-second">{title}</TableCell>
        <TableCell className="hover:text-second">
          {parseInt(difficulty)}🐑
        </TableCell>
        <TableCell className="">
          <Link
            className={buttonVariants({
              variant: "link",
            })}
            to='problem/1'
          >
            Participate
          </Link>
          <ChevronDown
            className={cn(
              "float-right h-7 w-7 cursor-pointer text-muted-foreground transition-all hover:text-white",
              {
              },
            )}
          />
        </TableCell>
      </TableRow>
      <TableRow
        className={cn(
          "w-full border-b-0 border-t border-gray-600 bg-secondary text-gray-300",
        )}
      >
        <TableCell className="" colSpan={4}>
          {/* <span className="text-md text-second">Problem address : </span>
          {address} */}
        </TableCell>
      </TableRow>
    </>
  );
};

export default Problem;
