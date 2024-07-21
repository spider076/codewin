import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Toaster } from "sonner";
import { ErrorAlert } from "../ErrorAlert";
import CodeEditor from "./CodeEditor";
import ProblemDescription from "./ProblemDescription";
import TestCasesandResult from "./TestCasesandResult";

// import TestCasesandResult from "./TestCasesandResult";

const WorkSpace = ({ data }) => {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="max-w-full rounded-lg border-none"
    >
      {/* <ErrorAlert /> */}
      <Toaster richColors />
      <ResizablePanel defaultSize={50}>
        {/* Problem Description */}
        <ProblemDescription problem={data} />
      </ResizablePanel>
      <ResizableHandle withHandle className="w-[5px] bg-gray-600" />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={50}>
            {/* Code Editor */}
            <CodeEditor
              // setUserCode={setUserCode}
              // userCode={userCode}
              starterCode={data?.defaultCode}
            />
          </ResizablePanel>
          <ResizableHandle withHandle className="w-[5px] bg-gray-600" />
          <ResizablePanel defaultSize={50}>
            {/* Test Cases */}
            <TestCasesandResult problem={data} />
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      {/* <SubmitBox
        handleSubmit={handleSubmit}
        executionLoading={executionProcessing}
        submissionloading={submissionProcessing}
        handleRun={handleRun}
      /> */}
      {/* {success && (
        <ReactConfetti
          gravity={0.3}
          tweenDuration={4000}
          width={width - 1}
          height={height - 1}
        />
      )} */}
    </ResizablePanelGroup>
  );
};

export default WorkSpace;
