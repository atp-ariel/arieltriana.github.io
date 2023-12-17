import ATPNavbar from "./components/Navbar/navbar";
import ATPHome from "./components/Home/home";
import ATPAboutMe from "./components/AboutMe/aboutMe";
import ATPProjects from "./components/Projects/projects";
import ATPCurriculum from "./components/CV/cv";
import ATPContact from "./components/Contact/contact";


function App() {
  return (
    <div className="App">
      <ATPNavbar />
      <ATPHome />
      <ATPAboutMe />
      <ATPProjects />
      <ATPCurriculum />
      <ATPContact />
    </div>
  );
}

export default App;
