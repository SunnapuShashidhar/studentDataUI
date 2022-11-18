import logo from './logo.svg';
// import './App.css';
import Form from './Components/Form';
import Display from './Components/Display';
import { HashRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Display />} />
        <Route exact path="/add" element={<Form />} />
      </Routes>
    </HashRouter>

  );
}

export default App;
