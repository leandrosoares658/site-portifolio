import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Header";
import Services from "./sections/Services/Services";
import Projects from "./sections/Projects";
import About from "./sections/About/About";

const router = createBrowserRouter([
  { path: "/home", element: <Home /> },
  { path: "/servicos", element: <Services /> },
  { path: "/projetos", element: <Projects /> },
  { path: "/sobre", element: <About /> },
]);

export default router;
