import './App.css';
import CarData from './components/CarData';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <br />      
      <br />      
      <br />   

        <div>
        <p>Volvo Recharge. Introducing our new line of pure electric and plug-in hybrid cars.</p>
        </div>

      <div>
        <p> All Models</p>
      </div>
         
      <br />
      <br />
      <CarData/>
    </div>
  );
}

export default App;
