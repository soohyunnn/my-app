import logo from "./logo.svg";
import "./App.css";
import Extraction from "./components/2-4.Props/Extraction/Extraction";
import Composition from "./components/2-4.Props/Composition";
import ClassComponent from "./components/2-5.State/ClassComponent";
import ClassComponent2 from "./components/2-6. LifeCycle/ClassComponent";
import FunctionalComponent from "./components/2-5.State/FunctionalComponent";
import Event from "./components/2-7.Event/Event";
import Condition from "./components/2-8.ConditionalRendering/Condition";
import List from "./components/2-9.List/List";
import ControlledComponent from "./components/2-10.Forms/ControlledComponent";
import UnControlledComponent from "./components/2-10.Forms/UnControlledComponent";
import State from "./components/3-3.Hooks/State";
import Reducer from "./components/3-3.Hooks/Reducer";
import WelcomDialog from "./components/3-5.Composition/WelcomDialog";
import Dialog from "./components/3-6.Composition2/Dialog";
import ThankyouDialog from "./components/3-6.Composition2/ThankyouDialog";

function App() {
  return (
    <div className="App">
      <ThankyouDialog />
      {/* <Dialog /> */}
      {/* <WelcomDialog /> */}
      {/* <Reducer /> */}
      {/* <State /> */}
      {/* <UnControlledComponent /> */}
      {/* <ControlledComponent /> */}
      {/* <List /> */}
      {/* <Condition /> */}
      {/* <Event /> */}
      {/* <ClassComponent2 /> */}
      {/* <FunctionalComponent />
      <ClassComponent />
      <Extraction />
      <Composition /> */}
    </div>
  );
}

export default App;
