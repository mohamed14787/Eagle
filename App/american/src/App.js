import logo from "./logo.svg";
import "./App.css";
import Bar from "./navBar";
import Bar2 from "./nav2";
import Bar3 from "./nav3";
import Panel1 from "./panel1";
import Footer from "./footer";
import Carousall from "./carousal";

function App() {
  return (
    <div>
      <Bar />
      <Bar2 />
      <Bar3 />
      <Panel1 />
      <Carousall></Carousall>
      <Footer />
    </div>
  );
}

export default App;
