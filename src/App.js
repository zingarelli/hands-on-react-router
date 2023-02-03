import DefaultTemplate from "components/DefaultTemplate";
import Footer from "components/Footer";
import ScrollToTop from "components/ScrollToTop";
import NotFound from "pages/NotFound";
import Post from "pages/Post";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";

// alterando rotas no JS puro
// const page = window.location.pathname === '/' ? <Home /> : <AboutMe />;


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      <Routes>
        <Route path="/" element={<DefaultTemplate />}>
          <Route index element={<Home />} />
          <Route path="sobre-mim" element={<AboutMe />} />
        </Route>
        <Route path="posts/:id" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
