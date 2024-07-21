// App.js
import './App.css';
import FirstPage from './Firstpage';
import Notepd from './Notepd';
import Suc from './Suc';
import CodePage from './Codepage';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/Notepd" element={<Notepd />} />
            <Route path="/CodePage" element={<CodePage />} />
           
            <Route path="/Suc" element={<Suc/>} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
