import Heading from "./components/heading";
import MainContent from "./components/maincontent";
import Time from "./components/time";
import "./App.css";

function App() {
  return (
    
    <div className="clock">
      <Heading></Heading>
       <MainContent></MainContent>
       <Time></Time> 
    </div>
  );
}

export default App;
