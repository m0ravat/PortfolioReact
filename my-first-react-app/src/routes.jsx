import MainPage from "./Pages/Home/mainPage";
import Projects from "./Pages/Projects/projects";
import Skills from './Pages/Skills/skills';
const routes = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path:"/skills",
    element: <Skills />,
  }
];

export default routes;