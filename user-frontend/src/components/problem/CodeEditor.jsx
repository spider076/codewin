"use client";

import { resultAtom } from "../../atoms/problemAtom";
import { Editor } from "@monaco-editor/react";
import { Code } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";

const CodeEditor = ({ starterCode }) => {
  const [result, setResult] = useRecoilState(resultAtom);
  const [userCode, setUserCode] = useState();

  const handleSubmit = () => {
    setResult(true);
  };

  useEffect(() => {
    const code = localStorage.getItem(`code-${1}`);
    if (code) {
      setUserCode(code ? JSON.parse(code) : starterCode);
    } else {
      setUserCode(starterCode);
    }
  }, [starterCode]);

  // restrictionsss
  const editorRef = useRef(null);
  var restrictions = [];

  const onChange = (value) => {
    setUserCode(value);
    localStorage.setItem(`code-${1}`, JSON.stringify(value));
  };

  if (!starterCode || starterCode.length <= 0) {
    return <div>Loading ....</div>;
  }

  return (
    <main className="relative h-full w-full overflow-auto bg-third">
      <nav>
        <div className="flex w-full items-center overflow-x-hidden border-b border-gray-500 bg-secondary text-white">
          <div
            className={
              "flex cursor-pointer items-center rounded-t-[5px] px-5 py-[10px] text-sm"
            }
          >
            <Code className="mr-3 text-primary" /> Code
          </div>
        </div>
      </nav>
      <Editor
        ref={editorRef.current}
        height="85vh"
        width={`100%`}
        language={"javascript"}
        // onMount={handleEditorDidMount}
        theme={"vs-dark"}
        defaultValue="// some comment"
        onChange={onChange}
        value={userCode}
      />
      {/* <CodeMirror
        value={userCode}
        onChange={onChange}
        theme={vscodeDark}
        extensions={[javascript()]}
        style={{ fontSize: 16 }}
      /> */}
      {/* <EditorFooter handleSubmit={handleSubmit} /> */}
    </main>
  );
};

export default CodeEditor;
