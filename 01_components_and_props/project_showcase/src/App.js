import Header from "./components/Header"
import ProjectList from "./components/ProjectList"
import projects from "./projects.js"

function App() {

  console.log(projects)
  return (
    <div className="App">
      <Header />
      Project showcase
      <ProjectList projects={projects}/>
    </div>
  );
}

export default App;
