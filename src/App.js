// import logo from './logo.svg';
import './App.css';
import Textform from './components/Textform';
import About from './components/About'
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <Navbar title="Title" aboutText="Abt Text" />
      <div className="container my-3">
        <Textform heading="Enter text to analyse" />
        <About />
      </div>
    </>
  );
}

export default App;
