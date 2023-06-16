import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
