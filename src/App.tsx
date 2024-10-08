import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "@/components/Navbar"; // Import your component
import LandingPage from "./pages/LandingPage";
import SubjectPage from "./notes/SubjectPage";
import "./index.css";
import { ReactLenis } from "lenis/react"; // Correct import for ReactLenis
import Notes from "./pages/Notes";
import { About } from "./pages/About";

function App() {
    return (
        // Set the "lerp" (linear interpolation) value to a lower value for faster scrolling
        <ReactLenis root options={{ lerp: 0.2 }}>
            <Router>
                <div className="App selection:bg-slate-200 selection:text-black">
                    <div className="">
                        <NavBar />
                    </div>

                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/learnings" element={<Learnings />} />
                        <Route path="/notes" element={<Notes />} />
                        <Route path="/notes/:subjectId" element={<SubjectPage />} />
                        <Route path="/about" element={<About/>}/>
                    </Routes>
                </div>
            </Router>
        </ReactLenis>
    );
}

// Example Components for Routing
const Learnings = () => <div>Learnings page</div>;

export default App;
