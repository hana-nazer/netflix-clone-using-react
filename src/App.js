import NavBar from "./components/navBar/NavBar";
import './App.css'
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";


function App() {
  return (
    <div className="App">
    <NavBar></NavBar>
    <Banner></Banner>
    <RowPost></RowPost>
    </div>
  );
}

export default App;
