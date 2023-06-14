import { Route, Routes } from "react-router-dom";
import Ebook from "./pages/Ebook";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import Ebookdetails from "./pages/Ebookdetails";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/ebook" element={<Ebook />} />
          <Route path="/ebook/:ebookId" element={<Ebookdetails />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
