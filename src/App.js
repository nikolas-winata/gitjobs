import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Joblist from "./components/joblist";
import Jobdetail from "./components/jobdetail";

function App() {
  return (
    <div className="App">
      <h3>GITJOBS</h3>
      <Router>
        <Routes>
          <Route exact path="/" element={<Joblist />} />
          <Route exact path="/details" element={<Jobdetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
