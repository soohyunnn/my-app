import logo from "./logo.svg";
import "./App.css";
import Extraction from "./components/2-4.Props/Extraction/Extraction";
import Composition from "./components/2-4.Props/Composition";
import ClassComponent from "./components/2-5.State/ClassComponent";
import ClassComponent2 from "./components/2-6. LifeCycle/ClassComponent";
import FunctionalComponent from "./components/2-5.State/FunctionalComponent";

function App() {
  return (
    <div className="App">
      <ClassComponent2 />
      {/* <FunctionalComponent />
      <ClassComponent />
      <Extraction />
      <Composition /> */}
    </div>
  );
}

export default App;
