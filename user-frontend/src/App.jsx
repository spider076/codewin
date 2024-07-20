import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
// import MyQuestionDesc from "./pages/MyQuestionDesc";
// import MyQuestions from "./pages/MyQuestions";
// import AddQuestion from "./pages/AddQuestion";
import { Buffer } from "buffer";
import AlertModal from "./components/ui/AlertModal";
import Landing from "./pages/Landing";
import ProblemDesc from "./pages/ProblemDesc";
import Problems from "./pages/Problems.";

globalThis.Buffer = Buffer;

// wallet connection imports

function App() {
  window.global = window;

  return (
    <>
          {/* Place your app's components here */}
          <main className="dm-sans dark bg-black to-background text-foreground">
            <AlertModal />

            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Landing />} />
                 <Route path="problem/1" element={<ProblemDesc />} />
                {/* <Route path="myquestion/:pid" element={<MyQuestionDesc />} /> */}
                {/* <Route path="/myquestion" element={<MyQuestions />} /> */}
                {/* <Route path="/addquestion" element={<AddQuestion />} /> */}
                <Route path="/problems" element={<Problems />} />
                {/* <Route path="/problems/problem/*" element={<ProblemDesc />} /> */}
              </Routes>
            </BrowserRouter>
          </main>
    </>
  );
}

export default App;
