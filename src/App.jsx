import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Category from "./pages/Category";
import Ebook from "./pages/Ebook";
import Ebookdetails from "./pages/Ebookdetails";
import Article from "./pages/Article";
import Articledetails from "./pages/Articledetails";
import Video from "./pages/Video";
import DetailVideo from "./pages/Detail Video";
import About from "./pages/About";
import Contact from './pages/Contact';
import Navbar from "./components/Navbar/Navbar";
import EditProfile from "./pages/EditProfile";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/category" element={<Category />} />
        <Route path="/ebook" element={<Ebook />} />
        <Route path="/ebook/:ebookId" element={<Ebookdetails />} />
        <Route path="/article" element={<Article />} />
        <Route path="/article/:articleId" element={<Articledetails />} />
        <Route path="/video" element={<Video />} />
        <Route path="/Video/:id" element={<DetailVideo />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/editprofile" element={<EditProfile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
