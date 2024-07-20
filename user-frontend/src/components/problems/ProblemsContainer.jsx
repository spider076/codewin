import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import React, { useState } from "react";
import Problem from "./Problem";

const ProblemsContainer = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const isAnyOpen = activeIndex !== null;

  const problems = [
    {
      id: "two-sum",
      title: "1. Two Sum",
      difficulty: 1000,
      problemStatement: `<p class='mt-3'>
  Given an array of integers <code>nums</code> and an integer <code>target</code>, return
  <em>indices of the two numbers such that they add up to</em> <code>target</code>.
</p>
<p class='mt-3'>
  You may assume that each input would have <strong>exactly one solution</strong>, and you
  may not use thesame element twice.
</p>
<p class='mt-3'>You can return the answer in any order.</p>`,
      examples: [
        {
          id: 1,
          inputText: "nums = [2,7,11,15], target = 9",
          outputText: "[0,1]",
          explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
        },
        {
          id: 2,
          inputText: "nums = [3,2,4], target = 6",
          outputText: "[1,2]",
          explanation: "Because nums[1] + nums[2] == 6, we return [1, 2].",
        },
        {
          id: 3,
          inputText: " nums = [3,3], target = 6",
          outputText: "[0,1]",
        },
      ],
      constraints: `<li class='mt-2'>
  <code>2 ≤ nums.length ≤ 10</code>
</li> <li class='mt-2'>
<code>-10 ≤ nums[i] ≤ 10</code>
</li> <li class='mt-2'>
<code>-10 ≤ target ≤ 10</code>
</li>
<li class='mt-2 text-sm'>
<strong>Only one valid answer exists.</strong>
</li>`,
      order: 1,
      starterFunctionName: "function twoSum(",
    },
  ];

  return (
    <main className="relative flex-1 p-2">
      <h1 className='text-[1.6rem] text-center pb-2 text-white border-b font-semibold border-gray-700'>Problems</h1>
      <Table className="mr-auto w-full max-w-[1000px] px-4 text-white">
        <TableHeader>
          <TableRow className="border-gray-500 text-left text-white">
            <TableHead>Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Difficulty (Mesured in 🐑)</TableHead>
            <TableHead>Take Part</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="relative">
          {problems &&
            problems.length > 0 &&
            problems.map((p, i) => {
              const handleOpen = () => {
                setActiveIndex(activeIndex === i ? null : i);
              };
              const isOpen = i === activeIndex;

              return (
                <Problem
                  key={i}
                  id={i}
                  title={p.title}
                  difficulty={p.difficulty}
                  examples={p.examples}
                />
              );
            })}
        </TableBody>
      </Table>

      {problems && !problems.length > 0 && (
        <h1 className="top-1 w-full px-2 pt-5 text-center text-xl text-primary">
          There are no Questions as of now ! come back later or add your own
          question
        </h1>
      )}
    </main>
  );
};

export default ProblemsContainer;
