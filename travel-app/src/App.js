import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    
    </div>
  );
}

export default App;
