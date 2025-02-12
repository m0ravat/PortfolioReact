import MainPage from "./Pages/Home/mainPage";
import Projects from "./Pages/Projects/projects";
const routes = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/projects",
    element: <Projects />,
  }
];

export default routes;