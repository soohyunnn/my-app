import "./App.css";
import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";
import DateFnsExample from "./components/Part2/DateFns/DateFnsExample";
import DayjsExample from "./components/Part2/Dayjs/DayjsExample";
import EmotionExample from "./components/Part2/Emotion/EmotionExample";
import MomentExample from "./components/Part2/MomentExample";
import OnsenUIExample from "./components/Part2/OnsenUI/OnsenUIExample";
import SassExample from "./components/Part2/Sass/SassExample";
import StyledComponentExample from "./components/Part2/StyledComponent/StyledComponentExample";

function App() {
  return (
    <OnsenUIExample />
    // <div className="App">
    //   <OnsenUIExample />
    //   {/* <SassExample /> */}
    //   {/* <EmotionExample /> */}
    //   {/* <StyledComponentExample /> */}
    //   {/* <DateFnsExample /> */}
    //   {/* <DayjsExample /> */}
    //   {/* <MomentExample /> */}
    // </div>
  );
}

export default App;
