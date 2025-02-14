import React from 'react';
import GlobalStyle from './GlobalStyle';
import MainComponent from './components/MainComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Prototyping from './pages/Prototyping';
import Testing from './pages/Testing';
import FinalReport from './pages/FinalReport';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/PROTOTYPING" element={<Prototyping />} />
        <Route path="/TESTING" element={<Testing />} />
        <Route path="/FINAL-REPORT" element={<FinalReport />} />
      </Routes>
    </Router>
  );
}

export default App;
