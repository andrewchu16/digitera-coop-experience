import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HowToBreakDownUi from "./pages/tutorials/HowToBreakdownUi";
import GettingStarted from "./pages/snapshot/GettingStarted";
import FindingProblems from "./pages/snapshot/FindingProblems";
import DevelopingSolutions from "./pages/snapshot/DevelopingSolutions";
import CreatingNewFeatures from "./pages/snapshot/CreatingNewFeatures";
import CommunicatingWithJordan from "./pages/snapshot/CommunicatingWithJordan";

function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="*" element={<NoPage />} />
            <Route path="/" element={<Layout />}>
                {/* Tutorials */}
                <Route index element={<Home />}/>
                <Route path="/how-to-break-down-a-ui" element={<HowToBreakDownUi />}/>

                {/* Snapshot */}
                <Route path="/getting-started" element={<GettingStarted />} />
                <Route path="/finding-problems" element={<FindingProblems />} />
                <Route path="/developing-solutions" element={<DevelopingSolutions />} />
                <Route path="/creating-new-features" element={<CreatingNewFeatures />} />
                <Route path="/communicating-with-jordan" element={<CommunicatingWithJordan />} />
            </Route>
        </Routes>
    </BrowserRouter>
    );
}

export default App;