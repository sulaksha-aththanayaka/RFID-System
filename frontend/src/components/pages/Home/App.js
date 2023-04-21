import './App.css';
import MainDash from '../../MainDash/MainDash';
import Slidebar from '../../Slidebar/Sidebar';
import Updates from '../../Updates/Updates';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Slidebar />

        <MainDash />

        <Updates />
      </div>
    </div>
  );
}

export default App;
