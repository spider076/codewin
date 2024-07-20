"use client";

import { useState } from "react";
import { SubSkeletonPage } from "../SubSkeletonPage";

const ProblemDescription = ({ problem }) => {
  const [loading, setLoading] = useState(false);

  return (
    <main className="relative h-full">
      <div className="h-full bg-third">
        {/* TAB */}
        <div className="flex h-11 w-full items-center gap-2 overflow-x-hidden border-b border-gray-500 bg-secondary pt-2 text-white">
          <div
            className={`cursor-pointer rounded-t-[5px] ${selector == 0 ? "bg-gray-700" : ""} px-5 py-[10px] text-xs`}
            onClick={() => setSelector(0)}
          >
            Description
          </div>
          <div
            className={`cursor-pointer rounded-t-[5px] ${selector == 1 ? "bg-gray-700" : ""} px-5 py-[10px] text-xs`}
            onClick={() => setSelector(1)}
          >
            All Codes
          </div>
          <div
            className={`cursor-pointer rounded-t-[5px] ${selector == 2 ? "bg-gray-700" : ""} px-5 py-[10px] text-xs`}
            onClick={() => setSelector(2)}
          >
            My Submissions
          </div>
        </div>
        {loading && <SubSkeletonPage />}
        {selector == 0 && !loading && (
          <div className="relative flex  h-[calc(100vh-94px)] overflow-y-hidden px-0 py-4">
            <div className="px-5">
              <div className="flex w-full flex-col gap-4">
                <div className="flex space-x-4">
                  <div className="mr-2 flex-1 text-xl font-medium text-white">
                    {problem?.name}
                    <span className="text-[0.5rem]"> {pid}</span>{" "}
                  </div>
                </div>

                {/* Problem Statement(paragraphs) */}
                <div className="text-[0.9rem] text-gray-300">
                  <div
                    dangerouslySetInnerHTML={{ __html: problem.description }}
                  />
                </div>

                {/* Examples */}
                <div className="mt-4 rounded-md border border-black bg-black/20 p-4">
                  {problem.examples.map((example, index) => (
                    <div key={index}>
                      <p className="font-medium text-white ">
                        Example {index + 1}:{""}
                      </p>
                      {example.img && (
                        <img src={example.img} alt="" className="mt-3" />
                      )}
                      <div className="example-card">
                        <pre>
                          <strong className="text-white">Input: </strong>{" "}
                          {example.input.toString()}
                          <br />
                          <strong>Output: </strong>
                          {example.output.toString()} <br />
                          {example.explanation && (
                            <>
                              <strong>Explanation:</strong>{" "}
                              {example.explanation}
                            </>
                          )}
                        </pre>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Constraints */}
                {/* <div className="my-4 pb-4">
                  <div className="text-sm font-medium text-white">
                    Constraints:
                  </div>
                  <ul className="ml-5 list-disc text-white ">
                    {problem.constraints.map((constraint, index) => (
                      <li key={index}>{constraint}</li>
                    ))}
                  </ul>
                </div> */}

                {/* more info regarding problem  */}
                {/* <div className="flex max-w-max flex-col space-y-4">
                  <div className="flex rounded-md border border-dotted border-gray-400 bg-black/40 p-2 px-4 font-semibold text-white">
                    <h1 className="mr-2 font-medium">
                      Bounty Status :
                      <span>
                        {" "}
                        {isClaimed
                          ? "Already Claimed"
                          : "Is yet to be Claimed."}
                      </span>
                    </h1>
                  </div>
                  <div className="flex rounded-md bg-orange-400 p-2 px-4 font-semibold text-red-700">
                    <h1 className="mr-2 font-medium text-black">
                      Reward if you solve this : {bounty / 1000000} TRX
                    </h1>
                  </div>
                </div> */}

                {/* report button section */}
                {/* <ReportModal /> */}
                {/* <section className='absolute bottom-5 mb-1'>
                      <Button variant='destructive' className='text-white relative px-5 h-[35px]'>Report</Button>
                </section> */}
              </div>
            </div>
          </div>
        )}
        {/* {selector == 1 && !loading && (
          <AllSubmittion
            contract={contract}
            claimer={claimer}
            loader={setLoading}
          />
        )}
        {selector == 2 && !loading && (
          <MySubmittion
            contract={contract}
            claimer={claimer}
            loader={setLoading}
          />
        )} */}
      </div>
    </main>
  );
};

export default ProblemDescription;
