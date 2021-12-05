import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import DiscoverPage from 'src/components/organisms/DiscoverPage';

import { App as AppComponent } from './App.styles'

function App() {
  return (
    <AppComponent className="App">
      <Router>
        <Routes>
          <Route path='/' element={<DiscoverPage />} />
        </Routes>
      </Router>
    </AppComponent>
  );
}

export default App
