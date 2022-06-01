
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
function App() {
  return (
    <>
    <Navbar title= "WordCounter" about ="about text"/>
    {/* <Navbar/> */}
    <div className="container">

    <TextForm heading = "Enter The Text To Analyze"/>
    {/* <About/> */}
    </div>
    </>
   
  );
}

export default App;
