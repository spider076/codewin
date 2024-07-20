import Nav from "@/components/problem/Nav";
import WorkSpace from "@/components/problem/Workspace";
import { SkeletonPage } from "@/components/SkeletonPage.jsx";
import React, { useEffect, useState } from "react";

const ProblemDesc = () => {
  // const { getContract } = useTheContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const Problem =
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
    defaultCode:"your code here !"
  };


  if (loading) {
    return <SkeletonPage />;
  }

  return (
    <main
      className="dark relative h-40 min-h-screen w-full overflow-hidden bg-gradient-to-br
    from-[#0F1522] to-background pb-4 text-foreground"
    >
      <Nav />
      {Problem ? (
        <WorkSpace data={Problem} />
      ) : (
        <div className="h-full w-full text-center text-2xl font-medium text-white">
          <h2 className="mt-20">Problem Not Found ☹️!</h2>
        </div>
      )}
    </main>
  );
};

export default ProblemDesc;
