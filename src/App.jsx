import { Route, Routes } from "react-router-dom";
import Article from "./pages/Article";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import Articledetails from "./pages/Articledetails";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/article" element={<Article />} />
          <Route path="/article/:articleId" element={<Articledetails />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
