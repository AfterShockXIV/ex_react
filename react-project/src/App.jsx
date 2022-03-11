import "./App.scss";
import IndexRouter from "./Routes/indexRouter";
import NavbarContainer from "./Utility/NavbarContainer";
import FooterContainer from "./Utility/FooterContainer";
function App() { 
  return (
    <div className="App">
     <NavbarContainer /> 
      <IndexRouter />
     <FooterContainer/>
    </div>
  );
}

export default App;
